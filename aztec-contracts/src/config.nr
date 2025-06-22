use dep::aztec::protocol_types::{address::AztecAddress, traits::{Packable, Serialize}};
use std::meta::derive;

#[derive(Eq, Packable, Serialize)]
pub struct Config {
    pub eth_token: AztecAddress,
    pub agent: AztecAddress, 
    pub vote_threshold: u64,
}

#[derive(Eq, Packable, Serialize)]
pub struct DisasterInfo {
    pub hash: Field,
    pub estimated_amount: u64,
    pub active: bool,
}