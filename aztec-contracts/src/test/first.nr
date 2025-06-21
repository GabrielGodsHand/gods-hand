use crate::test::utils;
use crate::GodsHand;
use dep::aztec::{prelude::AztecAddress, test::helpers::test_environment::TestEnvironment};



// Basic Tests
#[test]
unconstrained fn test_constructor() {
    let (env, contract_address, admin, _) = utils::setup();
    
    let stored_admin = GodsHand::at(contract_address).get_admin().view(&mut env.public());
    assert(stored_admin == admin, "Admin not set correctly");
    
    let is_admin_agent = GodsHand::at(contract_address).is_agent(admin).view(&mut env.public());
    assert(is_admin_agent, "Admin should be an agent by default");
}

#[test(should_fail_with = "Invalid admin address")]
unconstrained fn test_constructor_zero_admin() {
    let mut env = TestEnvironment::new();
    let zero_admin = AztecAddress::zero();
    
    env.impersonate(zero_admin);
    let initializer_call_interface = GodsHand::interface().constructor(zero_admin);
    env.deploy_self("GodsHand").with_public_void_initializer(
        zero_admin,
        initializer_call_interface,
    );
}

#[test]
unconstrained fn test_add_agent() {
    let (env, contract_address, admin, agent) = utils::setup();
    
    let is_agent_before = GodsHand::at(contract_address).is_agent(agent).view(&mut env.public());
    assert(!is_agent_before, "Agent should not be authorized initially");
    
    GodsHand::at(contract_address).add_agent(agent).call(&mut env.public());
    env.advance_block_by(1);
    
    let is_agent_after = GodsHand::at(contract_address).is_agent(agent).view(&mut env.public());
    assert(is_agent_after, "Agent should be authorized after adding");
}

#[test(should_fail_with = "Only admin can add agents")]
unconstrained fn test_add_agent_non_admin() {
    let (env, contract_address, admin, agent) = utils::setup();
    let non_admin = env.create_account(3);
    
    env.impersonate(non_admin);
    GodsHand::at(contract_address).add_agent(agent).call(&mut env.public());
}

// Disaster Tests
#[test]
unconstrained fn test_create_disaster() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    
    let disaster_info = GodsHand::at(contract_address)
        .get_disaster_info(disaster_hash)
        .view(&mut env.public());
    
    assert(disaster_info.title == 12345, "Disaster title not set correctly");
    assert(disaster_info.metadata == 67890, "Disaster metadata not set correctly");
    assert(disaster_info.amount == 1000000, "Disaster amount not set correctly");
    assert(disaster_info.creator == agent, "Disaster creator not set correctly");
    assert(disaster_info.active, "Disaster should be active");
    
    assert(GodsHand::at(contract_address).get_donation_count(disaster_hash).view(&mut env.public()) == 0);
    assert(GodsHand::at(contract_address).get_vote_count(disaster_hash).view(&mut env.public()) == 0);
}

#[test(should_fail_with = "Only authorized agents can create disasters")]
unconstrained fn test_create_disaster_non_agent() {
    let (env, contract_address, admin, agent) = utils::setup();
    let non_agent = env.create_account(3);
    
    env.impersonate(non_agent);
    GodsHand::at(contract_address).create_disaster(12345, 67890, 1000000).call(&mut env.public());
}

#[test]
unconstrained fn test_deactivate_disaster() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    
    assert(utils::get_disaster_active(contract_address, disaster_hash), "Disaster should be active initially");
    
    env.impersonate(agent);
    GodsHand::at(contract_address).deactivate_disaster(disaster_hash).call(&mut env.public());
    env.advance_block_by(1);
    
    assert(!utils::get_disaster_active(contract_address, disaster_hash), "Disaster should be inactive");
}

// Donation Tests
#[test]
unconstrained fn test_donate() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let donor = env.create_account(3);
    
    let initial_count = utils::get_donation_count(contract_address, disaster_hash);
    assert(initial_count == 0, "Initial donation count should be 0");
    
    env.impersonate(donor);
    GodsHand::at(contract_address)
        .donate(disaster_hash, 100, 1, 0x123)
        .call(&mut env.private());
    
    let final_count = utils::get_donation_count(contract_address, disaster_hash);
    assert(final_count == 1, "Donation count should increase to 1");
}

#[test(should_fail_with = "Donation amount must be greater than 0")]
unconstrained fn test_donate_zero_amount() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let donor = env.create_account(3);
    
    env.impersonate(donor);
    GodsHand::at(contract_address)
        .donate(disaster_hash, 0, 1, 0x123)
        .call(&mut env.private());
}

#[test(should_fail)]
unconstrained fn test_donate_twice_same_user() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let donor = env.create_account(3);
    
    env.impersonate(donor);
    GodsHand::at(contract_address)
        .donate(disaster_hash, 100, 1, 0x123)
        .call(&mut env.private());
    
    env.advance_block_by(1);
    GodsHand::at(contract_address)
        .donate(disaster_hash, 100, 1, 0x123)
        .call(&mut env.private());
}

#[test]
unconstrained fn test_multiple_donors() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let donor1 = env.create_account(3);
    let donor2 = env.create_account(4);
    
    env.impersonate(donor1);
    GodsHand::at(contract_address)
        .donate(disaster_hash, 100, 1, 0x123)
        .call(&mut env.private());
    
    env.impersonate(donor2);
    GodsHand::at(contract_address)
        .donate(disaster_hash, 200, 1, 0x123)
        .call(&mut env.private());
    
    let final_count = utils::get_donation_count(contract_address, disaster_hash);
    assert(final_count == 2, "Should have 2 donations");
}

// Voting Tests
#[test]
unconstrained fn test_vote() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let voter = env.create_account(3);
    let org = env.create_account(4);
    
    env.impersonate(voter);
    GodsHand::at(contract_address)
        .vote(disaster_hash, org, 1)
        .call(&mut env.private());
    
    let vote_count = utils::get_vote_count(contract_address, disaster_hash);
    assert(vote_count == 1, "Vote count should be 1");
}

#[test]
unconstrained fn test_vote_all_types() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let voter1 = env.create_account(3);
    let voter2 = env.create_account(4);
    let voter3 = env.create_account(5);
    let voter4 = env.create_account(6);
    let org = env.create_account(7);
    
    env.impersonate(voter1);
    GodsHand::at(contract_address).vote(disaster_hash, org, 0).call(&mut env.private());
    
    env.impersonate(voter2);
    GodsHand::at(contract_address).vote(disaster_hash, org, 1).call(&mut env.private());
    
    env.impersonate(voter3);
    GodsHand::at(contract_address).vote(disaster_hash, org, 2).call(&mut env.private());
    
    env.impersonate(voter4);
    GodsHand::at(contract_address).vote(disaster_hash, org, 3).call(&mut env.private());
    
    let vote_count = utils::get_vote_count(contract_address, disaster_hash);
    assert(vote_count == 4, "Vote count should be 4");
}

#[test(should_fail)]
unconstrained fn test_vote_twice() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let voter = env.create_account(3);
    let org = env.create_account(4);
    
    env.impersonate(voter);
    GodsHand::at(contract_address)
        .vote(disaster_hash, org, 1)
        .call(&mut env.private());
    
    env.advance_block_by(1);
    GodsHand::at(contract_address)
        .vote(disaster_hash, org, 2)
        .call(&mut env.private());
}

#[test(should_fail_with = "Invalid vote type")]
unconstrained fn test_vote_invalid_type() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let voter = env.create_account(3);
    let org = env.create_account(4);
    
    env.impersonate(voter);
    GodsHand::at(contract_address)
        .vote(disaster_hash, org, 5)
        .call(&mut env.private());
}

// Fund Management Tests
#[test]
unconstrained fn test_unlock_and_claim_funds() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let org = env.create_account(3);
    
    let initial_funds = utils::get_unlocked_funds(contract_address, disaster_hash, org);
    assert(initial_funds == 0, "Initial unlocked funds should be 0");
    
    env.impersonate(agent);
    GodsHand::at(contract_address)
        .unlock_funds(disaster_hash, org, 5000)
        .call(&mut env.public());
    env.advance_block_by(1);
    
    let unlocked = utils::get_unlocked_funds(contract_address, disaster_hash, org);
    assert(unlocked == 5000, "Should have 5000 unlocked funds");
    
    env.impersonate(org);
    GodsHand::at(contract_address)
        .claim(disaster_hash)
        .call(&mut env.private());
    
    let remaining = utils::get_unlocked_funds(contract_address, disaster_hash, org);
    assert(remaining == 0, "Should have 0 unlocked funds after claiming");
}

#[test]
unconstrained fn test_unlock_funds_multiple_times() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let org = env.create_account(3);
    
    env.impersonate(agent);
    GodsHand::at(contract_address)
        .unlock_funds(disaster_hash, org, 1000)
        .call(&mut env.public());
    env.advance_block_by(1);
    
    GodsHand::at(contract_address)
        .unlock_funds(disaster_hash, org, 2000)
        .call(&mut env.public());
    env.advance_block_by(1);
    
    GodsHand::at(contract_address)
        .unlock_funds(disaster_hash, org, 3000)
        .call(&mut env.public());
    env.advance_block_by(1);
    
    let total_unlocked = utils::get_unlocked_funds(contract_address, disaster_hash, org);
    assert(total_unlocked == 6000, "Should have 6000 total unlocked funds");
}

#[test(should_fail_with = "Only authorized agents can unlock funds")]
unconstrained fn test_unlock_funds_non_agent() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let non_agent = env.create_account(3);
    let org = env.create_account(4);
    
    env.impersonate(non_agent);
    GodsHand::at(contract_address)
        .unlock_funds(disaster_hash, org, 5000)
        .call(&mut env.public());
}

#[test(should_fail_with = "No funds available to claim")]
unconstrained fn test_claim_no_funds() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let org = env.create_account(3);
    
    env.impersonate(org);
    GodsHand::at(contract_address)
        .claim(disaster_hash)
        .call(&mut env.private());
}

#[test(should_fail_with = "Disaster is not active")]
unconstrained fn test_donate_inactive_disaster() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let donor = env.create_account(3);
    
    env.impersonate(agent);
    GodsHand::at(contract_address).deactivate_disaster(disaster_hash).call(&mut env.public());
    env.advance_block_by(1);
    
    env.impersonate(donor);
    GodsHand::at(contract_address)
        .donate(disaster_hash, 100, 1, 0x123)
        .call(&mut env.private());
}

#[test(should_fail_with = "Disaster is not active")]
unconstrained fn test_vote_inactive_disaster() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let voter = env.create_account(3);
    let org = env.create_account(4);
    
    env.impersonate(agent);
    GodsHand::at(contract_address).deactivate_disaster(disaster_hash).call(&mut env.public());
    env.advance_block_by(1);
    
    env.impersonate(voter);
    GodsHand::at(contract_address)
        .vote(disaster_hash, org, 1)
        .call(&mut env.private());
}

#[test(should_fail_with = "Disaster is not active")]
unconstrained fn test_unlock_funds_inactive_disaster() {
    let (env, contract_address, admin, agent, disaster_hash) = utils::setup_with_disaster();
    let org = env.create_account(3);
    
    env.impersonate(agent);
    GodsHand::at(contract_address).deactivate_disaster(disaster_hash).call(&mut env.public());
    env.advance_block_by(1);
    
    GodsHand::at(contract_address)
        .unlock_funds(disaster_hash, org, 5000)
        .call(&mut env.public());
}