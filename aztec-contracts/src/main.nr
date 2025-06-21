use dep::aztec::macros::aztec;

#[aztec]
pub contract GodsHand {
    use dep::aztec::{
        macros::{
            functions::{initializer, internal, private, public, view},
            storage::storage,
        },
        prelude::{
            AztecAddress, Map, PublicMutable
        },
        protocol_types::traits::{Serialize, Hash, ToField},
        keys::getters::get_public_keys,
    };
    use std::meta::derive;

    // Struct for disaster info to make it serializable
    #[derive(Serialize)]
    pub struct DisasterInfo {
        title: Field,
        metadata: Field,
        amount: u64,
        creator: AztecAddress,
        active: bool,
    }

    #[storage]
    struct Storage<Context> {
        // Admin who can manage agents
        admin: PublicMutable<AztecAddress, Context>,
        
        // Mapping of authorized agents
        agents: Map<AztecAddress, PublicMutable<bool, Context>, Context>,
        
        // Disaster details stored separately
        disaster_titles: Map<Field, PublicMutable<Field, Context>, Context>,
        disaster_metadata: Map<Field, PublicMutable<Field, Context>, Context>,
        disaster_amounts: Map<Field, PublicMutable<u64, Context>, Context>,
        disaster_creators: Map<Field, PublicMutable<AztecAddress, Context>, Context>,
        disaster_active: Map<Field, PublicMutable<bool, Context>, Context>,
        
        // For this simplified version, we'll track donations publicly
        donation_count: Map<Field, PublicMutable<u64, Context>, Context>,
        vote_count: Map<Field, PublicMutable<u64, Context>, Context>,
        
        // Track unlocked funds per disaster per organization
        unlocked_funds: Map<Field, Map<AztecAddress, PublicMutable<u64, Context>, Context>, Context>,
    }

    #[public]
    #[initializer]
    fn constructor(admin: AztecAddress) {
        assert(!admin.is_zero(), "Invalid admin address");
        storage.admin.write(admin);
        storage.agents.at(admin).write(true);
    }

    #[public]
    fn add_agent(agent: AztecAddress) {
        assert(storage.admin.read().eq(context.msg_sender()), "Only admin can add agents");
        assert(!agent.is_zero(), "Invalid agent address");
        storage.agents.at(agent).write(true);
    }

    #[public]
    fn create_disaster(title: Field, metadata: Field, estimated_amount_required: u64) -> Field {
        let caller = context.msg_sender();
        assert(storage.agents.at(caller).read(), "Only authorized agents can create disasters");
        assert(estimated_amount_required > 0, "Estimated amount must be greater than 0");

        // Calculate disaster hash
        let disaster_hash = std::hash::pedersen_hash([
            title,
            metadata, 
            estimated_amount_required as Field,
            caller.to_field(),
            context.block_number() as Field
        ]);

        // Store disaster details
        storage.disaster_titles.at(disaster_hash).write(title);
        storage.disaster_metadata.at(disaster_hash).write(metadata);
        storage.disaster_amounts.at(disaster_hash).write(estimated_amount_required);
        storage.disaster_creators.at(disaster_hash).write(caller);
        storage.disaster_active.at(disaster_hash).write(true);
        storage.donation_count.at(disaster_hash).write(0);
        storage.vote_count.at(disaster_hash).write(0);

        disaster_hash
    }

    // Private function that calls public function to update state
    #[private]
    fn donate(disaster_hash: Field, amount: u64, chain: Field, token_address: Field) {
        assert(amount > 0, "Donation amount must be greater than 0");
        
        // Create nullifier to prevent double donations (optional privacy feature)
        let msg_sender_npk_m_hash = get_public_keys(context.msg_sender()).npk_m.hash();
        let secret = context.request_nsk_app(msg_sender_npk_m_hash);
        let nullifier = std::hash::pedersen_hash([
            context.msg_sender().to_field(), 
            secret, 
            disaster_hash, 
            amount as Field
        ]);
        context.push_nullifier(nullifier);
        
        // Call public function to update donation count
        GodsHand::at(context.this_address())
            .increment_donation_count(disaster_hash)
            .enqueue(&mut context);
    }

    // Public internal function to increment donation count
    #[public]
    #[internal]
    fn increment_donation_count(disaster_hash: Field) {
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");
        let current_count = storage.donation_count.at(disaster_hash).read();
        storage.donation_count.at(disaster_hash).write(current_count + 1);
    }

    #[private]
    fn claim(disaster_hash: Field) {
        let caller = context.msg_sender();
        
        // Call public function to handle claim logic
        GodsHand::at(context.this_address())
            .process_claim(disaster_hash, caller)
            .enqueue(&mut context);
    }

    // Public internal function to process claims
    #[public]
    #[internal] 
    fn process_claim(disaster_hash: Field, claimer: AztecAddress) {
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");
        
        // Get the unlocked funds for this organization
        let unlocked_amount = storage.unlocked_funds.at(disaster_hash).at(claimer).read();
        assert(unlocked_amount > 0, "No funds available to claim");
        
        // Reset the unlocked funds to 0 after claiming
        storage.unlocked_funds.at(disaster_hash).at(claimer).write(0);
    }

    // Private vote function for anonymity
    #[private]
    fn vote(disaster_hash: Field, org_address: AztecAddress, vote_type: u8) {
        assert(vote_type <= 3, "Invalid vote type");
        assert(!org_address.is_zero(), "Invalid organization address");
        
        // Create nullifier to prevent double voting
        let msg_sender_npk_m_hash = get_public_keys(context.msg_sender()).npk_m.hash();
        let secret = context.request_nsk_app(msg_sender_npk_m_hash);
        let nullifier = std::hash::pedersen_hash([
            context.msg_sender().to_field(),
            secret,
            disaster_hash,
            org_address.to_field(),
            vote_type as Field
        ]);
        context.push_nullifier(nullifier);
        
        // Call public function to increment vote count
        GodsHand::at(context.this_address())
            .increment_vote_count(disaster_hash)
            .enqueue(&mut context);
    }

    // Public internal function to increment vote count
    #[public]
    #[internal]
    fn increment_vote_count(disaster_hash: Field) {
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");
        let current_count = storage.vote_count.at(disaster_hash).read();
        storage.vote_count.at(disaster_hash).write(current_count + 1);
    }

    #[public]
    fn unlock_funds(disaster_hash: Field, org_address: AztecAddress, amount: u64) {
        let caller = context.msg_sender();
        assert(storage.agents.at(caller).read(), "Only authorized agents can unlock funds");
        assert(!org_address.is_zero(), "Invalid organization address");
        assert(amount > 0, "Amount must be greater than 0");

        // Verify disaster exists and is active
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");

        // Update unlocked funds
        let current_unlocked = storage.unlocked_funds.at(disaster_hash).at(org_address).read();
        storage.unlocked_funds.at(disaster_hash).at(org_address).write(current_unlocked + amount);
    }

    // View functions
    #[public]
    #[view]
    fn get_disaster_title(disaster_hash: Field) -> Field {
        storage.disaster_titles.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_disaster_metadata(disaster_hash: Field) -> Field {
        storage.disaster_metadata.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_disaster_amount(disaster_hash: Field) -> u64 {
        storage.disaster_amounts.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_disaster_creator(disaster_hash: Field) -> AztecAddress {
        storage.disaster_creators.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn is_disaster_active(disaster_hash: Field) -> bool {
        storage.disaster_active.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn is_agent(address: AztecAddress) -> bool {
        storage.agents.at(address).read()
    }

    #[public]
    #[view]
    fn get_admin() -> AztecAddress {
        storage.admin.read()
    }

    #[public]
    #[view]
    fn get_unlocked_funds(disaster_hash: Field, org_address: AztecAddress) -> u64 {
        storage.unlocked_funds.at(disaster_hash).at(org_address).read()
    }

    #[public]
    #[view]
    fn get_donation_count(disaster_hash: Field) -> u64 {
        storage.donation_count.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_vote_count(disaster_hash: Field) -> u64 {
        storage.vote_count.at(disaster_hash).read()
    }

    #[public]
    fn deactivate_disaster(disaster_hash: Field) {
        let caller = context.msg_sender();
        assert(storage.agents.at(caller).read(), "Only authorized agents can deactivate disasters");
        
        storage.disaster_active.at(disaster_hash).write(false);
    }

    #[public]
    #[view]
    fn get_disaster_info(disaster_hash: Field) -> DisasterInfo {
        DisasterInfo {
            title: storage.disaster_titles.at(disaster_hash).read(),
            metadata: storage.disaster_metadata.at(disaster_hash).read(),
            amount: storage.disaster_amounts.at(disaster_hash).read(),
            creator: storage.disaster_creators.at(disaster_hash).read(),
            active: storage.disaster_active.at(disaster_hash).read(),
        }
    }
}