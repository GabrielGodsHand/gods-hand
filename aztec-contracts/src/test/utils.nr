use dep::aztec::{
    oracle::{execution::get_block_number, storage::storage_read},
    prelude::AztecAddress,
    protocol_types::storage::map::derive_storage_slot_in_map,
    test::helpers::{cheatcodes, test_environment::TestEnvironment},
};
use crate::GodsHand;

pub unconstrained fn setup() -> (&mut TestEnvironment, AztecAddress, AztecAddress, AztecAddress) {
    let mut env = TestEnvironment::new();
    let admin = env.create_account(1);
    let agent = env.create_account(2);
    
    env.impersonate(admin);
    
    let initializer_call_interface = GodsHand::interface().constructor(admin);
    let contract = env.deploy_self("GodsHand").with_public_void_initializer(
        admin,
        initializer_call_interface,
    );
    
    env.advance_block_by(1);
    
    (&mut env, contract.to_address(), admin, agent)
}

pub unconstrained fn setup_with_agent() -> (&mut TestEnvironment, AztecAddress, AztecAddress, AztecAddress) {
    let (env, contract_address, admin, agent) = setup();
    
    // Add agent
    GodsHand::at(contract_address).add_agent(agent).call(&mut env.public());
    env.advance_block_by(1);
    
    (env, contract_address, admin, agent)
}

pub unconstrained fn setup_with_disaster() -> (&mut TestEnvironment, AztecAddress, AztecAddress, AztecAddress, Field) {
    let (env, contract_address, admin, agent) = setup_with_agent();
    
    // Create disaster
    env.impersonate(agent);
    let disaster_hash = GodsHand::at(contract_address)
        .create_disaster(12345, 67890, 1000000)
        .call(&mut env.public());
    env.advance_block_by(1);
    
    (env, contract_address, admin, agent, disaster_hash)
}

pub unconstrained fn get_disaster_active(contract_address: AztecAddress, disaster_hash: Field) -> bool {
    let current_contract_address = dep::aztec::oracle::execution::get_contract_address();
    cheatcodes::set_contract_address(contract_address);
    
    let block_number = get_block_number();
    let active_slot = GodsHand::storage_layout().disaster_active.slot;
    let disaster_slot = derive_storage_slot_in_map(active_slot, disaster_hash);
    let active: bool = storage_read(contract_address, disaster_slot, block_number);
    
    cheatcodes::set_contract_address(current_contract_address);
    active
}

pub unconstrained fn get_donation_count(contract_address: AztecAddress, disaster_hash: Field) -> u64 {
    let current_contract_address = dep::aztec::oracle::execution::get_contract_address();
    cheatcodes::set_contract_address(contract_address);
    
    let block_number = get_block_number();
    let count_slot = GodsHand::storage_layout().donation_count.slot;
    let disaster_slot = derive_storage_slot_in_map(count_slot, disaster_hash);
    let count: u64 = storage_read(contract_address, disaster_slot, block_number);
    
    cheatcodes::set_contract_address(current_contract_address);
    count
}

pub unconstrained fn get_vote_count(contract_address: AztecAddress, disaster_hash: Field) -> u64 {
    let current_contract_address = dep::aztec::oracle::execution::get_contract_address();
    cheatcodes::set_contract_address(contract_address);
    
    let block_number = get_block_number();
    let count_slot = GodsHand::storage_layout().vote_count.slot;
    let disaster_slot = derive_storage_slot_in_map(count_slot, disaster_hash);
    let count: u64 = storage_read(contract_address, disaster_slot, block_number);
    
    cheatcodes::set_contract_address(current_contract_address);
    count
}

pub unconstrained fn get_unlocked_funds(contract_address: AztecAddress, disaster_hash: Field, org: AztecAddress) -> u64 {
    let current_contract_address = dep::aztec::oracle::execution::get_contract_address();
    cheatcodes::set_contract_address(contract_address);
    
    let block_number = get_block_number();
    let funds_slot = GodsHand::storage_layout().unlocked_funds.slot;
    let disaster_slot = derive_storage_slot_in_map(funds_slot, disaster_hash);
    let org_slot = derive_storage_slot_in_map(disaster_slot, org.to_field());
    let funds: u64 = storage_read(contract_address, org_slot, block_number);
    
    cheatcodes::set_contract_address(current_contract_address);
    funds
}