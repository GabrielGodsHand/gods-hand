const i=!0,e="1.0.0-beta.5+0000000000000000000000000000000000000000",n="Router",t=[{name:"_check_block_number",is_unconstrained:!0,custom_attributes:["public","internal","view"],abi:{parameters:[{name:"operation",type:{kind:"integer",sign:"unsigned",width:8},visibility:"private"},{name:"value",type:{kind:"field"},visibility:"private"}],return_type:null,error_types:{"1433889167918961673":{error_kind:"fmtstring",length:17,item_types:[]},"2242946026394210301":{error_kind:"string",string:"Block number mismatch."},"8209322232883590150":{error_kind:"string",string:"Function _check_block_number can only be called internally"},"10421965853029650238":{error_kind:"string",string:"Function _check_block_number can only be called statically"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"JwACBAEoAAABBIBLJwAABAMnAgMEAicCBAQAHwoAAwAEgEkdAIBJgEkCLgiASQABLgiASgACJQAAAFIlAAAAfSgCAAEEgEsnAgIEADsOAAIAASgAgEMCAAMoAIBEAgACKACARQIAASgAgEYCAAQoAIBHAgAGKACASAIABSYlAAADQR4CAAQBHgIABQAKKgQFBiQCAAYAAACeJQAAA2oeAgAECScCBQABCioEBQYkAgAGAAAAuiUAAAN8HgIABAUKKgQCBQwqBAIGCyIAAYBFAAInAgQBASQCAAIAAAMqIwAAAOMLIgABgEQABxYKBQgkAgAHAAADGCMAAAD8CyIAAYBDAAkkAgAJAAADBiMAAAERCyIAAYBGAAokAgAKAAAC7yMAAAEmCyIAAYBIAAoWCgYLJAIACgAAAtgjAAABPwsiAAGARwAIJAIACAAAAsYjAAABVCcCAQJJJwIIAm4nAgoCdicCCwJhJwIMAmwnAg0CaScCDgJkJwIPAiAnAhACbycCEQJwJwISAmUnAhMCcicCFAJ0LQgBFScCFgQSAAgBFgEnAxUEAQAiFQIWLQoWFy0OARcAIhcCFy0OCBcAIhcCFy0OChcAIhcCFy0OCxcAIhcCFy0ODBcAIhcCFy0ODRcAIhcCFy0ODhcAIhcCFy0ODxcAIhcCFy0OEBcAIhcCFy0OERcAIhcCFy0OEhcAIhcCFy0OExcAIhcCFy0OCxcAIhcCFy0OFBcAIhcCFy0ODRcAIhcCFy0OEBcAIhcCFy0OCBcnAgEBACcCCAQACioBBAokAgAKAAACvScCCwQTLQgBDCcCDQQTAAgBDQEtCgwNKgMADQUT5jKZ5RcUCQAiDQINACIVAg4nAg8EES4CAA6AAy4CAA2ABC4CAA+ABSUAAAOOJwIOBBEAKg0ODS0OCA0AIg0CDTwOCwwtCgEGIwAAAs8tCgsGIwAAAs8tCgYFIwAAAuYEKgsIAS0KAQUjAAAC5i0KBQkjAAAC/RIqBgUBLQoBCSMAAAL9LQoJByMAAAMPLQoGByMAAAMPLQoHAiMAAAMhLQoIAiMAAAMhLQoCAyMAAAMzLQoFAyMAAAMzJAIAAwAAA0AlAAAD1CYoAIAEBHgADQAAAIAEgAMkAIADAAADaSoBAAEF96Hzr6Wt1Mo8BAIBJioBAAEFce1fE3G+NAY8BAIBJioBAAEFkKJCubMVTz48BAIBJgEAgAOABYAHLgCAA4AILgCABIAJCwCACIAHgAokAIAKAAAD0y4BgAiABi4EgAaACQEAgAgAAoAIAQCACQACgAkjAAADoiYqAQABBR8gi4cBmc/9PAQCASY=",debug_symbols:"nZfRbuIwEEX/Jc882GOPZ8yvrKqK0rRCigClsNKq4t93DL4BKjmq8oJvrvHxjD024bt779/On6+7/cfhq1v/+e7ext0w7D5fh8N2c9od9uZ+d658+GBNWFnL3TpZG+1ZSsu3lkNttVt7ZyKZ4X0RWoXAUQ+RTEQTuTgFm80h6yJnDpEJEhM2M5WZyb5MTCbYRAGSjaIcb13BlS4LI/hcRYnzJrgKhsNwEpwER+AIHIWjcDKcXJ3oHMTk1DCijxBwCA7BCQFCqogEkapgD4EpEHxMACYABUDRKhRAxRQZwFynYGTByIKRBSML9hXIFCAqkANBABg9BIDYAmYAGVMkABOmEAAFU5T6oVxEqiLDydVJLkLkKnyA0CoIzjX4Iq7VchVcBcNhOMlDYJSAIyArHIWTCaKOErKuYCdFyp4Gq3ktteGtsLXE4/lyWXU4ia+nse/LQXw4mnZgj5ux35+69f48DKvu72Y4X7/0ddzsr+1pM1qvTdLv36014Mdu6Iu6rO6jXXuoJx+0DjfNaUJkeWL4NoOdIgKTOhESPRGoTVAuy3IlKAfXIsznkeieh1Irj9hmxOykIuzYpFYUPJNHjFhMtfO6LI/H/dDYymOWYTU8MaxWWwxtM8Ruz4qQIL6VSW4TMjkQMpEuWovnPHjJWqSAPfWJZSLw8wnxM8WZQkAUyX5lWon4MFMXokCoOlqyFqncKTUP0WYeM8UZMgorujvAK/+aEMuP8Y0QqE2QmaIIGlEU0ckD4xkxU5khKFYihPyA+HFfzZQm5Wk7gnvYjh8ImtsP7wTlbTprM5W59Zxuiyhx0Y6wn27eIIsI4uJ0zt2yGASE5JYR7ISBkJYRRFCZ6sIigkbEoNKOgeauTPz+yH0nYvh9CnEav3AR0hRB0h8H/MUeN9vd+PTmfymocbd5G/r6+HHebx96T/+O6ME/h+N42Pbv57EvpPvfB3sd+uPFr+zV/8Xe8l155LzyKZZHXx6Trry4l0sJ5j8=",brillig_names:["_check_block_number"]},{name:"_check_timestamp",is_unconstrained:!0,custom_attributes:["public","internal","view"],abi:{parameters:[{name:"operation",type:{kind:"integer",sign:"unsigned",width:8},visibility:"private"},{name:"value",type:{kind:"integer",sign:"unsigned",width:64},visibility:"private"}],return_type:null,error_types:{"1433889167918961673":{error_kind:"fmtstring",length:17,item_types:[]},"8443716675528357851":{error_kind:"string",string:"Timestamp mismatch."},"11405868724477732285":{error_kind:"string",string:"Function _check_timestamp can only be called internally"},"13418685691864489983":{error_kind:"string",string:"Function _check_timestamp can only be called statically"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"JwACBAEoAAABBIBLJwAABAMnAgMEAicCBAQAHwoAAwAEgEkdAIBJgEkCHQCASoBKBS4IgEkAAS4IgEoAAiUAAABZJQAAAIQoAgABBIBLJwICBAA7DgACAAEoAIBDAgADKACARAIAAigAgEUCAAEoAIBGAgAEKACARwIABigAgEgCAAUmJQAAA1IeAgAEAR4CAAUACioEBQYkAgAGAAAApSUAAAN7HgIABAknAgUAAQoqBAUGJAIABgAAAMElAAADjR4CAAQGHAoEBQAcCgIEAAoqBQQCDCoFBAYLIgABgEUABCcCBQEBJAIABAAAAzsjAAAA9AsiAAGARAAHFgoCCCQCAAcAAAMpIwAAAQ0LIgABgEMACSQCAAkAAAMXIwAAASILIgABgEYACiQCAAoAAAMAIwAAATcLIgABgEgAChYKBgskAgAKAAAC6SMAAAFQCyIAAYBHAAgkAgAIAAAC1yMAAAFlJwIBAkknAggCbicCCgJ2JwILAmEnAgwCbCcCDQJpJwIOAmQnAg8CICcCEAJvJwIRAnAnAhICZScCEwJyJwIUAnQtCAEVJwIWBBIACAEWAScDFQQBACIVAhYtChYXLQ4BFwAiFwIXLQ4IFwAiFwIXLQ4KFwAiFwIXLQ4LFwAiFwIXLQ4MFwAiFwIXLQ4NFwAiFwIXLQ4OFwAiFwIXLQ4PFwAiFwIXLQ4QFwAiFwIXLQ4RFwAiFwIXLQ4SFwAiFwIXLQ4TFwAiFwIXLQ4LFwAiFwIXLQ4UFwAiFwIXLQ4NFwAiFwIXLQ4QFwAiFwIXLQ4IFycCAQEAJwIIBAAKKgEFCiQCAAoAAALOJwILBBMtCAEMJwINBBMACAENAS0KDA0qAwANBRPmMpnlFxQJACINAg0AIhUCDicCDwQRLgIADoADLgIADYAELgIAD4AFJQAAA58nAg4EEQAqDQ4NLQ4IDQAiDQINPA4LDC0KAQYjAAAC4C0KCwYjAAAC4C0KBgIjAAAC9wQqCwgBLQoBAiMAAAL3LQoCCSMAAAMOEioGAgEtCgEJIwAAAw4tCgkHIwAAAyAtCgYHIwAAAyAtCgcEIwAAAzItCggEIwAAAzItCgQDIwAAA0QtCgIDIwAAA0QkAgADAAADUSUAAAPlJigAgAQEeAANAAAAgASAAyQAgAMAAAN6KgEAAQX3ofOvpa3UyjwEAgEmKgEAAQWeScksjTulvTwEAgEmKgEAAQW6OL+KoDMf/zwEAgEmAQCAA4AFgAcuAIADgAguAIAEgAkLAIAIgAeACiQAgAoAAAPkLgGACIAGLgSABoAJAQCACAACgAgBAIAJAAKACSMAAAOzJioBAAEFdS4blGTo99s8BAIBJg==",debug_symbols:"nZfRbuIwEEX/Jc88eOyxPeZXVlVFaVohIUAprLSq+PedAd8EKjmq8kJuruPjGXtsku/uvX+7fL7uDh/Hr27957t7G3b7/e7zdX/cbs6740Hd787ZD4XcrcOqI/bdOtlV77Neo79fk6vX2K3JqchqEJmIVQgckSpKUMEmzImrzjtzkglzRAWp44MJdbw+7JlV2MM2treHU1Gho/uiQ3jtFYjuTYGsqagIqYqYq0geAk6Gk+EIHIFT4JTqsPMQcAgOwfFwfA2DA0HAYTgMJzoIhqjpcAoQUgWCZwTPAqAAWAAsEaICo2OICowUICowIouILCKyiKECIzsIABlDRAAjhsASRCxBzABmDCEACoYQAAuGsPoJWlHJ6ucu4BAcTxCpiuAgYhUMx4K/CauWm7BQ7wJOhpMxlqBXAadUcnYOYnRKFVR7ZbYmr8LWNGjNi9UGaWGLxUP5el112Juv56HvbWs+bFbdwqfN0B/O3fpw2e9X3d/N/nJ76Ou0Odyu582grbpB+8O7XhX4sdv3pq6rqbdrdyXdkVK7q45pRJT8xKA2Q2sMEaiUkZD8E8G3CRLtuLgRJAbXIsznkfyUh/hWHtxm6H7KFcGFUiuKOJMHMyZTOPGyPB7XQ7iVxywjJRoZSUKLIW1GDhErkkOmVialTSjegVC8l0Vz8ZxHXDAXJWNJS5nmMj7vD5opzaRnaiWkSM3SpDBTFcIIQiTFBTMxZUHOxVYac1PpwjiTjpcRpv1FzjenMrcRoaCy2U31QLquvyWwvQTcCcG3CXNVGYRREPoP/8B4PqtmZiIEQUUEfW2YEM9F6WdOTF8EyxHcw2T+RMzUpS5CjtOCFGmlMjuf43HFmRetSKTx6A95ESE7Hg8atyyGDEJyywjJ/p7vhLSMkDMqU1xYRBBGDJLbMYSZwszYoHlaCQ6/T4HH/gsnIY0RJPmxwV/0drPdDU8fI1dDDbvN276vtx+Xw/ah9fzvhBZ8zJyG47Z/vwy9kaYvGn0t/ENaB/qP+aJfIM5u9cCilO2W7FaituaXqwXzHw==",brillig_names:["_check_timestamp"]},{name:"check_block_number",is_unconstrained:!1,custom_attributes:["private"],abi:{parameters:[{name:"inputs",type:{kind:"struct",path:"aztec::context::inputs::private_context_inputs::PrivateContextInputs",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"historical_header",type:{kind:"struct",path:"aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]},visibility:"private"},{name:"operation",type:{kind:"integer",sign:"unsigned",width:8},visibility:"private"},{name:"value",type:{kind:"field"},visibility:"private"}],return_type:{abi_type:{kind:"struct",path:"aztec::protocol_types::abis::private_circuit_public_inputs::PrivateCircuitPublicInputs",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"min_revertible_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"is_fee_payer",type:{kind:"boolean"}},{name:"max_block_number",type:{kind:"struct",path:"aztec::protocol_types::abis::max_block_number::MaxBlockNumber",fields:[{name:"_opt",type:{kind:"struct",path:"std::option::Option",fields:[{name:"_is_some",type:{kind:"boolean"}},{name:"_value",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}},{name:"note_hash_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifier_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"key_validation_requests_and_generators",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::validation_requests::key_validation_request_and_generator::KeyValidationRequestAndGenerator",fields:[{name:"request",type:{kind:"struct",path:"aztec::protocol_types::abis::validation_requests::key_validation_request::KeyValidationRequest",fields:[{name:"pk_m",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}},{name:"sk_app",type:{kind:"field"}}]}},{name:"sk_app_generator",type:{kind:"field"}}]}}},{name:"note_hashes",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::note_hash::NoteHash",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifiers",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::nullifier::Nullifier",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"note_hash",type:{kind:"field"}}]}}},{name:"private_call_requests",type:{kind:"array",length:5,type:{kind:"struct",path:"aztec::protocol_types::abis::private_call_request::PrivateCallRequest",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_call_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_teardown_call_request",type:{kind:"struct",path:"aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"l2_to_l1_msgs",type:{kind:"array",length:2,type:{kind:"struct",path:"aztec::protocol_types::messaging::l2_to_l1_message::L2ToL1Message",fields:[{name:"recipient",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"content",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"private_logs",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::private_log::PrivateLogData",fields:[{name:"log",type:{kind:"struct",path:"aztec::protocol_types::abis::log::Log",fields:[{name:"fields",type:{kind:"array",length:18,type:{kind:"field"}}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"note_hash_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"contract_class_logs_hashes",type:{kind:"array",length:1,type:{kind:"struct",path:"aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"aztec::protocol_types::abis::log_hash::LogHash",fields:[{name:"value",type:{kind:"field"}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"historical_header",type:{kind:"struct",path:"aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}}]},visibility:"databus"},error_types:{"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"H4sIAAAAAAAA/+XdBXhT9x6H8bRpC8XdpYVtOCRN0ia4u7tDJUXGYNgG087d3Zkyd1fmG3P3jW3M3QW7399ILodDtue5tyfbfZ97nud9GuvJ538iTZOTczJ826d8v8+X6d9+OEP5Ez8zVZ7rtORP5+HsFJernuK0milOq53itLopTmuk+rpOa53icnkpTstPcVqbFKe1S3Fae1XVt/OUkfjZN/EzFCgMh+NFBfFgKFgcKIiVRCOBcKSkMBqMBiPRSFlBNBSKR8PRolhJrCgQC4ZD8WB5JBYqD2yfavl3zCtQqamgNJ3O2v+9M+Q+wWz1VJbDasthq2O5Jw93cByunbhM8vfq6HhdVU/V9+84PTllupZBoHJTsJ2Hy7OB3zuX8z5r883zpfc+29C7+2xJOp2NPHAWxeJlQV1jOp2N/3tn2H1CqsdWQ8djq9GfPM4aux5bTXS8qWqmmqd4bPldyyBQuSnYwcN5NfF7d9u08O5xmvK2aeG4PZo6DjdzHG7uum1a6ngr1doe64nbJst1u6Sa+nozjlDGX1xPZa/D/XjL8NYebO/dvALpMnZIgzEdzpb+9Dj/PXn9B7yBh08M+Wn6A56f+AOelTielWK5eH1DZvj+v+9wXjsbpPmB4ZUz1bx3edBV9oHiJbijLz0L1usxe/iACnaCjDnTwzF3hozZ7+GYu/xNYw5Ubgp29XD51YE8oXfzMZwBiDMIcRZAnCGIMwxxRiDOQoizCOKMQpwxiLM7xNkD4uwJcfaCOHtDnH0gzr4QZz+Isz/EOQDiHAhxDoI4B0OcQyDOoRDnMIhzOMQ5AuIcCXGOgjhHQ5xjIM6xEOc4iHM8xDkB4pwIcU6COCdDnFMgzqkQ5zSIczrEOQPinAlxzoI4Z0OccyDOuRBnMcRZAnGWQpxlEGcc4iyHOOdBnPMhzgUQ50KIc0+IcxHEuRfEuRjiXAJx7g1xLoU4l0GcyyHOFRDnSohzH4hzX4hzFcS5GuLcD+LcH+I8AOI8EOI8COI8GOKsgDgPgTgPhTgPgzgPhziPgDiPhDiPgjiPhjiPgTiPhTiPgziPhzhPgDhPhDhPgjhPhjhPgThPhThPgzhPhzjPgDjPhDjPgjjPhjjPgTjPhTjPgzjPhzgvgDgvhDgvgjjXQJwXQ5yXQJyXQpyXQZyXQ5xXQJxrIc4rIc6rIM6rIc5rIM5rIc7rIM7rIc4bIM4bIc6bIM6bIc5bIM5bIc7bIM7bIc47IM47Ic67IM67Ic57IM57Ic77IM77Ic4HIM51EOeDEOdDEOfDEOcjEOejEOdjEOfjEOcTEOeTEOd6iPMpiPNpiPMZiPNZiPM5iPN5iPMFiPNFiPMliPNliPMViPNViPM1iPN1iPMNiPNNiPMtiPNtiPMdiPNdiPM9iHMDxPk+xPkBxPkhxLkR4vwI4vwY4vwE4vwU4vwM4vwc4vwC4vwS4vwK4vwa4vwG4vwW4vwO4vwe4vwB4vwR4vwJ4vwZ4vwF4vwV4vwN4vwd4twEcW6GOLdAnFshzm0Qp82Q4MyAODMhTj/EmQVxZkOcORBnFYizKsSZC3FWgzirQ5w1IM6aEGctiLM2xFkH4qwLcdaDOOtDnA0gzoYQZyOIszHE2QTibApxNoM4m0OcLSDOlhBnK4izNcSZB3HmQ5xtIM62EOduEOfuEOceEGc7iLM9xNkB4uwIcXaCODtDnF0gzq4QZzeIMwBxBiHOAogzBHGGIc4IxFkIcRZBnFGIMwZxdoc4e6TJmelyhgKF4XC8qCAeDAWLAwWxkmgkEI6UFEaD0WAkGikriIZC8Wg4WhQriRUFYsFwKB4sj8RC5Yl5Z3g45p7/h2PuBbk/9s7wbvn91W0TqNwU7OOhs6X/77k/Bio3Bft6OOYGfsb9sR/kcdMf4hwAcQ6EOAdBnIMhziEQ51CIcxjEORziHAFxjoQ4R0GcoyHOMRDnWIhzHMQ5HuKcAHFOhDgnQZyTIc4pEOdUiHMaxDkd4pwBcc6EOGdBnLMhzjkQ51yIsxjiLIE4SyHOMogzDnGWQ5zzIM75EOcCiHMhxLknxLkI4twL4lwMcS6BOPeGOJdCnMsgzuUQ5wqIcyXEuQ/EuS/EuQriXA1x7gdx7g9xHgBxHghxHgRxHgxxVkCch0Cch0Kch0Gch0OcR0CcR0KcR0GcR0Ocx0Ccx0Kcx0Gcx0OcJ0CcJ0KcJ0GcJ0Ocp0Ccp0Kcp0Gcp0OcZ0CcZ0KcZ0GcZ0Oc50Cc50Kc50Gc50OcF0CcF0KcF0GcayDOiyHOSyDOSyHOyyDOyyHOKyDOtRDnlRDnVRDn1RDnNRDntRDndRDn9RDnDRDnjRDnTRDnzRDnLRDnrRDnbRDn7RDnHRDnnRDnXRDn3RDnPRDnvRDnfRDn/RDnAxDnOojzQYjzIYjzYYjzEYjzUYjzMYjzcYjzCYjzSYhzPcT5FMT5NMT5DMT5LMT5HMT5PMT5AsT5IsT5EsT5MsT5CsT5KsT5GsT5OsT5BsT5JsT5FsT5NsT5DsT5LsT5HsS5AeJ8H+L8AOL8EOLcCHF+BHF+DHF+AnF+CnF+BnF+DnF+AXF+CXF+BXF+DXF+A3F+C3F+B3F+D3H+AHH+CHH+BHH+DHH+AnH+CnH+BnH+DnFugjg3Q5xbIM6tEOc2iNOXyXBmQJyZEKcf4syCOLMhzhyIswrEWRXizIU4q0Gc1SHOGhBnTYizFsRZG+KsA3HWhTjrQZz1Ic4GEGdDiLMRxNkY4mwCcTaFOJtBnM0hzhYQZ0uIsxXE2RrizIM48yHONhBnW4hzN4hzd4hzD4izHcTZHuLsAHF2hDg7QZydIc4uEGdXiLMbxBmAOIMQZwHEGYI4wxBnBOIshDiLIM4oxBmDOLtDnD0gzp4QZy+IszfE2Qfi7Atx9oM4+0OcAyDOgRDnIIhzMMQ5BOIcCnEOgziHQ5wjIM6REOcoiHM0xDkG4hwLcY6DOMdDnBMgzokQ5ySIczLEOQXinApxToM4p0OcMyDOmRDnLIhzNsQ5B+KcC3EWQ5wlEGcpxFkGccYhznKIcx7EOR/iXABxLoQ494Q4F0Gce0GciyHOJRDn3hDnUohzGcS5HOJcAXGuhDj3gTj3hThXQZyrIc79IM79Ic4DIM4DIc6DIM6DIc4KiPMQiPNQiPMwiPNwiPMIiPNIiPMoiPNoiPMYiPNYiPM4iPN4iPMEiPNEiPMkiPNkiPMUiPNUiPM0iPN0iPMMiPNMiPMsiPNsiPMciPNciPM8iPN8iPMCiPNCiPMiiHMNxHkxxHkJxHkpxHkZxHk5xHkFxLkW4rwS4rwK4rwa4rwG4rwW4rwO4rwe4rwB4rwR4rwJ4rwZ4rwF4rwV4rwN4rwd4rwD4rwT4rwL4rwb4rwH4rwX4rwP4rwf4nwA4lwHcT4IcT4EcT4McT4CcT4KcT4GcT4OcT4BcT4Jca6HOJ+COJ+GOJ+BOJ+FOJ+DOJ+HOF+AOF+EOF+COF+GOF+BOF+FOF+DOF+HON+AON+EON+CON+GON+BON+FON+DODdAnO9DnB9AnB9CnBshzo8gzo8hzk8gzk/T5Mx0OUOBwnA4XlQQD4aCxYGCWEk0EghHSgqjwWgwEo2UFURDoXg0HC2KlcSKArFgOBQPlkdiofLEvNt5OObP/qYxByo3BT/P9G755fsZt3OWh8vvC8h9O9vDMX8JGXOOh2P+CjLmKh6O+WvImKt6OOZvIGPO9XDM30LGXM3DMX8HGXN1D8f8PWTMNTwc8w+QMdf0cMw/QsZcy8Mx/wQZc20Px/wzZMx1PBzzL5Ax1/VwzL9CxlzPwzH/BhlzfQ/H/DtkzA08HPMmyJgbejjmzZAxN/JwzFsgY27s4Zi3QsbcxMMxb4OMuamHY/ZB3vds5uGYMyBjbu7hmDMhY27h4Zj9kDG39HDMWZAxt/JwzNmQMbf2cMw5kDHneTjmKpAx53s45qqQMbfxcMy5kDG39XDM1SBj3s3DMVeHjHl3D8dcAzLmPTwcc00Px6xZ/bGOz8bEgDuqTqqz6qK6qm52PSqoCmxZqLCKqEJVpKIqprqrHqqn6qV6qz6JsfdT/dUANVANUoPVEDVUDVPD1Qg1Uo1So9UYNVaNU+PVBDVRTVKT1RQ1VU1T09UMNVPNUrPVHDVXFasSVarKVFyVq3lqvlqgFqo91SK1l1qslqi91VK1TC1XK9RKtY/aV61Sq9V+an91gDpQHaQOVhXqEHWoOkwdro5QR6qj1NHqGHWsOk4dr05QJ6qT1MnqFHWqOk2drs5QZ6qz1NnqHHWuOk+dry5QF6qL1Bp1sbpEXaouU5erK9RadaW6Sl2trlHXquvU9eoGdaO6Sd2sblG3qtvU7eoOdae6S92t7lH3qvvU/eoBtU49qB5SD6tH1KPqMfW4ekI9qdarp9TT6hn1rHpOPa9eUC+ql9TL6hX1qnpNva7eUG+qt9Tb6h31rnpPbVDvqw/Uh2qj+kh9rD5Rn6rP1OfqC/Wl+kp9rb5R36rv1PfqB/Wj+kn9rH5Rv6rf1O9qk9qstqitapuyB1mGylR+laWyVY6qoqqqXFVNVVc1VE1VS9VWdVRdVU/VVw1UQ9VINVZNVFPVTDVXLVRL1Uq1VnkqX7VRbdVuane1h2qn2qsOqqPqpDqrLqqr6qYCKqgKVEiFVUQVqiIVVTHVXfVQPVUv1Vv1UX1VP9VfDVAD1SA1WA1RQ9UwNVyNUCPVKDVajVFj1Tg1Xk1QE9UkNVlNUVPVNDVdzVAz1Sw1W81Rc1WxKlGlqkzFVbmap+arBWqh2lMtUnupxWqJ2lstVcvUcrVCrVT7qH3VKrVa7af2VweoA9VB6mBVoQ5Rh6rD1OHqCHWkOkodrY5Rx6rj1PHqBHWiOkmdrE5Rp6rT1OnqDHWmOkudrc5R56rz1PnqAnWhukitURerS9Sl6jJ1ubpCrVVXqqvU1eoada26Tl2vblA3qpvUzeoWdau6Td2u7lB3qrvU3eoeda+6T92vHlDr1IPqIfWwekQ9qh5Tj6sn1JNqvXpKPa2eUc+q59Tz6gX1onpJvaxeUa+q19Tr6g31pnpLva3eUe+q99QG9b76QH2oNqqP1MfqE/Wp+kx9rr5QX6qv1NfqG/Wt+k59r35QP6qf1M/qF/Wr+k39rjapzWqL2qq2KXtBkaEylV9lqWyVo6qoqipXVVPVVQ1VU9VStVUdVVfVU/VVA9VQNVKNVRPVVDVTzVUL1VK1Uq1VnspXbVRbtZvaXe2h2qn2qoPqqDqpzqqL6qq6qYAKqgIVUmEVUYWqSEVVTHVXPVRP1Uv1Vn1UX9VP9VcD1EA1SA1WQ9RQNUwNVyPUSDVKjVZj1Fg1To1XE9RENUlNVlPUVDVNTVcz1Ew1S81Wc9RcVaxKVKkqU3FVruap+WqBWqhsX/W2H3jbx7rtv9z2DW773bZ9Wtv+om1fzLafY9uHsO2f1/Z9a/uVtX222v5QbV+jth9P20em7X/S9u1YoWyfhLa/P9uXnu2nzvYBZ/tXs32X2X7BbJ9btj8r21eU7YfJ9nFk+w+yffPYfm9snzK2vxbbF4rtZ8T24WH7x7B9T9h+HWyfCbY/AtvWv21H37ZRb9t/t22rr1G2TXDb3rZty9q2E23bYLbtG9u2g227vLbNW9uerG2r1baDatsYte132rYxbbuTtk1H216ibYvQtvNn29Cz7dPZtt9su2q2zTLbHphta8u2Y2XbiLLtL9m2jdYp2yaPbe/GtiVj22mxbaDY9kVs2x22XQzb5oRtz8G2lWDbIbDv+Nv35+276fa9b/tOtX1f2b4LbN+zte+w2vdD7buX9r1G+86gfR/Pvutm3yOz72jZ95/su0UblH0nxr5vYt/lsNe79h0EW7/f1p239dJtPW1bB9rW47X1Wm09T1vv0dYDtPXibD0xW2/K1iOy9WpsPRNb78LWQ7DP5e1zavvc1j7HtM/17HMu+9zHPgexzwXsfXJ739jeR7X3Fe19Nnvfyd6Hsfcl7P90+7/V/o+z/2vsdX7m9pcOPltP2aaOvh1T4mnFZv3H+bZer63naut92nqQtl6grSdn643ZelS2XpGtZ2Prndh6GLZegn1Ob59b2+e49rmmfc5nn3vZ50D2uYh9TmDvm9v7yPa+qr3PaO+75al81UbZ/+32f6z9X2f/59i68+1VB9+uU6bjcL3Ez4Yb+zVdun7tIOflmv/JecnfjyV+5rpOz0gsj76J44HKTcFcx3y9nn80EI7l+naePPaHcn073388nn8kOf/s9Mz/j3WYbRpYsWP+zrEkr9fvupz7d+z8monDGb5dL5McRzruR7qd072c/n07V0nT/JPLLcex7PwpxpS8/pqu2yp5fqqfyXm5z0teVzVfWu/Dwb8am9OfvG/UcV3evQz+bF45/+G8/snb1LmsnbfpH5ep2HFepuu8LMd5Oa7zsit2HaP9ncpzXM79GMxynZe8n9g0tGLHPDo55tc5cTi5/NL53J2u5wyb6qfwO6/LpioVO5ZHctn4Hacll3nyNqjqvLzrvFzHeVkVO19PtcTxLMf1OOeVdGS7Lp98vVI78TPH8TvJ36+T4vpzXNe/kzvFae7lkpvi8rkpLm/30baJw9UT2X0o5Jjfnz1GnK9lkodr+3Z9Pkj+bpofzwVJa1YKq/P5JXn99pqwYeLw8hVLlsWHLR60Kl66csWCJYsHFJfOj/tck/PB57xjul+kOheAc6Cp5uF3/H6qyW6Q5IukrIqdf69v4vRAJaaiaCCQvO7kAyLb5fS5rj/bdflo4ng1x7iSPyvzBcPyouJgeai4vDhSXFYWLi2u55q/z7fjjmfLKfmiGf6iOPp3vShO04uxcHL+OemZf8oXxamecJL34cEVO5bl4IqdTcnLDHFcZojjMjb91Qtn9x9tmwa5znM+lga7znM+WSWv156A6/p2HE7e79P8Bz36T/5BT/7hST4h25NzXuLw4iUrFpSvHrR46cr4ynjZ2JUlixaUDl65uHT7E/WiRT7X5H7RneE6nuk67n5OzkoxH/fk/L0Mxxj+15+rmyWO/9PP1f8CyJrFgM8eAgA=",debug_symbols:"pZbdjvIgEIbvpcc9YIafAW/FGFO1u2nSVNPVTb4Y7/0bVn70ALarJ74tlYdheIG5Nod+d/ncDtPH8atZra/Nbh7Gcfjcjsd9dx6OE7deG+F/lG5W2DbK3IXuYu/iWG5tA/6PwC9w47fI2J7nvvdfHqA81Kmb++ncrKbLOLbNdzdefv70deqmHz13M38VbdNPB1YGfgxj759ube4tyl0VYehsUKXuIO1SgJYQAJpMBqjFEYCyMhBAOUoIflxIQK0oENAAlgiqQkAVc4hoMsE8p0GXCVI4HQgSuFuBYCp50KRNTIQmyouJFp8gVJkIYGQgKJ0Rzj0hbCUOtCkM3+0VhDR5SUEUEbWJ8DKkFaHyRGq2UBayLWTJFoCV3QHgAkKBzlEYWOxu+eDuB1/o5/0BFXOCMWkiYEhAhqg/QEhThlhRhFQsyssaF0USQMnkQFWXp5Tys8Siy6FmMKNtngwV3eGHetfnVcZCo/+SkYX7HvH9jY/y/YwsZfBB+BpjYVar+Vh4fvyyZ5xINrOSSnsGK1aVFJ2qJBTvx3oYVuWta50qhSFr55AzLh0ijoQtnWX+Oi+bTCuXXKapDKlGYiEtr3PGFCEVizgdb1tgx71Ut/DQsfIRDybzt8OG37r9MD9XeKB4ACaCDmqCkh+Y1Qb1hR5nEUVQCIpBpb+QWFVQXzRyWpF5/nxFCso86Rf7u5uHbjf2Pgof52Xax6D49fzvFL/EwvQ0H/f94TL3fgK5OuVx1wxWuOEguWWtodVmk2pS38QBIjf5HPwH",brillig_names:["store_in_execution_cache_oracle_wrapper","notify_enqueued_public_function_call_wrapper"],verification_key:"AAAAAAAEAAAAAAAAAAAAEgAAAAAAAAAQAAAAAAAAVgkAAAAA//////////8ABv0nZX7XFE9zmAsL7vHSDnSOz+XykSzAv67VBNh3mXMsmmGFJPcMPPMMw9mYLULcDpDERNMgRGsUyvqj7oxe7Sa6MciXz/fUHKAjDeka8nFGEqKdQxKIcMxiD8UDs5kvElt1w/exF7YVOMX/yUFyGdnCnPoJvi/eXppEJmNKjbgbUE93/qUcw5MZ0cCAK7IFjLTSN/tM5LUaQyIaJ+MqlwxTVohO4JKWp2SkySe4lLr2fd7YHp1GUKMxNhAgkINRHHj8urNie7LTIBkH9QEhFDCDL8y71tBluGX5lvzOU50QYL5NGYQ52WygZX0CzZxqi+YhR8jvcKUxhJyq8EjTuxu+G4kEGOivc+7wEa8o0CDPC15UrIi4YzQQh9jrpxSuEMqnMaO4btkhwKI5UTgngZrHMUdI2HAyS3fJbQyKbqMYz9ZiBINOm7Vpg2p32ZazAt7erJLoVznUA7h0elUZtw0e0qc0pmHqeTGFypqxvhs8wbZrRZrJamwL3pv1IXnfJ34e3MIBh/bZnQqcjCd6Eo8n4+S1X0QwM2Q7BxTO32ERhG3XjR3FaaW5IHNUc4FjfZjumN7m5SaIFHQ/qD0KTCmMMxH8kXD5LelAsEKquZDVPGo7JjOc2mtz35IIMUFZB7BfQIphKEclkBa5IErkvzdTfrGWsFwdmPpRAWqbrLspybJ/ksump/QlykfYIdoZGJ7U5JdnYxBfHkJD94oiIihbIRTsn6c+1+yTxuE4KdP9Lc6fiAyRR9eMDVtUUCxwC8hn+WWtSO5xv/C8rXrlI0L3DD8muXYUjPG4rLfon6cBvFPxKTe5SbN5jK/bZ6ZmOA78S4vokZzoXg+VOljjkCHrSJuRmKhkLL92LlSOA5ve52T8+85x9jwkt2+sZv9oEf1BtfmTbZMquuTG6TPg05wk6o4uDu5wKlMm81nJR8AUoX18ClXS1F7o7fbsFlwRPSgrmEfVYv1BQCIOR+GCrxpw0tC/U/KBmNxua015bsn0E4YWuRKVxKct3D6sKlhhF4kzcRO+CElfm7RH1dBYOufdSU61GqyMYklO5+xPtO0Y8VFQdatol1svNCJbxeuRiYo78XM8epdOMSOCqR6zBiSTWwr8tVZy1IuVfsyx2sqMpIejtCRX/WZJGIxuHwtrD2fGEZumyUkktaB1xLI8DcLNeSC933FWfJB1qS/BW5osndSStURqNfqddWeTwey5vb+rxEG+Ue7jfD+yVKR5sBe8dLs/wphqhI/7LMaKHX6RQN3OLdWggoE8pba8Pp9lHU2yX1chCw31aAJjl1oifZUZO9RW4Lfjc0nyrnQUYsIPaN5yS/qZ/5V07/rzPA7rkKwx95L7x0squnn6CVjByix6tDbeJlt/o0SqrN5qonrRf/dL0A4C5+fEAGHSY1+dF20qD3G32+SDq9ObCq/I3SNlz/CIWMVpRyXhlLgb/NoabhiRKI4yMnxrtJ9GHnbWrbXirm46XRCYmPrhPP4u9xV1yI4njIzeehFaK44AOsKs8PvOvLNA4cdCnRm/XSltKV1K7NRusvi4VLqD4CK6p4cdNNPAvVsAipjpMrsp0g4Uo6Wnv2Ve3/t2HTaIFI0VjR7a++SMEbcWcOu9MEbFjgE44PiVMVA3c0/pn3QBMPVZevuKsd+xJkQaEAHNEMCgKMcb8N/iEhn9TEpSz9Gd6yAcaSjPyQSdwT2G8ycc5ocEaaeDVNl5/AUxTLN/WlAlfP665wIxsCzf9vSEzR8wHyCi5dqpcWBeP02FvFSEEXfsKmG/NbNDx7OoM77pRdJuEe4i1Tobyo1BKlHW+Rm6F79IRFKwQfuKnfh8bw4MjnQXiXP7ADeNzgEUm7qycWpfoLQrOA6imfSNrAov9+WQ5grcicSNdbVxY29bvrSoBvb0WWICMBtq5OsOu+rdIDNABm8oE1dI8RljHD/gf6nXAANOPidFTvmStL+EuXuqdHEuJXg1Ud9QwATsfNH03Ys7ZKZvKsSXm2XlZWjFoxsU7Rj3bPDO7MtHmN50GuibZOglj4RHfBtiVlpVm6e7OIMuLSmftoZ40BULzFsW3IJSNT1D+nDpkjnBwcZ+JxoO6sUV06xaGZq7dJM6TvyYxZsoFO3nzSfa7QDDPBKGC8SwRi041tS6Hkdjp07NsRyh80aWgMJw5VFRU0RZL1kYj6dlEts56JKCazJhDuCCUeAF/OkXwNXcoBlHfFL2B1MythIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFcTdYbGqoxnZqv/X2lHw5Up7IvX/ovOnhRDj32xZqt4g5CITZ6gTlUlAwLCGDb7dEbDIeNK2oJ6CL4gnaa/J6ADENyb3W2/aDeIs4ODfq2vMegX/lalrKJQkxfczZw2WL5tuC04sAZaN5cMkgqp9HQoJ1xeOyTuteFj5bmTwtI0dWKphxkrVIgQ9ecSAIhnlW6GXUa3+bDYyTT+2wtoJiS18GKk8Pa5YgJ+q7saoanj0s7xh8Z1ucGk1m79H5/kH"},{name:"check_timestamp",is_unconstrained:!1,custom_attributes:["private"],abi:{parameters:[{name:"inputs",type:{kind:"struct",path:"aztec::context::inputs::private_context_inputs::PrivateContextInputs",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"historical_header",type:{kind:"struct",path:"aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]},visibility:"private"},{name:"operation",type:{kind:"integer",sign:"unsigned",width:8},visibility:"private"},{name:"value",type:{kind:"integer",sign:"unsigned",width:64},visibility:"private"}],return_type:{abi_type:{kind:"struct",path:"aztec::protocol_types::abis::private_circuit_public_inputs::PrivateCircuitPublicInputs",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"min_revertible_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"is_fee_payer",type:{kind:"boolean"}},{name:"max_block_number",type:{kind:"struct",path:"aztec::protocol_types::abis::max_block_number::MaxBlockNumber",fields:[{name:"_opt",type:{kind:"struct",path:"std::option::Option",fields:[{name:"_is_some",type:{kind:"boolean"}},{name:"_value",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}},{name:"note_hash_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifier_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"key_validation_requests_and_generators",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::validation_requests::key_validation_request_and_generator::KeyValidationRequestAndGenerator",fields:[{name:"request",type:{kind:"struct",path:"aztec::protocol_types::abis::validation_requests::key_validation_request::KeyValidationRequest",fields:[{name:"pk_m",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}},{name:"sk_app",type:{kind:"field"}}]}},{name:"sk_app_generator",type:{kind:"field"}}]}}},{name:"note_hashes",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::note_hash::NoteHash",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifiers",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::nullifier::Nullifier",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"note_hash",type:{kind:"field"}}]}}},{name:"private_call_requests",type:{kind:"array",length:5,type:{kind:"struct",path:"aztec::protocol_types::abis::private_call_request::PrivateCallRequest",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_call_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_teardown_call_request",type:{kind:"struct",path:"aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"l2_to_l1_msgs",type:{kind:"array",length:2,type:{kind:"struct",path:"aztec::protocol_types::messaging::l2_to_l1_message::L2ToL1Message",fields:[{name:"recipient",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"content",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"private_logs",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::private_log::PrivateLogData",fields:[{name:"log",type:{kind:"struct",path:"aztec::protocol_types::abis::log::Log",fields:[{name:"fields",type:{kind:"array",length:18,type:{kind:"field"}}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"note_hash_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"contract_class_logs_hashes",type:{kind:"array",length:1,type:{kind:"struct",path:"aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"aztec::protocol_types::abis::log_hash::LogHash",fields:[{name:"value",type:{kind:"field"}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"historical_header",type:{kind:"struct",path:"aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}}]},visibility:"databus"},error_types:{"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"pZbdjvIgEIbvpcc9YIafAW/FGFO1u2nSVNPVTb4Y7/0bVn70ALarJ74tlYdheIG5Nod+d/ncDtPH8atZra/Nbh7Gcfjcjsd9dx6OE7deG+F/lG5W2DbK3IXuYu/iWG5tA/6PwC9w47fI2J7nvvdfHqA81Kmb++ncrKbLOLbNdzdefv70deqmHz13M38VbdNPB1YGfgxj759ube4tyl0VYehsUKXuIO1SgJYQAJpMBqjFEYCyMhBAOUoIflxIQK0oENAAlgiqQkAVc4hoMsE8p0GXCVI4HQgSuFuBYCp50KRNTIQmyouJFp8gVJkIYGQgKJ0Rzj0hbCUOtCkM3+0VhDR5SUEUEbWJ8DKkFaHyRGq2UBayLWTJFoCV3QHgAkKBzlEYWBoEyWgs++BM/bw7oGJNMCZNAwwJyBD1BwhpyhAripCKQXlR45JIAihZHKjq8ZRQfpZY9DjU7GW0zZOhojf8UO+6vMpYaPNfMrJw1yO+v+1Rvp+RpQw+Bl9jLMxqNR8LT49f9owTyWZWUmnPYMWqkqJTlYTi7VgPw6q8da1TpTBk7Y51xqVDxJGwpZPMX+Zlk2nlkss0lSHVSCyk5XXOmCKkYhGn410L7LiXqhYeOtY94sFk/m7Y8Fu3H+bn+g64tAMmgglKQa0fuL1XdKwofHZYISgGlUGVv45YdVBfK3JakXn+fEUblHnSL/Z3Nw/dbux9FD7Oy7SPQfHr+d8pfoll6Wk+7vvDZe79BHJtyuOvGaxww8Fyy1pDq80mVaS+iQNEbvI5+A8=",brillig_names:["store_in_execution_cache_oracle_wrapper","notify_enqueued_public_function_call_wrapper"],verification_key:"AAAAAAAEAAAAAAAAAAAAEgAAAAAAAAAQAAAAAAAAVgkAAAAA//////////8AHwUsueI0v/1weNsj28wMvIeb6FhR73TvXi8bHC/l300lFHKYMXHjEdiU8z5JSdSsxngrWoZ7YLJIlgFgfKpoDBeY64skC/+mA4FhaV3IyLN2syfC8xBddvd068XTtgeJJk2TLnbpcT97yMR8xLq1VEv4JvCDU0UVpEGEj/3ZQ8MvAlHtrc5oF0Q/fzLQvbX6rB67JSORi7FvvFONKNVgbggFObwoLlMPPFTA1cV4sF3XmEr3gp2NpbclxEAr4oUXBddpLskSlxt+Lc0xsG4YRFdPIIWE+esPAcCbxYpXKNsHj8jBVB/JnceORff+VFlsVDziGbMabyBPA8Hqa2NRYi3yOx6LpBXmufyS0b+T5OenHNfFbbaqeLmd2Ikba/c2CDWSzBvxoZ06Q/56s85DCe8hCjb/9BMI6vm9XuXJay0dA6oJmqhiPh4FrnwZP5gPAjj3aJWbePkgmxpncqrGtSFz5xYozInFcx18Xi0XPY+93FVV3CC1Kix9XdmD1gnfJ34e3MIBh/bZnQqcjCd6Eo8n4+S1X0QwM2Q7BxTO32ERhG3XjR3FaaW5IHNUc4FjfZjumN7m5SaIFHQ/qD0KTCmMMxH8kXD5LelAsEKquZDVPGo7JjOc2mtz35IIMUFZB7BfQIphKEclkBa5IErkvzdTfrGWsFwdmPpRAWqbrLsXNAN0Ecsm9Akjr5xbdjKzwLntinMa5MTkS/VrJntTBRt1p0JjqIIOnaO4QFZERhK0SEPmngO27xPJb1WU12oND/nOzRBlSenvuhK3mEEE4WEHBtPK3Vn6ztpml+0TG4Mk0QOgFruFFDT+aFdVwxV7F4nEzsx6SrlYaPPmAv74vSHrSJuRmKhkLL92LlSOA5ve52T8+85x9jwkt2+sZv9oEf1BtfmTbZMquuTG6TPg05wk6o4uDu5wKlMm81nJR8AUoX18ClXS1F7o7fbsFlwRPSgrmEfVYv1BQCIOR+GCrxpw0tC/U/KBmNxua015bsn0E4YWuRKVxKct3D6sKlhhF4kzcRO+CElfm7RH1dBYOufdSU61GqyMYklO5+xPtO0Y8VFQdatol1svNCJbxeuRiYo78XM8epdOMSOCqR6zBiSTWwr8tVZy1IuVfsyx2sqMpIejtCRX/WZJGIxuHwtrD2fGEZumyUkktaB1xLI8DcLNeSC933FWfJB1qS/BW5oVdc1KKvDMjQrjc44R9zd0BeRwatT/Qjx/ZxC9OkZ/EAomUTK2DJf2WjWkvvZDAB4+n65hLED571pjj3SRrqCRBtPrInIXpKrRDXyp6Az596SDXm0DLQpb2cwY06s227sLKc10TLGpvfYAMr1z96u2njgh7AIZLZkP6LNM1AUhoQDDtrsFDyxNpXaT9M0Og7vxOfq+I7p6zlntlYt84UnKFuZp7pKLCDJBIPpjxAjXN24Rs/Y/6LSSLQPvjRbUOO4ZSaDRPI1M1+ZTaipUUdTe2qE6TY35S2uI3CTNmXvCugmGcnXOfKuTOK9AwBomPCJnRa37l/GP6xGHLFIGtPtmIoKjOlGMTcpWnIyjibWshtw9ns9KZPmc14NaOi3mK5Qdr3XFqVPl0vhcYTwUbifZiGaxZI6odh9c5fQ8dqhbqQFKuYU5N3JaKBC9VbgcyDtyEPOTieQEN8eZi5XnLeOwGhNiINfNNgxjkD6ALXn3uFZjCYB/L28UZzeKqx6DGPginVuO7t+Zkt2k89FpxRVSo6YhCRHUaYUd0IpNw/GfOTA1uyrxuEkgyUUIiaclsI9BkDq40T7RVQHMKWY0OKIkK5H4kydYu11aW1q+5WT6eqTtCs2v+I5s82QUeUvaeukf2gub0b3ozoUBq9kptAta/fWLnpXunZJtJSyhu1fu2ArcicSNdbVxY29bvrSoBvb0WWICMBtq5OsOu+rdIDNABm8oE1dI8RljHD/gf6nXAANOPidFTvmStL+EuXuqdHEuJXg1Ud9QwATsfNH03Ys7ZKZvKsSXm2XlZWjFoxsU7Rj3bPDO7MtHmN50GuibZOglj4RHfBtiVlpVm6e7OIMuLSmftoZ40BULzFsW3IJSNT1D+nDpkjnBwcZ+JxoO6sUV06xaGZq7dJM6TvyYxZsoFO3nzSfa7QDDPBKGC8SwRi041tS6Hkdjp07NsRyh80aWgMJw5VFRU0RZL1kYj6dlEts56JKCazJhDuCCUeAF/OkXwNXcoBlHfFL2B1MythIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFcTdYbGqoxnZqv/X2lHw5Up7IvX/ovOnhRDj32xZqt4g5CITZ6gTlUlAwLCGDb7dEbDIeNK2oJ6CL4gnaa/J6ADENyb3W2/aDeIs4ODfq2vMegX/lalrKJQkxfczZw2WL5tuC04sAZaN5cMkgqp9HQoJ1xeOyTuteFj5bmTwtI0dWKphxkrVIgQ9ecSAIhnlW6GXUa3+bDYyTT+2wtoJiS18GKk8Pa5YgJ+q7saoanj0s7xh8Z1ucGk1m79H5/kH"},{name:"public_dispatch",is_unconstrained:!0,custom_attributes:["public"],abi:{parameters:[{name:"selector",type:{kind:"field"},visibility:"private"}],return_type:null,error_types:{"1433889167918961673":{error_kind:"fmtstring",length:17,item_types:[]},"2242946026394210301":{error_kind:"string",string:"Block number mismatch."},"2830029349304997821":{error_kind:"fmtstring",length:27,item_types:[{kind:"field"}]},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"8209322232883590150":{error_kind:"string",string:"Function _check_block_number can only be called internally"},"8443716675528357851":{error_kind:"string",string:"Timestamp mismatch."},"10421965853029650238":{error_kind:"string",string:"Function _check_block_number can only be called statically"},"11405868724477732285":{error_kind:"string",string:"Function _check_timestamp can only be called internally"},"13418685691864489983":{error_kind:"string",string:"Function _check_timestamp can only be called statically"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"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",brillig_names:["public_dispatch"]},{name:"sync_private_state",is_unconstrained:!0,custom_attributes:["utility"],abi:{parameters:[],return_type:null,error_types:{"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"H4sIAAAAAAAA/7WTPQ+CMBCGi2KUjzjgoD+jBAyM+LG4OLpXCkpUSAB3frqQXENtwKjAJU17FJ5736OVUB0SzDLqEAyyglmBecTtj8vhQY67hakIdfvku9i2lQZ/Peq3FGBKw/Ax4w/UfzwFzr6o+bwXVndWDo1b66g+H0P5Z/9vSP+LD5418GpAXnmew/oS5Nt74t+Oz8c5SNnXTR1EgnIxdK5CSd0lcZ4SP99QmgZZJhJGDWTUQlU56pVE8YG26fmRdgrSLEpikSZ/Sav6yu6lXLyr8eA57hCOizHTMAb+BDV3X+b2+feXkKuCJ+bT+1Nn6BAztEhI1oRS2yeGwK+CP38vlizs4eEFAAA=",debug_symbols:"nZPfioQgFIff5Vx3ofkn7VWGYbCyQRALpxaW6N1XB52pBZdlbjyZ5/v6VbrBoLv1fjNunB7QXjbovLHW3G926tViJhfuboDigAm0pAJMoWWhMGibUDi0ct8ryP23xWsd2w+CoJ2V126B1q3WVvCl7PpseszKPeuifFhFFWg3hBqEo7E6Xu3Vm0ZlFCNGecIx4oi9FLI5OXDZ0YhsEIi+eE5PfF3mWc0Sz9j7FTCR/w0gSJMDMFkKQMs8JTLxlIuPAgiaA0hRCsDLfPjuiec1/ySArOskkISVAog/Aoi8hxr06xdcw1T1xp+29h5V3qjO6jQdV9cfVpfvOa/kozH7qdfD6nU0Hc5HGC9YVDW57vFpPw==",brillig_names:["sync_private_state"]}],s={globals:{},structs:{functions:[{fields:[{name:"parameters",type:{fields:[{name:"operation",type:{kind:"integer",sign:"unsigned",width:8}},{name:"value",type:{kind:"field"}}],kind:"struct",path:"Router::_check_block_number_parameters"}}],kind:"struct",path:"Router::_check_block_number_abi"},{fields:[{name:"parameters",type:{fields:[{name:"operation",type:{kind:"integer",sign:"unsigned",width:8}},{name:"value",type:{kind:"integer",sign:"unsigned",width:64}}],kind:"struct",path:"Router::_check_timestamp_parameters"}}],kind:"struct",path:"Router::_check_timestamp_abi"},{fields:[{name:"parameters",type:{fields:[{name:"operation",type:{kind:"integer",sign:"unsigned",width:8}},{name:"value",type:{kind:"field"}}],kind:"struct",path:"Router::check_block_number_parameters"}}],kind:"struct",path:"Router::check_block_number_abi"},{fields:[{name:"parameters",type:{fields:[{name:"operation",type:{kind:"integer",sign:"unsigned",width:8}},{name:"value",type:{kind:"integer",sign:"unsigned",width:64}}],kind:"struct",path:"Router::check_timestamp_parameters"}}],kind:"struct",path:"Router::check_timestamp_abi"},{fields:[{name:"parameters",type:{fields:[],kind:"struct",path:"Router::sync_private_state_parameters"}}],kind:"struct",path:"Router::sync_private_state_abi"}]}},a={17:{path:"std/field/bn254.nr",source:`use crate::field::field_less_than;
use crate::runtime::is_unconstrained;

// The low and high decomposition of the field modulus
global PLO: Field = 53438638232309528389504892708671455233;
global PHI: Field = 64323764613183177041862057485226039389;

pub(crate) global TWO_POW_128: Field = 0x100000000000000000000000000000000;

// Decomposes a single field into two 16 byte fields.
fn compute_decomposition(x: Field) -> (Field, Field) {
    // Here's we're taking advantage of truncating 128 bit limbs from the input field
    // and then subtracting them from the input such the field division is equivalent to integer division.
    let low = (x as u128) as Field;
    let high = (x - low) / TWO_POW_128;

    (low, high)
}

pub(crate) unconstrained fn decompose_hint(x: Field) -> (Field, Field) {
    compute_decomposition(x)
}

unconstrained fn lte_hint(x: Field, y: Field) -> bool {
    if x == y {
        true
    } else {
        field_less_than(x, y)
    }
}

// Assert that (alo > blo && ahi >= bhi) || (alo <= blo && ahi > bhi)
fn assert_gt_limbs(a: (Field, Field), b: (Field, Field)) {
    let (alo, ahi) = a;
    let (blo, bhi) = b;
    // Safety: borrow is enforced to be boolean due to its type.
    // if borrow is 0, it asserts that (alo > blo && ahi >= bhi)
    // if borrow is 1, it asserts that (alo <= blo && ahi > bhi)
    unsafe {
        let borrow = lte_hint(alo, blo);

        let rlo = alo - blo - 1 + (borrow as Field) * TWO_POW_128;
        let rhi = ahi - bhi - (borrow as Field);

        rlo.assert_max_bit_size::<128>();
        rhi.assert_max_bit_size::<128>();
    }
}

/// Decompose a single field into two 16 byte fields.
pub fn decompose(x: Field) -> (Field, Field) {
    if is_unconstrained() {
        compute_decomposition(x)
    } else {
        // Safety: decomposition is properly checked below
        unsafe {
            // Take hints of the decomposition
            let (xlo, xhi) = decompose_hint(x);

            // Range check the limbs
            xlo.assert_max_bit_size::<128>();
            xhi.assert_max_bit_size::<128>();

            // Check that the decomposition is correct
            assert_eq(x, xlo + TWO_POW_128 * xhi);

            // Assert that the decomposition of P is greater than the decomposition of x
            assert_gt_limbs((PLO, PHI), (xlo, xhi));
            (xlo, xhi)
        }
    }
}

pub fn assert_gt(a: Field, b: Field) {
    if is_unconstrained() {
        assert(
            // Safety: already unconstrained
            unsafe { field_less_than(b, a) },
        );
    } else {
        // Decompose a and b
        let a_limbs = decompose(a);
        let b_limbs = decompose(b);

        // Assert that a_limbs is greater than b_limbs
        assert_gt_limbs(a_limbs, b_limbs)
    }
}

pub fn assert_lt(a: Field, b: Field) {
    assert_gt(b, a);
}

pub fn gt(a: Field, b: Field) -> bool {
    if is_unconstrained() {
        // Safety: unsafe in unconstrained
        unsafe {
            field_less_than(b, a)
        }
    } else if a == b {
        false
    } else {
        // Safety: Take a hint of the comparison and verify it
        unsafe {
            if field_less_than(a, b) {
                assert_gt(b, a);
                false
            } else {
                assert_gt(a, b);
                true
            }
        }
    }
}

pub fn lt(a: Field, b: Field) -> bool {
    gt(b, a)
}

mod tests {
    // TODO: Allow imports from "super"
    use crate::field::bn254::{assert_gt, decompose, gt, lte_hint, PHI, PLO, TWO_POW_128};

    #[test]
    fn check_decompose() {
        assert_eq(decompose(TWO_POW_128), (0, 1));
        assert_eq(decompose(TWO_POW_128 + 0x1234567890), (0x1234567890, 1));
        assert_eq(decompose(0x1234567890), (0x1234567890, 0));
    }

    #[test]
    unconstrained fn check_decompose_unconstrained() {
        assert_eq(decompose(TWO_POW_128), (0, 1));
        assert_eq(decompose(TWO_POW_128 + 0x1234567890), (0x1234567890, 1));
        assert_eq(decompose(0x1234567890), (0x1234567890, 0));
    }

    #[test]
    unconstrained fn check_lte_hint() {
        assert(lte_hint(0, 1));
        assert(lte_hint(0, 0x100));
        assert(lte_hint(0x100, TWO_POW_128 - 1));
        assert(!lte_hint(0 - 1, 0));

        assert(lte_hint(0, 0));
        assert(lte_hint(0x100, 0x100));
        assert(lte_hint(0 - 1, 0 - 1));
    }

    #[test]
    fn check_assert_gt() {
        assert_gt(1, 0);
        assert_gt(0x100, 0);
        assert_gt((0 - 1), (0 - 2));
        assert_gt(TWO_POW_128, 0);
        assert_gt(0 - 1, 0);
    }

    #[test]
    unconstrained fn check_assert_gt_unconstrained() {
        assert_gt(1, 0);
        assert_gt(0x100, 0);
        assert_gt((0 - 1), (0 - 2));
        assert_gt(TWO_POW_128, 0);
        assert_gt(0 - 1, 0);
    }

    #[test]
    fn check_gt() {
        assert(gt(1, 0));
        assert(gt(0x100, 0));
        assert(gt((0 - 1), (0 - 2)));
        assert(gt(TWO_POW_128, 0));
        assert(!gt(0, 0));
        assert(!gt(0, 0x100));
        assert(gt(0 - 1, 0 - 2));
        assert(!gt(0 - 2, 0 - 1));
    }

    #[test]
    unconstrained fn check_gt_unconstrained() {
        assert(gt(1, 0));
        assert(gt(0x100, 0));
        assert(gt((0 - 1), (0 - 2)));
        assert(gt(TWO_POW_128, 0));
        assert(!gt(0, 0));
        assert(!gt(0, 0x100));
        assert(gt(0 - 1, 0 - 2));
        assert(!gt(0 - 2, 0 - 1));
    }

    #[test]
    fn check_plo_phi() {
        assert_eq(PLO + PHI * TWO_POW_128, 0);
        let p_bytes = crate::field::modulus_le_bytes();
        let mut p_low: Field = 0;
        let mut p_high: Field = 0;

        let mut offset = 1;
        for i in 0..16 {
            p_low += (p_bytes[i] as Field) * offset;
            p_high += (p_bytes[i + 16] as Field) * offset;
            offset *= 256;
        }
        assert_eq(p_low, PLO);
        assert_eq(p_high, PHI);
    }
}
`},18:{path:"std/field/mod.nr",source:`pub mod bn254;
use crate::{runtime::is_unconstrained, static_assert};
use bn254::lt as bn254_lt;

impl Field {
    /// Asserts that \`self\` can be represented in \`bit_size\` bits.
    ///
    /// # Failures
    /// Causes a constraint failure for \`Field\` values exceeding \`2^{bit_size}\`.
    // docs:start:assert_max_bit_size
    pub fn assert_max_bit_size<let BIT_SIZE: u32>(self) {
        // docs:end:assert_max_bit_size
        static_assert(
            BIT_SIZE < modulus_num_bits() as u32,
            "BIT_SIZE must be less than modulus_num_bits",
        );
        self.__assert_max_bit_size(BIT_SIZE);
    }

    #[builtin(apply_range_constraint)]
    fn __assert_max_bit_size(self, bit_size: u32) {}

    /// Decomposes \`self\` into its little endian bit decomposition as a \`[u1; N]\` array.
    /// This slice will be zero padded should not all bits be necessary to represent \`self\`.
    ///
    /// # Failures
    /// Causes a constraint failure for \`Field\` values exceeding \`2^N\` as the resulting slice will not
    /// be able to represent the original \`Field\`.
    ///
    /// # Safety
    /// Values of \`N\` equal to or greater than the number of bits necessary to represent the \`Field\` modulus
    /// (e.g. 254 for the BN254 field) allow for multiple bit decompositions. This is due to how the \`Field\` will
    /// wrap around due to overflow when verifying the decomposition.
    #[builtin(to_le_bits)]
    fn _to_le_bits<let N: u32>(self: Self) -> [u1; N] {}

    /// Decomposes \`self\` into its big endian bit decomposition as a \`[u1; N]\` array.
    /// This array will be zero padded should not all bits be necessary to represent \`self\`.
    ///
    /// # Failures
    /// Causes a constraint failure for \`Field\` values exceeding \`2^N\` as the resulting slice will not
    /// be able to represent the original \`Field\`.
    ///
    /// # Safety
    /// Values of \`N\` equal to or greater than the number of bits necessary to represent the \`Field\` modulus
    /// (e.g. 254 for the BN254 field) allow for multiple bit decompositions. This is due to how the \`Field\` will
    /// wrap around due to overflow when verifying the decomposition.
    #[builtin(to_be_bits)]
    fn _to_be_bits<let N: u32>(self: Self) -> [u1; N] {}

    /// Decomposes \`self\` into its little endian bit decomposition as a \`[u1; N]\` array.
    /// This slice will be zero padded should not all bits be necessary to represent \`self\`.
    ///
    /// # Failures
    /// Causes a constraint failure for \`Field\` values exceeding \`2^N\` as the resulting slice will not
    /// be able to represent the original \`Field\`.
    ///
    /// # Safety
    /// The bit decomposition returned is canonical and is guaranteed to not overflow the modulus.
    // docs:start:to_le_bits
    pub fn to_le_bits<let N: u32>(self: Self) -> [u1; N] {
        // docs:end:to_le_bits
        let bits = self._to_le_bits();

        if !is_unconstrained() {
            // Ensure that the byte decomposition does not overflow the modulus
            let p = modulus_le_bits();
            assert(bits.len() <= p.len());
            let mut ok = bits.len() != p.len();
            for i in 0..N {
                if !ok {
                    if (bits[N - 1 - i] != p[N - 1 - i]) {
                        assert(p[N - 1 - i] == 1);
                        ok = true;
                    }
                }
            }
            assert(ok);
        }
        bits
    }

    /// Decomposes \`self\` into its big endian bit decomposition as a \`[u1; N]\` array.
    /// This array will be zero padded should not all bits be necessary to represent \`self\`.
    ///
    /// # Failures
    /// Causes a constraint failure for \`Field\` values exceeding \`2^N\` as the resulting slice will not
    /// be able to represent the original \`Field\`.
    ///
    /// # Safety
    /// The bit decomposition returned is canonical and is guaranteed to not overflow the modulus.
    // docs:start:to_be_bits
    pub fn to_be_bits<let N: u32>(self: Self) -> [u1; N] {
        // docs:end:to_be_bits
        let bits = self._to_be_bits();

        if !is_unconstrained() {
            // Ensure that the decomposition does not overflow the modulus
            let p = modulus_be_bits();
            assert(bits.len() <= p.len());
            let mut ok = bits.len() != p.len();
            for i in 0..N {
                if !ok {
                    if (bits[i] != p[i]) {
                        assert(p[i] == 1);
                        ok = true;
                    }
                }
            }
            assert(ok);
        }
        bits
    }

    /// Decomposes \`self\` into its little endian byte decomposition as a \`[u8;N]\` array
    /// This array will be zero padded should not all bytes be necessary to represent \`self\`.
    ///
    /// # Failures
    ///  The length N of the array must be big enough to contain all the bytes of the 'self',
    ///  and no more than the number of bytes required to represent the field modulus
    ///
    /// # Safety
    /// The result is ensured to be the canonical decomposition of the field element
    // docs:start:to_le_bytes
    pub fn to_le_bytes<let N: u32>(self: Self) -> [u8; N] {
        // docs:end:to_le_bytes
        static_assert(
            N <= modulus_le_bytes().len(),
            "N must be less than or equal to modulus_le_bytes().len()",
        );
        // Compute the byte decomposition
        let bytes = self.to_le_radix(256);

        if !is_unconstrained() {
            // Ensure that the byte decomposition does not overflow the modulus
            let p = modulus_le_bytes();
            assert(bytes.len() <= p.len());
            let mut ok = bytes.len() != p.len();
            for i in 0..N {
                if !ok {
                    if (bytes[N - 1 - i] != p[N - 1 - i]) {
                        assert(bytes[N - 1 - i] < p[N - 1 - i]);
                        ok = true;
                    }
                }
            }
            assert(ok);
        }
        bytes
    }

    /// Decomposes \`self\` into its big endian byte decomposition as a \`[u8;N]\` array of length required to represent the field modulus
    /// This array will be zero padded should not all bytes be necessary to represent \`self\`.
    ///
    /// # Failures
    ///  The length N of the array must be big enough to contain all the bytes of the 'self',
    ///  and no more than the number of bytes required to represent the field modulus
    ///
    /// # Safety
    /// The result is ensured to be the canonical decomposition of the field element
    // docs:start:to_be_bytes
    pub fn to_be_bytes<let N: u32>(self: Self) -> [u8; N] {
        // docs:end:to_be_bytes
        static_assert(
            N <= modulus_le_bytes().len(),
            "N must be less than or equal to modulus_le_bytes().len()",
        );
        // Compute the byte decomposition
        let bytes = self.to_be_radix(256);

        if !is_unconstrained() {
            // Ensure that the byte decomposition does not overflow the modulus
            let p = modulus_be_bytes();
            assert(bytes.len() <= p.len());
            let mut ok = bytes.len() != p.len();
            for i in 0..N {
                if !ok {
                    if (bytes[i] != p[i]) {
                        assert(bytes[i] < p[i]);
                        ok = true;
                    }
                }
            }
            assert(ok);
        }
        bytes
    }

    // docs:start:to_le_radix
    pub fn to_le_radix<let N: u32>(self: Self, radix: u32) -> [u8; N] {
        // Brillig does not need an immediate radix
        if !crate::runtime::is_unconstrained() {
            static_assert(1 < radix, "radix must be greater than 1");
            static_assert(radix <= 256, "radix must be less than or equal to 256");
            static_assert(radix & (radix - 1) == 0, "radix must be a power of 2");
        }
        self.__to_le_radix(radix)
    }
    // docs:end:to_le_radix

    // docs:start:to_be_radix
    pub fn to_be_radix<let N: u32>(self: Self, radix: u32) -> [u8; N] {
        // Brillig does not need an immediate radix
        if !crate::runtime::is_unconstrained() {
            crate::assert_constant(radix);
        }
        self.__to_be_radix(radix)
    }
    // docs:end:to_be_radix

    // \`_radix\` must be less than 256
    #[builtin(to_le_radix)]
    fn __to_le_radix<let N: u32>(self, radix: u32) -> [u8; N] {}

    // \`_radix\` must be less than 256
    #[builtin(to_be_radix)]
    fn __to_be_radix<let N: u32>(self, radix: u32) -> [u8; N] {}

    // Returns self to the power of the given exponent value.
    // Caution: we assume the exponent fits into 32 bits
    // using a bigger bit size impacts negatively the performance and should be done only if the exponent does not fit in 32 bits
    pub fn pow_32(self, exponent: Field) -> Field {
        let mut r: Field = 1;
        let b: [u1; 32] = exponent.to_le_bits();

        for i in 1..33 {
            r *= r;
            r = (b[32 - i] as Field) * (r * self) + (1 - b[32 - i] as Field) * r;
        }
        r
    }

    // Parity of (prime) Field element, i.e. sgn0(x mod p) = 0 if x \`elem\` {0, ..., p-1} is even, otherwise sgn0(x mod p) = 1.
    pub fn sgn0(self) -> u1 {
        self as u1
    }

    pub fn lt(self, another: Field) -> bool {
        if crate::compat::is_bn254() {
            bn254_lt(self, another)
        } else {
            lt_fallback(self, another)
        }
    }

    /// Convert a little endian byte array to a field element.
    /// If the provided byte array overflows the field modulus then the Field will silently wrap around.
    pub fn from_le_bytes<let N: u32>(bytes: [u8; N]) -> Field {
        static_assert(
            N <= modulus_le_bytes().len(),
            "N must be less than or equal to modulus_le_bytes().len()",
        );
        let mut v = 1;
        let mut result = 0;

        for i in 0..N {
            result += (bytes[i] as Field) * v;
            v = v * 256;
        }
        result
    }

    /// Convert a big endian byte array to a field element.
    /// If the provided byte array overflows the field modulus then the Field will silently wrap around.
    pub fn from_be_bytes<let N: u32>(bytes: [u8; N]) -> Field {
        let mut v = 1;
        let mut result = 0;

        for i in 0..N {
            result += (bytes[N - 1 - i] as Field) * v;
            v = v * 256;
        }
        result
    }
}

#[builtin(modulus_num_bits)]
pub comptime fn modulus_num_bits() -> u64 {}

#[builtin(modulus_be_bits)]
pub comptime fn modulus_be_bits() -> [u1] {}

#[builtin(modulus_le_bits)]
pub comptime fn modulus_le_bits() -> [u1] {}

#[builtin(modulus_be_bytes)]
pub comptime fn modulus_be_bytes() -> [u8] {}

#[builtin(modulus_le_bytes)]
pub comptime fn modulus_le_bytes() -> [u8] {}

/// An unconstrained only built in to efficiently compare fields.
#[builtin(field_less_than)]
unconstrained fn __field_less_than(x: Field, y: Field) -> bool {}

pub(crate) unconstrained fn field_less_than(x: Field, y: Field) -> bool {
    __field_less_than(x, y)
}

// Convert a 32 byte array to a field element by modding
pub fn bytes32_to_field(bytes32: [u8; 32]) -> Field {
    // Convert it to a field element
    let mut v = 1;
    let mut high = 0 as Field;
    let mut low = 0 as Field;

    for i in 0..16 {
        high = high + (bytes32[15 - i] as Field) * v;
        low = low + (bytes32[16 + 15 - i] as Field) * v;
        v = v * 256;
    }
    // Abuse that a % p + b % p = (a + b) % p and that low < p
    low + high * v
}

fn lt_fallback(x: Field, y: Field) -> bool {
    if is_unconstrained() {
        // Safety: unconstrained context
        unsafe {
            field_less_than(x, y)
        }
    } else {
        let x_bytes: [u8; 32] = x.to_le_bytes();
        let y_bytes: [u8; 32] = y.to_le_bytes();
        let mut x_is_lt = false;
        let mut done = false;
        for i in 0..32 {
            if (!done) {
                let x_byte = x_bytes[32 - 1 - i] as u8;
                let y_byte = y_bytes[32 - 1 - i] as u8;
                let bytes_match = x_byte == y_byte;
                if !bytes_match {
                    x_is_lt = x_byte < y_byte;
                    done = true;
                }
            }
        }
        x_is_lt
    }
}

mod tests {
    use crate::{panic::panic, runtime};
    use super::field_less_than;

    #[test]
    // docs:start:to_be_bits_example
    fn test_to_be_bits() {
        let field = 2;
        let bits: [u1; 8] = field.to_be_bits();
        assert_eq(bits, [0, 0, 0, 0, 0, 0, 1, 0]);
    }
    // docs:end:to_be_bits_example

    #[test]
    // docs:start:to_le_bits_example
    fn test_to_le_bits() {
        let field = 2;
        let bits: [u1; 8] = field.to_le_bits();
        assert_eq(bits, [0, 1, 0, 0, 0, 0, 0, 0]);
    }
    // docs:end:to_le_bits_example

    #[test]
    // docs:start:to_be_bytes_example
    fn test_to_be_bytes() {
        let field = 2;
        let bytes: [u8; 8] = field.to_be_bytes();
        assert_eq(bytes, [0, 0, 0, 0, 0, 0, 0, 2]);
        assert_eq(Field::from_be_bytes::<8>(bytes), field);
    }
    // docs:end:to_be_bytes_example

    #[test]
    // docs:start:to_le_bytes_example
    fn test_to_le_bytes() {
        let field = 2;
        let bytes: [u8; 8] = field.to_le_bytes();
        assert_eq(bytes, [2, 0, 0, 0, 0, 0, 0, 0]);
        assert_eq(Field::from_le_bytes::<8>(bytes), field);
    }
    // docs:end:to_le_bytes_example

    #[test]
    // docs:start:to_be_radix_example
    fn test_to_be_radix() {
        // 259, in base 256, big endian, is [1, 3].
        // i.e. 3 * 256^0 + 1 * 256^1
        let field = 259;

        // The radix (in this example, 256) must be a power of 2.
        // The length of the returned byte array can be specified to be
        // >= the amount of space needed.
        let bytes: [u8; 8] = field.to_be_radix(256);
        assert_eq(bytes, [0, 0, 0, 0, 0, 0, 1, 3]);
        assert_eq(Field::from_be_bytes::<8>(bytes), field);
    }
    // docs:end:to_be_radix_example

    #[test]
    // docs:start:to_le_radix_example
    fn test_to_le_radix() {
        // 259, in base 256, little endian, is [3, 1].
        // i.e. 3 * 256^0 + 1 * 256^1
        let field = 259;

        // The radix (in this example, 256) must be a power of 2.
        // The length of the returned byte array can be specified to be
        // >= the amount of space needed.
        let bytes: [u8; 8] = field.to_le_radix(256);
        assert_eq(bytes, [3, 1, 0, 0, 0, 0, 0, 0]);
        assert_eq(Field::from_le_bytes::<8>(bytes), field);
    }
    // docs:end:to_le_radix_example

    #[test(should_fail_with = "radix must be greater than 1")]
    fn test_to_le_radix_1() {
        // this test should only fail in constrained mode
        if !runtime::is_unconstrained() {
            let field = 2;
            let _: [u8; 8] = field.to_le_radix(1);
        } else {
            panic(f"radix must be greater than 1");
        }
    }

    // TODO: Update this test to account for the Brillig restriction that the radix must be greater than 2
    //#[test]
    //fn test_to_le_radix_brillig_1() {
    //    // this test should only fail in constrained mode
    //    if runtime::is_unconstrained() {
    //        let field = 1;
    //        let out: [u8; 8] = field.to_le_radix(1);
    //        crate::println(out);
    //        let expected = [0; 8];
    //        assert(out == expected, "unexpected result");
    //    }
    //}

    #[test(should_fail_with = "radix must be a power of 2")]
    fn test_to_le_radix_3() {
        // this test should only fail in constrained mode
        if !runtime::is_unconstrained() {
            let field = 2;
            let _: [u8; 8] = field.to_le_radix(3);
        } else {
            panic(f"radix must be a power of 2");
        }
    }

    #[test]
    fn test_to_le_radix_brillig_3() {
        // this test should only fail in constrained mode
        if runtime::is_unconstrained() {
            let field = 1;
            let out: [u8; 8] = field.to_le_radix(3);
            let mut expected = [0; 8];
            expected[0] = 1;
            assert(out == expected, "unexpected result");
        }
    }

    #[test(should_fail_with = "radix must be less than or equal to 256")]
    fn test_to_le_radix_512() {
        // this test should only fail in constrained mode
        if !runtime::is_unconstrained() {
            let field = 2;
            let _: [u8; 8] = field.to_le_radix(512);
        } else {
            panic(f"radix must be less than or equal to 256")
        }
    }

    // TODO: Update this test to account for the Brillig restriction that the radix must be less than 512
    //#[test]
    //fn test_to_le_radix_brillig_512() {
    //    // this test should only fail in constrained mode
    //    if runtime::is_unconstrained() {
    //        let field = 1;
    //        let out: [u8; 8] = field.to_le_radix(512);
    //        let mut expected = [0; 8];
    //        expected[0] = 1;
    //        assert(out == expected, "unexpected result");
    //    }
    //}

    #[test]
    unconstrained fn test_field_less_than() {
        assert(field_less_than(0, 1));
        assert(field_less_than(0, 0x100));
        assert(field_less_than(0x100, 0 - 1));
        assert(!field_less_than(0 - 1, 0));
    }
}
`},43:{path:"std/panic.nr",source:`pub fn panic<T, U, let N: u32>(message: fmtstr<N, T>) -> U {
    assert(false, message);
    crate::mem::zeroed()
}
`},50:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-contracts/contracts/protocol/router_contract/src/main.nr",source:`mod test;
mod utils;

use dep::aztec::macros::aztec;

/// The purpose of this contract is to perform a check in public without revealing what contract enqueued the public
/// call. This is achieved by having a private function on this contract that enqueues the public call and hence
/// the \`msg_sender\` in the public call is the address of this contract.
#[aztec]
pub contract Router {
    use aztec::{macros::functions::{internal, private, public, view}, utils::comparison::compare};

    // docs:start:check_timestamp
    /// Asserts that the current timestamp in the enqueued public call satisfies the \`operation\` with respect
    /// to the \`value.
    #[private]
    fn check_timestamp(operation: u8, value: u64) {
        Router::at(context.this_address())._check_timestamp(operation, value).enqueue_view(
            &mut context,
        );
    }

    #[public]
    #[internal]
    #[view]
    fn _check_timestamp(operation: u8, value: u64) {
        let lhs_field = context.timestamp() as Field;
        let rhs_field = value as Field;
        assert(compare(lhs_field, operation, rhs_field), "Timestamp mismatch.");
    }
    // docs:end:check_timestamp

    /// Asserts that the current block number in the enqueued public call satisfies the \`operation\` with respect
    /// to the \`value.
    #[private]
    fn check_block_number(operation: u8, value: Field) {
        Router::at(context.this_address())._check_block_number(operation, value).enqueue_view(
            &mut context,
        );
    }

    #[public]
    #[internal]
    #[view]
    fn _check_block_number(operation: u8, value: Field) {
        assert(compare(context.block_number(), operation, value), "Block number mismatch.");
    }
}
`},54:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/call_interfaces.nr",source:`use dep::protocol_types::{
    abis::function_selector::FunctionSelector,
    address::AztecAddress,
    traits::{Deserialize, ToField},
};

use crate::context::{gas::GasOpts, private_context::PrivateContext, public_context::PublicContext};

use crate::hash::{hash_args, hash_calldata};
use crate::oracle::execution_cache;

pub trait CallInterface<let N: u32> {
    fn get_args(self) -> [Field];
    fn get_selector(self) -> FunctionSelector;
    fn get_name(self) -> str<N>;
    fn get_contract_address(self) -> AztecAddress;
    fn get_is_static(self) -> bool;
}

// PrivateCallInterface

pub struct PrivateCallInterface<let N: u32, T> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args_hash: Field,
    args: [Field],
    return_type: T,
    is_static: bool,
}

impl<let N: u32, T> PrivateCallInterface<N, T> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
        is_static: bool,
    ) -> Self {
        let args_hash = hash_args(args);
        Self {
            target_contract,
            selector,
            name,
            args_hash,
            args,
            return_type: std::mem::zeroed(),
            is_static,
        }
    }

    pub fn call<let M: u32>(self, context: &mut PrivateContext) -> T
    where
        T: Deserialize<M>,
    {
        execution_cache::store(self.args, self.args_hash);
        let returns_hash = context.call_private_function_with_args_hash(
            self.target_contract,
            self.selector,
            self.args_hash,
            false,
        );
        let returns: T = returns_hash.get_preimage();
        returns
    }

    pub fn view<let M: u32>(self, context: &mut PrivateContext) -> T
    where
        T: Deserialize<M>,
    {
        execution_cache::store(self.args, self.args_hash);
        let returns_hash = context.call_private_function_with_args_hash(
            self.target_contract,
            self.selector,
            self.args_hash,
            true,
        );
        returns_hash.get_preimage()
    }
}

impl<let N: u32, T> CallInterface<N> for PrivateCallInterface<N, T> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// PrivateVoidCallInterface

pub struct PrivateVoidCallInterface<let N: u32> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args_hash: Field,
    args: [Field],
    return_type: (), // Unit type () indicates this interface is for functions that return nothing (void)
    is_static: bool,
}

impl<let N: u32> PrivateVoidCallInterface<N> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
        is_static: bool,
    ) -> Self {
        let args_hash = hash_args(args);
        Self { target_contract, selector, name, args_hash, args, return_type: (), is_static }
    }

    pub fn call(self, context: &mut PrivateContext) {
        execution_cache::store(self.args, self.args_hash);
        context
            .call_private_function_with_args_hash(
                self.target_contract,
                self.selector,
                self.args_hash,
                false,
            )
            .assert_empty();
    }

    pub fn view(self, context: &mut PrivateContext) {
        execution_cache::store(self.args, self.args_hash);
        context
            .call_private_function_with_args_hash(
                self.target_contract,
                self.selector,
                self.args_hash,
                true,
            )
            .assert_empty();
    }
}

impl<let N: u32> CallInterface<N> for PrivateVoidCallInterface<N> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// PrivateStaticCallInterface

pub struct PrivateStaticCallInterface<let N: u32, T> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args_hash: Field,
    args: [Field],
    return_type: T,
    is_static: bool,
}

impl<let N: u32, T> PrivateStaticCallInterface<N, T> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
    ) -> Self {
        let args_hash = hash_args(args);
        Self {
            target_contract,
            selector,
            name,
            args_hash,
            args,
            return_type: std::mem::zeroed(),
            is_static: true,
        }
    }

    pub fn view<let M: u32>(self, context: &mut PrivateContext) -> T
    where
        T: Deserialize<M>,
    {
        execution_cache::store(self.args, self.args_hash);
        let returns = context.call_private_function_with_args_hash(
            self.target_contract,
            self.selector,
            self.args_hash,
            true,
        );
        returns.get_preimage()
    }
}

impl<let N: u32, T> CallInterface<N> for PrivateStaticCallInterface<N, T> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// PrivateStaticVoidCallInterface

pub struct PrivateStaticVoidCallInterface<let N: u32> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args_hash: Field,
    args: [Field],
    return_type: (), // Unit type () indicates this interface is for functions that return nothing (void)
    is_static: bool,
}

impl<let N: u32> PrivateStaticVoidCallInterface<N> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
    ) -> Self {
        let args_hash = hash_args(args);
        Self { target_contract, selector, name, args_hash, args, return_type: (), is_static: true }
    }

    pub fn view(self, context: &mut PrivateContext) {
        execution_cache::store(self.args, self.args_hash);
        context
            .call_private_function_with_args_hash(
                self.target_contract,
                self.selector,
                self.args_hash,
                true,
            )
            .assert_empty();
    }
}

impl<let N: u32> CallInterface<N> for PrivateStaticVoidCallInterface<N> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// PublicCallInterface

pub struct PublicCallInterface<let N: u32, T> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args: [Field],
    gas_opts: GasOpts,
    return_type: T,
    is_static: bool,
}

impl<let N: u32, T> PublicCallInterface<N, T> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
        is_static: bool,
    ) -> Self {
        Self {
            target_contract,
            selector,
            name,
            args,
            gas_opts: GasOpts::default(),
            return_type: std::mem::zeroed(),
            is_static,
        }
    }

    pub fn with_gas(self: &mut Self, gas_opts: GasOpts) -> &mut Self {
        self.gas_opts = gas_opts;
        self
    }

    pub unconstrained fn call<let M: u32>(self, context: &mut PublicContext) -> T
    where
        T: Deserialize<M>,
    {
        let returns = context.call_public_function(
            self.target_contract,
            self.selector,
            self.args,
            self.gas_opts,
        );
        Deserialize::deserialize(returns.as_array::<M>())
    }

    pub unconstrained fn view<let M: u32>(self, context: &mut PublicContext) -> T
    where
        T: Deserialize<M>,
    {
        let returns = context.static_call_public_function(
            self.target_contract,
            self.selector,
            self.args,
            self.gas_opts,
        );
        Deserialize::deserialize(returns.as_array::<M>())
    }

    pub fn enqueue(self, context: &mut PrivateContext) {
        let calldata = self.args.push_front(self.selector.to_field());
        let calldata_hash = hash_calldata(calldata);
        execution_cache::store(calldata, calldata_hash);
        context.call_public_function_with_calldata_hash(
            self.target_contract,
            calldata_hash,
            /*static=*/
            false,
        )
    }

    pub fn enqueue_view(self, context: &mut PrivateContext) {
        let calldata = self.args.push_front(self.selector.to_field());
        let calldata_hash = hash_calldata(calldata);
        execution_cache::store(calldata, calldata_hash);
        context.call_public_function_with_calldata_hash(
            self.target_contract,
            calldata_hash,
            /*static=*/
            true,
        )
    }
}

impl<let N: u32, T> CallInterface<N> for PublicCallInterface<N, T> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// PublicVoidCallInterface

pub struct PublicVoidCallInterface<let N: u32> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args: [Field],
    return_type: (), // Unit type () indicates this interface is for functions that return nothing (void)
    is_static: bool,
    gas_opts: GasOpts,
}

impl<let N: u32> PublicVoidCallInterface<N> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
        is_static: bool,
    ) -> Self {
        Self {
            target_contract,
            selector,
            name,
            args,
            return_type: (),
            is_static,
            gas_opts: GasOpts::default(),
        }
    }

    pub fn with_gas(self: &mut Self, gas_opts: GasOpts) -> &mut Self {
        self.gas_opts = gas_opts;
        self
    }

    pub unconstrained fn call(self, context: &mut PublicContext) {
        let returns = context.call_public_function(
            self.target_contract,
            self.selector,
            self.args,
            self.gas_opts,
        );
        assert(returns.len() == 0);
    }

    pub unconstrained fn view(self, context: &mut PublicContext) {
        let returns = context.static_call_public_function(
            self.target_contract,
            self.selector,
            self.args,
            self.gas_opts,
        );
        assert(returns.len() == 0);
    }

    pub fn enqueue(self, context: &mut PrivateContext) {
        let calldata = self.args.push_front(self.selector.to_field());
        let calldata_hash = hash_calldata(calldata);
        execution_cache::store(calldata, calldata_hash);
        context.call_public_function_with_calldata_hash(
            self.target_contract,
            calldata_hash,
            /*static=*/
            false,
        )
    }

    pub fn enqueue_view(self, context: &mut PrivateContext) {
        let calldata = self.args.push_front(self.selector.to_field());
        let calldata_hash = hash_calldata(calldata);
        execution_cache::store(calldata, calldata_hash);
        context.call_public_function_with_calldata_hash(
            self.target_contract,
            calldata_hash,
            /*static=*/
            true,
        )
    }

    pub fn set_as_teardown(self, context: &mut PrivateContext) {
        let calldata = self.args.push_front(self.selector.to_field());
        let calldata_hash = hash_calldata(calldata);
        execution_cache::store(calldata, calldata_hash);
        context.set_public_teardown_function_with_calldata_hash(
            self.target_contract,
            calldata_hash,
            false,
        )
    }
}

impl<let N: u32> CallInterface<N> for PublicVoidCallInterface<N> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// PublicStaticCallInterface

pub struct PublicStaticCallInterface<let N: u32, T> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args: [Field],
    return_type: T,
    is_static: bool,
    gas_opts: GasOpts,
}

impl<let N: u32, T> PublicStaticCallInterface<N, T> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
    ) -> Self {
        Self {
            target_contract,
            selector,
            name,
            args,
            return_type: std::mem::zeroed(),
            is_static: true,
            gas_opts: GasOpts::default(),
        }
    }

    pub fn with_gas(self: &mut Self, gas_opts: GasOpts) -> &mut Self {
        self.gas_opts = gas_opts;
        self
    }

    pub unconstrained fn view<let M: u32>(self, context: &mut PublicContext) -> T
    where
        T: Deserialize<M>,
    {
        let returns = context.static_call_public_function(
            self.target_contract,
            self.selector,
            self.args,
            self.gas_opts,
        );
        Deserialize::deserialize(returns.as_array::<M>())
    }

    pub fn enqueue_view(self, context: &mut PrivateContext) {
        let calldata = self.args.push_front(self.selector.to_field());
        let calldata_hash = hash_calldata(calldata);
        execution_cache::store(calldata, calldata_hash);
        context.call_public_function_with_calldata_hash(
            self.target_contract,
            calldata_hash,
            /*static=*/
            true,
        )
    }
}

impl<let N: u32, T> CallInterface<N> for PublicStaticCallInterface<N, T> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// PublicStaticVoidCallInterface

pub struct PublicStaticVoidCallInterface<let N: u32> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args: [Field],
    return_type: (), // Unit type () indicates this interface is for functions that return nothing (void)
    is_static: bool,
    gas_opts: GasOpts,
}

impl<let N: u32> PublicStaticVoidCallInterface<N> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
    ) -> Self {
        Self {
            target_contract,
            selector,
            name,
            args,
            return_type: (),
            is_static: true,
            gas_opts: GasOpts::default(),
        }
    }

    pub fn with_gas(self: &mut Self, gas_opts: GasOpts) -> &mut Self {
        self.gas_opts = gas_opts;
        self
    }

    pub unconstrained fn view(self, context: &mut PublicContext) {
        let returns = context.static_call_public_function(
            self.target_contract,
            self.selector,
            self.args,
            self.gas_opts,
        );
        assert(returns.len() == 0);
    }

    pub fn enqueue_view(self, context: &mut PrivateContext) {
        let calldata = self.args.push_front(self.selector.to_field());
        let calldata_hash = hash_calldata(calldata);
        execution_cache::store(calldata, calldata_hash);
        context.call_public_function_with_calldata_hash(
            self.target_contract,
            calldata_hash,
            /*static=*/
            true,
        )
    }
}

impl<let N: u32> CallInterface<N> for PublicStaticVoidCallInterface<N> {
    fn get_args(self) -> [Field] {
        self.args
    }

    fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    fn get_name(self) -> str<N> {
        self.name
    }

    fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }

    fn get_is_static(self) -> bool {
        self.is_static
    }
}

// UtilityCallInterface

pub struct UtilityCallInterface<let N: u32, T> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args_hash: Field,
    args: [Field],
    return_type: T,
}

impl<let N: u32, T> UtilityCallInterface<N, T> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
    ) -> Self {
        let args_hash = hash_args(args);
        Self { target_contract, selector, name, args_hash, args, return_type: std::mem::zeroed() }
    }

    pub fn get_args(self) -> [Field] {
        self.args
    }

    pub fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    pub fn get_name(self) -> str<N> {
        self.name
    }

    pub fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }
}

// UtilityVoidCallInterface

pub struct UtilityVoidCallInterface<let N: u32> {
    target_contract: AztecAddress,
    selector: FunctionSelector,
    name: str<N>,
    args_hash: Field,
    args: [Field],
    return_type: (),
}

impl<let N: u32> UtilityVoidCallInterface<N> {
    pub fn new(
        target_contract: AztecAddress,
        selector: FunctionSelector,
        name: str<N>,
        args: [Field],
    ) -> Self {
        let args_hash = hash_args(args);
        Self { target_contract, selector, name, args_hash, args, return_type: () }
    }

    pub fn get_args(self) -> [Field] {
        self.args
    }

    pub fn get_selector(self) -> FunctionSelector {
        self.selector
    }

    pub fn get_name(self) -> str<N> {
        self.name
    }

    pub fn get_contract_address(self) -> AztecAddress {
        self.target_contract
    }
}
`},61:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/private_context.nr",source:`use crate::{
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
`},62:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/public_context.nr",source:`use crate::context::gas::GasOpts;
use crate::hash::{
    compute_l1_to_l2_message_hash, compute_l1_to_l2_message_nullifier, compute_secret_hash,
};
use dep::protocol_types::abis::function_selector::FunctionSelector;
use dep::protocol_types::address::{AztecAddress, EthAddress};
use dep::protocol_types::constants::MAX_FIELD_VALUE;
use dep::protocol_types::traits::{Empty, FromField, Packable, Serialize, ToField};

pub struct PublicContext {
    pub args_hash: Option<Field>,
    pub compute_args_hash: fn() -> Field,
}

impl PublicContext {
    pub fn new(compute_args_hash: fn() -> Field) -> Self {
        PublicContext { args_hash: Option::none(), compute_args_hash }
    }

    pub fn emit_public_log<T, let N: u32>(_self: &mut Self, log: T)
    where
        T: Serialize<N>,
    {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { emit_public_log(Serialize::serialize(log).as_slice()) };
    }

    pub fn note_hash_exists(_self: Self, note_hash: Field, leaf_index: Field) -> bool {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { note_hash_exists(note_hash, leaf_index) } == 1
    }

    pub fn l1_to_l2_msg_exists(_self: Self, msg_hash: Field, msg_leaf_index: Field) -> bool {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { l1_to_l2_msg_exists(msg_hash, msg_leaf_index) } == 1
    }

    pub fn nullifier_exists(_self: Self, unsiloed_nullifier: Field, address: AztecAddress) -> bool {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { nullifier_exists(unsiloed_nullifier, address.to_field()) } == 1
    }

    pub fn consume_l1_to_l2_message(
        &mut self,
        content: Field,
        secret: Field,
        sender: EthAddress,
        leaf_index: Field,
    ) {
        let secret_hash = compute_secret_hash(secret);
        let message_hash = compute_l1_to_l2_message_hash(
            sender,
            self.chain_id(),
            /*recipient=*/
            self.this_address(),
            self.version(),
            content,
            secret_hash,
            leaf_index,
        );
        let nullifier = compute_l1_to_l2_message_nullifier(message_hash, secret);

        assert(
            !self.nullifier_exists(nullifier, self.this_address()),
            "L1-to-L2 message is already nullified",
        );
        assert(
            self.l1_to_l2_msg_exists(message_hash, leaf_index),
            "Tried to consume nonexistent L1-to-L2 message",
        );

        self.push_nullifier(nullifier);
    }

    pub fn message_portal(_self: &mut Self, recipient: EthAddress, content: Field) {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { send_l2_to_l1_msg(recipient, content) };
    }

    pub unconstrained fn call_public_function(
        _self: &mut Self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args: [Field],
        gas_opts: GasOpts,
    ) -> [Field] {
        let calldata = args.push_front(function_selector.to_field());

        call(
            gas_opts.l2_gas.unwrap_or(MAX_FIELD_VALUE),
            gas_opts.da_gas.unwrap_or(MAX_FIELD_VALUE),
            contract_address,
            calldata,
        );
        // Use success_copy to determine whether the call succeeded
        let success = success_copy();

        let result_data = returndata_copy(0, returndata_size());
        if !success {
            // Rethrow the revert data.
            avm_revert(result_data);
        }
        result_data
    }

    pub unconstrained fn static_call_public_function(
        _self: &mut Self,
        contract_address: AztecAddress,
        function_selector: FunctionSelector,
        args: [Field],
        gas_opts: GasOpts,
    ) -> [Field] {
        let calldata = args.push_front(function_selector.to_field());

        call_static(
            gas_opts.l2_gas.unwrap_or(MAX_FIELD_VALUE),
            gas_opts.da_gas.unwrap_or(MAX_FIELD_VALUE),
            contract_address,
            calldata,
        );
        // Use success_copy to determine whether the call succeeded
        let success = success_copy();

        let result_data = returndata_copy(0, returndata_size());
        if !success {
            // Rethrow the revert data.
            avm_revert(result_data);
        }
        result_data
    }

    pub fn push_note_hash(_self: &mut Self, note_hash: Field) {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { emit_note_hash(note_hash) };
    }
    pub fn push_nullifier(_self: &mut Self, nullifier: Field) {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { emit_nullifier(nullifier) };
    }

    pub fn this_address(_self: Self) -> AztecAddress {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            address()
        }
    }
    pub fn msg_sender(_self: Self) -> AztecAddress {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            sender()
        }
    }
    pub fn selector(_self: Self) -> FunctionSelector {
        // The selector is the first element of the calldata when calling a public function through dispatch.
        // Safety: AVM opcodes are constrained by the AVM itself
        let raw_selector: [Field; 1] = unsafe { calldata_copy(0, 1) };
        FunctionSelector::from_field(raw_selector[0])
    }
    pub fn get_args_hash(mut self) -> Field {
        if !self.args_hash.is_some() {
            self.args_hash = Option::some((self.compute_args_hash)());
        }

        self.args_hash.unwrap_unchecked()
    }
    pub fn transaction_fee(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            transaction_fee()
        }
    }

    pub fn chain_id(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            chain_id()
        }
    }
    pub fn version(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            version()
        }
    }
    pub fn block_number(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            block_number()
        }
    }
    pub fn timestamp(_self: Self) -> u64 {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            timestamp()
        }
    }
    pub fn fee_per_l2_gas(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            fee_per_l2_gas()
        }
    }
    pub fn fee_per_da_gas(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            fee_per_da_gas()
        }
    }

    pub fn l2_gas_left(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            l2_gas_left()
        }
    }
    pub fn da_gas_left(_self: Self) -> Field {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe {
            da_gas_left()
        }
    }
    pub fn is_static_call(_self: Self) -> bool {
        // Safety: AVM opcodes are constrained by the AVM itself
        unsafe { is_static_call() } == 1
    }

    pub fn raw_storage_read<let N: u32>(_self: Self, storage_slot: Field) -> [Field; N] {
        let mut out = [0; N];
        for i in 0..N {
            // Safety: AVM opcodes are constrained by the AVM itself
            out[i] = unsafe { storage_read(storage_slot + i as Field) };
        }
        out
    }

    pub fn storage_read<T, let N: u32>(self, storage_slot: Field) -> T
    where
        T: Packable<N>,
    {
        T::unpack(self.raw_storage_read(storage_slot))
    }

    pub fn raw_storage_write<let N: u32>(_self: Self, storage_slot: Field, values: [Field; N]) {
        for i in 0..N {
            // Safety: AVM opcodes are constrained by the AVM itself
            unsafe { storage_write(storage_slot + i as Field, values[i]) };
        }
    }

    pub fn storage_write<T, let N: u32>(self, storage_slot: Field, value: T)
    where
        T: Packable<N>,
    {
        self.raw_storage_write(storage_slot, value.pack());
    }
}

// Unconstrained opcode wrappers (do not use directly).
unconstrained fn address() -> AztecAddress {
    address_opcode()
}
unconstrained fn sender() -> AztecAddress {
    sender_opcode()
}
unconstrained fn transaction_fee() -> Field {
    transaction_fee_opcode()
}
unconstrained fn chain_id() -> Field {
    chain_id_opcode()
}
unconstrained fn version() -> Field {
    version_opcode()
}
unconstrained fn block_number() -> Field {
    block_number_opcode()
}
unconstrained fn timestamp() -> u64 {
    timestamp_opcode()
}
unconstrained fn fee_per_l2_gas() -> Field {
    fee_per_l2_gas_opcode()
}
unconstrained fn fee_per_da_gas() -> Field {
    fee_per_da_gas_opcode()
}
unconstrained fn l2_gas_left() -> Field {
    l2_gas_left_opcode()
}
unconstrained fn da_gas_left() -> Field {
    da_gas_left_opcode()
}
unconstrained fn is_static_call() -> Field {
    is_static_call_opcode()
}
unconstrained fn note_hash_exists(note_hash: Field, leaf_index: Field) -> u1 {
    note_hash_exists_opcode(note_hash, leaf_index)
}
unconstrained fn emit_note_hash(note_hash: Field) {
    emit_note_hash_opcode(note_hash)
}
unconstrained fn nullifier_exists(nullifier: Field, address: Field) -> u1 {
    nullifier_exists_opcode(nullifier, address)
}
unconstrained fn emit_nullifier(nullifier: Field) {
    emit_nullifier_opcode(nullifier)
}
unconstrained fn emit_public_log(message: [Field]) {
    emit_public_log_opcode(message)
}
unconstrained fn l1_to_l2_msg_exists(msg_hash: Field, msg_leaf_index: Field) -> u1 {
    l1_to_l2_msg_exists_opcode(msg_hash, msg_leaf_index)
}
unconstrained fn send_l2_to_l1_msg(recipient: EthAddress, content: Field) {
    send_l2_to_l1_msg_opcode(recipient, content)
}
unconstrained fn call(
    l2_gas_allocation: Field,
    da_gas_allocation: Field,
    address: AztecAddress,
    args: [Field],
) {
    call_opcode(l2_gas_allocation, da_gas_allocation, address, args)
}

unconstrained fn call_static(
    l2_gas_allocation: Field,
    da_gas_allocation: Field,
    address: AztecAddress,
    args: [Field],
) {
    call_static_opcode(l2_gas_allocation, da_gas_allocation, address, args)
}

pub unconstrained fn calldata_copy<let N: u32>(cdoffset: u32, copy_size: u32) -> [Field; N] {
    calldata_copy_opcode(cdoffset, copy_size)
}

// \`success_copy\` is placed immediately after the CALL opcode to get the success value
unconstrained fn success_copy() -> bool {
    success_copy_opcode()
}

unconstrained fn returndata_size() -> u32 {
    returndata_size_opcode()
}

unconstrained fn returndata_copy(rdoffset: u32, copy_size: u32) -> [Field] {
    returndata_copy_opcode(rdoffset, copy_size)
}

pub unconstrained fn avm_return(returndata: [Field]) {
    return_opcode(returndata)
}

// This opcode reverts using the exact data given. In general it should only be used
// to do rethrows, where the revert data is the same as the original revert data.
// For normal reverts, use Noir's \`assert\` which, on top of reverting, will also add
// an error selector to the revert data.
unconstrained fn avm_revert(revertdata: [Field]) {
    revert_opcode(revertdata)
}

unconstrained fn storage_read(storage_slot: Field) -> Field {
    storage_read_opcode(storage_slot)
}

unconstrained fn storage_write(storage_slot: Field, value: Field) {
    storage_write_opcode(storage_slot, value);
}

impl Empty for PublicContext {
    fn empty() -> Self {
        PublicContext::new(|| 0)
    }
}

// AVM oracles (opcodes) follow, do not use directly.
#[oracle(avmOpcodeAddress)]
unconstrained fn address_opcode() -> AztecAddress {}

#[oracle(avmOpcodeSender)]
unconstrained fn sender_opcode() -> AztecAddress {}

#[oracle(avmOpcodeTransactionFee)]
unconstrained fn transaction_fee_opcode() -> Field {}

#[oracle(avmOpcodeChainId)]
unconstrained fn chain_id_opcode() -> Field {}

#[oracle(avmOpcodeVersion)]
unconstrained fn version_opcode() -> Field {}

#[oracle(avmOpcodeBlockNumber)]
unconstrained fn block_number_opcode() -> Field {}

#[oracle(avmOpcodeTimestamp)]
unconstrained fn timestamp_opcode() -> u64 {}

#[oracle(avmOpcodeFeePerL2Gas)]
unconstrained fn fee_per_l2_gas_opcode() -> Field {}

#[oracle(avmOpcodeFeePerDaGas)]
unconstrained fn fee_per_da_gas_opcode() -> Field {}

#[oracle(avmOpcodeL2GasLeft)]
unconstrained fn l2_gas_left_opcode() -> Field {}

#[oracle(avmOpcodeDaGasLeft)]
unconstrained fn da_gas_left_opcode() -> Field {}

#[oracle(avmOpcodeIsStaticCall)]
unconstrained fn is_static_call_opcode() -> Field {}

#[oracle(avmOpcodeNoteHashExists)]
unconstrained fn note_hash_exists_opcode(note_hash: Field, leaf_index: Field) -> u1 {}

#[oracle(avmOpcodeEmitNoteHash)]
unconstrained fn emit_note_hash_opcode(note_hash: Field) {}

#[oracle(avmOpcodeNullifierExists)]
unconstrained fn nullifier_exists_opcode(nullifier: Field, address: Field) -> u1 {}

#[oracle(avmOpcodeEmitNullifier)]
unconstrained fn emit_nullifier_opcode(nullifier: Field) {}

// TODO(#11124): rename unencrypted to public in avm
#[oracle(avmOpcodeEmitUnencryptedLog)]
unconstrained fn emit_public_log_opcode(message: [Field]) {}

#[oracle(avmOpcodeL1ToL2MsgExists)]
unconstrained fn l1_to_l2_msg_exists_opcode(msg_hash: Field, msg_leaf_index: Field) -> u1 {}

#[oracle(avmOpcodeSendL2ToL1Msg)]
unconstrained fn send_l2_to_l1_msg_opcode(recipient: EthAddress, content: Field) {}

#[oracle(avmOpcodeCalldataCopy)]
unconstrained fn calldata_copy_opcode<let N: u32>(cdoffset: u32, copy_size: u32) -> [Field; N] {}

#[oracle(avmOpcodeReturndataSize)]
unconstrained fn returndata_size_opcode() -> u32 {}

#[oracle(avmOpcodeReturndataCopy)]
unconstrained fn returndata_copy_opcode(rdoffset: u32, copy_size: u32) -> [Field] {}

#[oracle(avmOpcodeReturn)]
unconstrained fn return_opcode(returndata: [Field]) {}

// This opcode reverts using the exact data given. In general it should only be used
// to do rethrows, where the revert data is the same as the original revert data.
// For normal reverts, use Noir's \`assert\` which, on top of reverting, will also add
// an error selector to the revert data.
#[oracle(avmOpcodeRevert)]
unconstrained fn revert_opcode(revertdata: [Field]) {}

#[oracle(avmOpcodeCall)]
unconstrained fn call_opcode(
    l2_gas_allocation: Field,
    da_gas_allocation: Field,
    address: AztecAddress,
    args: [Field],
) {}

#[oracle(avmOpcodeStaticCall)]
unconstrained fn call_static_opcode(
    l2_gas_allocation: Field,
    da_gas_allocation: Field,
    address: AztecAddress,
    args: [Field],
) {}

#[oracle(avmOpcodeSuccessCopy)]
unconstrained fn success_copy_opcode() -> bool {}

#[oracle(avmOpcodeStorageRead)]
unconstrained fn storage_read_opcode(storage_slot: Field) -> Field {}

#[oracle(avmOpcodeStorageWrite)]
unconstrained fn storage_write_opcode(storage_slot: Field, value: Field) {}
`},64:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/utility_context.nr",source:`use crate::oracle::{
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
`},68:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/hash.nr",source:`use dep::protocol_types::{
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
`},90:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/dispatch.nr",source:`use super::utils::compute_fn_selector;
use std::panic;

/// Returns an \`fn public_dispatch(...)\` function for the given module that's assumed to be an Aztec contract.
pub comptime fn generate_public_dispatch(m: Module) -> Quoted {
    let functions = m.functions();
    let functions =
        functions.filter(|function: FunctionDefinition| function.has_named_attribute("public"));

    let unit = get_type::<()>();

    let ifs = functions.map(|function: FunctionDefinition| {
        let parameters = function.parameters();
        let return_type = function.return_type();

        let selector: Field = compute_fn_selector(function);

        let mut parameters_size = 0;
        for param in parameters {
            parameters_size += size_in_fields(param.1);
        }

        let initial_read = if parameters.len() == 0 {
            quote {}
        } else {
            // The initial calldata_copy offset is 1 to skip the Field selector
            // The expected calldata is the serialization of
            // - FunctionSelector: the selector of the function intended to dispatch
            // - Parameters: the parameters of the function intended to dispatch
            // That is, exactly what is expected for a call to the target function,
            // but with a selector added at the beginning.
            quote {
                let input_calldata: [Field; $parameters_size] = dep::aztec::context::public_context::calldata_copy(1, $parameters_size);
                let mut reader = dep::aztec::protocol_types::utils::reader::Reader::new(input_calldata);
            }
        };

        let parameter_index = &mut 0;
        let reads = parameters.map(|param: (Quoted, Type)| {
            let parameter_index_value = *parameter_index;
            let param_name = f"arg{parameter_index_value}".quoted_contents();
            let param_type = param.1;
            let read = quote {
                let $param_name: $param_type = reader.read_struct(dep::aztec::protocol_types::traits::Deserialize::deserialize);
            };
            *parameter_index += 1;
            quote { $read }
        });
        let read = reads.join(quote { });

        let mut args = &[];
        for parameter_index in 0..parameters.len() {
            let param_name = f"arg{parameter_index}".quoted_contents();
            args = args.push_back(quote { $param_name });
        }

        let args = args.join(quote { , });
        // name of the function is assigned just before the call so debug metadata doesn't span most of this macro when figuring out where the call comes from.
        let name = function.name();
        let call = quote { $name($args) };

        let return_code = if return_type == unit {
            quote {
                $call;
                // Force early return.
                dep::aztec::context::public_context::avm_return([]);
            }
        } else {
            quote {
                let return_value = dep::aztec::protocol_types::traits::Serialize::serialize($call);
                dep::aztec::context::public_context::avm_return(return_value.as_slice());
            }
        };

        let if_ = quote {
            if selector == $selector {
                $initial_read
                $read
                $return_code
            }
        };
        if_
    });

    if ifs.len() == 0 {
        // No dispatch function if there are no public functions
        quote {}
    } else {
        let ifs = ifs.push_back(quote { panic(f"Unknown selector {selector}") });
        let dispatch = ifs.join(quote {  });

        let body = quote {
            // We mark this as public because our whole system depends on public
            // functions having this attribute. However, the public MACRO will
            // handle the public_dispatch function specially and do nothing.
            #[public]
            pub unconstrained fn public_dispatch(selector: Field) {
                $dispatch
            }
        };

        body
    }
}

comptime fn size_in_fields(typ: Type) -> u32 {
    let size = array_size_in_fields(typ);
    let size = size.or_else(|| bool_size_in_fields(typ));
    let size = size.or_else(|| constant_size_in_fields(typ));
    let size = size.or_else(|| field_size_in_fields(typ));
    let size = size.or_else(|| int_size_in_fields(typ));
    let size = size.or_else(|| str_size_in_fields(typ));
    let size = size.or_else(|| struct_size_in_fields(typ));
    let size = size.or_else(|| tuple_size_in_fields(typ));
    if size.is_some() {
        size.unwrap()
    } else {
        panic(f"Can't determine size in fields of {typ}")
    }
}

comptime fn array_size_in_fields(typ: Type) -> Option<u32> {
    typ.as_array().and_then(|typ: (Type, Type)| {
        let (typ, element_size) = typ;
        element_size.as_constant().map(|x: u32| x * size_in_fields(typ))
    })
}

comptime fn bool_size_in_fields(typ: Type) -> Option<u32> {
    if typ.is_bool() {
        Option::some(1)
    } else {
        Option::none()
    }
}

comptime fn field_size_in_fields(typ: Type) -> Option<u32> {
    if typ.is_field() {
        Option::some(1)
    } else {
        Option::none()
    }
}

comptime fn int_size_in_fields(typ: Type) -> Option<u32> {
    if typ.as_integer().is_some() {
        Option::some(1)
    } else {
        Option::none()
    }
}

comptime fn constant_size_in_fields(typ: Type) -> Option<u32> {
    typ.as_constant()
}

comptime fn str_size_in_fields(typ: Type) -> Option<u32> {
    typ.as_str().map(|typ| size_in_fields(typ))
}

comptime fn struct_size_in_fields(typ: Type) -> Option<u32> {
    typ.as_data_type().map(|typ: (TypeDefinition, [Type])| {
        let struct_type = typ.0;
        let generics = typ.1;
        let mut size = 0;
        for field in struct_type.fields(generics) {
            size += size_in_fields(field.1);
        }
        size
    })
}

comptime fn tuple_size_in_fields(typ: Type) -> Option<u32> {
    typ.as_tuple().map(|types: [Type]| {
        let mut size = 0;
        for typ in types {
            size += size_in_fields(typ);
        }
        size
    })
}

comptime fn get_type<T>() -> Type {
    let t: T = std::mem::zeroed();
    std::meta::type_of(t)
}
`},97:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/functions/utils.nr",source:`use crate::macros::{
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
`},138:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/enqueue_public_function_call.nr",source:`use dep::protocol_types::address::AztecAddress;

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
`},139:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/execution.nr",source:`use dep::protocol_types::address::AztecAddress;

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
`},140:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/execution_cache.nr",source:`/// Stores values represented as slice in execution cache to be later obtained by its hash.
pub fn store(values: [Field], hash: Field) {
    // Safety: This oracle call returns nothing: we only call it for its side effects. It is therefore always safe
    // to call. When loading the values, however, the caller must check that the values are indeed the preimage.
    unsafe { store_in_execution_cache_oracle_wrapper(values, hash) };
}

unconstrained fn store_in_execution_cache_oracle_wrapper(values: [Field], hash: Field) {
    store_in_execution_cache_oracle(values, hash);
}

pub unconstrained fn load<let N: u32>(hash: Field) -> [Field; N] {
    load_from_execution_cache_oracle(hash)
}

#[oracle(storeInExecutionCache)]
unconstrained fn store_in_execution_cache_oracle(_values: [Field], _hash: Field) {}

#[oracle(loadFromExecutionCache)]
unconstrained fn load_from_execution_cache_oracle<let N: u32>(_hash: Field) -> [Field; N] {}
`},185:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/utils/comparison.nr",source:`struct ComparatorEnum {
    pub EQ: u8,
    pub NEQ: u8,
    pub LT: u8,
    pub LTE: u8,
    pub GT: u8,
    pub GTE: u8,
}

pub global Comparator: ComparatorEnum =
    ComparatorEnum { EQ: 1, NEQ: 2, LT: 3, LTE: 4, GT: 5, GTE: 6 };

pub fn compare(lhs: Field, operation: u8, rhs: Field) -> bool {
    // Values are computed ahead of time because circuits evaluate all branches
    let is_equal = lhs == rhs;
    let is_lt = lhs.lt(rhs);

    if (operation == Comparator.EQ) {
        is_equal
    } else if (operation == Comparator.NEQ) {
        !is_equal
    } else if (operation == Comparator.LT) {
        is_lt
    } else if (operation == Comparator.LTE) {
        is_lt | is_equal
    } else if (operation == Comparator.GT) {
        !is_lt & !is_equal
    } else if (operation == Comparator.GTE) {
        !is_lt
    } else {
        panic(f"Invalid operation")
    }
}

mod test {
    use super::Comparator;
    use super::compare;

    #[test]
    unconstrained fn test_compare() {
        let lhs = 10;
        let rhs = 10;
        assert(compare(lhs, Comparator.EQ, rhs), "Expected lhs to be equal to rhs");

        let lhs = 10;
        let rhs = 11;
        assert(compare(lhs, Comparator.NEQ, rhs), "Expected lhs to be not equal to rhs");

        let lhs = 10;
        let rhs = 11;
        assert(compare(lhs, Comparator.LT, rhs), "Expected lhs to be less than rhs");

        let lhs = 10;
        let rhs = 10;
        assert(compare(lhs, Comparator.LTE, rhs), "Expected lhs to be less than or equal to rhs");

        let lhs = 11;
        let rhs = 10;
        assert(compare(lhs, Comparator.GT, rhs), "Expected lhs to be greater than rhs");

        let lhs = 10;
        let rhs = 10;
        assert(
            compare(lhs, Comparator.GTE, rhs),
            "Expected lhs to be greater than or equal to rhs",
        );

        let lhs = 11;
        let rhs = 10;
        assert(
            compare(lhs, Comparator.GTE, rhs),
            "Expected lhs to be greater than or equal to rhs",
        );

        let lhs = 10;
        let rhs = 11;
        assert(!compare(lhs, Comparator.EQ, rhs), "Expected lhs to be not equal to rhs");

        let lhs = 10;
        let rhs = 10;
        assert(!compare(lhs, Comparator.NEQ, rhs), "Expected lhs to not be not equal to rhs");

        let lhs = 11;
        let rhs = 10;
        assert(!compare(lhs, Comparator.LT, rhs), "Expected lhs to not be less than rhs");

        let lhs = 11;
        let rhs = 10;
        assert(
            !compare(lhs, Comparator.LTE, rhs),
            "Expected lhs to not be less than or equal to rhs",
        );

        let lhs = 10;
        let rhs = 10;
        assert(!compare(lhs, Comparator.GT, rhs), "Expected lhs to not be greater than rhs");

        let lhs = 10;
        let rhs = 11;
        assert(
            !compare(lhs, Comparator.GTE, rhs),
            "Expected lhs to not be greater than or equal to rhs",
        );

        let lhs = 10;
        let rhs = 11;
        assert(
            !compare(lhs, Comparator.GTE, rhs),
            "Expected lhs to not be greater than or equal to rhs",
        );
    }
}
`},282:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/hash.nr",source:`use crate::{
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
`},299:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/poseidon2.nr",source:`use crate::constants::TWO_POW_64;

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
`},339:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/type_serialization.nr",source:`use crate::traits::{Deserialize, Serialize};

global BOOL_SERIALIZED_LEN: u32 = 1;
global U8_SERIALIZED_LEN: u32 = 1;
global U16_SERIALIZED_LEN: u32 = 1;
global U32_SERIALIZED_LEN: u32 = 1;
global U64_SERIALIZED_LEN: u32 = 1;
global U128_SERIALIZED_LEN: u32 = 1;
global FIELD_SERIALIZED_LEN: u32 = 1;
global I8_SERIALIZED_LEN: u32 = 1;
global I16_SERIALIZED_LEN: u32 = 1;
global I32_SERIALIZED_LEN: u32 = 1;
global I64_SERIALIZED_LEN: u32 = 1;

impl Serialize<BOOL_SERIALIZED_LEN> for bool {
    fn serialize(self) -> [Field; BOOL_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<BOOL_SERIALIZED_LEN> for bool {
    fn deserialize(fields: [Field; BOOL_SERIALIZED_LEN]) -> bool {
        fields[0] as bool
    }
}

impl Serialize<U8_SERIALIZED_LEN> for u8 {
    fn serialize(self) -> [Field; U8_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<U8_SERIALIZED_LEN> for u8 {
    fn deserialize(fields: [Field; U8_SERIALIZED_LEN]) -> Self {
        fields[0] as u8
    }
}

impl Serialize<U16_SERIALIZED_LEN> for u16 {
    fn serialize(self) -> [Field; U16_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<U16_SERIALIZED_LEN> for u16 {
    fn deserialize(fields: [Field; U16_SERIALIZED_LEN]) -> Self {
        fields[0] as u16
    }
}

impl Serialize<U32_SERIALIZED_LEN> for u32 {
    fn serialize(self) -> [Field; U32_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<U32_SERIALIZED_LEN> for u32 {
    fn deserialize(fields: [Field; U32_SERIALIZED_LEN]) -> Self {
        fields[0] as u32
    }
}

impl Serialize<U64_SERIALIZED_LEN> for u64 {
    fn serialize(self) -> [Field; U64_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<U64_SERIALIZED_LEN> for u64 {
    fn deserialize(fields: [Field; U64_SERIALIZED_LEN]) -> Self {
        fields[0] as u64
    }
}

impl Serialize<U128_SERIALIZED_LEN> for u128 {
    fn serialize(self) -> [Field; U128_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<U128_SERIALIZED_LEN> for u128 {
    fn deserialize(fields: [Field; U128_SERIALIZED_LEN]) -> Self {
        fields[0] as u128
    }
}

impl Serialize<FIELD_SERIALIZED_LEN> for Field {
    fn serialize(self) -> [Field; FIELD_SERIALIZED_LEN] {
        [self]
    }
}

impl Deserialize<FIELD_SERIALIZED_LEN> for Field {
    fn deserialize(fields: [Field; FIELD_SERIALIZED_LEN]) -> Self {
        fields[0]
    }
}

impl Serialize<I8_SERIALIZED_LEN> for i8 {
    fn serialize(self) -> [Field; I8_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<I8_SERIALIZED_LEN> for i8 {
    fn deserialize(fields: [Field; I8_SERIALIZED_LEN]) -> Self {
        fields[0] as i8
    }
}

impl Serialize<I16_SERIALIZED_LEN> for i16 {
    fn serialize(self) -> [Field; I16_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<I16_SERIALIZED_LEN> for i16 {
    fn deserialize(fields: [Field; I16_SERIALIZED_LEN]) -> Self {
        fields[0] as i16
    }
}

impl Serialize<I32_SERIALIZED_LEN> for i32 {
    fn serialize(self) -> [Field; I32_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<I32_SERIALIZED_LEN> for i32 {
    fn deserialize(fields: [Field; I32_SERIALIZED_LEN]) -> Self {
        fields[0] as i32
    }
}

impl Serialize<I64_SERIALIZED_LEN> for i64 {
    fn serialize(self) -> [Field; I64_SERIALIZED_LEN] {
        [self as Field]
    }
}

impl Deserialize<I64_SERIALIZED_LEN> for i64 {
    fn deserialize(fields: [Field; I64_SERIALIZED_LEN]) -> Self {
        fields[0] as i64
    }
}

impl<T, let N: u32, let M: u32> Serialize<N * M> for [T; N]
where
    T: Serialize<M>,
{
    fn serialize(self) -> [Field; N * M] {
        let mut result: [Field; N * M] = std::mem::zeroed();
        let mut serialized: [Field; M] = std::mem::zeroed();
        for i in 0..N {
            serialized = self[i].serialize();
            for j in 0..M {
                result[i * M + j] = serialized[j];
            }
        }
        result
    }
}

impl<T, let N: u32, let M: u32> Deserialize<N * M> for [T; N]
where
    T: Deserialize<M>,
{
    fn deserialize(fields: [Field; N * M]) -> Self {
        let mut reader = crate::utils::reader::Reader::new(fields);
        let mut result: [T; N] = std::mem::zeroed();
        reader.read_struct_array::<T, M, N>(Deserialize::deserialize, result)
    }
}

#[test]
fn test_u16_serialization() {
    let a: u16 = 10;
    assert_eq(a, u16::deserialize(a.serialize()));
}

#[test]
fn test_i8_serialization() {
    let a: i8 = -10;
    assert_eq(a, i8::deserialize(a.serialize()));
}

#[test]
fn test_i16_serialization() {
    let a: i16 = -10;
    assert_eq(a, i16::deserialize(a.serialize()));
}

#[test]
fn test_i32_serialization() {
    let a: i32 = -10;
    assert_eq(a, i32::deserialize(a.serialize()));
}

#[test]
fn test_i64_serialization() {
    let a: i64 = -10;
    assert_eq(a, i64::deserialize(a.serialize()));
}
`},358:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/utils/reader.nr",source:`pub struct Reader<let N: u32> {
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
`}},l={transpiled:!0,noir_version:e,name:n,functions:t,outputs:s,file_map:a};export{l as default,a as file_map,t as functions,n as name,e as noir_version,s as outputs,i as transpiled};
