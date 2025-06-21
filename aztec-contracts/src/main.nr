use dep::aztec::macros::aztec;

#[aztec]
pub contract GodsHand {
    use dep::aztec::{
        keys::getters::get_public_keys,
        macros::{functions::{initializer, internal, private, public, view}, storage::storage},
        prelude::{AztecAddress, Map, PublicMutable},
        protocol_types::traits::{Hash, Serialize, ToField},
    };
    use std::meta::derive;

    #[derive(Serialize)]
    pub struct DisasterInfo {
        title: Field,
        metadata: Field,
        amount: u64,
        active: bool,
    }

    #[storage]
    struct Storage<Context> {
        // Single agent wallet
        agent: PublicMutable<AztecAddress, Context>,

        // Vote threshold required to unlock funds
        vote_threshold: PublicMutable<u64, Context>,

        // Disaster details
        disaster_titles: Map<Field, PublicMutable<Field, Context>, Context>,
        disaster_metadata: Map<Field, PublicMutable<Field, Context>, Context>,
        disaster_amounts: Map<Field, PublicMutable<u64, Context>, Context>,
        disaster_active: Map<Field, PublicMutable<bool, Context>, Context>,

        // Track donations per user per disaster
        user_donations: Map<Field, Map<AztecAddress, PublicMutable<u64, Context>, Context>, Context>,

        // Track total donations per disaster
        total_donations: Map<Field, PublicMutable<u64, Context>, Context>,

        // Track votes per disaster
        vote_count: Map<Field, PublicMutable<u64, Context>, Context>,

        // Track unlocked funds per disaster per organization
        unlocked_funds: Map<Field, Map<AztecAddress, PublicMutable<u64, Context>, Context>, Context>,
    }

    #[public]
    #[initializer]
    fn constructor(agent: AztecAddress, vote_threshold: u64) {
        assert(!agent.is_zero(), "Invalid agent address");
        assert(vote_threshold > 0, "Vote threshold must be greater than 0");
        storage.agent.write(agent);
        storage.vote_threshold.write(vote_threshold);
    }

    #[public]
    fn create_disaster(title: Field, metadata: Field, estimated_amount_required: u64) -> Field {
        let caller = context.msg_sender();
        assert(storage.agent.read().eq(caller), "Only agent can create disasters");
        assert(estimated_amount_required > 0, "Estimated amount must be greater than 0");

        let disaster_hash = std::hash::pedersen_hash([
            title,
            metadata,
            estimated_amount_required as Field,
            context.block_number() as Field,
        ]);

        storage.disaster_titles.at(disaster_hash).write(title);
        storage.disaster_metadata.at(disaster_hash).write(metadata);
        storage.disaster_amounts.at(disaster_hash).write(estimated_amount_required);
        storage.disaster_active.at(disaster_hash).write(true);
        storage.total_donations.at(disaster_hash).write(0);
        storage.vote_count.at(disaster_hash).write(0);

        disaster_hash
    }

    #[private]
    fn donate(disaster_hash: Field, amount: u64, chain: Field, token_address: Field) {
        assert(amount > 0, "Donation amount must be greater than 0");

        let msg_sender_npk_m_hash = get_public_keys(context.msg_sender()).npk_m.hash();
        let secret = context.request_nsk_app(msg_sender_npk_m_hash);
        let nullifier = std::hash::pedersen_hash([
            context.msg_sender().to_field(),
            secret,
            disaster_hash,
            amount as Field,
        ]);
        context.push_nullifier(nullifier);

        GodsHand::at(context.this_address())
            .process_donation(disaster_hash, context.msg_sender(), amount)
            .enqueue(&mut context);
    }

    #[public]
    #[internal]
    fn process_donation(disaster_hash: Field, donor: AztecAddress, amount: u64) {
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");

        let current_user_donation = storage.user_donations.at(disaster_hash).at(donor).read();
        let current_total_donations = storage.total_donations.at(disaster_hash).read();

        storage.user_donations.at(disaster_hash).at(donor).write(current_user_donation + amount);
        storage.total_donations.at(disaster_hash).write(current_total_donations + amount);
    }

    #[public]
    fn unlock_funds(disaster_hash: Field, org_address: AztecAddress, amount: u64) {
        let caller = context.msg_sender();
        assert(storage.agent.read().eq(caller), "Only agent can unlock funds");
        assert(!org_address.is_zero(), "Invalid organization address");
        assert(amount > 0, "Amount must be greater than 0");
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");

        // Check vote threshold
        let current_votes = storage.vote_count.at(disaster_hash).read();
        let threshold = storage.vote_threshold.read();
        assert(current_votes >= threshold, "Vote threshold not reached");

        let current_unlocked = storage.unlocked_funds.at(disaster_hash).at(org_address).read();
        storage.unlocked_funds.at(disaster_hash).at(org_address).write(current_unlocked + amount);
    }

    #[private]
    fn vote(disaster_hash: Field, org_address: AztecAddress, vote_type: u8) {
        assert(vote_type <= 3, "Invalid vote type");
        assert(!org_address.is_zero(), "Invalid organization address");

        let msg_sender_npk_m_hash = get_public_keys(context.msg_sender()).npk_m.hash();
        let secret = context.request_nsk_app(msg_sender_npk_m_hash);
        let nullifier = std::hash::pedersen_hash([
            context.msg_sender().to_field(),
            secret,
            disaster_hash,
            org_address.to_field(),
            vote_type as Field,
        ]);
        context.push_nullifier(nullifier);

        GodsHand::at(context.this_address()).increment_vote_count(disaster_hash).enqueue(
            &mut context,
        );
    }

    #[public]
    #[internal]
    fn increment_vote_count(disaster_hash: Field) {
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");
        let current_count = storage.vote_count.at(disaster_hash).read();
        storage.vote_count.at(disaster_hash).write(current_count + 1);
    }

    #[private]
    fn claim(disaster_hash: Field) {
        let caller = context.msg_sender();

        GodsHand::at(context.this_address()).process_claim(disaster_hash, caller).enqueue(
            &mut context,
        );
    }

    #[public]
    #[internal]
    fn process_claim(disaster_hash: Field, claimer: AztecAddress) {
        assert(storage.disaster_active.at(disaster_hash).read(), "Disaster is not active");

        let unlocked_amount = storage.unlocked_funds.at(disaster_hash).at(claimer).read();
        assert(unlocked_amount > 0, "No funds available to claim");

        storage.unlocked_funds.at(disaster_hash).at(claimer).write(0);
    }

    #[public]
    fn deactivate_disaster(disaster_hash: Field) {
        let caller = context.msg_sender();
        assert(storage.agent.read().eq(caller), "Only agent can deactivate disasters");

        storage.disaster_active.at(disaster_hash).write(false);
    }

    // View functions
    #[public]
    #[view]
    fn get_agent() -> AztecAddress {
        storage.agent.read()
    }

    #[public]
    #[view]
    fn get_vote_threshold() -> u64 {
        storage.vote_threshold.read()
    }

    #[public]
    #[view]
    fn get_user_donation(disaster_hash: Field, user: AztecAddress) -> u64 {
        storage.user_donations.at(disaster_hash).at(user).read()
    }

    #[public]
    #[view]
    fn get_total_donations(disaster_hash: Field) -> u64 {
        storage.total_donations.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_vote_count(disaster_hash: Field) -> u64 {
        storage.vote_count.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_unlocked_funds(disaster_hash: Field, org_address: AztecAddress) -> u64 {
        storage.unlocked_funds.at(disaster_hash).at(org_address).read()
    }

    #[public]
    #[view]
    fn get_disaster_info(disaster_hash: Field) -> DisasterInfo {
        DisasterInfo {
            title: storage.disaster_titles.at(disaster_hash).read(),
            metadata: storage.disaster_metadata.at(disaster_hash).read(),
            amount: storage.disaster_amounts.at(disaster_hash).read(),
            active: storage.disaster_active.at(disaster_hash).read(),
        }
    }

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
    fn is_disaster_active(disaster_hash: Field) -> bool {
        storage.disaster_active.at(disaster_hash).read()
    }
}
