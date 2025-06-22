const i=!0,e="1.0.0-beta.5+0000000000000000000000000000000000000000",n="MultiCallEntrypoint",t=[{name:"entrypoint",is_unconstrained:!1,custom_attributes:["private"],abi:{parameters:[{name:"inputs",type:{kind:"struct",path:"aztec::context::inputs::private_context_inputs::PrivateContextInputs",fields:[{name:"call_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"historical_header",type:{kind:"struct",path:"authwit::aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"authwit::aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"authwit::aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"authwit::aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]},visibility:"private"},{name:"app_payload",type:{kind:"struct",path:"authwit::entrypoint::app::AppPayload",fields:[{name:"function_calls",type:{kind:"array",length:4,type:{kind:"struct",path:"authwit::entrypoint::function_call::FunctionCall",fields:[{name:"args_hash",type:{kind:"field"}},{name:"function_selector",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"target_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_public",type:{kind:"boolean"}},{name:"is_static",type:{kind:"boolean"}}]}}},{name:"nonce",type:{kind:"field"}}]},visibility:"private"}],return_type:{abi_type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::private_circuit_public_inputs::PrivateCircuitPublicInputs",fields:[{name:"call_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"min_revertible_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"is_fee_payer",type:{kind:"boolean"}},{name:"max_block_number",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::max_block_number::MaxBlockNumber",fields:[{name:"_opt",type:{kind:"struct",path:"std::option::Option",fields:[{name:"_is_some",type:{kind:"boolean"}},{name:"_value",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}},{name:"note_hash_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifier_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"key_validation_requests_and_generators",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::validation_requests::key_validation_request_and_generator::KeyValidationRequestAndGenerator",fields:[{name:"request",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::validation_requests::key_validation_request::KeyValidationRequest",fields:[{name:"pk_m",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}},{name:"sk_app",type:{kind:"field"}}]}},{name:"sk_app_generator",type:{kind:"field"}}]}}},{name:"note_hashes",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::note_hash::NoteHash",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifiers",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::nullifier::Nullifier",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"note_hash",type:{kind:"field"}}]}}},{name:"private_call_requests",type:{kind:"array",length:5,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::private_call_request::PrivateCallRequest",fields:[{name:"call_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_call_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_teardown_call_request",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"l2_to_l1_msgs",type:{kind:"array",length:2,type:{kind:"struct",path:"authwit::aztec::protocol_types::messaging::l2_to_l1_message::L2ToL1Message",fields:[{name:"recipient",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"content",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"private_logs",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::private_log::PrivateLogData",fields:[{name:"log",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::log::Log",fields:[{name:"fields",type:{kind:"array",length:18,type:{kind:"field"}}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"note_hash_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"contract_class_logs_hashes",type:{kind:"array",length:1,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::log_hash::LogHash",fields:[{name:"value",type:{kind:"field"}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"historical_header",type:{kind:"struct",path:"authwit::aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"authwit::aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"authwit::aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"authwit::aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}}]},visibility:"databus"},error_types:{"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"5727012404371710682":{error_kind:"string",string:"push out of bounds"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"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",brillig_names:["notify_enqueued_public_function_call_wrapper","call_private_function_internal","directive_invert","directive_integer_quotient"],verification_key:"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"},{name:"sync_private_state",is_unconstrained:!0,custom_attributes:["utility"],abi:{parameters:[],return_type:null,error_types:{"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"H4sIAAAAAAAA/7WTPQ+CMBCGi2KUjzjgoD+jBAyM+LG4OLpXCkpUSAB3frqQXENtwKjAJU17FJ5736OVUB0SzDLqEAyyglmBecTtj8vhQY67hakIdfvku9i2lQZ/Peq3FGBKw/Ax4w/UfzwFzr6o+bwXVndWDo1b66g+H0P5Z/9vSP+LD5418GpAXnmew/oS5Nt74t+Oz8c5SNnXTR1EgnIxdK5CSd0lcZ4SP99QmgZZJhJGDWTUQlU56pVE8YG26fmRdgrSLEpikSZ/Sav6yu6lXLyr8eA57hCOizHTMAb+BDV3X+b2+feXkKuCJ+bT+1Nn6BAztEhI1oRS2yeGwK+CP38vlizs4eEFAAA=",debug_symbols:"nZPRioQgFIbf5Vx3oaWmvsowDFY2CGLh1MISvfvqoDu14DLMjSfzfF9/pRsMulvvN+PG6QHyskHnjbXmfrNTrxYzuXB3AxQH3IBsKsAEJA2FgmxDYSDFvleQ+2+L1zq2HwRBOyuv3QLSrdZW8KXs+mx6zMo966J8WEUVaDeEGoSjsTpe7dWLRmUUI0pYwjFiiP4qMCInCS5LWp4VPEBZ0OITX5d5WtPEU/p6B0zYuwF40+YAVJQCkDJPGpF4wvhHATjJAQQvBWBlPnz4xLOafRJA1HUSiIaWAvB/AvC8iVr05xdcw1T1xp/29h5V3qjO6jQdV9cfVpfvOa/kszH7qdfD6nU0HQ5IGC+YV3Vz3ePTfgA=",brillig_names:["sync_private_state"]},{name:"public_dispatch",is_unconstrained:!0,custom_attributes:["public"],abi:{parameters:[{name:"selector",type:{kind:"field"},visibility:"private"}],return_type:null,error_types:{"1752556835457866331":{error_kind:"string",string:"No public functions"}}},bytecode:"JwAABAEqAAABBRhSVSgKJhpbPAAAAQ==",debug_symbols:"XY1bCoAgEEX3Mt+toK1EiI9RBkRl0iDEvWeRIH3ee+6jgkFVnKBg4wHrVkExeU9O+Khlphi6W9sCQ4rMiN2CiW97D0hN/C+dkkkqj5+0JeiJ5isNMk4TR42mMD5LL2t7uwE=",brillig_names:["public_dispatch"]}],s={globals:{},structs:{functions:[{fields:[{name:"parameters",type:{fields:[{name:"app_payload",type:{fields:[{name:"function_calls",type:{kind:"array",length:4,type:{fields:[{name:"args_hash",type:{kind:"field"}},{name:"function_selector",type:{fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}],kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector"}},{name:"target_address",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress"}},{name:"is_public",type:{kind:"boolean"}},{name:"is_static",type:{kind:"boolean"}}],kind:"struct",path:"authwit::entrypoint::function_call::FunctionCall"}}},{name:"nonce",type:{kind:"field"}}],kind:"struct",path:"authwit::entrypoint::app::AppPayload"}}],kind:"struct",path:"MultiCallEntrypoint::entrypoint_parameters"}}],kind:"struct",path:"MultiCallEntrypoint::entrypoint_abi"},{fields:[{name:"parameters",type:{fields:[],kind:"struct",path:"MultiCallEntrypoint::sync_private_state_parameters"}}],kind:"struct",path:"MultiCallEntrypoint::sync_private_state_abi"}]}},a={6:{path:"std/collections/bounded_vec.nr",source:`use crate::{cmp::Eq, convert::From, runtime::is_unconstrained, static_assert};

/// A \`BoundedVec<T, MaxLen>\` is a growable storage similar to a \`Vec<T>\` except that it
/// is bounded with a maximum possible length. Unlike \`Vec\`, \`BoundedVec\` is not implemented
/// via slices and thus is not subject to the same restrictions slices are (notably, nested
/// slices - and thus nested vectors as well - are disallowed).
///
/// Since a BoundedVec is backed by a normal array under the hood, growing the BoundedVec by
/// pushing an additional element is also more efficient - the length only needs to be increased
/// by one.
///
/// For these reasons \`BoundedVec<T, N>\` should generally be preferred over \`Vec<T>\` when there
/// is a reasonable maximum bound that can be placed on the vector.
///
/// Example:
///
/// \`\`\`noir
/// let mut vector: BoundedVec<Field, 10> = BoundedVec::new();
/// for i in 0..5 {
///     vector.push(i);
/// }
/// assert(vector.len() == 5);
/// assert(vector.max_len() == 10);
/// \`\`\`
pub struct BoundedVec<T, let MaxLen: u32> {
    storage: [T; MaxLen],
    len: u32,
}

impl<T, let MaxLen: u32> BoundedVec<T, MaxLen> {
    /// Creates a new, empty vector of length zero.
    ///
    /// Since this container is backed by an array internally, it still needs an initial value
    /// to give each element. To resolve this, each element is zeroed internally. This value
    /// is guaranteed to be inaccessible unless \`get_unchecked\` is used.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let empty_vector: BoundedVec<Field, 10> = BoundedVec::new();
    /// assert(empty_vector.len() == 0);
    /// \`\`\`
    ///
    /// Note that whenever calling \`new\` the maximum length of the vector should always be specified
    /// via a type signature:
    ///
    /// \`\`\`noir
    /// fn good() -> BoundedVec<Field, 10> {
    ///     // Ok! MaxLen is specified with a type annotation
    ///     let v1: BoundedVec<Field, 3> = BoundedVec::new();
    ///     let v2 = BoundedVec::new();
    ///
    ///     // Ok! MaxLen is known from the type of \`good\`'s return value
    ///     v2
    /// }
    ///
    /// fn bad() {
    ///     // Error: Type annotation needed
    ///     // The compiler can't infer \`MaxLen\` from the following code:
    ///     let mut v3 = BoundedVec::new();
    ///     v3.push(5);
    /// }
    /// \`\`\`
    ///
    /// This defaulting of \`MaxLen\` (and numeric generics in general) to zero may change in future noir versions
    /// but for now make sure to use type annotations when using bounded vectors. Otherwise, you will receive a
    /// constraint failure at runtime when the vec is pushed to.
    pub fn new() -> Self {
        let zeroed = crate::mem::zeroed();
        BoundedVec { storage: [zeroed; MaxLen], len: 0 }
    }

    /// Retrieves an element from the vector at the given index, starting from zero.
    ///
    /// If the given index is equal to or greater than the length of the vector, this
    /// will issue a constraint failure.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// fn foo<let N: u32>(v: BoundedVec<u32, N>) {
    ///     let first = v.get(0);
    ///     let last = v.get(v.len() - 1);
    ///     assert(first != last);
    /// }
    /// \`\`\`
    pub fn get(self, index: u32) -> T {
        assert(index < self.len, "Attempted to read past end of BoundedVec");
        self.get_unchecked(index)
    }

    /// Retrieves an element from the vector at the given index, starting from zero, without
    /// performing a bounds check.
    ///
    /// Since this function does not perform a bounds check on length before accessing the element,
    /// it is unsafe! Use at your own risk!
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// fn sum_of_first_three<let N: u32>(v: BoundedVec<u32, N>) -> u32 {
    ///     // Always ensure the length is larger than the largest
    ///     // index passed to get_unchecked
    ///     assert(v.len() > 2);
    ///     let first = v.get_unchecked(0);
    ///     let second = v.get_unchecked(1);
    ///     let third = v.get_unchecked(2);
    ///     first + second + third
    /// }
    /// \`\`\`
    pub fn get_unchecked(self, index: u32) -> T {
        self.storage[index]
    }

    /// Writes an element to the vector at the given index, starting from zero.
    ///
    /// If the given index is equal to or greater than the length of the vector, this will issue a constraint failure.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// fn foo<let N: u32>(v: BoundedVec<u32, N>) {
    ///     let first = v.get(0);
    ///     assert(first != 42);
    ///     v.set(0, 42);
    ///     let new_first = v.get(0);
    ///     assert(new_first == 42);
    /// }
    /// \`\`\`
    pub fn set(&mut self, index: u32, value: T) {
        assert(index < self.len, "Attempted to write past end of BoundedVec");
        self.set_unchecked(index, value)
    }

    /// Writes an element to the vector at the given index, starting from zero, without performing a bounds check.
    ///
    /// Since this function does not perform a bounds check on length before accessing the element, it is unsafe! Use at your own risk!
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// fn set_unchecked_example() {
    ///     let mut vec: BoundedVec<u32, 5> = BoundedVec::new();
    ///     vec.extend_from_array([1, 2]);
    ///
    ///     // Here we're safely writing within the valid range of \`vec\`
    ///     // \`vec\` now has the value [42, 2]
    ///     vec.set_unchecked(0, 42);
    ///
    ///     // We can then safely read this value back out of \`vec\`.
    ///     // Notice that we use the checked version of \`get\` which would prevent reading unsafe values.
    ///     assert_eq(vec.get(0), 42);
    ///
    ///     // We've now written past the end of \`vec\`.
    ///     // As this index is still within the maximum potential length of \`v\`,
    ///     // it won't cause a constraint failure.
    ///     vec.set_unchecked(2, 42);
    ///     println(vec);
    ///
    ///     // This will write past the end of the maximum potential length of \`vec\`,
    ///     // it will then trigger a constraint failure.
    ///     vec.set_unchecked(5, 42);
    ///     println(vec);
    /// }
    /// \`\`\`
    pub fn set_unchecked(&mut self, index: u32, value: T) {
        self.storage[index] = value;
    }

    /// Pushes an element to the end of the vector. This increases the length
    /// of the vector by one.
    ///
    /// Panics if the new length of the vector will be greater than the max length.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut v: BoundedVec<Field, 2> = BoundedVec::new();
    ///
    /// v.push(1);
    /// v.push(2);
    ///
    /// // Panics with failed assertion "push out of bounds"
    /// v.push(3);
    /// \`\`\`
    pub fn push(&mut self, elem: T) {
        assert(self.len < MaxLen, "push out of bounds");

        self.storage[self.len] = elem;
        self.len += 1;
    }

    /// Returns the current length of this vector
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut v: BoundedVec<Field, 4> = BoundedVec::new();
    /// assert(v.len() == 0);
    ///
    /// v.push(100);
    /// assert(v.len() == 1);
    ///
    /// v.push(200);
    /// v.push(300);
    /// v.push(400);
    /// assert(v.len() == 4);
    ///
    /// let _ = v.pop();
    /// let _ = v.pop();
    /// assert(v.len() == 2);
    /// \`\`\`
    pub fn len(self) -> u32 {
        self.len
    }

    /// Returns the maximum length of this vector. This is always
    /// equal to the \`MaxLen\` parameter this vector was initialized with.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut v: BoundedVec<Field, 5> = BoundedVec::new();
    ///
    /// assert(v.max_len() == 5);
    /// v.push(10);
    /// assert(v.max_len() == 5);
    /// \`\`\`
    pub fn max_len(_self: BoundedVec<T, MaxLen>) -> u32 {
        MaxLen
    }

    /// Returns the internal array within this vector.
    ///
    /// Since arrays in Noir are immutable, mutating the returned storage array will not mutate
    /// the storage held internally by this vector.
    ///
    /// Note that uninitialized elements may be zeroed out!
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut v: BoundedVec<Field, 5> = BoundedVec::new();
    ///
    /// assert(v.storage() == [0, 0, 0, 0, 0]);
    ///
    /// v.push(57);
    /// assert(v.storage() == [57, 0, 0, 0, 0]);
    /// \`\`\`
    pub fn storage(self) -> [T; MaxLen] {
        self.storage
    }

    /// Pushes each element from the given array to this vector.
    ///
    /// Panics if pushing each element would cause the length of this vector
    /// to exceed the maximum length.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut vec: BoundedVec<Field, 3> = BoundedVec::new();
    /// vec.extend_from_array([2, 4]);
    ///
    /// assert(vec.len == 2);
    /// assert(vec.get(0) == 2);
    /// assert(vec.get(1) == 4);
    /// \`\`\`
    pub fn extend_from_array<let Len: u32>(&mut self, array: [T; Len]) {
        let new_len = self.len + array.len();
        assert(new_len <= MaxLen, "extend_from_array out of bounds");
        for i in 0..array.len() {
            self.storage[self.len + i] = array[i];
        }
        self.len = new_len;
    }

    /// Pushes each element from the given slice to this vector.
    ///
    /// Panics if pushing each element would cause the length of this vector
    /// to exceed the maximum length.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut vec: BoundedVec<Field, 3> = BoundedVec::new();
    /// vec.extend_from_slice(&[2, 4]);
    ///
    /// assert(vec.len == 2);
    /// assert(vec.get(0) == 2);
    /// assert(vec.get(1) == 4);
    /// \`\`\`
    pub fn extend_from_slice(&mut self, slice: [T]) {
        let new_len = self.len + slice.len();
        assert(new_len <= MaxLen, "extend_from_slice out of bounds");
        for i in 0..slice.len() {
            self.storage[self.len + i] = slice[i];
        }
        self.len = new_len;
    }

    /// Pushes each element from the other vector to this vector. The length of
    /// the other vector is left unchanged.
    ///
    /// Panics if pushing each element would cause the length of this vector
    /// to exceed the maximum length.
    ///
    /// \`\`\`noir
    /// let mut v1: BoundedVec<Field, 5> = BoundedVec::new();
    /// let mut v2: BoundedVec<Field, 7> = BoundedVec::new();
    ///
    /// v2.extend_from_array([1, 2, 3]);
    /// v1.extend_from_bounded_vec(v2);
    ///
    /// assert(v1.storage() == [1, 2, 3, 0, 0]);
    /// assert(v2.storage() == [1, 2, 3, 0, 0, 0, 0]);
    /// \`\`\`
    pub fn extend_from_bounded_vec<let Len: u32>(&mut self, vec: BoundedVec<T, Len>) {
        let append_len = vec.len();
        let new_len = self.len + append_len;
        assert(new_len <= MaxLen, "extend_from_bounded_vec out of bounds");

        if is_unconstrained() {
            for i in 0..append_len {
                self.storage[self.len + i] = vec.get_unchecked(i);
            }
        } else {
            let mut exceeded_len = false;
            for i in 0..Len {
                exceeded_len |= i == append_len;
                if !exceeded_len {
                    self.storage[self.len + i] = vec.get_unchecked(i);
                }
            }
        }
        self.len = new_len;
    }

    /// Creates a new vector, populating it with values derived from an array input.
    /// The maximum length of the vector is determined based on the type signature.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let bounded_vec: BoundedVec<Field, 10> = BoundedVec::from_array([1, 2, 3])
    /// \`\`\`
    pub fn from_array<let Len: u32>(array: [T; Len]) -> Self {
        static_assert(Len <= MaxLen, "from array out of bounds");
        let mut vec: BoundedVec<T, MaxLen> = BoundedVec::new();
        vec.extend_from_array(array);
        vec
    }

    /// Pops the element at the end of the vector. This will decrease the length
    /// of the vector by one.
    ///
    /// Panics if the vector is empty.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut v: BoundedVec<Field, 2> = BoundedVec::new();
    /// v.push(1);
    /// v.push(2);
    ///
    /// let two = v.pop();
    /// let one = v.pop();
    ///
    /// assert(two == 2);
    /// assert(one == 1);
    ///
    /// // error: cannot pop from an empty vector
    /// let _ = v.pop();
    /// \`\`\`
    pub fn pop(&mut self) -> T {
        assert(self.len > 0);
        self.len -= 1;

        let elem = self.storage[self.len];
        self.storage[self.len] = crate::mem::zeroed();
        elem
    }

    /// Returns true if the given predicate returns true for any element
    /// in this vector.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let mut v: BoundedVec<u32, 3> = BoundedVec::new();
    /// v.extend_from_array([2, 4, 6]);
    ///
    /// let all_even = !v.any(|elem: u32| elem % 2 != 0);
    /// assert(all_even);
    /// \`\`\`
    pub fn any<Env>(self, predicate: fn[Env](T) -> bool) -> bool {
        let mut ret = false;
        if is_unconstrained() {
            for i in 0..self.len {
                ret |= predicate(self.storage[i]);
            }
        } else {
            let mut ret = false;
            let mut exceeded_len = false;
            for i in 0..MaxLen {
                exceeded_len |= i == self.len;
                if !exceeded_len {
                    ret |= predicate(self.storage[i]);
                }
            }
        }
        ret
    }

    /// Creates a new vector of equal size by calling a closure on each element in this vector.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
    /// let result = vec.map(|value| value * 2);
    ///
    /// let expected = BoundedVec::from_array([2, 4, 6, 8]);
    /// assert_eq(result, expected);
    /// \`\`\`
    pub fn map<U, Env>(self, f: fn[Env](T) -> U) -> BoundedVec<U, MaxLen> {
        let mut ret = BoundedVec::new();
        ret.len = self.len();

        if is_unconstrained() {
            for i in 0..self.len() {
                ret.storage[i] = f(self.get_unchecked(i));
            }
        } else {
            for i in 0..MaxLen {
                if i < self.len() {
                    ret.storage[i] = f(self.get_unchecked(i));
                }
            }
        }

        ret
    }

    /// Creates a new vector of equal size by calling a closure on each element
    /// in this vector, along with its index.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
    /// let result = vec.mapi(|i, value| i + value * 2);
    ///
    /// let expected = BoundedVec::from_array([2, 5, 8, 11]);
    /// assert_eq(result, expected);
    /// \`\`\`
    pub fn mapi<U, Env>(self, f: fn[Env](u32, T) -> U) -> BoundedVec<U, MaxLen> {
        let mut ret = BoundedVec::new();
        ret.len = self.len();

        if is_unconstrained() {
            for i in 0..self.len() {
                ret.storage[i] = f(i, self.get_unchecked(i));
            }
        } else {
            for i in 0..MaxLen {
                if i < self.len() {
                    ret.storage[i] = f(i, self.get_unchecked(i));
                }
            }
        }

        ret
    }

    /// Calls a closure on each element in this vector.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
    /// let mut result = BoundedVec::<u32, 4>::new();
    /// vec.for_each(|value| result.push(value * 2));
    ///
    /// let expected = BoundedVec::from_array([2, 4, 6, 8]);
    /// assert_eq(result, expected);
    /// \`\`\`
    pub fn for_each<Env>(self, f: fn[Env](T) -> ()) {
        if is_unconstrained() {
            for i in 0..self.len() {
                f(self.get_unchecked(i));
            }
        } else {
            for i in 0..MaxLen {
                if i < self.len() {
                    f(self.get_unchecked(i));
                }
            }
        }
    }

    /// Calls a closure on each element in this vector, along with its index.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
    /// let mut result = BoundedVec::<u32, 4>::new();
    /// vec.for_eachi(|i, value| result.push(i + value * 2));
    ///
    /// let expected = BoundedVec::from_array([2, 5, 8, 11]);
    /// assert_eq(result, expected);
    /// \`\`\`
    pub fn for_eachi<Env>(self, f: fn[Env](u32, T) -> ()) {
        if is_unconstrained() {
            for i in 0..self.len() {
                f(i, self.get_unchecked(i));
            }
        } else {
            for i in 0..MaxLen {
                if i < self.len() {
                    f(i, self.get_unchecked(i));
                }
            }
        }
    }

    /// Creates a new BoundedVec from the given array and length.
    /// The given length must be less than or equal to the length of the array.
    ///
    /// This function will zero out any elements at or past index \`len\` of \`array\`.
    /// This incurs an extra runtime cost of O(MaxLen). If you are sure your array is
    /// zeroed after that index, you can use \`from_parts_unchecked\` to remove the extra loop.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let vec: BoundedVec<u32, 4> = BoundedVec::from_parts([1, 2, 3, 0], 3);
    /// assert_eq(vec.len(), 3);
    /// \`\`\`
    pub fn from_parts(mut array: [T; MaxLen], len: u32) -> Self {
        assert(len <= MaxLen);
        let zeroed = crate::mem::zeroed();

        if is_unconstrained() {
            for i in len..MaxLen {
                array[i] = zeroed;
            }
        } else {
            for i in 0..MaxLen {
                if i >= len {
                    array[i] = zeroed;
                }
            }
        }

        BoundedVec { storage: array, len }
    }

    /// Creates a new BoundedVec from the given array and length.
    /// The given length must be less than or equal to the length of the array.
    ///
    /// This function is unsafe because it expects all elements past the \`len\` index
    /// of \`array\` to be zeroed, but does not check for this internally. Use \`from_parts\`
    /// for a safe version of this function which does zero out any indices past the
    /// given length. Invalidating this assumption can notably cause \`BoundedVec::eq\`
    /// to give incorrect results since it will check even elements past \`len\`.
    ///
    /// Example:
    ///
    /// \`\`\`noir
    /// let vec: BoundedVec<u32, 4> = BoundedVec::from_parts_unchecked([1, 2, 3, 0], 3);
    /// assert_eq(vec.len(), 3);
    ///
    /// // invalid use!
    /// let vec1: BoundedVec<u32, 4> = BoundedVec::from_parts_unchecked([1, 2, 3, 1], 3);
    /// let vec2: BoundedVec<u32, 4> = BoundedVec::from_parts_unchecked([1, 2, 3, 2], 3);
    ///
    /// // both vecs have length 3 so we'd expect them to be equal, but this
    /// // fails because elements past the length are still checked in eq
    /// assert_eq(vec1, vec2); // fails
    /// \`\`\`
    pub fn from_parts_unchecked(array: [T; MaxLen], len: u32) -> Self {
        assert(len <= MaxLen);
        BoundedVec { storage: array, len }
    }
}

impl<T, let MaxLen: u32> Eq for BoundedVec<T, MaxLen>
where
    T: Eq,
{
    fn eq(self, other: BoundedVec<T, MaxLen>) -> bool {
        // TODO: https://github.com/noir-lang/noir/issues/4837
        //
        // We make the assumption that the user has used the proper interface for working with \`BoundedVec\`s
        // rather than directly manipulating the internal fields as this can result in an inconsistent internal state.
        if self.len == other.len {
            self.storage == other.storage
        } else {
            false
        }
    }
}

impl<T, let MaxLen: u32, let Len: u32> From<[T; Len]> for BoundedVec<T, MaxLen> {
    fn from(array: [T; Len]) -> BoundedVec<T, MaxLen> {
        BoundedVec::from_array(array)
    }
}

mod bounded_vec_tests {

    mod get {
        use crate::collections::bounded_vec::BoundedVec;

        #[test(should_fail_with = "Attempted to read past end of BoundedVec")]
        fn panics_when_reading_elements_past_end_of_vec() {
            let vec: BoundedVec<Field, 5> = BoundedVec::new();

            crate::println(vec.get(0));
        }
    }

    mod set {
        use crate::collections::bounded_vec::BoundedVec;

        #[test]
        fn set_updates_values_properly() {
            let mut vec = BoundedVec::from_array([0, 0, 0, 0, 0]);

            vec.set(0, 42);
            assert_eq(vec.storage, [42, 0, 0, 0, 0]);

            vec.set(1, 43);
            assert_eq(vec.storage, [42, 43, 0, 0, 0]);

            vec.set(2, 44);
            assert_eq(vec.storage, [42, 43, 44, 0, 0]);

            vec.set(1, 10);
            assert_eq(vec.storage, [42, 10, 44, 0, 0]);

            vec.set(0, 0);
            assert_eq(vec.storage, [0, 10, 44, 0, 0]);
        }

        #[test(should_fail_with = "Attempted to write past end of BoundedVec")]
        fn panics_when_writing_elements_past_end_of_vec() {
            let mut vec: BoundedVec<Field, 5> = BoundedVec::new();
            vec.set(0, 42);

            // Need to use println to avoid DIE removing the write operation.
            crate::println(vec.get(0));
        }
    }

    mod map {
        use crate::collections::bounded_vec::BoundedVec;

        #[test]
        fn applies_function_correctly() {
            // docs:start:bounded-vec-map-example
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = vec.map(|value| value * 2);
            // docs:end:bounded-vec-map-example
            let expected = BoundedVec::from_array([2, 4, 6, 8]);

            assert_eq(result, expected);
        }

        #[test]
        fn applies_function_that_changes_return_type() {
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = vec.map(|value| (value * 2) as Field);
            let expected: BoundedVec<Field, 4> = BoundedVec::from_array([2, 4, 6, 8]);

            assert_eq(result, expected);
        }

        #[test]
        fn does_not_apply_function_past_len() {
            let vec: BoundedVec<u32, 3> = BoundedVec::from_array([0, 1]);
            let result = vec.map(|value| if value == 0 { 5 } else { value });
            let expected = BoundedVec::from_array([5, 1]);

            assert_eq(result, expected);
            assert_eq(result.get_unchecked(2), 0);
        }
    }

    mod mapi {
        use crate::collections::bounded_vec::BoundedVec;

        #[test]
        fn applies_function_correctly() {
            // docs:start:bounded-vec-mapi-example
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = vec.mapi(|i, value| i + value * 2);
            // docs:end:bounded-vec-mapi-example
            let expected = BoundedVec::from_array([2, 5, 8, 11]);

            assert_eq(result, expected);
        }

        #[test]
        fn applies_function_that_changes_return_type() {
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = vec.mapi(|i, value| (i + value * 2) as Field);
            let expected: BoundedVec<Field, 4> = BoundedVec::from_array([2, 5, 8, 11]);

            assert_eq(result, expected);
        }

        #[test]
        fn does_not_apply_function_past_len() {
            let vec: BoundedVec<u32, 3> = BoundedVec::from_array([0, 1]);
            let result = vec.mapi(|_, value| if value == 0 { 5 } else { value });
            let expected = BoundedVec::from_array([5, 1]);

            assert_eq(result, expected);
            assert_eq(result.get_unchecked(2), 0);
        }
    }

    mod for_each {
        use crate::collections::bounded_vec::BoundedVec;

        // map in terms of for_each
        fn for_each_map<T, U, Env, let MaxLen: u32>(
            input: BoundedVec<T, MaxLen>,
            f: fn[Env](T) -> U,
        ) -> BoundedVec<U, MaxLen> {
            let mut output = BoundedVec::<U, MaxLen>::new();
            let output_ref = &mut output;
            input.for_each(|x| output_ref.push(f(x)));
            output
        }

        #[test]
        fn smoke_test() {
            let mut acc = 0;
            let acc_ref = &mut acc;
            // docs:start:bounded-vec-for-each-example
            let vec: BoundedVec<u32, 3> = BoundedVec::from_array([1, 2, 3]);
            vec.for_each(|value| { *acc_ref += value; });
            // docs:end:bounded-vec-for-each-example
            assert_eq(acc, 6);
        }

        #[test]
        fn applies_function_correctly() {
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = for_each_map(vec, |value| value * 2);
            let expected = BoundedVec::from_array([2, 4, 6, 8]);

            assert_eq(result, expected);
        }

        #[test]
        fn applies_function_that_changes_return_type() {
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = for_each_map(vec, |value| (value * 2) as Field);
            let expected: BoundedVec<Field, 4> = BoundedVec::from_array([2, 4, 6, 8]);

            assert_eq(result, expected);
        }

        #[test]
        fn does_not_apply_function_past_len() {
            let vec: BoundedVec<u32, 3> = BoundedVec::from_array([0, 1]);
            let result = for_each_map(vec, |value| if value == 0 { 5 } else { value });
            let expected = BoundedVec::from_array([5, 1]);

            assert_eq(result, expected);
            assert_eq(result.get_unchecked(2), 0);
        }
    }

    mod for_eachi {
        use crate::collections::bounded_vec::BoundedVec;

        // mapi in terms of for_eachi
        fn for_eachi_mapi<T, U, Env, let MaxLen: u32>(
            input: BoundedVec<T, MaxLen>,
            f: fn[Env](u32, T) -> U,
        ) -> BoundedVec<U, MaxLen> {
            let mut output = BoundedVec::<U, MaxLen>::new();
            let output_ref = &mut output;
            input.for_eachi(|i, x| output_ref.push(f(i, x)));
            output
        }

        #[test]
        fn smoke_test() {
            let mut acc = 0;
            let acc_ref = &mut acc;
            // docs:start:bounded-vec-for-eachi-example
            let vec: BoundedVec<u32, 3> = BoundedVec::from_array([1, 2, 3]);
            vec.for_eachi(|i, value| { *acc_ref += i * value; });
            // docs:end:bounded-vec-for-eachi-example

            // 0 * 1 + 1 * 2 + 2 * 3
            assert_eq(acc, 8);
        }

        #[test]
        fn applies_function_correctly() {
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = for_eachi_mapi(vec, |i, value| i + value * 2);
            let expected = BoundedVec::from_array([2, 5, 8, 11]);

            assert_eq(result, expected);
        }

        #[test]
        fn applies_function_that_changes_return_type() {
            let vec: BoundedVec<u32, 4> = BoundedVec::from_array([1, 2, 3, 4]);
            let result = for_eachi_mapi(vec, |i, value| (i + value * 2) as Field);
            let expected: BoundedVec<Field, 4> = BoundedVec::from_array([2, 5, 8, 11]);

            assert_eq(result, expected);
        }

        #[test]
        fn does_not_apply_function_past_len() {
            let vec: BoundedVec<u32, 3> = BoundedVec::from_array([0, 1]);
            let result = for_eachi_mapi(vec, |_, value| if value == 0 { 5 } else { value });
            let expected = BoundedVec::from_array([5, 1]);

            assert_eq(result, expected);
            assert_eq(result.get_unchecked(2), 0);
        }
    }

    mod from_array {
        use crate::collections::bounded_vec::BoundedVec;

        #[test]
        fn empty() {
            let empty_array: [Field; 0] = [];
            let bounded_vec = BoundedVec::from_array([]);

            assert_eq(bounded_vec.max_len(), 0);
            assert_eq(bounded_vec.len(), 0);
            assert_eq(bounded_vec.storage(), empty_array);
        }

        #[test]
        fn equal_len() {
            let array = [1, 2, 3];
            let bounded_vec = BoundedVec::from_array(array);

            assert_eq(bounded_vec.max_len(), 3);
            assert_eq(bounded_vec.len(), 3);
            assert_eq(bounded_vec.storage(), array);
        }

        #[test]
        fn max_len_greater_then_array_len() {
            let array = [1, 2, 3];
            let bounded_vec: BoundedVec<Field, 10> = BoundedVec::from_array(array);

            assert_eq(bounded_vec.max_len(), 10);
            assert_eq(bounded_vec.len(), 3);
            assert_eq(bounded_vec.get(0), 1);
            assert_eq(bounded_vec.get(1), 2);
            assert_eq(bounded_vec.get(2), 3);
        }

        #[test(should_fail_with = "from array out of bounds")]
        fn max_len_lower_then_array_len() {
            let _: BoundedVec<Field, 2> = BoundedVec::from_array([0; 3]);
        }
    }

    mod trait_from {
        use crate::collections::bounded_vec::BoundedVec;
        use crate::convert::From;

        #[test]
        fn simple() {
            let array = [1, 2];
            let bounded_vec: BoundedVec<Field, 10> = BoundedVec::from(array);

            assert_eq(bounded_vec.max_len(), 10);
            assert_eq(bounded_vec.len(), 2);
            assert_eq(bounded_vec.get(0), 1);
            assert_eq(bounded_vec.get(1), 2);
        }
    }

    mod trait_eq {
        use crate::collections::bounded_vec::BoundedVec;

        #[test]
        fn empty_equality() {
            let mut bounded_vec1: BoundedVec<Field, 3> = BoundedVec::new();
            let mut bounded_vec2: BoundedVec<Field, 3> = BoundedVec::new();

            assert_eq(bounded_vec1, bounded_vec2);
        }

        #[test]
        fn inequality() {
            let mut bounded_vec1: BoundedVec<Field, 3> = BoundedVec::new();
            let mut bounded_vec2: BoundedVec<Field, 3> = BoundedVec::new();
            bounded_vec1.push(1);
            bounded_vec2.push(2);

            assert(bounded_vec1 != bounded_vec2);
        }
    }

    mod from_parts {
        use crate::collections::bounded_vec::BoundedVec;

        #[test]
        fn from_parts() {
            // docs:start:from-parts
            let vec: BoundedVec<u32, 4> = BoundedVec::from_parts([1, 2, 3, 0], 3);
            assert_eq(vec.len(), 3);

            // Any elements past the given length are zeroed out, so these
            // two BoundedVecs will be completely equal
            let vec1: BoundedVec<u32, 4> = BoundedVec::from_parts([1, 2, 3, 1], 3);
            let vec2: BoundedVec<u32, 4> = BoundedVec::from_parts([1, 2, 3, 2], 3);
            assert_eq(vec1, vec2);
            // docs:end:from-parts
        }

        #[test]
        fn from_parts_unchecked() {
            // docs:start:from-parts-unchecked
            let vec: BoundedVec<u32, 4> = BoundedVec::from_parts_unchecked([1, 2, 3, 0], 3);
            assert_eq(vec.len(), 3);

            // invalid use!
            let vec1: BoundedVec<u32, 4> = BoundedVec::from_parts_unchecked([1, 2, 3, 1], 3);
            let vec2: BoundedVec<u32, 4> = BoundedVec::from_parts_unchecked([1, 2, 3, 2], 3);

            // both vecs have length 3 so we'd expect them to be equal, but this
            // fails because elements past the length are still checked in eq
            assert(vec1 != vec2);
            // docs:end:from-parts-unchecked
        }
    }
}
`},50:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-contracts/contracts/protocol/multi_call_entrypoint_contract/src/main.nr",source:`// An entrypoint contract that allows everything to go through. Only used for testing
// Pair this with SignerlessWallet to perform multiple actions before any account contracts are deployed (and without authentication)
use dep::aztec::macros::aztec;

#[aztec]
pub contract MultiCallEntrypoint {
    use dep::authwit::entrypoint::app::AppPayload;
    use dep::aztec::macros::functions::private;

    #[private]
    fn entrypoint(app_payload: AppPayload) {
        app_payload.execute_calls(&mut context);
    }
}
`},55:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/authwit/src/entrypoint/app.nr",source:`use dep::aztec::{
    prelude::PrivateContext,
    protocol_types::{
        constants::GENERATOR_INDEX__SIGNATURE_PAYLOAD,
        hash::poseidon2_hash_with_separator,
        traits::{Hash, Serialize},
    },
};
use std::meta::derive;

use crate::entrypoint::function_call::FunctionCall;

// FUNCTION_CALL_SIZE_IN_BYTES * ACCOUNT_MAX_CALLS + 32
global APP_PAYLOAD_SIZE_IN_BYTES: u32 = 424;

global ACCOUNT_MAX_CALLS: u32 = 4;

// Note: If you change the following struct you have to update default_entrypoint.ts
// docs:start:app-payload-struct
#[derive(Serialize)]
pub struct AppPayload {
    function_calls: [FunctionCall; ACCOUNT_MAX_CALLS],
    pub nonce: Field,
}
// docs:end:app-payload-struct

impl Hash for AppPayload {
    fn hash(self) -> Field {
        poseidon2_hash_with_separator(self.serialize(), GENERATOR_INDEX__SIGNATURE_PAYLOAD)
    }
}

impl AppPayload {
    // Serializes the payload as an array of bytes. Useful for hashing with sha256.
    fn to_be_bytes(self) -> [u8; APP_PAYLOAD_SIZE_IN_BYTES] {
        let mut bytes: BoundedVec<u8, APP_PAYLOAD_SIZE_IN_BYTES> = BoundedVec::new();

        for i in 0..ACCOUNT_MAX_CALLS {
            bytes.extend_from_array(self.function_calls[i].to_be_bytes());
        }
        bytes.extend_from_array(self.nonce.to_be_bytes::<32>());

        bytes.storage()
    }

    // Executes all private and public calls
    // docs:start:entrypoint-execute-calls
    pub fn execute_calls(self, context: &mut PrivateContext) {
        for call in self.function_calls {
            if !call.target_address.is_zero() {
                if call.is_public {
                    context.call_public_function_with_calldata_hash(
                        call.target_address,
                        call.args_hash,
                        call.is_static,
                    );
                } else {
                    let _result = context.call_private_function_with_args_hash(
                        call.target_address,
                        call.function_selector,
                        call.args_hash,
                        call.is_static,
                    );
                }
            }
        }
    }
    // docs:end:entrypoint-execute-calls
}
`},68:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/private_context.nr",source:`use crate::{
    context::{inputs::PrivateContextInputs, returns_hash::ReturnsHash},
    hash::{ArgsHasher, hash_args_array, hash_calldata_array},
    keys::constants::{NULLIFIER_INDEX, NUM_KEY_TYPES, OUTGOING_INDEX, sk_generators},
    messaging::process_l1_to_l2_message,
    oracle::{
        block_header::get_block_header_at,
        call_private_function::call_private_function_internal,
        enqueue_public_function_call::{
            notify_enqueued_public_function_call, notify_set_min_revertible_side_effect_counter,
            notify_set_public_teardown_function_call,
        },
        execution_cache,
        key_validation_request::get_key_validation_request,
        notes::{notify_created_nullifier, notify_nullified_note},
    },
};
use dep::protocol_types::{
    abis::{
        call_context::CallContext,
        function_selector::FunctionSelector,
        gas_settings::GasSettings,
        log_hash::LogHash,
        max_block_number::MaxBlockNumber,
        note_hash::NoteHash,
        nullifier::Nullifier,
        private_call_request::PrivateCallRequest,
        private_circuit_public_inputs::PrivateCircuitPublicInputs,
        private_log::{PrivateLog, PrivateLogData},
        public_call_request::PublicCallRequest,
        read_request::ReadRequest,
        side_effect::Counted,
        validation_requests::{KeyValidationRequest, KeyValidationRequestAndGenerator},
    },
    address::{AztecAddress, EthAddress},
    block_header::BlockHeader,
    constants::{
        MAX_CONTRACT_CLASS_LOGS_PER_CALL, MAX_ENQUEUED_CALLS_PER_CALL,
        MAX_KEY_VALIDATION_REQUESTS_PER_CALL, MAX_L2_TO_L1_MSGS_PER_CALL,
        MAX_NOTE_HASH_READ_REQUESTS_PER_CALL, MAX_NOTE_HASHES_PER_CALL,
        MAX_NULLIFIER_READ_REQUESTS_PER_CALL, MAX_NULLIFIERS_PER_CALL,
        MAX_PRIVATE_CALL_STACK_LENGTH_PER_CALL, MAX_PRIVATE_LOGS_PER_CALL,
        PRIVATE_LOG_SIZE_IN_FIELDS,
    },
    messaging::l2_to_l1_message::L2ToL1Message,
    traits::{Empty, Hash, ToField},
    utils::arrays::array_concat,
};

// When finished, one can call .finish() to convert back to the abi
pub struct PrivateContext {
    // docs:start:private-context
    pub inputs: PrivateContextInputs,
    pub side_effect_counter: u32,

    pub min_revertible_side_effect_counter: u32,
    pub is_fee_payer: bool,

    pub args_hash: Field,
    pub return_hash: Field,

    pub max_block_number: MaxBlockNumber,

    pub note_hash_read_requests: BoundedVec<ReadRequest, MAX_NOTE_HASH_READ_REQUESTS_PER_CALL>,
    pub nullifier_read_requests: BoundedVec<ReadRequest, MAX_NULLIFIER_READ_REQUESTS_PER_CALL>,
    key_validation_requests_and_generators: BoundedVec<KeyValidationRequestAndGenerator, MAX_KEY_VALIDATION_REQUESTS_PER_CALL>,

    pub note_hashes: BoundedVec<NoteHash, MAX_NOTE_HASHES_PER_CALL>,
    pub nullifiers: BoundedVec<Nullifier, MAX_NULLIFIERS_PER_CALL>,

    pub private_call_requests: BoundedVec<PrivateCallRequest, MAX_PRIVATE_CALL_STACK_LENGTH_PER_CALL>,
    pub public_call_requests: BoundedVec<Counted<PublicCallRequest>, MAX_ENQUEUED_CALLS_PER_CALL>,
    pub public_teardown_call_request: PublicCallRequest,
    pub l2_to_l1_msgs: BoundedVec<L2ToL1Message, MAX_L2_TO_L1_MSGS_PER_CALL>,
    // docs:end:private-context

    // Header of a block whose state is used during private execution (not the block the transaction is included in).
    pub historical_header: BlockHeader,

    pub private_logs: BoundedVec<PrivateLogData, MAX_PRIVATE_LOGS_PER_CALL>,
    pub contract_class_logs_hashes: BoundedVec<Counted<LogHash>, MAX_CONTRACT_CLASS_LOGS_PER_CALL>,

    // Contains the last key validation request for each key type. This is used to cache the last request and avoid
    // fetching the same request multiple times.
    // The index of the array corresponds to the key type (0 nullifier, 1 incoming, 2 outgoing, 3 tagging).
    pub last_key_validation_requests: [Option<KeyValidationRequest>; NUM_KEY_TYPES],
}

impl PrivateContext {
    pub fn new(inputs: PrivateContextInputs, args_hash: Field) -> PrivateContext {
        PrivateContext {
            inputs,
            side_effect_counter: inputs.start_side_effect_counter + 1,
            min_revertible_side_effect_counter: 0,
            is_fee_payer: false,
            args_hash,
            return_hash: 0,
            max_block_number: MaxBlockNumber::empty(),
            note_hash_read_requests: BoundedVec::new(),
            nullifier_read_requests: BoundedVec::new(),
            key_validation_requests_and_generators: BoundedVec::new(),
            note_hashes: BoundedVec::new(),
            nullifiers: BoundedVec::new(),
            historical_header: inputs.historical_header,
            private_call_requests: BoundedVec::new(),
            public_call_requests: BoundedVec::new(),
            public_teardown_call_request: PublicCallRequest::empty(),
            l2_to_l1_msgs: BoundedVec::new(),
            private_logs: BoundedVec::new(),
            contract_class_logs_hashes: BoundedVec::new(),
            last_key_validation_requests: [Option::none(); NUM_KEY_TYPES],
        }
    }

    pub fn msg_sender(self) -> AztecAddress {
        self.inputs.call_context.msg_sender
    }

    pub fn this_address(self) -> AztecAddress {
        self.inputs.call_context.contract_address
    }

    pub fn chain_id(self) -> Field {
        self.inputs.tx_context.chain_id
    }

    pub fn version(self) -> Field {
        self.inputs.tx_context.version
    }

    pub fn gas_settings(self) -> GasSettings {
        self.inputs.tx_context.gas_settings
    }

    pub fn selector(self) -> FunctionSelector {
        self.inputs.call_context.function_selector
    }

    pub fn get_args_hash(self) -> Field {
        self.args_hash
    }

    pub fn push_note_hash(&mut self, note_hash: Field) {
        self.note_hashes.push(NoteHash { value: note_hash, counter: self.next_counter() });
    }

    pub fn push_nullifier(&mut self, nullifier: Field) {
        notify_created_nullifier(nullifier);
        self.nullifiers.push(
            Nullifier { value: nullifier, note_hash: 0, counter: self.next_counter() },
        );
    }

    pub fn push_nullifier_for_note_hash(&mut self, nullifier: Field, nullified_note_hash: Field) {
        let nullifier_counter = self.next_counter();
        notify_nullified_note(nullifier, nullified_note_hash, nullifier_counter);
        self.nullifiers.push(
            Nullifier {
                value: nullifier,
                note_hash: nullified_note_hash,
                counter: nullifier_counter,
            },
        );
    }

    // Returns the header of a block whose state is used during private execution (not the block the transaction is
    // included in).
    pub fn get_block_header(self) -> BlockHeader {
        self.historical_header
    }

    // Returns the header of an arbitrary block whose block number is less than or equal to the block number
    // of historical header.
    pub fn get_block_header_at(self, block_number: u32) -> BlockHeader {
        get_block_header_at(block_number, self)
    }

    pub fn set_return_hash(&mut self, returns_hasher: ArgsHasher) {
        self.return_hash = returns_hasher.hash();
        execution_cache::store(returns_hasher.fields, self.return_hash);
    }

    pub fn finish(self) -> PrivateCircuitPublicInputs {
        PrivateCircuitPublicInputs {
            call_context: self.inputs.call_context,
            args_hash: self.args_hash,
            returns_hash: self.return_hash,
            min_revertible_side_effect_counter: self.min_revertible_side_effect_counter,
            is_fee_payer: self.is_fee_payer,
            max_block_number: self.max_block_number,
            note_hash_read_requests: self.note_hash_read_requests.storage(),
            nullifier_read_requests: self.nullifier_read_requests.storage(),
            key_validation_requests_and_generators: self
                .key_validation_requests_and_generators
                .storage(),
            note_hashes: self.note_hashes.storage(),
            nullifiers: self.nullifiers.storage(),
            private_call_requests: self.private_call_requests.storage(),
            public_call_requests: self.public_call_requests.storage(),
            public_teardown_call_request: self.public_teardown_call_request,
            l2_to_l1_msgs: self.l2_to_l1_msgs.storage(),
            start_side_effect_counter: self.inputs.start_side_effect_counter,
            end_side_effect_counter: self.side_effect_counter,
            private_logs: self.private_logs.storage(),
            contract_class_logs_hashes: self.contract_class_logs_hashes.storage(),
            historical_header: self.historical_header,
            tx_context: self.inputs.tx_context,
        }
    }

    pub fn set_as_fee_payer(&mut self) {
        dep::protocol_types::debug_log::debug_log_format(
            "Setting {0} as fee payer",
            [self.this_address().to_field()],
        );
        self.is_fee_payer = true;
    }

    pub fn end_setup(&mut self) {
        // dep::protocol_types::debug_log::debug_log_format(
        //     "Ending setup at counter {0}",
        //     [self.side_effect_counter as Field]
        // );
        self.min_revertible_side_effect_counter = self.side_effect_counter;
        notify_set_min_revertible_side_effect_counter(self.min_revertible_side_effect_counter);
    }

    // docs:start:max-block-number
    pub fn set_tx_max_block_number(&mut self, max_block_number: u32) {
        // docs:end:max-block-number
        self.max_block_number =
            MaxBlockNumber::min_with_u32(self.max_block_number, max_block_number);
    }

    pub fn push_note_hash_read_request(&mut self, note_hash: Field) {
        let side_effect = ReadRequest { value: note_hash, counter: self.next_counter() };
        self.note_hash_read_requests.push(side_effect);
    }

    pub fn push_nullifier_read_request(&mut self, nullifier: Field) {
        let request = ReadRequest { value: nullifier, counter: self.next_counter() };
        self.nullifier_read_requests.push(request);
    }

    pub fn request_nsk_app(&mut self, npk_m_hash: Field) -> Field {
        self.request_sk_app(npk_m_hash, NULLIFIER_INDEX)
    }

    pub fn request_ovsk_app(&mut self, ovpk_m_hash: Field) -> Field {
        self.request_sk_app(ovpk_m_hash, OUTGOING_INDEX)
    }

    fn request_sk_app(&mut self, pk_m_hash: Field, key_index: Field) -> Field {
        let cached_request = self.last_key_validation_requests[key_index as u32].unwrap_or(
            KeyValidationRequest::empty(),
        );

        if cached_request.pk_m.hash() == pk_m_hash {
            // We get a match so the cached request is the latest one
            cached_request.sk_app
        } else {
            // We didn't get a match meaning the cached result is stale
            // Typically we'd validate keys by showing that they are the preimage of \`pk_m_hash\`, but that'd require
            // the oracle returning the master secret keys, which could cause malicious contracts to leak it or learn
            // about secrets from other contracts. We therefore silo secret keys, and rely on the private kernel to
            // validate that we siloed secret key corresponds to correct siloing of the master secret key that hashes
            // to \`pk_m_hash\`.

            // Safety: Kernels verify that the key validation request is valid and below we verify that a request
            // for the correct public key has been received.
            let request = unsafe { get_key_validation_request(pk_m_hash, key_index) };
            assert_eq(request.pk_m.hash(), pk_m_hash, "Obtained invalid key validation request");

            self.key_validation_requests_and_generators.push(
                KeyValidationRequestAndGenerator {
                    request,
                    sk_app_generator: sk_generators[key_index as u32],
                },
            );
            self.last_key_validation_requests[key_index as u32] = Option::some(request);
            request.sk_app
        }
    }

    // docs:start:context_message_portal
    pub fn message_portal(&mut self, recipient: EthAddress, content: Field) {
        // docs:end:context_message_portal
        let message = L2ToL1Message { recipient, content, counter: self.next_counter() };
        self.l2_to_l1_msgs.push(message);
    }

    // docs:start:context_consume_l1_to_l2_message
    // docs:start:consume_l1_to_l2_message
    pub fn consume_l1_to_l2_message(
        &mut self,
        content: Field,
        secret: Field,
        sender: EthAddress,
        leaf_index: Field,
    ) {
        // docs:end:context_consume_l1_to_l2_message
        let nullifier = process_l1_to_l2_message(
            self.historical_header.state.l1_to_l2_message_tree.root,
            self.this_address(),
            sender,
            self.chain_id(),
            self.version(),
            content,
            secret,
            leaf_index,
        );

        // Push nullifier (and the "commitment" corresponding to this can be "empty")
        self.push_nullifier(nullifier)
    }
    // docs:end:consume_l1_to_l2_message

    pub fn emit_private_log(&mut self, log: [Field; PRIVATE_LOG_SIZE_IN_FIELDS], length: u32) {
        let counter = self.next_counter();
        let private_log =
            PrivateLogData { log: PrivateLog::new(log, length), note_hash_counter: 0, counter };
        self.private_logs.push(private_log);
    }

    pub fn emit_raw_note_log(
        &mut self,
        log: [Field; PRIVATE_LOG_SIZE_IN_FIELDS],
        length: u32,
        note_hash_counter: u32,
    ) {
        let counter = self.next_counter();
        let private_log =
            PrivateLogData { log: PrivateLog::new(log, length), note_hash_counter, counter };
        self.private_logs.push(private_log);
    }

    pub fn call_private_function<let ARGS_COUNT: u32>(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args: [Field; ARGS_COUNT],
    ) -> ReturnsHash {
        let args_hash = hash_args_array(args);
        execution_cache::store(args, args_hash);
        self.call_private_function_with_args_hash(
            contract_address,
            function_selector,
            args_hash,
            false,
        )
    }

    pub fn static_call_private_function<let ARGS_COUNT: u32>(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args: [Field; ARGS_COUNT],
    ) -> ReturnsHash {
        let args_hash = hash_args_array(args);
        execution_cache::store(args, args_hash);
        self.call_private_function_with_args_hash(
            contract_address,
            function_selector,
            args_hash,
            true,
        )
    }

    pub fn call_private_function_no_args(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
    ) -> ReturnsHash {
        self.call_private_function_with_args_hash(contract_address, function_selector, 0, false)
    }

    pub fn static_call_private_function_no_args(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
    ) -> ReturnsHash {
        self.call_private_function_with_args_hash(contract_address, function_selector, 0, true)
    }

    pub fn call_private_function_with_args_hash(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args_hash: Field,
        is_static_call: bool,
    ) -> ReturnsHash {
        let mut is_static_call = is_static_call | self.inputs.call_context.is_static_call;
        let start_side_effect_counter = self.side_effect_counter;

        // Safety: The oracle simulates the private call and returns the value of the side effects counter after
        // execution of the call (which means that end_side_effect_counter - start_side_effect_counter is
        // the number of side effects that took place), along with the hash of the return values. We validate these
        // by requesting a private kernel iteration in which the return values are constrained to hash
        // to \`returns_hash\` and the side effects counter to increment from start to end.
        let (end_side_effect_counter, returns_hash) = unsafe {
            call_private_function_internal(
                contract_address,
                function_selector,
                args_hash,
                start_side_effect_counter,
                is_static_call,
            )
        };

        self.private_call_requests.push(
            PrivateCallRequest {
                call_context: CallContext {
                    msg_sender: self.this_address(),
                    contract_address,
                    function_selector,
                    is_static_call,
                },
                args_hash,
                returns_hash,
                start_side_effect_counter,
                end_side_effect_counter,
            },
        );

        // TODO (fees) figure out why this crashes the prover and enable it
        // we need this in order to pay fees inside child call contexts
        // assert(
        //     (item.public_inputs.min_revertible_side_effect_counter == 0 as u32)
        //     | (item.public_inputs.min_revertible_side_effect_counter
        //         > self.min_revertible_side_effect_counter)
        // );
        // if item.public_inputs.min_revertible_side_effect_counter
        //     > self.min_revertible_side_effect_counter {
        //     self.min_revertible_side_effect_counter = item.public_inputs.min_revertible_side_effect_counter;
        // }
        self.side_effect_counter = end_side_effect_counter + 1;
        ReturnsHash::new(returns_hash)
    }

    pub fn call_public_function<let ARGS_COUNT: u32>(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args: [Field; ARGS_COUNT],
    ) {
        let calldata = array_concat([function_selector.to_field()], args);
        let calldata_hash = hash_calldata_array(calldata);
        execution_cache::store(calldata, calldata_hash);
        self.call_public_function_with_calldata_hash(contract_address, calldata_hash, false)
    }

    pub fn static_call_public_function<let ARGS_COUNT: u32>(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args: [Field; ARGS_COUNT],
    ) {
        let calldata = array_concat([function_selector.to_field()], args);
        let calldata_hash = hash_calldata_array(calldata);
        execution_cache::store(calldata, calldata_hash);
        self.call_public_function_with_calldata_hash(contract_address, calldata_hash, true)
    }

    pub fn call_public_function_no_args(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
    ) {
        let calldata_hash = hash_calldata_array([function_selector.to_field()]);
        self.call_public_function_with_calldata_hash(contract_address, calldata_hash, false)
    }

    pub fn static_call_public_function_no_args(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
    ) {
        let calldata_hash = hash_calldata_array([function_selector.to_field()]);
        self.call_public_function_with_calldata_hash(contract_address, calldata_hash, true)
    }

    pub fn call_public_function_with_calldata_hash(
        &mut self,
        contract_address: AztecAddress,
        calldata_hash: Field,
        is_static_call: bool,
    ) {
        let counter = self.next_counter();

        let mut is_static_call = is_static_call | self.inputs.call_context.is_static_call;

        notify_enqueued_public_function_call(
            contract_address,
            calldata_hash,
            counter,
            is_static_call,
        );

        let call_request = PublicCallRequest {
            msg_sender: self.this_address(),
            contract_address,
            is_static_call,
            calldata_hash,
        };

        self.public_call_requests.push(Counted::new(call_request, counter));
    }

    pub fn set_public_teardown_function<let ARGS_COUNT: u32>(
        &mut self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args: [Field; ARGS_COUNT],
    ) {
        let calldata = array_concat([function_selector.to_field()], args);
        let calldata_hash = hash_calldata_array(calldata);
        execution_cache::store(calldata, calldata_hash);
        self.set_public_teardown_function_with_calldata_hash(contract_address, calldata_hash, false)
    }

    pub fn set_public_teardown_function_with_calldata_hash(
        &mut self,
        contract_address: AztecAddress,
        calldata_hash: Field,
        is_static_call: bool,
    ) {
        let counter = self.next_counter();

        let mut is_static_call = is_static_call | self.inputs.call_context.is_static_call;

        notify_set_public_teardown_function_call(
            contract_address,
            calldata_hash,
            counter,
            is_static_call,
        );

        self.public_teardown_call_request = PublicCallRequest {
            msg_sender: self.this_address(),
            contract_address,
            is_static_call,
            calldata_hash,
        };
    }

    fn next_counter(&mut self) -> u32 {
        let counter = self.side_effect_counter;
        self.side_effect_counter += 1;
        counter
    }
}

impl Empty for PrivateContext {
    fn empty() -> Self {
        PrivateContext {
            inputs: PrivateContextInputs::empty(),
            side_effect_counter: 0 as u32,
            min_revertible_side_effect_counter: 0 as u32,
            is_fee_payer: false,
            args_hash: 0,
            return_hash: 0,
            max_block_number: MaxBlockNumber::empty(),
            note_hash_read_requests: BoundedVec::new(),
            nullifier_read_requests: BoundedVec::new(),
            key_validation_requests_and_generators: BoundedVec::new(),
            note_hashes: BoundedVec::new(),
            nullifiers: BoundedVec::new(),
            private_call_requests: BoundedVec::new(),
            public_call_requests: BoundedVec::new(),
            public_teardown_call_request: PublicCallRequest::empty(),
            l2_to_l1_msgs: BoundedVec::new(),
            historical_header: BlockHeader::empty(),
            private_logs: BoundedVec::new(),
            contract_class_logs_hashes: BoundedVec::new(),
            last_key_validation_requests: [Option::none(); NUM_KEY_TYPES],
        }
    }
}
`},71:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/utility_context.nr",source:`use crate::oracle::{
    execution::{get_block_number, get_chain_id, get_contract_address, get_version},
    storage::storage_read,
};
use dep::protocol_types::{address::AztecAddress, traits::Packable};

pub struct UtilityContext {
    block_number: u32,
    contract_address: AztecAddress,
    version: Field,
    chain_id: Field,
}

impl UtilityContext {
    pub unconstrained fn new() -> Self {
        // We could call these oracles on the getters instead of at creation, which makes sense given that they might
        // not even be accessed. However any performance gains are minimal, and we'd rather fail early if a user
        // incorrectly attempts to create a UtilityContext in an environment in which these oracles are not
        // available.
        let block_number = get_block_number();
        let contract_address = get_contract_address();
        let chain_id = get_chain_id();
        let version = get_version();
        Self { block_number, contract_address, version, chain_id }
    }

    pub unconstrained fn at(contract_address: AztecAddress) -> Self {
        let block_number = get_block_number();
        let chain_id = get_chain_id();
        let version = get_version();
        Self { block_number, contract_address, version, chain_id }
    }

    pub unconstrained fn at_historical(contract_address: AztecAddress, block_number: u32) -> Self {
        let chain_id = get_chain_id();
        let version = get_version();
        Self { block_number, contract_address, version, chain_id }
    }

    pub fn block_number(self) -> u32 {
        self.block_number
    }

    pub fn this_address(self) -> AztecAddress {
        self.contract_address
    }

    pub fn version(self) -> Field {
        self.version
    }

    pub fn chain_id(self) -> Field {
        self.chain_id
    }

    pub unconstrained fn raw_storage_read<let N: u32>(
        self: Self,
        storage_slot: Field,
    ) -> [Field; N] {
        storage_read(self.this_address(), storage_slot, self.block_number())
    }

    pub unconstrained fn storage_read<T, let N: u32>(self, storage_slot: Field) -> T
    where
        T: Packable<N>,
    {
        T::unpack(self.raw_storage_read(storage_slot))
    }
}
`},75:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/hash.nr",source:`use dep::protocol_types::{
    address::{AztecAddress, EthAddress},
    constants::{
        GENERATOR_INDEX__FUNCTION_ARGS, GENERATOR_INDEX__MESSAGE_NULLIFIER,
        GENERATOR_INDEX__PUBLIC_CALLDATA, GENERATOR_INDEX__SECRET_HASH,
    },
    hash::{poseidon2_hash_with_separator, poseidon2_hash_with_separator_slice, sha256_to_field},
    point::Point,
    traits::{Hash, ToField},
};

pub use dep::protocol_types::hash::{compute_siloed_nullifier, pedersen_hash};

pub fn pedersen_commitment<let N: u32>(inputs: [Field; N], hash_index: u32) -> Point {
    std::hash::pedersen_commitment_with_separator(inputs, hash_index)
}

pub fn compute_secret_hash(secret: Field) -> Field {
    poseidon2_hash_with_separator([secret], GENERATOR_INDEX__SECRET_HASH)
}

pub fn compute_l1_to_l2_message_hash(
    sender: EthAddress,
    chain_id: Field,
    recipient: AztecAddress,
    version: Field,
    content: Field,
    secret_hash: Field,
    leaf_index: Field,
) -> Field {
    let mut hash_bytes = [0 as u8; 224];
    let sender_bytes: [u8; 32] = sender.to_field().to_be_bytes();
    let chain_id_bytes: [u8; 32] = chain_id.to_be_bytes();
    let recipient_bytes: [u8; 32] = recipient.to_field().to_be_bytes();
    let version_bytes: [u8; 32] = version.to_be_bytes();
    let content_bytes: [u8; 32] = content.to_be_bytes();
    let secret_hash_bytes: [u8; 32] = secret_hash.to_be_bytes();
    let leaf_index_bytes: [u8; 32] = leaf_index.to_be_bytes();

    for i in 0..32 {
        hash_bytes[i] = sender_bytes[i];
        hash_bytes[i + 32] = chain_id_bytes[i];
        hash_bytes[i + 64] = recipient_bytes[i];
        hash_bytes[i + 96] = version_bytes[i];
        hash_bytes[i + 128] = content_bytes[i];
        hash_bytes[i + 160] = secret_hash_bytes[i];
        hash_bytes[i + 192] = leaf_index_bytes[i];
    }

    sha256_to_field(hash_bytes)
}

// The nullifier of a l1 to l2 message is the hash of the message salted with the secret
pub fn compute_l1_to_l2_message_nullifier(message_hash: Field, secret: Field) -> Field {
    poseidon2_hash_with_separator([message_hash, secret], GENERATOR_INDEX__MESSAGE_NULLIFIER)
}

pub struct ArgsHasher {
    pub fields: [Field],
}

impl Hash for ArgsHasher {
    fn hash(self) -> Field {
        hash_args(self.fields)
    }
}

impl ArgsHasher {
    pub fn new() -> Self {
        Self { fields: [] }
    }

    pub fn add(&mut self, field: Field) {
        self.fields = self.fields.push_back(field);
    }

    pub fn add_multiple<let N: u32>(&mut self, fields: [Field; N]) {
        for i in 0..N {
            self.fields = self.fields.push_back(fields[i]);
        }
    }
}

// Computes the hash of input arguments or return values for private functions, or for authwit creation.
pub fn hash_args_array<let N: u32>(args: [Field; N]) -> Field {
    if args.len() == 0 {
        0
    } else {
        poseidon2_hash_with_separator(args, GENERATOR_INDEX__FUNCTION_ARGS)
    }
}

// Same as \`hash_args_array\`, but takes a slice instead of an array.
pub fn hash_args(args: [Field]) -> Field {
    if args.len() == 0 {
        0
    } else {
        poseidon2_hash_with_separator_slice(args, GENERATOR_INDEX__FUNCTION_ARGS)
    }
}

// Computes the hash of calldata for public functions.
pub fn hash_calldata_array<let N: u32>(calldata: [Field; N]) -> Field {
    if calldata.len() == 0 {
        0
    } else {
        poseidon2_hash_with_separator(calldata, GENERATOR_INDEX__PUBLIC_CALLDATA)
    }
}

// Same as \`hash_calldata_array\`, but takes a slice instead of an array.
pub fn hash_calldata(calldata: [Field]) -> Field {
    if calldata.len() == 0 {
        0
    } else {
        poseidon2_hash_with_separator_slice(calldata, GENERATOR_INDEX__PUBLIC_CALLDATA)
    }
}

#[test]
unconstrained fn compute_var_args_hash() {
    let mut input = ArgsHasher::new();
    for i in 0..100 {
        input.add(i as Field);
    }
    let hash = input.hash();
    dep::std::println(hash);
    assert(hash == 0x19b0d74feb06ebde19edd85a28986c97063e84b3b351a8b666c7cac963ce655f);
}
`},104:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/functions/utils.nr",source:`use crate::macros::{
    functions::{abi_export::create_fn_abi_export, call_interface_stubs::stub_fn, stub_registry},
    notes::NOTES,
    utils::{
        add_to_hasher, fn_has_noinitcheck, get_fn_visibility, is_fn_contract_library_method,
        is_fn_initializer, is_fn_internal, is_fn_private, is_fn_public, is_fn_test, is_fn_utility,
        is_fn_view, modify_fn_body, module_has_initializer, module_has_storage,
    },
};
use protocol_types::meta::generate_serialize_to_fields;
use std::meta::type_of;

pub(crate) comptime fn transform_private(f: FunctionDefinition) -> Quoted {
    let fn_abi = create_fn_abi_export(f);
    let fn_stub = stub_fn(f);
    stub_registry::register(f.module(), fn_stub);

    // If a function is further modified as unconstrained, we throw an error
    if f.is_unconstrained() {
        let name = f.name();
        panic(
            f"Function {name} is annotated with #[private] but marked as unconstrained, remove unconstrained keyword",
        );
    }

    let module_has_initializer = module_has_initializer(f.module());
    let module_has_storage = module_has_storage(f.module());

    // Private functions undergo a lot of transformations from their Aztec.nr form into a circuit that can be fed to the
    // Private Kernel Circuit.
    // First we change the function signature so that it also receives \`PrivateContextInputs\`, which contain information
    // about the execution context (e.g. the caller).
    let original_params = f.parameters();
    f.set_parameters(&[(
        quote { inputs },
        quote { crate::context::inputs::private_context_inputs::PrivateContextInputs }.as_type(),
    )]
        .append(original_params));

    let mut body = f.body().as_block().unwrap();

    // The original params are hashed and passed to the \`context\` object, so that the kernel can verify we've received
    // the correct values.
    // TODO: Optimize args_hasher for small number of arguments
    let args_hasher_name = quote { args_hasher };
    let args_hasher = original_params.fold(
        quote {
            let mut $args_hasher_name = dep::aztec::hash::ArgsHasher::new();
        },
        |args_hasher, param: (Quoted, Type)| {
            let (name, typ) = param;
            let appended_arg = add_to_hasher(args_hasher_name, name, typ);
            quote {
                $args_hasher
                $appended_arg
            }
        },
    );

    let context_creation = quote {
        let mut context = dep::aztec::context::private_context::PrivateContext::new(inputs, dep::aztec::protocol_types::traits::Hash::hash($args_hasher_name));
    };

    // Modifications introduced by the different marker attributes.
    let internal_check = if is_fn_internal(f) {
        create_internal_check(f)
    } else {
        quote {}
    };

    let view_check = if is_fn_view(f) {
        create_view_check(f)
    } else {
        quote {}
    };

    let (assert_initializer, mark_as_initialized) = if is_fn_initializer(f) {
        (create_assert_correct_initializer_args(f), create_mark_as_initialized(f))
    } else {
        (quote {}, quote {})
    };

    let storage_init = if module_has_storage {
        quote {
            // Some functions don't access storage, but it'd be quite difficult to only inject this variable if it is
            // referenced. We instead ignore 'unused variable' warnings for it.
            #[allow(unused_variables)]
            let storage = Storage::init(&mut context);
        }
    } else {
        quote {}
    };

    // Initialization checks are not included in contracts that don't have initializers.
    let init_check = if module_has_initializer & !is_fn_initializer(f) & !fn_has_noinitcheck(f) {
        create_init_check(f)
    } else {
        quote {}
    };

    // All private functions perform message discovery, since they may need to access notes. This is slightly
    // inefficient and could be improved by only doing it once we actually attempt to read any.
    let message_discovery_call = if NOTES.len() > 0 {
        create_message_discovery_call()
    } else {
        quote {}
    };

    // Finally, we need to change the return type to be \`PrivateCircuitPublicInputs\`, which is what the Private Kernel
    // circuit expects.
    let return_value_var_name = quote { macro__returned__values };

    let return_value_type = f.return_type();
    let return_value = if body.len() == 0 {
        quote {}
    } else if return_value_type != type_of(()) {
        // The original return value is passed to a second args hasher which the context receives.
        let (body_without_return, last_body_expr) = body.pop_back();
        let return_value = last_body_expr.quoted();
        let return_value_assignment =
            quote { let $return_value_var_name: $return_value_type = $return_value; };
        let return_hasher_name = quote { return_hasher };
        let return_value_into_hasher =
            add_to_hasher(return_hasher_name, return_value_var_name, return_value_type);

        body = body_without_return;

        quote {
            let mut $return_hasher_name = dep::aztec::hash::ArgsHasher::new();
            $return_value_assignment
            $return_value_into_hasher
            context.set_return_hash($return_hasher_name);
        }
    } else {
        let (body_without_return, last_body_expr) = body.pop_back();
        if !last_body_expr.has_semicolon()
            & last_body_expr.as_for().is_none()
            & last_body_expr.as_assert().is_none()
            & last_body_expr.as_for_range().is_none()
            & last_body_expr.as_assert_eq().is_none()
            & last_body_expr.as_let().is_none() {
            let unused_return_value_name = f"_{return_value_var_name}".quoted_contents();
            body = body_without_return.push_back(
                quote { let $unused_return_value_name = $last_body_expr; }.as_expr().unwrap(),
            );
        }
        quote {}
    };

    let context_finish = quote { context.finish() };

    let to_prepend = quote {
        $args_hasher
        $context_creation
        $assert_initializer
        $init_check
        $internal_check
        $view_check
        $storage_init
        $message_discovery_call
    };

    let to_append = quote {
        $return_value
        $mark_as_initialized
        $context_finish
    };
    let modified_body = modify_fn_body(body, to_prepend, to_append);
    f.set_body(modified_body);
    f.set_return_type(
        quote { dep::protocol_types::abis::private_circuit_public_inputs::PrivateCircuitPublicInputs }
            .as_type(),
    );
    f.set_return_data();

    fn_abi
}

pub(crate) comptime fn transform_public(f: FunctionDefinition) -> Quoted {
    let fn_abi = create_fn_abi_export(f);
    let fn_stub = stub_fn(f);
    stub_registry::register(f.module(), fn_stub);

    // If a function is further modified as unconstrained, we throw an error
    if f.is_unconstrained() {
        let name = f.name();
        panic(
            f"Function {name} is annotated with #[public] but marked as unconstrained, remove unconstrained keyword",
        );
    }

    let module_has_initializer = module_has_initializer(f.module());
    let module_has_storage = module_has_storage(f.module());

    // Public functions undergo a lot of transformations from their Aztec.nr form.
    let original_params = f.parameters();
    let args_len = original_params
        .map(|(name, typ): (Quoted, Type)| {
            generate_serialize_to_fields(name, typ, false).0.len()
        })
        .fold(0, |acc: u32, val: u32| acc + val);

    // Unlike in the private case, in public the \`context\` does not need to receive the hash of the original params.
    let context_creation = quote {
        let mut context = dep::aztec::context::public_context::PublicContext::new(|| {
        // We start from 1 because we skip the selector for the dispatch function.
        let serialized_args : [Field; $args_len] = dep::aztec::context::public_context::calldata_copy(1, $args_len);
        dep::aztec::hash::hash_args_array(serialized_args)
        });
    };

    // Modifications introduced by the different marker attributes.
    let internal_check = if is_fn_internal(f) {
        create_internal_check(f)
    } else {
        quote {}
    };

    let view_check = if is_fn_view(f) {
        create_view_check(f)
    } else {
        quote {}
    };

    let (assert_initializer, mark_as_initialized) = if is_fn_initializer(f) {
        (create_assert_correct_initializer_args(f), create_mark_as_initialized(f))
    } else {
        (quote {}, quote {})
    };

    let storage_init = if module_has_storage {
        // Some functions don't access storage, but it'd be quite difficult to only inject this variable if it is
        // referenced. We instead ignore 'unused variable' warnings for it.
        quote {
            #[allow(unused_variables)]
            let storage = Storage::init(&mut context);
        }
    } else {
        quote {}
    };

    // Initialization checks are not included in contracts that don't have initializers.
    let init_check = if module_has_initializer & !fn_has_noinitcheck(f) & !is_fn_initializer(f) {
        create_init_check(f)
    } else {
        quote {}
    };

    let to_prepend = quote {
        $context_creation
        $assert_initializer
        $init_check
        $internal_check
        $view_check
        $storage_init
    };

    let to_append = quote {
        $mark_as_initialized
    };

    let body = f.body().as_block().unwrap();
    let modified_body = modify_fn_body(body, to_prepend, to_append);
    f.set_body(modified_body);

    // All public functions are automatically made unconstrained, even if they were not marked as such. This is because
    // instead of compiling into a circuit, they will compile to bytecode that will be later transpiled into AVM
    // bytecode.
    f.set_unconstrained(true);
    f.set_return_public(true);

    fn_abi
}

pub(crate) comptime fn transform_utility(f: FunctionDefinition) -> Quoted {
    let fn_abi = create_fn_abi_export(f);
    let fn_stub = stub_fn(f);
    stub_registry::register(f.module(), fn_stub);

    // Check if function is marked as unconstrained
    if !f.is_unconstrained() {
        let name = f.name();
        panic(
            f"Function {name} is annotated with #[utility] but not marked as unconstrained, add unconstrained keyword",
        );
    }

    // Create utility context
    let context_creation =
        quote { let mut context = dep::aztec::context::utility_context::UtilityContext::new(); };
    let module_has_storage = module_has_storage(f.module());

    // Initialize Storage if module has storage
    let storage_init = if module_has_storage {
        quote {
            // Some functions don't access storage, but it'd be quite difficult to only inject this variable if it is
            // referenced. We instead ignore 'unused variable' warnings for it.
            #[allow(unused_variables)]
            let storage = Storage::init(context);
        }
    } else {
        quote {}
    };

    // All utility functions perform message discovery, since they may need to access private notes that would be
    // found during this process. This is slightly inefficient and could be improved by only doing it once we actually
    // attempt to read any.
    let message_discovery_call = if NOTES.len() > 0 {
        create_message_discovery_call()
    } else {
        quote {}
    };

    // Inject context creation, storage initialization, and message discovery call at the beginning of the function
    // body.
    let to_prepend = quote {
        $context_creation
        $storage_init
        $message_discovery_call
    };
    let body = f.body().as_block().unwrap();
    let modified_body = modify_fn_body(body, to_prepend, quote {});
    f.set_body(modified_body);

    f.set_return_public(true);

    fn_abi
}

comptime fn create_internal_check(f: FunctionDefinition) -> Quoted {
    let name = f.name();
    let assertion_message = f"Function {name} can only be called internally";
    quote { assert(context.msg_sender() == context.this_address(), $assertion_message); }
}

comptime fn create_view_check(f: FunctionDefinition) -> Quoted {
    let name = f.name();
    let assertion_message = f"Function {name} can only be called statically";
    if is_fn_private(f) {
        // Here \`context\` is of type context::PrivateContext
        quote { assert(context.inputs.call_context.is_static_call == true, $assertion_message); }
    } else {
        // Here \`context\` is of type context::PublicContext
        quote { assert(context.is_static_call(), $assertion_message); }
    }
}

comptime fn create_assert_correct_initializer_args(f: FunctionDefinition) -> Quoted {
    let fn_visibility = get_fn_visibility(f);
    f"dep::aztec::macros::functions::initialization_utils::assert_initialization_matches_address_preimage_{fn_visibility}(context);"
        .quoted_contents()
}

comptime fn create_mark_as_initialized(f: FunctionDefinition) -> Quoted {
    let fn_visibility = get_fn_visibility(f);
    f"dep::aztec::macros::functions::initialization_utils::mark_as_initialized_{fn_visibility}(&mut context);"
        .quoted_contents()
}

comptime fn create_init_check(f: FunctionDefinition) -> Quoted {
    let fn_visibility = get_fn_visibility(f);
    f"dep::aztec::macros::functions::initialization_utils::assert_is_initialized_{fn_visibility}(&mut context);"
        .quoted_contents()
}

/// Injects a call to \`aztec::messages::discovery::discover_new_messages\`, causing for new notes to be added to PXE and made
/// available for the current execution.
pub(crate) comptime fn create_message_discovery_call() -> Quoted {
    quote {
        /// Safety: message discovery returns nothing and is performed solely for its side-effects. It is therefore
        /// always safe to call.
        unsafe {
            dep::aztec::messages::discovery::discover_new_messages(
                context.this_address(),
                _compute_note_hash_and_nullifier,
            );
        };
    }
}

/// Checks if each function in the module is marked with either #[private], #[public], #[utility],
/// #[contract_library_method], or #[test]. Non-macroified functions are not allowed in contracts.
pub(crate) comptime fn check_each_fn_macroified(m: Module) {
    for f in m.functions() {
        let name = f.name();
        if !is_fn_private(f)
            & !is_fn_public(f)
            & !is_fn_utility(f)
            & !is_fn_contract_library_method(f)
            & !is_fn_test(f) {
            panic(
                f"Function {name} must be marked as either #[private], #[public], #[utility], #[contract_library_method], or #[test]",
            );
        }
    }
}
`},143:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/call_private_function.nr",source:`use dep::protocol_types::{
    abis::function_selector::FunctionSelector, address::AztecAddress, utils::reader::Reader,
};

#[oracle(callPrivateFunction)]
unconstrained fn call_private_function_oracle(
    _contract_address: AztecAddress,
    _function_selector: FunctionSelector,
    _args_hash: Field,
    _start_side_effect_counter: u32,
    _is_static_call: bool,
) -> [Field; 2] {}

pub unconstrained fn call_private_function_internal(
    contract_address: AztecAddress,
    function_selector: FunctionSelector,
    args_hash: Field,
    start_side_effect_counter: u32,
    is_static_call: bool,
) -> (u32, Field) {
    let fields = call_private_function_oracle(
        contract_address,
        function_selector,
        args_hash,
        start_side_effect_counter,
        is_static_call,
    );

    let mut reader = Reader::new(fields);
    let end_side_effect_counter = reader.read_u32();
    let returns_hash = reader.read();

    (end_side_effect_counter, returns_hash)
}
`},145:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/enqueue_public_function_call.nr",source:`use dep::protocol_types::address::AztecAddress;

#[oracle(notifyEnqueuedPublicFunctionCall)]
unconstrained fn notify_enqueued_public_function_call_oracle(
    _contract_address: AztecAddress,
    _calldata_hash: Field,
    _side_effect_counter: u32,
    _is_static_call: bool,
) {}

unconstrained fn notify_enqueued_public_function_call_wrapper(
    contract_address: AztecAddress,
    calldata_hash: Field,
    side_effect_counter: u32,
    is_static_call: bool,
) {
    notify_enqueued_public_function_call_oracle(
        contract_address,
        calldata_hash,
        side_effect_counter,
        is_static_call,
    )
}

pub fn notify_enqueued_public_function_call(
    contract_address: AztecAddress,
    calldata_hash: Field,
    side_effect_counter: u32,
    is_static_call: bool,
) {
    // Safety: Notifies the simulator that a public call has been enqueued, allowing it to prepare hints for the AVM to process this call.
    unsafe {
        notify_enqueued_public_function_call_wrapper(
            contract_address,
            calldata_hash,
            side_effect_counter,
            is_static_call,
        )
    }
}

#[oracle(notifySetPublicTeardownFunctionCall)]
unconstrained fn notify_set_public_teardown_function_call_oracle(
    _contract_address: AztecAddress,
    _calldata_hash: Field,
    _side_effect_counter: u32,
    _is_static_call: bool,
) {}

unconstrained fn notify_set_public_teardown_function_call_wrapper(
    contract_address: AztecAddress,
    calldata_hash: Field,
    side_effect_counter: u32,
    is_static_call: bool,
) {
    notify_set_public_teardown_function_call_oracle(
        contract_address,
        calldata_hash,
        side_effect_counter,
        is_static_call,
    )
}

pub fn notify_set_public_teardown_function_call(
    contract_address: AztecAddress,
    calldata_hash: Field,
    side_effect_counter: u32,
    is_static_call: bool,
) {
    // Safety: Notifies the simulator that a teardown call has been set, allowing it to prepare hints for the AVM to process this call.
    unsafe {
        notify_set_public_teardown_function_call_wrapper(
            contract_address,
            calldata_hash,
            side_effect_counter,
            is_static_call,
        )
    }
}

pub fn notify_set_min_revertible_side_effect_counter(counter: u32) {
    // Safety: This oracle call returns nothing: we only call it for its side effects. It is therefore always safe
    // to call.
    unsafe { notify_set_min_revertible_side_effect_counter_oracle_wrapper(counter) };
}

pub unconstrained fn notify_set_min_revertible_side_effect_counter_oracle_wrapper(counter: u32) {
    notify_set_min_revertible_side_effect_counter_oracle(counter);
}

#[oracle(notifySetMinRevertibleSideEffectCounter)]
unconstrained fn notify_set_min_revertible_side_effect_counter_oracle(_counter: u32) {}
`},146:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/execution.nr",source:`use dep::protocol_types::address::AztecAddress;

#[oracle(getContractAddress)]
unconstrained fn get_contract_address_oracle() -> AztecAddress {}

#[oracle(getBlockNumber)]
unconstrained fn get_block_number_oracle() -> u32 {}

#[oracle(getChainId)]
unconstrained fn get_chain_id_oracle() -> Field {}

#[oracle(getVersion)]
unconstrained fn get_version_oracle() -> Field {}

pub unconstrained fn get_contract_address() -> AztecAddress {
    get_contract_address_oracle()
}

pub unconstrained fn get_block_number() -> u32 {
    get_block_number_oracle()
}

pub unconstrained fn get_chain_id() -> Field {
    get_chain_id_oracle()
}

pub unconstrained fn get_version() -> Field {
    get_version_oracle()
}
`},271:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/address/aztec_address.nr",source:`use crate::{
    address::{
        partial_address::PartialAddress, salted_initialization_hash::SaltedInitializationHash,
    },
    constants::{
        AZTEC_ADDRESS_LENGTH, GENERATOR_INDEX__CONTRACT_ADDRESS_V1, MAX_FIELD_VALUE,
        MAX_PROTOCOL_CONTRACTS,
    },
    contract_class_id::ContractClassId,
    hash::poseidon2_hash_with_separator,
    public_keys::{IvpkM, NpkM, OvpkM, PublicKeys, ToPoint, TpkM},
    traits::{Deserialize, Empty, FromField, Packable, Serialize, ToField},
    utils::field::{pow, sqrt},
};

// We do below because \`use crate::point::Point;\` does not work
use dep::std::embedded_curve_ops::EmbeddedCurvePoint as Point;

use crate::public_keys::AddressPoint;
use std::{
    embedded_curve_ops::{EmbeddedCurveScalar, fixed_base_scalar_mul as derive_public_key},
    ops::Add,
};

// Aztec address
pub struct AztecAddress {
    pub inner: Field,
}

impl Eq for AztecAddress {
    fn eq(self, other: Self) -> bool {
        self.to_field() == other.to_field()
    }
}

impl Empty for AztecAddress {
    fn empty() -> Self {
        Self { inner: 0 }
    }
}

impl ToField for AztecAddress {
    fn to_field(self) -> Field {
        self.inner
    }
}

impl FromField for AztecAddress {
    fn from_field(value: Field) -> AztecAddress {
        AztecAddress { inner: value }
    }
}

impl Serialize<AZTEC_ADDRESS_LENGTH> for AztecAddress {
    fn serialize(self: Self) -> [Field; AZTEC_ADDRESS_LENGTH] {
        [self.to_field()]
    }
}

impl Deserialize<AZTEC_ADDRESS_LENGTH> for AztecAddress {
    fn deserialize(fields: [Field; AZTEC_ADDRESS_LENGTH]) -> Self {
        FromField::from_field(fields[0])
    }
}

/// We implement the Packable trait for AztecAddress because it can be stored in contract's storage (and there
/// the implementation of Packable is required).
impl Packable<AZTEC_ADDRESS_LENGTH> for AztecAddress {
    fn pack(self) -> [Field; AZTEC_ADDRESS_LENGTH] {
        self.serialize()
    }

    fn unpack(fields: [Field; AZTEC_ADDRESS_LENGTH]) -> Self {
        Self::deserialize(fields)
    }
}

impl AztecAddress {
    pub fn zero() -> Self {
        Self { inner: 0 }
    }

    pub fn to_address_point(self) -> AddressPoint {
        // We compute the address point by taking our address, setting it to x, and then solving for y in the
        // equation which defines our bn curve:
        // y^2 = x^3 - 17; x = address
        let x = self.inner;
        let y_squared = pow(x, 3) - 17;

        // TODO (#8970): Handle cases where we cannot recover a point from an address
        let mut y = sqrt(y_squared);

        // If we get a negative y coordinate (any y where y > MAX_FIELD_VALUE / 2), we pin it to the
        // positive one (any value where y <= MAX_FIELD_VALUE / 2) by subtracting it from the Field modulus
        // note: The field modulus is MAX_FIELD_VALUE + 1
        if (!(y.lt(MAX_FIELD_VALUE / 2) | y.eq(MAX_FIELD_VALUE / 2))) {
            y = (MAX_FIELD_VALUE + 1) - y;
        }

        AddressPoint { inner: Point { x: self.inner, y, is_infinite: false } }
    }

    pub fn compute(public_keys: PublicKeys, partial_address: PartialAddress) -> AztecAddress {
        let public_keys_hash = public_keys.hash();

        let pre_address = poseidon2_hash_with_separator(
            [public_keys_hash.to_field(), partial_address.to_field()],
            GENERATOR_INDEX__CONTRACT_ADDRESS_V1,
        );

        let address_point = derive_public_key(EmbeddedCurveScalar::from_field(pre_address)).add(
            public_keys.ivpk_m.to_point(),
        );

        // Note that our address is only the x-coordinate of the full address_point. This is okay because when people want to encrypt something and send it to us
        // they can recover our full point using the x-coordinate (our address itself). To do this, they recompute the y-coordinate according to the equation y^2 = x^3 - 17.
        // When they do this, they may get a positive y-coordinate (a value that is less than or equal to MAX_FIELD_VALUE / 2) or
        // a negative y-coordinate (a value that is more than MAX_FIELD_VALUE), and we cannot dictate which one they get and hence the recovered point may sometimes be different than the one
        // our secret can decrypt. Regardless though, they should and will always encrypt using point with the positive y-coordinate by convention.
        // This ensures that everyone encrypts to the same point given an arbitrary x-coordinate (address). This is allowed because even though our original point may not have a positive y-coordinate,
        // with our original secret, we will be able to derive the secret to the point with the flipped (and now positive) y-coordinate that everyone encrypts to.
        AztecAddress::from_field(address_point.x)
    }

    pub fn compute_from_class_id(
        contract_class_id: ContractClassId,
        salted_initialization_hash: SaltedInitializationHash,
        public_keys: PublicKeys,
    ) -> Self {
        let partial_address = PartialAddress::compute_from_salted_initialization_hash(
            contract_class_id,
            salted_initialization_hash,
        );

        AztecAddress::compute(public_keys, partial_address)
    }

    pub fn is_protocol_contract(self) -> bool {
        self.inner.lt(MAX_PROTOCOL_CONTRACTS as Field)
    }

    pub fn is_zero(self) -> bool {
        self.inner == 0
    }

    pub fn assert_is_zero(self) {
        assert(self.to_field() == 0);
    }
}

#[test]
fn compute_address_from_partial_and_pub_keys() {
    let public_keys = PublicKeys {
        npk_m: NpkM {
            inner: Point {
                x: 0x22f7fcddfa3ce3e8f0cc8e82d7b94cdd740afa3e77f8e4a63ea78a239432dcab,
                y: 0x0471657de2b6216ade6c506d28fbc22ba8b8ed95c871ad9f3e3984e90d9723a7,
                is_infinite: false,
            },
        },
        ivpk_m: IvpkM {
            inner: Point {
                x: 0x111223493147f6785514b1c195bb37a2589f22a6596d30bb2bb145fdc9ca8f1e,
                y: 0x273bbffd678edce8fe30e0deafc4f66d58357c06fd4a820285294b9746c3be95,
                is_infinite: false,
            },
        },
        ovpk_m: OvpkM {
            inner: Point {
                x: 0x09115c96e962322ffed6522f57194627136b8d03ac7469109707f5e44190c484,
                y: 0x0c49773308a13d740a7f0d4f0e6163b02c5a408b6f965856b6a491002d073d5b,
                is_infinite: false,
            },
        },
        tpk_m: TpkM {
            inner: Point {
                x: 0x00d3d81beb009873eb7116327cf47c612d5758ef083d4fda78e9b63980b2a762,
                y: 0x2f567d22d2b02fe1f4ad42db9d58a36afd1983e7e2909d1cab61cafedad6193a,
                is_infinite: false,
            },
        },
    };

    let partial_address = PartialAddress::from_field(
        0x0a7c585381b10f4666044266a02405bf6e01fa564c8517d4ad5823493abd31de,
    );

    let address = AztecAddress::compute(public_keys, partial_address);

    // The following value was generated by \`derivation.test.ts\`.
    // --> Run the test with AZTEC_GENERATE_TEST_DATA=1 flag to update test data.
    let expected_computed_address_from_partial_and_pubkeys =
        0x24e4646f58b9fbe7d38e317db8d5636c423fbbdfbe119fc190fe9c64747e0c62;
    assert(address.to_field() == expected_computed_address_from_partial_and_pubkeys);
}

#[test]
fn compute_preaddress_from_partial_and_pub_keys() {
    let pre_address = poseidon2_hash_with_separator([1, 2], GENERATOR_INDEX__CONTRACT_ADDRESS_V1);
    let expected_computed_preaddress_from_partial_and_pubkey =
        0x23ce9be3fa3c846b0f9245cc796902e731d04f086e8a42473bb29e405fc98075;
    assert(pre_address == expected_computed_preaddress_from_partial_and_pubkey);
}

#[test]
fn from_field_to_field() {
    let address = AztecAddress { inner: 37 };
    assert_eq(FromField::from_field(address.to_field()), address);
}

#[test]
fn serde() {
    let address = AztecAddress { inner: 37 };
    assert_eq(Deserialize::deserialize(address.serialize()), address);
}
`},289:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/hash.nr",source:`use crate::{
    abis::{
        contract_class_function_leaf_preimage::ContractClassFunctionLeafPreimage,
        contract_class_log::ContractClassLog,
        function_selector::FunctionSelector,
        note_hash::ScopedNoteHash,
        nullifier::ScopedNullifier,
        private_log::{PrivateLog, PrivateLogData},
        side_effect::{OrderedValue, scoped::Scoped},
    },
    address::{AztecAddress, EthAddress},
    constants::{
        CONTRACT_CLASS_LOG_SIZE_IN_FIELDS, FUNCTION_TREE_HEIGHT, GENERATOR_INDEX__NOTE_HASH_NONCE,
        GENERATOR_INDEX__OUTER_NULLIFIER, GENERATOR_INDEX__SILOED_NOTE_HASH,
        GENERATOR_INDEX__UNIQUE_NOTE_HASH, TWO_POW_64,
    },
    merkle_tree::root::root_from_sibling_path,
    messaging::l2_to_l1_message::{L2ToL1Message, ScopedL2ToL1Message},
    poseidon2::Poseidon2Sponge,
    traits::{FromField, Hash, ToField},
    utils::{arrays::array_concat, field::{field_from_bytes, field_from_bytes_32_trunc}},
};

pub fn sha256_to_field<let N: u32>(bytes_to_hash: [u8; N]) -> Field {
    let sha256_hashed = sha256::digest(bytes_to_hash);
    let hash_in_a_field = field_from_bytes_32_trunc(sha256_hashed);

    hash_in_a_field
}

pub fn private_functions_root_from_siblings(
    selector: FunctionSelector,
    vk_hash: Field,
    function_leaf_index: Field,
    function_leaf_sibling_path: [Field; FUNCTION_TREE_HEIGHT],
) -> Field {
    let function_leaf_preimage = ContractClassFunctionLeafPreimage { selector, vk_hash };
    let function_leaf = function_leaf_preimage.hash();
    root_from_sibling_path(
        function_leaf,
        function_leaf_index,
        function_leaf_sibling_path,
    )
}

pub fn compute_note_hash_nonce(first_nullifier_in_tx: Field, note_index_in_tx: u32) -> Field {
    // Hashing the first nullifier with note index in tx is guaranteed to be unique (because all nullifiers are also
    // unique).
    poseidon2_hash_with_separator(
        [first_nullifier_in_tx, note_index_in_tx as Field],
        GENERATOR_INDEX__NOTE_HASH_NONCE,
    )
}

pub fn compute_unique_note_hash(nonce: Field, siloed_note_hash: Field) -> Field {
    let inputs = [nonce, siloed_note_hash];
    poseidon2_hash_with_separator(inputs, GENERATOR_INDEX__UNIQUE_NOTE_HASH)
}

pub fn compute_siloed_note_hash(app: AztecAddress, note_hash: Field) -> Field {
    poseidon2_hash_with_separator(
        [app.to_field(), note_hash],
        GENERATOR_INDEX__SILOED_NOTE_HASH,
    )
}

/// Computes unique note hashes from siloed note hashes
pub fn compute_unique_siloed_note_hash(
    siloed_note_hash: Field,
    first_nullifier: Field,
    note_index_in_tx: u32,
) -> Field {
    if siloed_note_hash == 0 {
        0
    } else {
        let nonce = compute_note_hash_nonce(first_nullifier, note_index_in_tx);
        compute_unique_note_hash(nonce, siloed_note_hash)
    }
}

/// Siloing in the context of Aztec refers to the process of hashing a note hash with a contract address (this way
/// the note hash is scoped to a specific contract). This is used to prevent intermingling of notes between contracts.
pub fn silo_note_hash(note_hash: ScopedNoteHash) -> Field {
    if note_hash.contract_address.is_zero() {
        0
    } else {
        compute_siloed_note_hash(note_hash.contract_address, note_hash.value())
    }
}

pub fn compute_siloed_nullifier(app: AztecAddress, nullifier: Field) -> Field {
    poseidon2_hash_with_separator(
        [app.to_field(), nullifier],
        GENERATOR_INDEX__OUTER_NULLIFIER,
    )
}

pub fn silo_nullifier(nullifier: ScopedNullifier) -> Field {
    if nullifier.contract_address.is_zero() {
        nullifier.value() // Return value instead of 0 because the first nullifier's contract address is zero.
    } else {
        compute_siloed_nullifier(nullifier.contract_address, nullifier.value())
    }
}

pub fn compute_siloed_private_log_field(contract_address: AztecAddress, field: Field) -> Field {
    poseidon2_hash([contract_address.to_field(), field])
}

pub fn silo_private_log(private_log: Scoped<PrivateLogData>) -> PrivateLog {
    if private_log.contract_address.is_zero() {
        private_log.inner.log
    } else {
        let mut fields = private_log.inner.log.fields;
        fields[0] = compute_siloed_private_log_field(private_log.contract_address, fields[0]);
        PrivateLog::new(fields, private_log.inner.log.length)
    }
}

pub fn compute_siloed_contract_class_log_field(
    contract_address: AztecAddress,
    first_field: Field,
) -> Field {
    poseidon2_hash([contract_address.to_field(), first_field])
}

pub fn silo_contract_class_log(contract_class_log: ContractClassLog) -> ContractClassLog {
    if contract_class_log.contract_address.is_zero() {
        contract_class_log
    } else {
        let mut log = contract_class_log;
        log.log.fields[0] = compute_siloed_contract_class_log_field(
            contract_class_log.contract_address,
            log.log.fields[0],
        );
        log
    }
}

pub fn compute_contract_class_log_hash(log: [Field; CONTRACT_CLASS_LOG_SIZE_IN_FIELDS]) -> Field {
    poseidon2_hash(log)
}

pub fn merkle_hash(left: Field, right: Field) -> Field {
    poseidon2_hash([left, right])
}

pub fn compute_l2_to_l1_hash(
    contract_address: AztecAddress,
    recipient: EthAddress,
    content: Field,
    rollup_version_id: Field,
    chain_id: Field,
) -> Field {
    let mut bytes: [u8; 160] = std::mem::zeroed();

    let inputs =
        [contract_address.to_field(), rollup_version_id, recipient.to_field(), chain_id, content];
    for i in 0..5 {
        // TODO are bytes be in fr.to_buffer() ?
        let item_bytes: [u8; 32] = inputs[i].to_be_bytes();
        for j in 0..32 {
            bytes[32 * i + j] = item_bytes[j];
        }
    }

    sha256_to_field(bytes)
}

pub fn silo_l2_to_l1_message(
    msg: ScopedL2ToL1Message,
    rollup_version_id: Field,
    chain_id: Field,
) -> Field {
    if msg.contract_address.is_zero() {
        0
    } else {
        compute_l2_to_l1_hash(
            msg.contract_address,
            msg.message.recipient,
            msg.message.content,
            rollup_version_id,
            chain_id,
        )
    }
}

// Computes sha256 hash of 2 input hashes.
//
// NB: This method now takes in two 31 byte fields - it assumes that any input
// is the result of a sha_to_field hash and => is truncated
//
// TODO(Jan and David): This is used for the encrypted_log hashes.
// Can we check to see if we can just use hash_to_field or pedersen_compress here?
//
pub fn accumulate_sha256(input: [Field; 2]) -> Field {
    // This is a note about the cpp code, since it takes an array of Fields
    // instead of a u128.
    // 4 Field elements when converted to bytes will usually
    // occupy 4 * 32 = 128 bytes.
    // However, this function is making the assumption that each Field
    // only occupies 128 bits.
    //
    // TODO(David): This does not seem to be getting guaranteed anywhere in the code?
    // Concatentate two fields into 32x2 = 64 bytes
    // accumulate_sha256 assumes that the inputs are pre-truncated 31 byte numbers
    let mut hash_input_flattened = [0; 64];
    for offset in 0..input.len() {
        let input_as_bytes: [u8; 32] = input[offset].to_be_bytes();
        for byte_index in 0..32 {
            hash_input_flattened[offset * 32 + byte_index] = input_as_bytes[byte_index];
        }
    }

    sha256_to_field(hash_input_flattened)
}

pub fn verification_key_hash<let N: u32>(key: [Field; N]) -> Field {
    crate::hash::poseidon2_hash(key)
}

#[inline_always]
pub fn pedersen_hash<let N: u32>(inputs: [Field; N], hash_index: u32) -> Field {
    std::hash::pedersen_hash_with_separator(inputs, hash_index)
}

pub fn poseidon2_hash<let N: u32>(inputs: [Field; N]) -> Field {
    poseidon::poseidon2::Poseidon2::hash(inputs, N)
}

#[no_predicates]
pub fn poseidon2_hash_with_separator<let N: u32, T>(inputs: [Field; N], separator: T) -> Field
where
    T: ToField,
{
    let inputs_with_separator = array_concat([separator.to_field()], inputs);
    poseidon2_hash(inputs_with_separator)
}

// Performs a fixed length hash with a subarray of the given input.
// Useful for SpongeBlob in which we aborb M things and want to check it vs a hash of M elts of an N-len array.
// Using stdlib poseidon, this will always absorb an extra 1 as a 'variable' hash, and not match spongeblob.squeeze()
// or any ts implementation. Also checks that any remaining elts not hashed are empty.
#[no_predicates]
pub fn poseidon2_hash_subarray<let N: u32>(input: [Field; N], in_len: u32) -> Field {
    let mut sponge = poseidon2_absorb_chunks(input, in_len, false);
    sponge.squeeze()
}

// NB the below is the same as poseidon::poseidon2::Poseidon2::hash(), but replacing a range check with a bit check,
// and absorbing in chunks of 3 below.
#[no_predicates]
pub fn poseidon2_cheaper_variable_hash<let N: u32>(input: [Field; N], in_len: u32) -> Field {
    let mut sponge = poseidon2_absorb_chunks(input, in_len, true);
    // In the case where the hash preimage is variable-length, we append \`1\` to the end of the input, to distinguish
    // from fixed-length hashes. (the combination of this additional field element + the hash IV ensures
    // fixed-length and variable-length hashes do not collide)
    if in_len != N {
        sponge.absorb(1);
    }
    sponge.squeeze()
}

// The below fn reduces gates of a conditional poseidon2 hash by approx 3x (thank you ~* Giant Brain Dev @IlyasRidhuan *~ for the idea)
// Why? Because when we call stdlib poseidon, we call absorb for each item. When absorbing is conditional, it seems the compiler does not know
// what cache_size will be when calling absorb, so it assigns the permutation gates for /each i/ rather than /every 3rd i/, which is actually required.
// The below code forces the compiler to:
//  - absorb normally up to 2 times to set cache_size to 1
//  - absorb in chunks of 3 to ensure perm. only happens every 3rd absorb
//  - absorb normally up to 2 times to add any remaining values to the hash
// In fixed len hashes, the compiler is able to tell that it will only need to perform the permutation every 3 absorbs.
// NB: it also replaces unnecessary range checks (i < thing) with a bit check (&= i != thing), which alone reduces the gates of a var. hash by half.

#[no_predicates]
fn poseidon2_absorb_chunks<let N: u32>(
    input: [Field; N],
    in_len: u32,
    variable: bool,
) -> Poseidon2Sponge {
    let iv: Field = (in_len as Field) * TWO_POW_64;
    let mut sponge = Poseidon2Sponge::new(iv);
    // Even though shift is always 1 here, if we input in_len = 0 we get an underflow
    // since we cannot isolate computation branches. The below is just to avoid that.
    let shift = if in_len == 0 { 0 } else { 1 };
    if in_len != 0 {
        // cache_size = 0, init absorb
        sponge.cache[0] = input[0];
        sponge.cache_size = 1;
        // shift = num elts already added to make cache_size 1 = 1 for a fresh sponge
        // M = max_chunks = (N - 1 - (N - 1) % 3) / 3: (must be written as a fn of N to compile)
        // max_remainder = (N - 1) % 3;
        // max_chunks = (N - 1 - max_remainder) / 3;
        sponge = poseidon2_absorb_chunks_loop::<N, (N - 1 - (N - 1) % 3) / 3>(
            sponge,
            input,
            in_len,
            variable,
            shift,
        );
    }
    sponge
}

// NB: If it's not required to check that the non-absorbed elts of 'input' are 0s, set skip_0_check=true
#[no_predicates]
pub fn poseidon2_absorb_chunks_existing_sponge<let N: u32>(
    in_sponge: Poseidon2Sponge,
    input: [Field; N],
    in_len: u32,
    skip_0_check: bool,
) -> Poseidon2Sponge {
    let mut sponge = in_sponge;
    // 'shift' is to account for already added inputs
    let mut shift = 0;
    // 'stop' is to avoid an underflow when inputting in_len = 0
    let mut stop = false;
    for i in 0..3 {
        if shift == in_len {
            stop = true;
        }
        if (sponge.cache_size != 1) & (!stop) {
            sponge.absorb(input[i]);
            shift += 1;
        }
    }
    sponge = if stop {
        sponge
    } else {
        // max_chunks = (N - (N % 3)) / 3;
        poseidon2_absorb_chunks_loop::<N, (N - (N % 3)) / 3>(
            sponge,
            input,
            in_len,
            skip_0_check,
            shift,
        )
    };
    sponge
}

// The below is the loop to absorb elts into a poseidon sponge in chunks of 3
// shift - the num of elts already absorbed to ensure the sponge's cache_size = 1
// M - the max number of chunks required to absorb N things (must be comptime to compile)
// NB: The 0 checks ('Found non-zero field...') are messy, but having a separate loop over N to check
// for 0s costs 3N gates. Current approach is approx 2N gates.
#[no_predicates]
fn poseidon2_absorb_chunks_loop<let N: u32, let M: u32>(
    in_sponge: Poseidon2Sponge,
    input: [Field; N],
    in_len: u32,
    variable: bool,
    shift: u32,
) -> Poseidon2Sponge {
    assert(in_len <= N, "Given in_len to absorb is larger than the input array len");
    // When we have an existing sponge, we may have a shift of 0, and the final 'k+2' below = N
    // The below avoids an overflow
    let skip_last = 3 * M == N;
    // Writing in_sponge: &mut does not compile
    let mut sponge = in_sponge;
    let mut should_add = true;
    // The num of things left over after absorbing in 3s
    let remainder = (in_len - shift) % 3;
    // The num of chunks of 3 to absorb (maximum M)
    let chunks = (in_len - shift - remainder) / 3;
    for i in 0..M {
        // Now we loop through cache size = 1 -> 3
        should_add &= i != chunks;
        // This is the index at the start of the chunk (for readability)
        let k = 3 * i + shift;
        if should_add {
            // cache_size = 1, 2 => just assign
            sponge.cache[1] = input[k];
            sponge.cache[2] = input[k + 1];
            // cache_size = 3 => duplex + perm
            for j in 0..3 {
                sponge.state[j] += sponge.cache[j];
            }
            sponge.state = std::hash::poseidon2_permutation(sponge.state, 4);
            sponge.cache[0] = input[k + 2];
            // cache_size is now 1 again, repeat loop
        } else if (!variable) & (i != chunks) {
            // if we are hashing a fixed len array which is a subarray, we check the remaining elts are 0
            // NB: we don't check at i == chunks, because that chunk contains elts to be absorbed or checked below
            let last_0 = if (i == M - 1) & (skip_last) {
                0
            } else {
                input[k + 2]
            };
            let all_0 = (input[k] == 0) & (input[k + 1] == 0) & (last_0 == 0);
            assert(all_0, "Found non-zero field after breakpoint");
        }
    }
    // we have 'remainder' num of items left to absorb
    should_add = true;
    // below is to avoid overflows (i.e. if inlen is close to N)
    let mut should_check = !variable;
    for i in 0..3 {
        should_add &= i != remainder;
        should_check &= in_len - remainder + i != N;
        if should_add {
            // we want to absorb the final 'remainder' items
            sponge.absorb(input[in_len - remainder + i]);
        } else if should_check {
            assert(input[in_len - remainder + i] == 0, "Found non-zero field after breakpoint");
        }
    }
    sponge
}

pub fn poseidon2_hash_with_separator_slice<T>(inputs: [Field], separator: T) -> Field
where
    T: ToField,
{
    let in_len = inputs.len() + 1;
    let iv: Field = (in_len as Field) * TWO_POW_64;
    let mut sponge = Poseidon2Sponge::new(iv);
    sponge.absorb(separator.to_field());

    for i in 0..inputs.len() {
        sponge.absorb(inputs[i]);
    }

    sponge.squeeze()
}

#[no_predicates]
pub fn poseidon2_hash_bytes<let N: u32>(inputs: [u8; N]) -> Field {
    let mut fields = [0; (N + 30) / 31];
    let mut field_index = 0;
    let mut current_field = [0; 31];
    for i in 0..inputs.len() {
        let index = i % 31;
        current_field[index] = inputs[i];
        if index == 30 {
            fields[field_index] = field_from_bytes(current_field, false);
            current_field = [0; 31];
            field_index += 1;
        }
    }
    if field_index != fields.len() {
        fields[field_index] = field_from_bytes(current_field, false);
    }
    poseidon2_hash(fields)
}

#[test]
fn poseidon_chunks_matches_fixed() {
    let in_len = 501;
    let mut input: [Field; 4096] = [0; 4096];
    let mut fixed_input = [3; 501];
    assert(in_len == fixed_input.len()); // sanity check
    for i in 0..in_len {
        input[i] = 3;
    }
    let sub_chunk_hash = poseidon2_hash_subarray(input, in_len);
    let fixed_len_hash = poseidon::poseidon2::Poseidon2::hash(fixed_input, fixed_input.len());
    assert(sub_chunk_hash == fixed_len_hash);
}

#[test]
fn poseidon_chunks_matches_variable() {
    let in_len = 501;
    let mut input: [Field; 4096] = [0; 4096];
    for i in 0..in_len {
        input[i] = 3;
    }
    let variable_chunk_hash = poseidon2_cheaper_variable_hash(input, in_len);
    let variable_len_hash = poseidon::poseidon2::Poseidon2::hash(input, in_len);
    assert(variable_chunk_hash == variable_len_hash);
}

#[test]
fn existing_sponge_poseidon_chunks_matches_fixed() {
    let in_len = 501;
    let mut input: [Field; 4096] = [0; 4096];
    let mut fixed_input = [3; 501];
    assert(in_len == fixed_input.len()); // sanity check
    for i in 0..in_len {
        input[i] = 3;
    }
    // absorb 250 of the 501 things
    let empty_sponge = Poseidon2Sponge::new((in_len as Field) * TWO_POW_64);
    let first_sponge = poseidon2_absorb_chunks_existing_sponge(empty_sponge, input, 250, true);
    // now absorb the final 251 (since they are all 3s, im being lazy and not making a new array)
    let mut final_sponge = poseidon2_absorb_chunks_existing_sponge(first_sponge, input, 251, true);
    let fixed_len_hash = Poseidon2Sponge::hash(fixed_input, fixed_input.len());
    assert(final_sponge.squeeze() == fixed_len_hash);
}

#[test]
fn poseidon_chunks_empty_inputs() {
    let in_len = 0;
    let mut input: [Field; 4096] = [0; 4096];
    let mut constructed_empty_sponge = poseidon2_absorb_chunks(input, in_len, true);
    let mut first_sponge =
        poseidon2_absorb_chunks_existing_sponge(constructed_empty_sponge, input, in_len, true);
    assert(first_sponge.squeeze() == constructed_empty_sponge.squeeze());
}

#[test]
fn smoke_sha256_to_field() {
    let full_buffer = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
        94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
        113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
        131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
        149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
    ];
    let result = sha256_to_field(full_buffer);

    assert(result == 0x448ebbc9e1a31220a2f3830c18eef61b9bd070e5084b7fa2a359fe729184c7);

    // to show correctness of the current ver (truncate one byte) vs old ver (mod full bytes):
    let result_bytes = sha256::digest(full_buffer);
    let truncated_field = crate::utils::field::field_from_bytes_32_trunc(result_bytes);
    assert(truncated_field == result);
    let mod_res = result + (result_bytes[31] as Field);
    assert(mod_res == 0x448ebbc9e1a31220a2f3830c18eef61b9bd070e5084b7fa2a359fe729184e0);
}

#[test]
fn compute_l2_l1_hash() {
    // All zeroes
    let hash_result =
        compute_l2_to_l1_hash(AztecAddress::from_field(0), EthAddress::zero(), 0, 0, 0);
    assert(hash_result == 0xb393978842a0fa3d3e1470196f098f473f9678e72463cb65ec4ab5581856c2);

    // Non-zero case
    let hash_result = compute_l2_to_l1_hash(
        AztecAddress::from_field(1),
        EthAddress::from_field(3),
        5,
        2,
        4,
    );
    assert(hash_result == 0x3f88c1044a05e5340ed20466276500f6d45ca5603913b9091e957161734e16);
}

#[test]
fn silo_l2_to_l1_message_matches_typescript() {
    let version = 4;
    let chainId = 5;

    let hash = silo_l2_to_l1_message(
        ScopedL2ToL1Message {
            message: L2ToL1Message { recipient: EthAddress::from_field(1), content: 2, counter: 0 },
            contract_address: AztecAddress::from_field(3),
        },
        version,
        chainId,
    );

    // The following value was generated by \`l2_to_l1_message.test.ts\`
    let hash_from_typescript = 0x00c6155d69febb9d5039b374dd4f77bf57b7c881709aa524a18acaa0bd57476a;

    assert_eq(hash, hash_from_typescript);
}
`},306:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/poseidon2.nr",source:`use crate::constants::TWO_POW_64;

// NB: This is a clone of noir/noir-repo/noir_stdlib/src/hash/poseidon2.nr
// It exists as we sometimes need to perform custom absorption, but the stdlib version
// has a private absorb() method (it's also designed to just be a hasher)
// Can be removed when standalone noir poseidon lib exists: See noir#6679

comptime global RATE: u32 = 3;

pub struct Poseidon2Sponge {
    pub cache: [Field; 3],
    pub state: [Field; 4],
    pub cache_size: u32,
    pub squeeze_mode: bool, // 0 => absorb, 1 => squeeze
}

impl Poseidon2Sponge {
    #[no_predicates]
    pub fn hash<let N: u32>(input: [Field; N], message_size: u32) -> Field {
        Poseidon2Sponge::hash_internal(input, message_size, message_size != N)
    }

    pub(crate) fn new(iv: Field) -> Poseidon2Sponge {
        let mut result =
            Poseidon2Sponge { cache: [0; 3], state: [0; 4], cache_size: 0, squeeze_mode: false };
        result.state[RATE] = iv;
        result
    }

    fn perform_duplex(&mut self) {
        // add the cache into sponge state
        for i in 0..RATE {
            // We effectively zero-pad the cache by only adding to the state
            // cache that is less than the specified \`cache_size\`
            if i < self.cache_size {
                self.state[i] += self.cache[i];
            }
        }
        self.state = std::hash::poseidon2_permutation(self.state, 4);
    }

    pub fn absorb(&mut self, input: Field) {
        assert(!self.squeeze_mode);
        if self.cache_size == RATE {
            // If we're absorbing, and the cache is full, apply the sponge permutation to compress the cache
            self.perform_duplex();
            self.cache[0] = input;
            self.cache_size = 1;
        } else {
            // If we're absorbing, and the cache is not full, add the input into the cache
            self.cache[self.cache_size] = input;
            self.cache_size += 1;
        }
    }

    pub fn squeeze(&mut self) -> Field {
        assert(!self.squeeze_mode);
        // If we're in absorb mode, apply sponge permutation to compress the cache.
        self.perform_duplex();
        self.squeeze_mode = true;

        // Pop one item off the top of the permutation and return it.
        self.state[0]
    }

    fn hash_internal<let N: u32>(
        input: [Field; N],
        in_len: u32,
        is_variable_length: bool,
    ) -> Field {
        let iv: Field = (in_len as Field) * TWO_POW_64;
        let mut sponge = Poseidon2Sponge::new(iv);
        for i in 0..input.len() {
            if i < in_len {
                sponge.absorb(input[i]);
            }
        }

        // In the case where the hash preimage is variable-length, we append \`1\` to the end of the input, to distinguish
        // from fixed-length hashes. (the combination of this additional field element + the hash IV ensures
        // fixed-length and variable-length hashes do not collide)
        if is_variable_length {
            sponge.absorb(1);
        }
        sponge.squeeze()
    }
}
`},365:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/utils/reader.nr",source:`pub struct Reader<let N: u32> {
    data: [Field; N],
    offset: u32,
}

impl<let N: u32> Reader<N> {
    pub fn new(data: [Field; N]) -> Self {
        Self { data, offset: 0 }
    }

    pub fn read(&mut self) -> Field {
        let result = self.data[self.offset];
        self.offset += 1;
        result
    }

    pub fn read_u32(&mut self) -> u32 {
        self.read() as u32
    }

    pub fn read_bool(&mut self) -> bool {
        self.read() as bool
    }

    pub fn read_array<let K: u32>(&mut self) -> [Field; K] {
        let mut result = [0; K];
        for i in 0..K {
            result[i] = self.data[self.offset + i];
        }
        self.offset += K;
        result
    }

    pub fn read_struct<T, let K: u32>(&mut self, deserialise: fn([Field; K]) -> T) -> T {
        let result = deserialise(self.read_array());
        result
    }

    pub fn read_struct_array<T, let K: u32, let C: u32>(
        &mut self,
        deserialise: fn([Field; K]) -> T,
        mut result: [T; C],
    ) -> [T; C] {
        for i in 0..C {
            result[i] = self.read_struct(deserialise);
        }
        result
    }

    pub fn finish(self) {
        assert(self.offset == self.data.len(), "Reader did not read all data");
    }
}
`}},o={transpiled:!0,noir_version:e,name:n,functions:t,outputs:s,file_map:a};export{o as default,a as file_map,t as functions,n as name,e as noir_version,s as outputs,i as transpiled};
