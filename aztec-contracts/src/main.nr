mod config;

use dep::aztec::macros::aztec;

#[aztec]
pub contract GodsHand {
    use crate::config::{Config, DisasterInfo};
    use dep::aztec::{
        event::event_interface::EventInterface,
        macros::{
            events::event,
            functions::{initializer, internal, private, public, view},
            storage::storage,
        },
        prelude::{AztecAddress, Map, PublicImmutable, PublicMutable},
        protocol_types::traits::{Serialize, Hash, ToField},
        unencrypted_logs::unencrypted_event_emission::encode_event,
        keys::getters::get_public_keys,
    };
    use std::meta::derive;

    #[derive(Serialize)]
    #[event]
    struct DonationMade {
        disaster_hash: Field,
        donor: AztecAddress,
        amount: u64,
    }

    #[derive(Serialize)]
    #[event]
    struct FundsUnlocked {
        disaster_hash: Field,
        organization: AztecAddress,
        amount: u64,
    }

    #[derive(Serialize)]
    #[event]
    struct FundsClaimed {
        disaster_hash: Field,
        claimer: AztecAddress,
        amount: u64,
    }

    #[storage]
    struct Storage<Context> {
        config: PublicImmutable<Config, Context>,
        
        // Disaster details
        disaster_info: Map<Field, PublicMutable<DisasterInfo, Context>, Context>,
        
        // Track total donations per disaster
        total_donations: Map<Field, PublicMutable<u64, Context>, Context>,
        
        // Track user donations per disaster
        user_donations: Map<Field, Map<AztecAddress, PublicMutable<u64, Context>, Context>, Context>,
        
        // Track votes per disaster
        vote_count: Map<Field, PublicMutable<u64, Context>, Context>,
        
        // Track unlocked funds per disaster per organization
        unlocked_funds: Map<Field, Map<AztecAddress, PublicMutable<u64, Context>, Context>, Context>,
        
        // Track contract's ETH balance per disaster
        contract_balance: Map<Field, PublicMutable<u64, Context>, Context>,
    }

    #[public]
    #[initializer]
    fn constructor(eth_token: AztecAddress, agent: AztecAddress, vote_threshold: u64) {
        storage.config.initialize(Config { eth_token, agent, vote_threshold });
    }

    #[public]
    fn create_disaster(disaster_hash: Field, estimated_amount: u64) -> Field {
        let config = storage.config.read();
        let caller = context.msg_sender();
        assert(caller == config.agent, "Only agent can create disasters");
        assert(estimated_amount > 0, "Estimated amount must be greater than 0");

        let disaster_info = DisasterInfo {
            hash: disaster_hash,
            estimated_amount,
            active: true,
        };

        storage.disaster_info.at(disaster_hash).write(disaster_info);
        storage.total_donations.at(disaster_hash).write(0);
        storage.vote_count.at(disaster_hash).write(0);
        storage.contract_balance.at(disaster_hash).write(0);

        disaster_hash
    }

    #[private]
    fn donate(disaster_hash: Field, amount: u64) {
        assert(amount > 0, "Donation amount must be greater than 0");

        let donor = context.msg_sender();

        // Create nullifier to prevent double donations
        let msg_sender_npk_m_hash = get_public_keys(donor).npk_m.hash();
        let secret = context.request_nsk_app(msg_sender_npk_m_hash);
        let nullifier = std::hash::pedersen_hash([
            donor.to_field(),
            secret,
            disaster_hash,
            amount as Field,
        ]);
        context.push_nullifier(nullifier);

        // Call public function to process the donation
        GodsHand::at(context.this_address())
            ._process_donation(disaster_hash, donor, amount)
            .enqueue(&mut context);
    }

    #[public]
    #[internal]
    fn _process_donation(disaster_hash: Field, donor: AztecAddress, amount: u64) {
        // Check disaster is active
        let disaster_info = storage.disaster_info.at(disaster_hash).read();
        assert(disaster_info.active, "Disaster is not active");

        // Update balances
        let current_total = storage.total_donations.at(disaster_hash).read();
        let current_balance = storage.contract_balance.at(disaster_hash).read();
        let current_user_donation = storage.user_donations.at(disaster_hash).at(donor).read();
        
        storage.total_donations.at(disaster_hash).write(current_total + amount);
        storage.contract_balance.at(disaster_hash).write(current_balance + amount);
        storage.user_donations.at(disaster_hash).at(donor).write(current_user_donation + amount);

        // Emit event
        DonationMade { disaster_hash, donor, amount }.emit(encode_event(&mut context));
    }

    #[private]
    fn vote(disaster_hash: Field, org_address: AztecAddress, vote_type: u8) {
        assert(vote_type <= 3, "Invalid vote type");
        assert(!org_address.is_zero(), "Invalid organization address");

        let voter = context.msg_sender();

        // Create nullifier to prevent double voting
        let msg_sender_npk_m_hash = get_public_keys(voter).npk_m.hash();
        let secret = context.request_nsk_app(msg_sender_npk_m_hash);
        let nullifier = std::hash::pedersen_hash([
            voter.to_field(),
            secret,
            disaster_hash,
            org_address.to_field(),
            vote_type as Field,
        ]);
        context.push_nullifier(nullifier);

        GodsHand::at(context.this_address())
            ._increment_vote_count(disaster_hash)
            .enqueue(&mut context);
    }

    #[public]
    #[internal]
    fn _increment_vote_count(disaster_hash: Field) {
        // Check disaster is active
        let disaster_info = storage.disaster_info.at(disaster_hash).read();
        assert(disaster_info.active, "Disaster is not active");

        let current_count = storage.vote_count.at(disaster_hash).read();
        storage.vote_count.at(disaster_hash).write(current_count + 1);
    }

    #[public]
    fn unlock_funds(disaster_hash: Field, org_address: AztecAddress, amount: u64) {
        let config = storage.config.read();
        let caller = context.msg_sender();
        
        assert(caller == config.agent, "Only agent can unlock funds");
        assert(!org_address.is_zero(), "Invalid organization address");
        assert(amount > 0, "Amount must be greater than 0");

        let disaster_info = storage.disaster_info.at(disaster_hash).read();
        assert(disaster_info.active, "Disaster is not active");

        // Check vote threshold
        let current_votes = storage.vote_count.at(disaster_hash).read();
        assert(current_votes >= config.vote_threshold, "Vote threshold not reached");

        // Check contract has enough balance
        let contract_balance = storage.contract_balance.at(disaster_hash).read();
        assert(contract_balance >= amount, "Insufficient contract balance");

        let current_unlocked = storage.unlocked_funds.at(disaster_hash).at(org_address).read();
        storage.unlocked_funds.at(disaster_hash).at(org_address).write(current_unlocked + amount);

        FundsUnlocked { disaster_hash, organization: org_address, amount }.emit(encode_event(&mut context));
    }

    #[private]
    fn claim(disaster_hash: Field) {
        let claimer = context.msg_sender();

        GodsHand::at(context.this_address())
            ._process_claim(disaster_hash, claimer)
            .enqueue(&mut context);
    }

    #[public]
    #[internal]
    fn _process_claim(disaster_hash: Field, claimer: AztecAddress) {
        let disaster_info = storage.disaster_info.at(disaster_hash).read();
        assert(disaster_info.active, "Disaster is not active");

        let unlocked_amount = storage.unlocked_funds.at(disaster_hash).at(claimer).read();
        assert(unlocked_amount > 0, "No funds available to claim");

        // Update balances
        let current_balance = storage.contract_balance.at(disaster_hash).read();
        storage.contract_balance.at(disaster_hash).write(current_balance - unlocked_amount);
        storage.unlocked_funds.at(disaster_hash).at(claimer).write(0);

        FundsClaimed { disaster_hash, claimer, amount: unlocked_amount }.emit(encode_event(&mut context));
    }

    #[public]
    fn deactivate_disaster(disaster_hash: Field) {
        let config = storage.config.read();
        let caller = context.msg_sender();
        assert(caller == config.agent, "Only agent can deactivate disasters");

        let mut disaster_info = storage.disaster_info.at(disaster_hash).read();
        disaster_info.active = false;
        storage.disaster_info.at(disaster_hash).write(disaster_info);
    }

    // View functions
    #[public]
    #[view]
    fn get_config() -> Config {
        storage.config.read()
    }

    #[public]
    #[view]
    fn get_disaster_info(disaster_hash: Field) -> DisasterInfo {
        storage.disaster_info.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_total_donations(disaster_hash: Field) -> u64 {
        storage.total_donations.at(disaster_hash).read()
    }

    #[public]
    #[view]
    fn get_user_donation(disaster_hash: Field, user: AztecAddress) -> u64 {
        storage.user_donations.at(disaster_hash).at(user).read()
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
    fn get_contract_balance(disaster_hash: Field) -> u64 {
        storage.contract_balance.at(disaster_hash).read()
    }
}