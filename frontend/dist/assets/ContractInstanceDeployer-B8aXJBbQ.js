const i=!0,e="1.0.0-beta.5+0000000000000000000000000000000000000000",n="ContractInstanceDeployer",t=[{name:"deploy",is_unconstrained:!1,custom_attributes:["private"],abi:{parameters:[{name:"inputs",type:{kind:"struct",path:"aztec::context::inputs::private_context_inputs::PrivateContextInputs",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"historical_header",type:{kind:"struct",path:"aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]},visibility:"private"},{name:"salt",type:{kind:"field"},visibility:"private"},{name:"contract_class_id",type:{kind:"struct",path:"aztec::protocol_types::contract_class_id::ContractClassId",fields:[{name:"inner",type:{kind:"field"}}]},visibility:"private"},{name:"initialization_hash",type:{kind:"field"},visibility:"private"},{name:"public_keys",type:{kind:"struct",path:"aztec::protocol_types::public_keys::PublicKeys",fields:[{name:"npk_m",type:{kind:"struct",path:"aztec::protocol_types::public_keys::NpkM",fields:[{name:"inner",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}}]}},{name:"ivpk_m",type:{kind:"struct",path:"aztec::protocol_types::public_keys::IvpkM",fields:[{name:"inner",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}}]}},{name:"ovpk_m",type:{kind:"struct",path:"aztec::protocol_types::public_keys::OvpkM",fields:[{name:"inner",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}}]}},{name:"tpk_m",type:{kind:"struct",path:"aztec::protocol_types::public_keys::TpkM",fields:[{name:"inner",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}}]}}]},visibility:"private"},{name:"universal_deploy",type:{kind:"boolean"},visibility:"private"}],return_type:{abi_type:{kind:"struct",path:"aztec::protocol_types::abis::private_circuit_public_inputs::PrivateCircuitPublicInputs",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"min_revertible_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"is_fee_payer",type:{kind:"boolean"}},{name:"max_block_number",type:{kind:"struct",path:"aztec::protocol_types::abis::max_block_number::MaxBlockNumber",fields:[{name:"_opt",type:{kind:"struct",path:"std::option::Option",fields:[{name:"_is_some",type:{kind:"boolean"}},{name:"_value",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}},{name:"note_hash_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifier_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"key_validation_requests_and_generators",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::validation_requests::key_validation_request_and_generator::KeyValidationRequestAndGenerator",fields:[{name:"request",type:{kind:"struct",path:"aztec::protocol_types::abis::validation_requests::key_validation_request::KeyValidationRequest",fields:[{name:"pk_m",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}},{name:"sk_app",type:{kind:"field"}}]}},{name:"sk_app_generator",type:{kind:"field"}}]}}},{name:"note_hashes",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::note_hash::NoteHash",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifiers",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::nullifier::Nullifier",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"note_hash",type:{kind:"field"}}]}}},{name:"private_call_requests",type:{kind:"array",length:5,type:{kind:"struct",path:"aztec::protocol_types::abis::private_call_request::PrivateCallRequest",fields:[{name:"call_context",type:{kind:"struct",path:"aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_call_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_teardown_call_request",type:{kind:"struct",path:"aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"l2_to_l1_msgs",type:{kind:"array",length:2,type:{kind:"struct",path:"aztec::protocol_types::messaging::l2_to_l1_message::L2ToL1Message",fields:[{name:"recipient",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"content",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"private_logs",type:{kind:"array",length:16,type:{kind:"struct",path:"aztec::protocol_types::abis::private_log::PrivateLogData",fields:[{name:"log",type:{kind:"struct",path:"aztec::protocol_types::abis::log::Log",fields:[{name:"fields",type:{kind:"array",length:18,type:{kind:"field"}}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"note_hash_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"contract_class_logs_hashes",type:{kind:"array",length:1,type:{kind:"struct",path:"aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"aztec::protocol_types::abis::log_hash::LogHash",fields:[{name:"value",type:{kind:"field"}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"historical_header",type:{kind:"struct",path:"aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}}]},visibility:"databus"},error_types:{"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"6485997221020871071":{error_kind:"string",string:"call to assert_max_bit_size"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"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",brillig_names:["store_in_execution_cache_oracle_wrapper","call_private_function_internal","decompose_hint","lte_hint","notify_created_nullifier_oracle_wrapper","debug_log_oracle_wrapper","directive_invert"],verification_key:"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"},{name:"get_update_delay",is_unconstrained:!0,custom_attributes:["public","view"],abi:{parameters:[],return_type:{abi_type:{kind:"integer",sign:"unsigned",width:32},visibility:"public"},error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"11343565365413149907":{error_kind:"string",string:"Function get_update_delay can only be called statically"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"tZnbbhs5DIbfxde5kCgepLxKURRu6hYGDCdwkwUWRd59SY1I2wVm0GjRm8w3tPQPSVGHmfzafTt8ffvx5Xj+/vxz9/jp1+7r5Xg6HX98OT0/7V+Pz2e1/tol+5OzXsqDXmn3iHqFNK7jvpRxrbtH0SvqfTYD1gEEDjKA3cJuEbcID6jJgRzagIYO9gh62EFuA6A4+E/FLcUt6BaUAZQdeAAnB3LwRwg6mKCmBio4yICWHWiBkpIDOozuJReHNgDcAt6mWC82aAN6FB1kQI+iAzl4Y/bGXAeIW8S79yg68ICWHPzpbXTHBA6jMebs4BarlFwNrHtTKDAAkwM5qKuQFAgd6gCrlgV4gCQHbyzevbqlevfm3dvoTik5oMNoTBkczJIVgAcU64UGNMCGoINlfgFrrCETm6UZ8ABxi1V4scaW8MIGMsBcLWJgFtVhG/cFNMCi3RnRwS2WMUwGakF1ldksYNAGiFssUagVxZYoVDcEsoM6hlrYUrKDW9AsbGAW9VAsZKwGPIDdYiGjOiYWMiUDtZA6JjU7uKV5L5spZqk2Ogu4xZYgc75mXPypNlM6gFtALaRxNatn0nBafxYZtAGWVYOcrHwHsZM9hdjI4ifpREHNyUZ9kDhRtOP41aYaVSNL/kLdp4XYyQZ9kAzKCYKsXTOy4Ac1JxAnm1qDoofNskHRl9Q/Tp2qk02wQexkU2wQBkWPGio1bC1UmqtASkGmko0sz4PECSCoOtnCvZBV3yDPM6CPB1AJCpvtGQy2K1n+2Pav0p+7EAY1J1tyqe9j5sFCPacLiROGDcNGYaOwcdg49CRsfUIsu2YKwqDo0aKH1UaPCJNlo2+w3ftO5n2PA3v+OpWwmfcL9UxSJ3aisFkVs80AtO1vEAaFsnj+0Op5kOe5r7eD/LmUIMjbUYwHxXj0VXch6H3f3x92fib58no5HOxIcnNI0aPLy/5yOL/uHs9vp9PD7p/96a03+vmyP/fr6/6iv2oNHs7f9KqC34+ng9H7w7V3Wu+aga34enflWkKi0Z1GXteQYmtMl5AiORT43gtYV2iQXKHpJFlT+EActBbHhoZk9EyKLiChQPde0LqCbrWuoLgaB68rVMqeiaqb8kQmRJfQiKK0tSjqRi6LzbsllZgxFDLdp7JtSNhe0xUgQQiUXO9raisMsV12CUMahwbU+zjyRmHq2jUk9Nx2VUi/KWwUpp69PZkAqa1rlI2iAA/kdkA/pNBkKHCmuTiguhNQbkbkQxqSY1BlKxL5uxq6j/sk01esOqchUlxDGsxptOQ51ePBusbWTMMYlkzIqzMNNoaFJcV8B75Zv+/nGpStSGIBz02ukWimp1YdWV11YGPxLLV4MvQtDVe9gI3lk0txN/Ttgla3oo1hrXqO9xW43kwVnoxEynokmxrVK1RfVWlVo2wMChH4bCN9jVvX2Nrca4lNsdLq5l42KlQ4VkB9fVrdFctWhep5Kyasnp94VWQzHdfdmWG9wAptbQgxLLo38M3WRn+uAfbhYGwqRLMaEhrc5jRKrBxQcp7UAAoNmvUDMDRupsuHNPSjjWtgntWAyCnenP8+qBEbHMpkTrFFfegxck6DIPJxO/U/qBH1QTxZpxTzVj874pwGX+cLY53ViLHVN4VJjXrVaLKq8cfLem6raxDB1nYdByA9a9zWev7j16UU5aEfYdbPlFsSOTYGXZ3rnASHF7nOeVHibKw45wVBuh7CZE6Cr+e42uYCuZ4mC8wFUjDe2/RjzYyEoA+IIM8INIwXeZoKoiWJLwFzHkRNNaH/GcLvAp/1dv90vNz9K+ndpC7H/dfTYdx+fzs/3fz6+u+L/+L/inq5PD8dvr1dDqZ0/X+U/vkErT0USJ/tm6neZq0s/Uppt/o56lPRJVk/531+N2f+Aw==",brillig_names:["get_update_delay"]},{name:"public_dispatch",is_unconstrained:!0,custom_attributes:["public"],abi:{parameters:[{name:"selector",type:{kind:"field"},visibility:"private"}],return_type:null,error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"2830029349304997821":{error_kind:"fmtstring",length:27,item_types:[{kind:"field"}]},"2920182694213909827":{error_kind:"string",string:"attempt to subtract with overflow"},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"6504213605561840204":{error_kind:"string",string:"New contract class is not registered"},"10019982601749771606":{error_kind:"string",string:"msg.sender is not deployed"},"11343565365413149907":{error_kind:"string",string:"Function get_update_delay can only be called statically"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"15573886522241766899":{error_kind:"string",string:"New update delay is too low"},"17595253152434889169":{error_kind:"string",string:"offset too large"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"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",brillig_names:["public_dispatch"]},{name:"set_update_delay",is_unconstrained:!0,custom_attributes:["public"],abi:{parameters:[{name:"new_update_delay",type:{kind:"integer",sign:"unsigned",width:32},visibility:"private"}],return_type:null,error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"2920182694213909827":{error_kind:"string",string:"attempt to subtract with overflow"},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"10019982601749771606":{error_kind:"string",string:"msg.sender is not deployed"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"15573886522241766899":{error_kind:"string",string:"New update delay is too low"},"17595253152434889169":{error_kind:"string",string:"offset too large"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"JwACBAEoAAABBIBMJwAABAMnAgIEAScCAwQAHwoAAgADgEsdAIBLgEsELgiASwABJQAAAEwlAAAAhSgCAAEEgEwnAgIEADsOAAIAASgAgEMEABkoAIBEBAADKACARQEAACgAgEYEAAAoAIBHAQABKACASAQAASgAgEkAAAEoAIBKBAAEJiUAAAjrHgIAAwEeAgAEADMqAAMABAAFJAIABQAAAKklAAAJFA0iAAGAQwAECyIABIBFAAUkAgAFAAAAxiUAAAkmJwIEAAAtCAEFJwIGBAQACAEGAScDBQQBACIFAgYtCgYHLQ4EBwAiBwIHLQ4EBwAiBwIHLQ4EBysCAAYAAAAAAAAAAAIAAAAAAAAAAC0IAQcnAggEBQAIAQgBJwMHBAEAIgcCCC0KCAktDgQJACIJAgktDgQJACIJAgktDgQJACIJAgktDgYJLQgBBgAAAQIBLQ4FBi0IAQUAAAECAS0OBwUtCAEHAAABAgEuDIBGAActCAEIAAABAgEuDIBFAAgnAgkECi0IAAotCgYLLQoFDC0KBw0tCggOLgiASQAPAAgACQAlAAAJOC0CAAAnAgkECi0IAAotCgYLLQoFDC0KBw0tCggOLQoDDwAIAAkAJQAACTgtAgAAJwIJBAotCAAKLQoGCy0KBQwtCgcNLQoIDgAIAAkAJQAACmEtAgAALQoLAwoqAwQFCyIABYBFAAYkAgAGAAACIiUAAArVLwoAAwAFHAoFBwQcCgcGAAIqBQYHLAIABQAtXgmLgro3tDuZoTFhGP0g1C9RZsnp8T+16mWpbR4KbQQqBwUGHAoGCAQcCggHABwKBwgEAioGBwkEKgkFBhwKBgkBHAoJBwAcCgcJAQIqBgcKLAIABgAwM+okblBuiY6X9XDK/9cEywu0YDE/tyCynhOeXBAAAQQqCgYLHAoLDAQcCgwKABwKCgwEAioLCg0EKg0FChwKCgsBHAoLBQAcCgULAQIqCgUNBCoNBgocCgoNBBwKDQYAHAoGCgQWCgsGHAoFDQQcCgYOBAQqDQoGFgoJChwKBw0EHAoKDwQEKg0MCi0IAQwAAAECAS0OCwwtCAELAAABAgEtDgYLLQgBDQAAAQIBLQ4JDS0IAQkAAAECAS0OCgktCAEQAAABAgEtDggQHgIAEQUcChETBBwKExIAHAoSEQQMKhEIEigCAAgEDhAkAgASAAADqiMAAAONHAoHBQQEKgUKBgQqDwgFACoGBQctCgcCIwAAA8ccCgUHBAQqBwYFBCoOCAYAKgUGBy0KBwIjAAADxwwqAgEGJAIABgAAA/kjAAAD2QIqAgEGDioBAgckAgAHAAAD8CUAAArnLQoGBSMAAAQELgiARgAFIwAABAQAKhEFBw4qEQcIJAIACAAABBslAAAK+S4MgEcADC0OAgsuDIBHAA0tDgEJLQ4HEC0IAQEnAgIEBAAIAQIBJwMBBAEAIgECAi0KAgUtDgQFACIFAgUtDgQFACIFAgUtDgQFLQgBAgAAAQIBLQ4BAi4IgEYABiMAAAR9DSIABoBEAAEkAgABAAAInCMAAASSLQsCBS0IAQInAgYEBAAIAQYBJwMCBAEAIgICBi0KBgctDgQHACIHAgctDgQHACIHAgctDgQHASIABYBIAActCwcGJwIHBAIAKgUHCi0LCggBIgAFgEQADi0LDgotCAEFJwIOBAQACAEOAScDBQQBACIFAg4tCg4PLQ4GDwAiDwIPLQ4IDwAiDwIPLQ4KDy0LBQgAIggCCC0OCAUnAgoEES0IABEtCgUSLgiASAATAAgACgAlAAALCy0CAAAtChIILQsFCgAiCgIKLQ4KBScCDgQRLQgAES0KBRItCgcTAAgADgAlAAALCy0CAAAtChIKASIACIBIAActCwcFASIACoBIAAgtCwgHHAoGCgQcCgoIAC0LDAYtCwsKLQsNCy0LCQwtCxAJHAoJDQAnAgkAAicCDgAgJwIQBBEtCAARLQoJEi0KDhMACAAQACUAAAuLLQIAAC0KEg8EKg0PDgAqCA4NHAoLCAAnAgsAQCcCDwQQLQgAEC0KCREtCgsSAAgADwAlAAALiy0CAAAtChEOBCoIDgsAKg0LCBwKDAsAJwIMAEgnAg4EDy0IAA8tCgkQLQoMEQAIAA4AJQAAC4stAgAALQoQDQQqCw0MACoIDAscCgYIACcCBgBoJwINBA4tCAAOLQoJDy0KBhAACAANACUAAAuLLQIAAC0KDwwEKggMBgAqCwYIHAoKBgAnAgoAcCcCDAQNLQgADS0KCQ4tCgoPAAgADAAlAAALiy0CAAAtCg4LBCoGCwkAKggJBi0LAggAIggCCC0OCAIrAgAIAAAAAAAAAAADAAAAAAAAAAAtCAEJJwIKBAUACAEKAScDCQQBACIJAgotCgoLLQ4ECwAiCwILLQ4ECwAiCwILLQ4ECwAiCwILLQ4ICy0IAQQAAAECAS0OAgQtCAECAAABAgEtDgkCLQgBCAAAAQIBLgyARgAILQgBCQAAAQIBLgyARQAJJwIKBAstCAALLQoEDC0KAg0tCggOLQoJDy0KBhAACAAKACUAAAk4LQIAACcCCgQLLQgACy0KBAwtCgINLQoIDi0KCQ8tCgUQAAgACgAlAAAJOC0CAAAnAgoECy0IAAstCgQMLQoCDS0KCA4tCgkPLQoHEAAIAAoAJQAACTgtAgAAJwILBAwtCAAMLQoEDS0KAg4tCggPLQoJEAAIAAsAJQAACmEtAgAALQoNCi0IAQInAgQEBQAIAQQBJwMCBAEAIgICBC0KBAgtDgYIACIIAggtDgUIACIIAggtDgcIACIIAggtDgoILgiARgABIwAACFcNIgABgEoABCQCAAQAAAhtIwAACGwmHAoBBAAAKgMEBQAiAgIGACoGAQctCwcEMAoABAAFASIAAYBIAAQtCgQBIwAACFccCgYBAAAqAwEFLwoABQABLQsCBS4CAAWAAygAgAQEAAQlAAAMiy4IgAUABwAiBwIIACoIBgotDgEKLQ4HAgEiAAaASAABLQoBBiMAAAR9KACABAR4AA0AAACABIADJACAAwAACRMqAQABBfeh86+lrdTKPAQCASYqAQABBYsOIRaQ47VWPAQCASYqAQABBdghj0cqdtXzPAQCASYlAAAI6y0LBAYLIgAGgEUAByQCAAcAAAlaJwIIBAA8BggBLQsDBgsiAAaARAAHJAIABwAACe0jAAAJcy0LAwYtCwEHLQsCCC0LBAkNIgAGgEQACiQCAAoAAAmYJQAADRkuAgAHgAMoAIAEBAAEJQAADIsuCIAFAAoAIgoCCwAqCwYMLQ4FDAEiAAaASAAFDioGBQckAgAHAAAJ2CUAAAr5LQ4KAS0OCAItDgUDLQ4JBCMAAApgJwIGBActCAAHLQoBCC0KAgktCgMKLQoECwAIAAYAJQAADSstAgAALQsBBi0LAgctCwQILgIABoADKACABAQABCUAAAyLLgiABQAJACIJAgoBIgAKgEYACy0OBQstDgkBLQ4HAi4MgEgAAy0OCAQjAAAKYCYlAAAI6y0LBAULIgAFgEUABiQCAAYAAAqDJwIHBAA8BgcBJwIFBAYtCAAGLQoBBy0KAggtCgMJLQoECgAIAAUAJQAADSstAgAALQsBBS0LAgYtCwMHLQ4FAS0OBgItDgcDLgyARwAEASIABoBIAAItCwIBJioBAAEFAtxuJ4B2Ep08BAIBJioBAAEFKIaSsEfc/UM8BAIBJioBAAEFRafKcRlB5BU8BAIBJiUAAAjrASIAAoBIAAMOKgIDBCQCAAQAAAsqJQAACvkNKIBEAAMABAsiAASARQADJAIAAwAAC0clAAAOOQ0iAAKARAADJAIAAwAAC1wlAAANGQAiAQIEACoEAgUtCwUDLQgBAScCAgQCAAgBAgEnAwEEAQAiAQICLQoCBC0OAwQmJQAACOstCAEEAAABAgEuDIBJAAQnAgYEAicCBwEBLQgBBScCCAQhAAgBCAEnAwUEAQAiBQIIJwIJBCBDA6oAAgAGAAkABwAIJwIKBCAuAgAIgAMuAgAKgAQlAAAOSycCAgQhJwIGBCAuCIBIAAMjAAAL/gwqAwIHJAIABwAADBUjAAAMEC0LBAEmLQsEBwQqBwcIAioGAwcOKgMGCSQCAAkAAAw1JQAACucMKgcGCSQCAAkAAAxHJQAADRkAIgUCCgAqCgcLLQsLCRwKCQcABCoIAQkEKgcJCgMogEkABwAJBCoJCAcAKgoHCC0OCAQBIgADgEgABy0KBwMjAAAL/i4BgAOABgsAgAYAAoAHJACABwAADKYjAAAMsS4AgAOABSMAAA0YLgAAAYAFAQAAAYAEAAEBAIADgASACS4AgAOACi4AgAWACwsAgAqACYAMJACADAAADQQuAYAKgAguBIAIgAsBAIAKAAKACgEAgAsAAoALIwAADNMoAYAFBAABAwCABgACgAYjAAANGCYqAQABBcVrxFoOEAACPAQCASYlAAAI6y4IgEYABSMAAA07DSIABYBEAAYkAgAGAAANpiMAAA1QLQsCBS0LBQYAIgYCBi0OBgUtCAEGJwIHBAUACAEHAScDBgQBACIFAgcnAggEBAAiBgIJPw8ABwAJLQsBBS0LAwctCwQILQ4FAS0OBgItDgcDLQ4IBCYtCwMGDCoFBgckAgAHAAANvCMAAA4oLQsCBgAiBgIIACoIBQktCwkHLQsBCAAiCAIKACoKBQstCwsJACoHCQotCwMHLQsECS4CAAaAAygAgAQEAAUlAAAMiy4IgAUACwAiCwIMACoMBQ0tDgoNLQ4IAS0OCwItDgcDLQ4JBCMAAA4oASIABYBIAAYtCgYFIwAADTsqAQABBfQu5YS79CHRPAQCASYoAIAGBAACBwCABIAGgAUuAIAEgAgoAIAJBAAADQCACYAFgAoXAIAKgAokAIAKAAAOygMAgAgAAoAIAQCAA4AJgAsuAYALgAYBAIADgAiACy4BgAuABwEAgAOACYALLgSAB4ALAQCAA4AIgAsuBIAGgAsBAIAJAAKACSMAAA5nJg==",debug_symbols:"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",brillig_names:["set_update_delay"]},{name:"sync_private_state",is_unconstrained:!0,custom_attributes:["utility"],abi:{parameters:[],return_type:null,error_types:{"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"H4sIAAAAAAAA/7WTPQ+CMBCGi2KUjzjgoD+jBAyM+LG4OLpXCkpUSAB3frqQXENtwKjAJU17FJ5736OVUB0SzDLqEAyyglmBecTtj8vhQY67hakIdfvku9i2lQZ/Peq3FGBKw/Ax4w/UfzwFzr6o+bwXVndWDo1b66g+H0P5Z/9vSP+LD5418GpAXnmew/oS5Nt74t+Oz8c5SNnXTR1EgnIxdK5CSd0lcZ4SP99QmgZZJhJGDWTUQlU56pVE8YG26fmRdgrSLEpikSZ/Sav6yu6lXLyr8eA57hCOizHTMAb+BDV3X+b2+feXkKuCJ+bT+1Nn6BAztEhI1oRS2yeGwK+CP38vlizs4eEFAAA=",debug_symbols:"nZPfioQgFIff5Vx34f+0VxmGwcoGQSycWliid18bdKYWXJa58WSe7+tX6Qq9aZf7zfphfEBzWaEN1jl7v7mx07Mdfby7AtoHTKGhFWAGDY+FQ1PHIqBR21ZB7r/NwZi9/SCI2kkH42do/OJcBV/aLc+mx6T9s846xFVUgfF9rFE4WGf2q61606iMYsSZSDhGAvGXQvGTA5cdtcwGidiLF+TEkzLPCU885+9XwLT+bwBJ6xyAq1IAVuYZVYlnQn4UQLIcQMlSAFHm43dPvCDikwCKkCRQlJcCyD8CyLyHavTrF1zjVHc2nLb2tquC1a0zaTosvjuszt9TXslHYwpjZ/olmN10OB9xvGBZEXrd9qf9AA==",brillig_names:["sync_private_state"]},{name:"update",is_unconstrained:!0,custom_attributes:["public"],abi:{parameters:[{name:"new_contract_class_id",type:{kind:"struct",path:"aztec::protocol_types::contract_class_id::ContractClassId",fields:[{name:"inner",type:{kind:"field"}}]},visibility:"private"}],return_type:null,error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"2920182694213909827":{error_kind:"string",string:"attempt to subtract with overflow"},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"6504213605561840204":{error_kind:"string",string:"New contract class is not registered"},"10019982601749771606":{error_kind:"string",string:"msg.sender is not deployed"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"17595253152434889169":{error_kind:"string",string:"offset too large"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"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",brillig_names:["update"]}],a={globals:{storage:[{fields:[{name:"contract_name",value:{kind:"string",value:"ContractInstanceDeployer"}},{name:"fields",value:{fields:[{name:"updated_class_ids",value:{fields:[{name:"slot",value:{kind:"integer",sign:!1,value:"0000000000000000000000000000000000000000000000000000000000000001"}}],kind:"struct"}}],kind:"struct"}}],kind:"struct"}]},structs:{events:[{fields:[{name:"DEPLOYER_CONTRACT_INSTANCE_DEPLOYED_MAGIC_VALUE",type:{kind:"field"}},{name:"address",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress"}},{name:"version",type:{kind:"integer",sign:"unsigned",width:8}},{name:"salt",type:{kind:"field"}},{name:"contract_class_id",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::contract_class_id::ContractClassId"}},{name:"initialization_hash",type:{kind:"field"}},{name:"public_keys",type:{fields:[{name:"npk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::NpkM"}},{name:"ivpk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::IvpkM"}},{name:"ovpk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::OvpkM"}},{name:"tpk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::TpkM"}}],kind:"struct",path:"aztec::protocol_types::public_keys::PublicKeys"}},{name:"deployer",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress"}}],kind:"struct",path:"ContractInstanceDeployer::ContractInstanceDeployed"},{fields:[{name:"DEPLOYER_CONTRACT_INSTANCE_UPDATED_MAGIC_VALUE",type:{kind:"field"}},{name:"address",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::address::aztec_address::AztecAddress"}},{name:"prev_contract_class_id",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::contract_class_id::ContractClassId"}},{name:"new_contract_class_id",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::contract_class_id::ContractClassId"}},{name:"block_of_change",type:{kind:"integer",sign:"unsigned",width:32}}],kind:"struct",path:"ContractInstanceDeployer::ContractInstanceUpdated"}],functions:[{fields:[{name:"parameters",type:{fields:[{name:"salt",type:{kind:"field"}},{name:"contract_class_id",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::contract_class_id::ContractClassId"}},{name:"initialization_hash",type:{kind:"field"}},{name:"public_keys",type:{fields:[{name:"npk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::NpkM"}},{name:"ivpk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::IvpkM"}},{name:"ovpk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::OvpkM"}},{name:"tpk_m",type:{fields:[{name:"inner",type:{fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}],kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint"}}],kind:"struct",path:"aztec::protocol_types::public_keys::TpkM"}}],kind:"struct",path:"aztec::protocol_types::public_keys::PublicKeys"}},{name:"universal_deploy",type:{kind:"boolean"}}],kind:"struct",path:"ContractInstanceDeployer::deploy_parameters"}}],kind:"struct",path:"ContractInstanceDeployer::deploy_abi"},{fields:[{name:"parameters",type:{fields:[],kind:"struct",path:"ContractInstanceDeployer::get_update_delay_parameters"}},{name:"return_type",type:{kind:"integer",sign:"unsigned",width:32}}],kind:"struct",path:"ContractInstanceDeployer::get_update_delay_abi"},{fields:[{name:"parameters",type:{fields:[{name:"new_update_delay",type:{kind:"integer",sign:"unsigned",width:32}}],kind:"struct",path:"ContractInstanceDeployer::set_update_delay_parameters"}}],kind:"struct",path:"ContractInstanceDeployer::set_update_delay_abi"},{fields:[{name:"parameters",type:{fields:[],kind:"struct",path:"ContractInstanceDeployer::sync_private_state_parameters"}}],kind:"struct",path:"ContractInstanceDeployer::sync_private_state_abi"},{fields:[{name:"parameters",type:{fields:[{name:"new_contract_class_id",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"aztec::protocol_types::contract_class_id::ContractClassId"}}],kind:"struct",path:"ContractInstanceDeployer::update_parameters"}}],kind:"struct",path:"ContractInstanceDeployer::update_abi"}]}},s={16:{path:"std/embedded_curve_ops.nr",source:`use crate::cmp::Eq;
use crate::hash::Hash;
use crate::ops::arith::{Add, Neg, Sub};

/// A point on the embedded elliptic curve
/// By definition, the base field of the embedded curve is the scalar field of the proof system curve, i.e the Noir Field.
/// x and y denotes the Weierstrass coordinates of the point, if is_infinite is false.
pub struct EmbeddedCurvePoint {
    pub x: Field,
    pub y: Field,
    pub is_infinite: bool,
}

impl EmbeddedCurvePoint {
    /// Elliptic curve point doubling operation
    /// returns the doubled point of a point P, i.e P+P
    pub fn double(self) -> EmbeddedCurvePoint {
        embedded_curve_add(self, self)
    }

    /// Returns the null element of the curve; 'the point at infinity'
    pub fn point_at_infinity() -> EmbeddedCurvePoint {
        EmbeddedCurvePoint { x: 0, y: 0, is_infinite: true }
    }

    /// Returns the curve's generator point.
    pub fn generator() -> EmbeddedCurvePoint {
        // Generator point for the grumpkin curve (y^2 = x^3 - 17)
        EmbeddedCurvePoint {
            x: 1,
            y: 17631683881184975370165255887551781615748388533673675138860, // sqrt(-16)
            is_infinite: false,
        }
    }
}

impl Add for EmbeddedCurvePoint {
    /// Adds two points P+Q, using the curve addition formula, and also handles point at infinity
    fn add(self, other: EmbeddedCurvePoint) -> EmbeddedCurvePoint {
        embedded_curve_add(self, other)
    }
}

impl Sub for EmbeddedCurvePoint {
    /// Points subtraction operation, using addition and negation
    fn sub(self, other: EmbeddedCurvePoint) -> EmbeddedCurvePoint {
        self + other.neg()
    }
}

impl Neg for EmbeddedCurvePoint {
    /// Negates a point P, i.e returns -P, by negating the y coordinate.
    /// If the point is at infinity, then the result is also at infinity.
    fn neg(self) -> EmbeddedCurvePoint {
        EmbeddedCurvePoint { x: self.x, y: -self.y, is_infinite: self.is_infinite }
    }
}

impl Eq for EmbeddedCurvePoint {
    /// Checks whether two points are equal
    fn eq(self: Self, b: EmbeddedCurvePoint) -> bool {
        (self.is_infinite & b.is_infinite)
            | ((self.is_infinite == b.is_infinite) & (self.x == b.x) & (self.y == b.y))
    }
}

impl Hash for EmbeddedCurvePoint {
    fn hash<H>(self, state: &mut H)
    where
        H: crate::hash::Hasher,
    {
        if self.is_infinite {
            self.is_infinite.hash(state);
        } else {
            self.x.hash(state);
            self.y.hash(state);
        }
    }
}

/// Scalar for the embedded curve represented as low and high limbs
/// By definition, the scalar field of the embedded curve is base field of the proving system curve.
/// It may not fit into a Field element, so it is represented with two Field elements; its low and high limbs.
pub struct EmbeddedCurveScalar {
    pub lo: Field,
    pub hi: Field,
}

impl EmbeddedCurveScalar {
    pub fn new(lo: Field, hi: Field) -> Self {
        EmbeddedCurveScalar { lo, hi }
    }

    #[field(bn254)]
    pub fn from_field(scalar: Field) -> EmbeddedCurveScalar {
        let (a, b) = crate::field::bn254::decompose(scalar);
        EmbeddedCurveScalar { lo: a, hi: b }
    }

    //Bytes to scalar: take the first (after the specified offset) 16 bytes of the input as the lo value, and the next 16 bytes as the hi value
    #[field(bn254)]
    pub(crate) fn from_bytes(bytes: [u8; 64], offset: u32) -> EmbeddedCurveScalar {
        let mut v = 1;
        let mut lo = 0 as Field;
        let mut hi = 0 as Field;
        for i in 0..16 {
            lo = lo + (bytes[offset + 31 - i] as Field) * v;
            hi = hi + (bytes[offset + 15 - i] as Field) * v;
            v = v * 256;
        }
        let sig_s = crate::embedded_curve_ops::EmbeddedCurveScalar { lo, hi };
        sig_s
    }
}

impl Eq for EmbeddedCurveScalar {
    fn eq(self, other: Self) -> bool {
        (other.hi == self.hi) & (other.lo == self.lo)
    }
}

impl Hash for EmbeddedCurveScalar {
    fn hash<H>(self, state: &mut H)
    where
        H: crate::hash::Hasher,
    {
        self.hi.hash(state);
        self.lo.hash(state);
    }
}

// Computes a multi scalar multiplication over the embedded curve.
// For bn254, We have Grumpkin and Baby JubJub.
// For bls12-381, we have JubJub and Bandersnatch.
//
// The embedded curve being used is decided by the
// underlying proof system.
// docs:start:multi_scalar_mul
pub fn multi_scalar_mul<let N: u32>(
    points: [EmbeddedCurvePoint; N],
    scalars: [EmbeddedCurveScalar; N],
) -> EmbeddedCurvePoint
// docs:end:multi_scalar_mul
{
    multi_scalar_mul_array_return(points, scalars)[0]
}

#[foreign(multi_scalar_mul)]
pub(crate) fn multi_scalar_mul_array_return<let N: u32>(
    points: [EmbeddedCurvePoint; N],
    scalars: [EmbeddedCurveScalar; N],
) -> [EmbeddedCurvePoint; 1] {}

// docs:start:fixed_base_scalar_mul
pub fn fixed_base_scalar_mul(scalar: EmbeddedCurveScalar) -> EmbeddedCurvePoint
// docs:end:fixed_base_scalar_mul
{
    multi_scalar_mul([EmbeddedCurvePoint::generator()], [scalar])
}

/// This function only assumes that the points are on the curve
/// It handles corner cases around the infinity point causing some overhead compared to embedded_curve_add_not_nul and embedded_curve_add_unsafe
// docs:start:embedded_curve_add
pub fn embedded_curve_add(
    point1: EmbeddedCurvePoint,
    point2: EmbeddedCurvePoint,
) -> EmbeddedCurvePoint {
    // docs:end:embedded_curve_add
    if crate::runtime::is_unconstrained() {
        // \`embedded_curve_add_unsafe\` requires the inputs not to be the infinity point, so we check it here.
        // This is because \`embedded_curve_add_unsafe\` uses the \`embedded_curve_add\` opcode.
        // For efficiency, the backend does not check the inputs for the infinity point, but it assumes that they are not the infinity point
        // so that it can apply the ec addition formula directly.
        if point1.is_infinite {
            point2
        } else if point2.is_infinite {
            point1
        } else {
            embedded_curve_add_unsafe(point1, point2)
        }
    } else {
        // In a constrained context, we also need to check the inputs are not the infinity point because we also use \`embedded_curve_add_unsafe\`
        // However we also need to identify the case where the two inputs are the same, because then
        // the addition formula does not work and we need to use the doubling formula instead.
        // In unconstrained context, we can check directly if the input values are the same when solving the opcode, so it is not an issue.

        // x_coordinates_match is true if both abscissae are the same
        let x_coordinates_match = point1.x == point2.x;
        // y_coordinates_match is true if both ordinates are the same
        let y_coordinates_match = point1.y == point2.y;
        // double_predicate is true if both abscissae and ordinates are the same
        let double_predicate = (x_coordinates_match & y_coordinates_match);
        // If the abscissae are the same, but not the ordinates, then one point is the opposite of the other
        let infinity_predicate = (x_coordinates_match & !y_coordinates_match);
        let point1_1 = EmbeddedCurvePoint {
            x: point1.x + (x_coordinates_match as Field),
            y: point1.y,
            is_infinite: false,
        };
        let point2_1 = EmbeddedCurvePoint { x: point2.x, y: point2.y, is_infinite: false };
        // point1_1 is guaranteed to have a different abscissa than point2:
        // - if x_coordinates_match is 0, that means point1.x != point2.x, and point1_1.x = point1.x + 0
        // - if x_coordinates_match is 1, that means point1.x = point2.x, but point1_1.x = point1.x + 1 in this case
        // Because the abscissa is different, the addition formula is guaranteed to succeed, so we can safely use \`embedded_curve_add_unsafe\`
        // Note that this computation may be garbage: if x_coordinates_match is 1, or if one of the input is the point at infinity.
        let mut result = embedded_curve_add_unsafe(point1_1, point2_1);

        // \`embedded_curve_add_unsafe\` is doing a doubling if the input is the same variable, because in this case it is guaranteed (at 'compile time') that the input is the same.
        let double = embedded_curve_add_unsafe(point1, point1);
        // \`embedded_curve_add_unsafe\` would not perform doubling, even if the inputs point1 and point2 are the same, because it cannot know this without adding some logic (and some constraints)
        // However we did this logic when we computed \`double_predicate\`, so we set the result to 2*point1 if point1 and point2 are the same
        result = if double_predicate { double } else { result };

        // Same logic as above for unconstrained context, we set the proper result when one of the inputs is the infinity point
        if point1.is_infinite {
            result = point2;
        }
        if point2.is_infinite {
            result = point1;
        }

        // Finally, we set the is_infinity flag of the result:
        // Opposite points should sum into the infinity point, however, if one of them is point at infinity, their coordinates are not meaningful
        // so we should not use the fact that the inputs are opposite in this case:
        let mut result_is_infinity =
            infinity_predicate & (!point1.is_infinite & !point2.is_infinite);
        // However, if both of them are at infinity, then the result is also at infinity
        result.is_infinite = result_is_infinity | (point1.is_infinite & point2.is_infinite);
        result
    }
}

#[foreign(embedded_curve_add)]
fn embedded_curve_add_array_return(
    _point1: EmbeddedCurvePoint,
    _point2: EmbeddedCurvePoint,
) -> [EmbeddedCurvePoint; 1] {}

/// This function assumes that:
/// The points are on the curve, and
/// The points don't share an x-coordinate, and
/// Neither point is the infinity point.
/// If it is used with correct input, the function ensures the correct non-zero result is returned.
/// Except for points on the curve, the other assumptions are checked by the function. It will cause assertion failure if they are not respected.
pub fn embedded_curve_add_not_nul(
    point1: EmbeddedCurvePoint,
    point2: EmbeddedCurvePoint,
) -> EmbeddedCurvePoint {
    assert(point1.x != point2.x);
    assert(!point1.is_infinite);
    assert(!point2.is_infinite);
    embedded_curve_add_unsafe(point1, point2)
}

/// Unsafe ec addition
/// If the inputs are the same, it will perform a doubling, but only if point1 and point2 are the same variable.
/// If they have the same value but are different variables, the result will be incorrect because in this case
/// it assumes (but does not check) that the points' x-coordinates are not equal.
/// It also assumes neither point is the infinity point.
pub fn embedded_curve_add_unsafe(
    point1: EmbeddedCurvePoint,
    point2: EmbeddedCurvePoint,
) -> EmbeddedCurvePoint {
    embedded_curve_add_array_return(point1, point2)[0]
}
`},17:{path:"std/field/bn254.nr",source:`use crate::field::field_less_than;
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
`},50:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-contracts/contracts/protocol/contract_instance_deployer_contract/src/main.nr",source:`use dep::aztec::macros::aztec;

#[aztec]
pub contract ContractInstanceDeployer {
    use dep::aztec::macros::{events::event, functions::{private, public, view}, storage::storage};
    use dep::aztec::prelude::{Map, SharedMutable};
    use dep::aztec::protocol_types::{
        address::{AztecAddress, PartialAddress},
        constants::{
            DEFAULT_UPDATE_DELAY, DEPLOYER_CONTRACT_INSTANCE_DEPLOYED_MAGIC_VALUE,
            DEPLOYER_CONTRACT_INSTANCE_UPDATED_MAGIC_VALUE, MINIMUM_UPDATE_DELAY,
            REGISTERER_CONTRACT_ADDRESS,
        },
        contract_class_id::ContractClassId,
        public_keys::PublicKeys,
        traits::{Serialize, ToField},
        utils::arrays::array_concat,
    };
    use dep::contract_class_registerer::ContractClassRegisterer;
    use std::meta::derive;

    #[derive(Serialize)]
    #[event]
    struct ContractInstanceDeployed {
        DEPLOYER_CONTRACT_INSTANCE_DEPLOYED_MAGIC_VALUE: Field,
        address: AztecAddress,
        version: u8,
        salt: Field,
        contract_class_id: ContractClassId,
        initialization_hash: Field,
        public_keys: PublicKeys,
        deployer: AztecAddress,
    }

    // We need to impl this separately because ts deserializes a point as two fields only.
    // We had issues that:
    // Notice how the 'is_infinite' field is deserialized as the next point.
    // {
    //     masterNullifierPublicKey: Point {
    //   x: Fr<0x0000000000000000000000000000000000000000000000000000000000000012>,
    //   y: Fr<0x0000000000000000000000000000000000000000000000000000000000000034>,
    //   isInfinite: false,
    //   kind: 'point'
    // },
    // masterIncomingViewingPublicKey: Point {
    //   x: Fr<0x0000000000000000000000000000000000000000000000000000000000000000>,
    //   y: Fr<0x0000000000000000000000000000000000000000000000000000000000000056>,
    //   isInfinite: false,
    //   kind: 'point'
    // },
    // masterOutgoingViewingPublicKey: Point {
    //   x: Fr<0x0000000000000000000000000000000000000000000000000000000000000078>,
    //   y: Fr<0x0000000000000000000000000000000000000000000000000000000000000000>,
    //   isInfinite: false,
    //   kind: 'point'
    // },
    // masterTaggingPublicKey: Point {
    //   x: Fr<0x0000000000000000000000000000000000000000000000000000000000000910>,
    //   y: Fr<0x0000000000000000000000000000000000000000000000000000000000001112>,
    //   isInfinite: false,
    //   kind: 'point'
    // }

    impl ContractInstanceDeployed {
        fn serialize_non_standard(self) -> [Field; 15] {
            [
                self.DEPLOYER_CONTRACT_INSTANCE_DEPLOYED_MAGIC_VALUE,
                self.address.to_field(),
                self.version.to_field(),
                self.salt,
                self.contract_class_id.to_field(),
                self.initialization_hash,
                self.public_keys.npk_m.serialize()[0],
                self.public_keys.npk_m.serialize()[1],
                self.public_keys.ivpk_m.serialize()[0],
                self.public_keys.ivpk_m.serialize()[1],
                self.public_keys.ovpk_m.serialize()[0],
                self.public_keys.ovpk_m.serialize()[1],
                self.public_keys.tpk_m.serialize()[0],
                self.public_keys.tpk_m.serialize()[1],
                self.deployer.to_field(),
            ]
        }
    }

    #[derive(Serialize)]
    #[event]
    struct ContractInstanceUpdated {
        DEPLOYER_CONTRACT_INSTANCE_UPDATED_MAGIC_VALUE: Field,
        address: AztecAddress,
        prev_contract_class_id: ContractClassId,
        new_contract_class_id: ContractClassId,
        block_of_change: u32,
    }

    #[storage]
    struct Storage<Context> {
        updated_class_ids: Map<AztecAddress, SharedMutable<ContractClassId, DEFAULT_UPDATE_DELAY, Context>, Context>,
    }

    #[private]
    fn deploy(
        salt: Field,
        contract_class_id: ContractClassId,
        initialization_hash: Field,
        public_keys: PublicKeys,
        universal_deploy: bool,
    ) {
        // contract class must be registered to deploy an instance
        ContractClassRegisterer::at(REGISTERER_CONTRACT_ADDRESS)
            .assert_class_id_is_registered(contract_class_id)
            .call(&mut context);

        let deployer = if universal_deploy {
            AztecAddress::zero()
        } else {
            context.msg_sender()
        };

        let partial_address =
            PartialAddress::compute(contract_class_id, salt, initialization_hash, deployer);

        let address = AztecAddress::compute(public_keys, partial_address);

        // Emit the address as a nullifier to be able to prove that this instance has been (not) deployed
        context.push_nullifier(address.to_field());

        // Broadcast the event
        let event = ContractInstanceDeployed {
            DEPLOYER_CONTRACT_INSTANCE_DEPLOYED_MAGIC_VALUE,
            contract_class_id,
            address,
            public_keys,
            initialization_hash,
            salt,
            deployer,
            version: 1,
        };

        let payload = event.serialize_non_standard();
        dep::aztec::oracle::debug_log::debug_log_format("ContractInstanceDeployed: {}", payload);

        let padded_log = array_concat(payload, [0; 3]);
        // Only the payload needs to be emitted. Since the siloed tag of this event log is publicly known, it's
        // acceptable to pad the log with 0s and reveal the actual payload length.
        let length = payload.len();
        context.emit_private_log(padded_log, length);
    }

    #[public]
    fn update(new_contract_class_id: ContractClassId) {
        let address = context.msg_sender();

        assert(
            context.nullifier_exists(address.to_field(), context.this_address()),
            "msg.sender is not deployed",
        );

        assert(
            context.nullifier_exists(new_contract_class_id.to_field(), REGISTERER_CONTRACT_ADDRESS),
            "New contract class is not registered",
        );

        let scheduled_value_update = storage
            .updated_class_ids
            .at(address)
            .schedule_and_return_value_change(new_contract_class_id);
        let (prev_contract_class_id, block_of_change) = scheduled_value_update.get_previous();

        let event = ContractInstanceUpdated {
            DEPLOYER_CONTRACT_INSTANCE_UPDATED_MAGIC_VALUE,
            address,
            prev_contract_class_id,
            new_contract_class_id,
            block_of_change,
        };

        context.emit_public_log(event);
    }

    #[public]
    fn set_update_delay(new_update_delay: u32) {
        let address = context.msg_sender();

        assert(
            context.nullifier_exists(address.to_field(), context.this_address()),
            "msg.sender is not deployed",
        );

        assert(new_update_delay >= MINIMUM_UPDATE_DELAY, "New update delay is too low");

        storage.updated_class_ids.at(address).schedule_delay_change(new_update_delay);
    }

    #[public]
    #[view]
    fn get_update_delay() -> u32 {
        storage.updated_class_ids.at(context.msg_sender()).get_current_delay()
    }
}
`},52:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/call_interfaces.nr",source:`use dep::protocol_types::{
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
`},59:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/private_context.nr",source:`use crate::{
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
`},60:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/public_context.nr",source:`use crate::context::gas::GasOpts;
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
`},61:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/returns_hash.nr",source:`use crate::{hash::hash_args_array, oracle::execution_cache};
use dep::protocol_types::traits::Deserialize;

pub struct ReturnsHash {
    hash: Field,
}

impl ReturnsHash {
    pub fn new(hash: Field) -> Self {
        ReturnsHash { hash }
    }

    pub fn assert_empty(self) {
        assert_eq(self.hash, 0);
    }

    pub fn raw(self) -> Field {
        self.hash
    }

    /// This is only used during private execution, since in public it is the VM itself that keeps track of return
    /// values.
    pub fn get_preimage<T, let N: u32>(self) -> T
    where
        T: Deserialize<N>,
    {
        // Safety: We verify that the value returned by \`load\` is the preimage of \`hash\`, fully constraining it.
        let preimage: [Field; N] = unsafe { execution_cache::load(self.hash) };
        assert_eq(self.hash, hash_args_array(preimage));

        Deserialize::deserialize(preimage)
    }
}
`},62:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/utility_context.nr",source:`use crate::oracle::{
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
`},66:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/hash.nr",source:`use dep::protocol_types::{
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
`},88:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/dispatch.nr",source:`use super::utils::compute_fn_selector;
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
`},91:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/functions/call_interface_stubs.nr",source:`use crate::macros::utils::{
    add_to_field_slice, AsStrQuote, compute_fn_selector, is_fn_private, is_fn_public, is_fn_view,
};
use std::meta::{type_of, unquote};

comptime global FROM_FIELD: TypedExpr = {
    let from_field_trait = quote { protocol_types::traits::FromField }.as_trait_constraint();
    let function_selector_typ =
        quote { protocol_types::abis::function_selector::FunctionSelector }.as_type();
    function_selector_typ.get_trait_impl(from_field_trait).unwrap().methods().filter(|m| {
        m.name() == quote { from_field }
    })[0]
        .as_typed_expr()
};

comptime global SERIALIZED_ARGS_SLICE_NAME: Quoted = quote { serialized_args };

pub comptime fn stub_fn(f: FunctionDefinition) -> Quoted {
    let is_static_call = is_fn_view(f);
    let is_void = f.return_type() == type_of(());

    if is_fn_private(f) {
        if is_static_call {
            if is_void {
                create_private_static_void_stub(f)
            } else {
                create_private_static_stub(f)
            }
        } else {
            if is_void {
                create_private_void_stub(f)
            } else {
                create_private_stub(f)
            }
        }
    } else if is_fn_public(f) {
        if is_static_call {
            if is_void {
                create_public_static_void_stub(f)
            } else {
                create_public_static_stub(f)
            }
        } else {
            if is_void {
                create_public_void_stub(f)
            } else {
                create_public_stub(f)
            }
        }
    } else {
        if is_void {
            create_utility_void_stub(f)
        } else {
            create_utility_stub(f)
        }
    }
}

/// Utility function creating stubs used by all the stub functions in this file.
comptime fn create_stub_base(
    f: FunctionDefinition,
) -> (Quoted, Quoted, Quoted, Quoted, u32, Field) {
    let fn_name = f.name();
    let fn_parameters = f.parameters();
    let fn_parameters_list =
        fn_parameters.map(|(name, typ): (Quoted, Type)| quote { $name: $typ }).join(quote {,});

    // Example of what the fold(...) below will generate for \`target_address\` and \`fee_juice_limit_per_tx\` function
    // parameters:
    // \`\`\`
    // let mut serialized_args =  &[];
    // serialized_args = serialized_args.append(aztec::protocol_types::traits::Serialize::serialize(target_address));
    // serialized_args = serialized_args.push_back(fee_juice_limit_per_tx as Field);
    // \`\`\`
    let serialized_args_slice_construction = fn_parameters.fold(
        quote {
            let mut $SERIALIZED_ARGS_SLICE_NAME = &[];
        },
        |args, param: (Quoted, Type)| {
            let (name, typ) = param;
            let arg_to_append = add_to_field_slice(SERIALIZED_ARGS_SLICE_NAME, name, typ);
            quote {
                $args
                $arg_to_append
            }
        },
    );

    let (fn_name_str, _) = fn_name.as_str_quote();
    let fn_name_len: u32 = unquote!(quote { $fn_name_str.as_bytes().len()});
    let fn_selector: Field = compute_fn_selector(f);

    (
        fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len,
        fn_selector,
    )
}

comptime fn create_private_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);
    let fn_return_type = f.return_type();

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PrivateCallInterface<$fn_name_len, $fn_return_type> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PrivateCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
                false
            )
        }
    }
}

comptime fn create_private_static_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);
    let fn_return_type = f.return_type();

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PrivateStaticCallInterface<$fn_name_len, $fn_return_type> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PrivateStaticCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
            )
        }
    }
}

comptime fn create_private_void_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PrivateVoidCallInterface<$fn_name_len> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PrivateVoidCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
                false
            )
        }
    }
}

comptime fn create_private_static_void_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PrivateStaticVoidCallInterface<$fn_name_len> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PrivateStaticVoidCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                serialized_args
            )
        }
    }
}

comptime fn create_public_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);
    let fn_return_type = f.return_type();

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PublicCallInterface<$fn_name_len, $fn_return_type> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PublicCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
                false
            )
        }
    }
}

comptime fn create_public_static_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);
    let fn_return_type = f.return_type();

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PublicStaticCallInterface<$fn_name_len, $fn_return_type> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PublicStaticCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
            )
        }
    }
}

comptime fn create_public_void_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PublicVoidCallInterface<$fn_name_len> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PublicVoidCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
                false
            )
        }
    }
}

comptime fn create_public_static_void_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);

    quote {
        pub fn $fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::PublicStaticVoidCallInterface<$fn_name_len> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::PublicStaticVoidCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                serialized_args
            )
        }
    }
}

comptime fn create_utility_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);
    let fn_return_type = f.return_type();

    // This is here because utility function call interfaces can only be used within TXe tests.
    let modified_fn_name = f"_experimental_{fn_name}".quoted_contents();

    quote {
        pub fn $modified_fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::UtilityCallInterface<$fn_name_len, $fn_return_type> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::UtilityCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
            )
        }
    }
}

comptime fn create_utility_void_stub(f: FunctionDefinition) -> Quoted {
    let (fn_name, fn_parameters_list, serialized_args_slice_construction, fn_name_str, fn_name_len, fn_selector) =
        create_stub_base(f);

    // This is here because utility function call interfaces can only be used within TXe tests.
    let modified_fn_name = f"_experimental_{fn_name}".quoted_contents();

    quote {
        pub fn $modified_fn_name(self, $fn_parameters_list) -> dep::aztec::context::call_interfaces::UtilityVoidCallInterface<$fn_name_len> {
            $serialized_args_slice_construction
            let selector = $FROM_FIELD($fn_selector);
            dep::aztec::context::call_interfaces::UtilityVoidCallInterface::new(
                self.target_contract,
                selector,
                $fn_name_str,
                $SERIALIZED_ARGS_SLICE_NAME,
            )
        }
    }
}
`},95:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/functions/utils.nr",source:`use crate::macros::{
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
`},98:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/storage.nr",source:`use poseidon::poseidon2::Poseidon2Hasher;
use std::{collections::umap::UHashMap, hash::BuildHasherDefault};

use super::utils::AsStrQuote;
use super::utils::get_storage_size;

/// Stores a map from a module to the name of the struct that describes its storage layout.
/// This is then used when generating a \`storage_layout()\` getter on the contract struct.
pub comptime mut global STORAGE_LAYOUT_NAME: UHashMap<Module, Quoted, BuildHasherDefault<Poseidon2Hasher>> =
    UHashMap::default();

/// Marks a struct as the one describing the storage layout of a contract.
///
/// The contract's storage is accessed via the \`storage\` variable, which will will automatically be made available in
/// all functions as an instance of the struct this macro was applied to.
///
/// Only a single struct in the entire contract should have this macro (or \`storage_no_init\`) applied to it, and the
/// struct has to be called 'Storage'.
pub comptime fn storage(s: TypeDefinition) -> Quoted {
    let struct_name = s.name();
    if struct_name != quote { Storage } {
        panic(
            f"The #[storage] macro can only be applied to a struct with name 'Storage', got '{struct_name}' instead.",
        )
    }

    assert(
        !s.has_named_attribute("storage_no_init"),
        f"Only one of #[storage] and #[storage_no_init] can be applied to the Storage struct.",
    );

    // This macro performs three things:
    //  - it marks the contract as having storage, so that \`macros::utils::module_has_storage\` will return true and
    //    functions will have the storage variable injected and initialized via the \`init\` function.
    //  - it implements said \`init\` function by allocating appropriate storage slots to each state variable.
    //  - it exposes the storage layout by creating a \`StorageLayout\` struct that is exposed via the \`abi(storage)\`
    //    macro.
    let mut slot: u32 = 1;
    let mut storage_vars_constructors = &[];
    let mut storage_layout_fields = &[];
    let mut storage_layout_constructors = &[];

    // TODO(#8658): uncomment the code below to inject the Context type parameter.
    //let mut new_storage_fields = &[];
    //let context_generic = s.add_generic("Context");
    for field in s.fields_as_written() {
        // FIXME: This doesn't handle field types with generics
        let (name, typ) = field;
        let (storage_field_constructor, storage_size) =
            generate_storage_field_constructor(typ, quote { $slot });
        storage_vars_constructors =
            storage_vars_constructors.push_back(quote { $name: $storage_field_constructor });
        // We have \`Storable\` in a separate \`.nr\` file instead of defining it in the last quote of this function
        // because that way a dev gets a more reasonable error if he defines a struct with the same name in
        // a contract.
        storage_layout_fields =
            storage_layout_fields.push_back(quote { pub $name: dep::aztec::prelude::Storable });
        storage_layout_constructors = storage_layout_constructors.push_back(
            quote { $name: dep::aztec::prelude::Storable { slot: $slot } },
        );
        //let with_context_generic = add_context_generic(typ, context_generic);
        //println(with_context_generic);
        //new_storage_fields = new_storage_fields.push_back((name,  with_context_generic ));
        slot += storage_size;
    }

    //s.set_fields(new_storage_fields);
    let storage_vars_constructors = storage_vars_constructors.join(quote {,});
    let storage_impl = quote {
        impl<Context> Storage<Context> {
            fn init(context: Context) -> Self {
                Self {
                    $storage_vars_constructors
                }
            }
        }
    };

    let storage_layout_fields = storage_layout_fields.join(quote {,});
    let storage_layout_constructors = storage_layout_constructors.join(quote {,});

    let module = s.module();
    let module_name = module.name();
    let storage_layout_name = f"STORAGE_LAYOUT_{module_name}".quoted_contents();
    let (module_name_str, module_name_len) = module_name.as_str_quote();
    STORAGE_LAYOUT_NAME.insert(module, storage_layout_name);

    quote {
        $storage_impl

        pub struct StorageLayoutFields {
            $storage_layout_fields
        }

        pub struct StorageLayout<let N: u32> {
            pub contract_name: str<N>,
            pub fields: StorageLayoutFields
        }

        #[abi(storage)]
        pub global $storage_layout_name: StorageLayout<$module_name_len> = StorageLayout {
            contract_name: $module_name_str,
            fields: StorageLayoutFields { $storage_layout_constructors }
        };
    }
}

/// Same as \`storage\`, except the user is in charge of providing an implementation of the \`init\` constructor function
/// with signature \`fn init<Context>(context: Context) -> Self\`, which allows for manual control of storage slot
/// allocation. Similarly, no \`StorageLayout\` struct will be created.
///
/// The contract's storage is accessed via the \`storage\` variable, which will will automatically be made available in
/// all functions as an instance of the struct this macro was applied to.
///
/// Only a single struct in the entire contract can have this macro (or storage_no_init) applied to it, and the struct
/// has to be called 'Storage'.
pub comptime fn storage_no_init(s: TypeDefinition) {
    // All \`storage\` does is provide the \`init\` implementation, so we don't need to do anything here. Applying this
    // macro however will cause for \`macros::utils::module_has_storage\` to return true, resulting in the injection of
    // the \`storage\` variable.

    // We do need to make sure that the type is called Storage, since we'll do \`Storage::init\` later on.

    if s.name() != quote { Storage } {
        let name = s.name();
        panic(
            f"The #[storage_no_init] macro can only be applied to a struct with name 'Storage', got '{name}' instead.",
        )
    }

    assert(
        !s.has_named_attribute("storage"),
        f"Only one of #[storage] and #[storage_no_init] can be applied to the Storage struct.",
    );
}

/// Returns the expression required to initialize a state variable with a given slot, along with its serialization size,
/// i.e. how many contiguous storage slots the variable requires.
comptime fn generate_storage_field_constructor(typ: Type, slot: Quoted) -> (Quoted, u32) {
    assert(
        typ.as_data_type().is_some(),
        "Storage containers must be generic structs of the form \`Container<_, Context>\`, or Map<Key, _, Context>",
    );
    let (container_struct, generics) = typ.as_data_type().unwrap();
    let struct_name = container_struct.name();

    let constructor = if is_storage_map(typ) {
        // Map state variables recursively initialize their contents - this includes nested maps.
        let (value_constructor, _) =
            generate_storage_field_constructor(generics[1], quote { slot });

        quote { $struct_name::new(context, $slot, | context, slot | { $value_constructor }) }
    } else {
        // We assume below that all state variables implement \`fn new<Context>(context: Context, slot: Field) -> Self\`.
        quote { $struct_name::new(context, $slot)}
    };

    (constructor, get_storage_size(typ))
}

/// Returns true if \`typ\` is \`state_vars::map::Map\`.
comptime fn is_storage_map(typ: Type) -> bool {
    if typ.as_data_type().is_some() {
        let (def, generics) = typ.as_data_type().unwrap();
        let maybe_map = if (def.name() == quote { Map }) & (generics.len() == 3) {
            let maybe_key = generics[0];
            let maybe_value = generics[1];
            let maybe_context = generics[2];
            quote { crate::state_vars::map::Map<$maybe_key, $maybe_value, $maybe_context> }.as_type()
        } else {
            quote {()}.as_type()
        };
        typ == maybe_map
    } else {
        false
    }
}

comptime fn add_context_generic(typ: Type, context_generic: Type) -> Type {
    let (def, mut generics) = typ.as_data_type().expect(
        f"Storage containers must be generic structs of the form \`Container<..., Context>\`",
    );
    let name = def.name();

    if is_storage_map(typ) {
        generics[generics.len() - 2] = add_context_generic(generics[1], context_generic);
        generics[generics.len() - 1] = context_generic;
    } else {
        generics[generics.len() - 1] = context_generic;
    }

    let generics = generics.map(|typ: Type| quote {$typ}).join(quote {,});
    quote { $name<$generics> }.as_type()
}
`},134:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/call_private_function.nr",source:`use dep::protocol_types::{
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
`},137:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/execution.nr",source:`use dep::protocol_types::address::AztecAddress;

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
`},138:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/execution_cache.nr",source:`/// Stores values represented as slice in execution cache to be later obtained by its hash.
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
`},149:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/notes.nr",source:`use crate::note::{
    note_interface::NoteType,
    retrieved_note::{RETRIEVED_NOTE_OVERHEAD, RetrievedNote, unpack_retrieved_note},
};

use dep::protocol_types::{
    address::AztecAddress, indexed_tagging_secret::IndexedTaggingSecret, traits::Packable,
};

/// Notifies the simulator that a note has been created, so that it can be returned in future read requests in the same
/// transaction. This note should only be added to the non-volatile database if found in an actual block.
pub fn notify_created_note<let N: u32>(
    storage_slot: Field,
    note_type_id: Field,
    packed_note: [Field; N],
    note_hash: Field,
    counter: u32,
) {
    // Safety: This oracle call returns nothing: we only call it for its side effects. It is therefore always safe
    // to call.
    unsafe {
        notify_created_note_oracle_wrapper(
            storage_slot,
            note_type_id,
            packed_note,
            note_hash,
            counter,
        )
    };
}

/// Notifies the simulator that a note has been nullified, so that it is no longer returned in future read requests in
/// the same transaction. This note should only be removed to the non-volatile database if its nullifier is found in an
/// actual block.
pub fn notify_nullified_note(nullifier: Field, note_hash: Field, counter: u32) {
    // Safety: This oracle call returns nothing: we only call it for its side effects. It is therefore always safe to
    // call.
    unsafe { notify_nullified_note_oracle_wrapper(nullifier, note_hash, counter) };
}

/// Notifies the simulator that a non-note nullifier has been created, so that it can be used for note nonces.
pub fn notify_created_nullifier(nullifier: Field) {
    // Safety: This oracle call returns nothing: we only call it for its side effects. It is therefore always safe to
    // call.
    unsafe { notify_created_nullifier_oracle_wrapper(nullifier) };
}

unconstrained fn notify_created_note_oracle_wrapper<let N: u32>(
    storage_slot: Field,
    note_type_id: Field,
    packed_note: [Field; N],
    note_hash: Field,
    counter: u32,
) {
    notify_created_note_oracle(storage_slot, note_type_id, packed_note, note_hash, counter);
}

#[oracle(notifyCreatedNote)]
unconstrained fn notify_created_note_oracle<let N: u32>(
    _storage_slot: Field,
    _note_type_id: Field,
    _packed_note: [Field; N],
    _note_hash: Field,
    _counter: u32,
) {}

unconstrained fn notify_nullified_note_oracle_wrapper(
    nullifier: Field,
    note_hash: Field,
    counter: u32,
) {
    notify_nullified_note_oracle(nullifier, note_hash, counter);
}

#[oracle(notifyNullifiedNote)]
unconstrained fn notify_nullified_note_oracle(_nullifier: Field, _note_hash: Field, _counter: u32) {}

unconstrained fn notify_created_nullifier_oracle_wrapper(nullifier: Field) {
    notify_created_nullifier_oracle(nullifier);
}

#[oracle(notifyCreatedNullifier)]
unconstrained fn notify_created_nullifier_oracle(_nullifier: Field) {}

#[oracle(getNotes)]
unconstrained fn get_notes_oracle<let NOTE_PCKD_LEN: u32, let M: u32, let MAX_NOTES: u32>(
    _storage_slot: Field,
    _num_selects: u8,
    _select_by_indexes: [u8; M],
    _select_by_offsets: [u8; M],
    _select_by_lengths: [u8; M],
    _select_values: [Field; M],
    _select_comparators: [u8; M],
    _sort_by_indexes: [u8; M],
    _sort_by_offsets: [u8; M],
    _sort_by_lengths: [u8; M],
    _sort_order: [u8; M],
    _limit: u32,
    _offset: u32,
    _status: u8,
    // This is always set to MAX_NOTES. We need to pass it to TS in order to correctly construct the BoundedVec
    _max_notes: u32,
    // This is always set to NOTE_PCKD_LEN + RETRIEVED_NOTE_OVERHEAD. We need to pass it to TS in order to be able to
    // correctly construct the BoundedVec there.
    _packed_retrieved_note_length: u32,
) -> BoundedVec<[Field; NOTE_PCKD_LEN + RETRIEVED_NOTE_OVERHEAD], MAX_NOTES> {}

pub unconstrained fn get_notes<Note, let NOTE_PCKD_LEN: u32, let M: u32, let MAX_NOTES: u32>(
    storage_slot: Field,
    num_selects: u8,
    select_by_indexes: [u8; M],
    select_by_offsets: [u8; M],
    select_by_lengths: [u8; M],
    select_values: [Field; M],
    select_comparators: [u8; M],
    sort_by_indexes: [u8; M],
    sort_by_offsets: [u8; M],
    sort_by_lengths: [u8; M],
    sort_order: [u8; M],
    limit: u32,
    offset: u32,
    status: u8,
) -> [Option<RetrievedNote<Note>>; MAX_NOTES]
where
    Note: NoteType + Packable<NOTE_PCKD_LEN>,
{
    // N + 3 because of the contract address, nonce, and note_hash_counter that are stored out of the packed note.
    let packed_retrieved_notes: BoundedVec<[Field; NOTE_PCKD_LEN + RETRIEVED_NOTE_OVERHEAD], MAX_NOTES> = get_notes_oracle(
        storage_slot,
        num_selects,
        select_by_indexes,
        select_by_offsets,
        select_by_lengths,
        select_values,
        select_comparators,
        sort_by_indexes,
        sort_by_offsets,
        sort_by_lengths,
        sort_order,
        limit,
        offset,
        status,
        MAX_NOTES,
        NOTE_PCKD_LEN + RETRIEVED_NOTE_OVERHEAD,
    );

    let mut notes = BoundedVec::<_, MAX_NOTES>::new();
    for i in 0..packed_retrieved_notes.len() {
        let retrieved_note = unpack_retrieved_note(packed_retrieved_notes.get(i));
        notes.push(retrieved_note);
    }

    // At last we convert the bounded vector to an array of options. We do this because that is what the filter
    // function needs to have on the output and we've decided to have the same type on the input and output of
    // the filter and preprocessor functions.
    //
    // We have decided to have the same type on the input and output of the filter and preprocessor functions because
    // it allows us to chain multiple filters and preprocessors together.
    //
    // So why do we want the array of options on the output of the filter function?
    //
    // Filter returns an array of options rather than a BoundedVec for performance reasons. Using an array of options
    // allows setting values at known indices in the output array which is much more efficient than pushing to a
    // BoundedVec where the write position depends on previous iterations. The array can then be efficiently converted
    // to a BoundedVec using utils/array/collapse.nr::collapse function from Aztec.nr. This avoids expensive dynamic
    // memory access patterns that would be required when building up a BoundedVec incrementally. For preprocessor
    // functions we could use BoundedVec return value as there the optimization does not matter since it is applied in
    // an unconstrained context. We, however, use the same return value type to be able to use the same function as
    // both a preprocessor and a filter.
    let mut notes_array = [Option::none(); MAX_NOTES];
    for i in 0..notes.len() {
        if i < notes.len() {
            notes_array[i] = Option::some(notes.get_unchecked(i));
        }
    }

    notes_array
}

/// Returns true if the nullifier exists. Note that a \`true\` value can be constrained by proving existence of the
/// nullifier, but a \`false\` value should not be relied upon since other transactions may emit this nullifier before the
/// current transaction is included in a block. While this might seem of little use at first, certain design patterns
/// benefit from this abstraction (see e.g. \`PrivateMutable\`).
pub unconstrained fn check_nullifier_exists(inner_nullifier: Field) -> bool {
    check_nullifier_exists_oracle(inner_nullifier)
}

#[oracle(checkNullifierExists)]
unconstrained fn check_nullifier_exists_oracle(_inner_nullifier: Field) -> bool {}

/// Returns the derived app tagging secret ready to be included in a log for a given sender and recipient pair,
/// siloed for the current contract address.
pub unconstrained fn get_app_tag_as_sender(sender: AztecAddress, recipient: AztecAddress) -> Field {
    get_indexed_tagging_secret_as_sender_oracle(sender, recipient).compute_tag(recipient)
}

#[oracle(getIndexedTaggingSecretAsSender)]
unconstrained fn get_indexed_tagging_secret_as_sender_oracle(
    _sender: AztecAddress,
    _recipient: AztecAddress,
) -> IndexedTaggingSecret {}

/// Notifies the simulator that a tag has been used in a note, and to therefore increment the associated index so that
/// future notes get a different tag and can be discovered by the recipient.
/// This change should only be persisted in a non-volatile database if the tagged log is found in an actual block -
/// otherwise e.g. a reverting transaction can cause the sender to accidentally skip indices and later produce notes
/// that are not found by the recipient.
pub fn increment_app_tagging_secret_index_as_sender(sender: AztecAddress, recipient: AztecAddress) {
    // Safety: This oracle call returns nothing: we only call it for its side effects. It is therefore always safe
    // to call.
    unsafe {
        increment_app_tagging_secret_index_as_sender_wrapper(sender, recipient);
    }
}

unconstrained fn increment_app_tagging_secret_index_as_sender_wrapper(
    sender: AztecAddress,
    recipient: AztecAddress,
) {
    increment_app_tagging_secret_index_as_sender_oracle(sender, recipient);
}

#[oracle(incrementAppTaggingSecretIndexAsSender)]
unconstrained fn increment_app_tagging_secret_index_as_sender_oracle(
    _sender: AztecAddress,
    _recipient: AztecAddress,
) {}
`},155:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/state_vars/map.nr",source:`use crate::state_vars::storage::Storage;
use dep::protocol_types::{storage::map::derive_storage_slot_in_map, traits::ToField};

// docs:start:map
pub struct Map<K, V, Context> {
    context: Context,
    storage_slot: Field,
    state_var_constructor: fn(Context, Field) -> V,
}
// docs:end:map

// Map reserves a single storage slot regardless of what it stores because nothing is stored at said slot: it is only
// used to derive the storage slots of nested state variables, which is expected to never result in collisions or slots
// being close to one another due to these being hashes. This mirrors the strategy adopted by Solidity mappings.
impl<K, T, Context> Storage<1> for Map<K, T, Context> {
    fn get_storage_slot(self) -> Field {
        self.storage_slot
    }
}

impl<K, V, Context> Map<K, V, Context> {
    // docs:start:new
    pub fn new(
        context: Context,
        storage_slot: Field,
        state_var_constructor: fn(Context, Field) -> V,
    ) -> Self {
        assert(storage_slot != 0, "Storage slot 0 not allowed. Storage slots must start from 1.");
        Map { context, storage_slot, state_var_constructor }
    }
    // docs:end:new

    // docs:start:at
    pub fn at(self, key: K) -> V
    where
        K: ToField,
    {
        // TODO(#1204): use a generator index for the storage slot
        let derived_storage_slot = derive_storage_slot_in_map(self.storage_slot, key);

        let state_var_constructor = self.state_var_constructor;
        state_var_constructor(self.context, derived_storage_slot)
    }
    // docs:end:at
}
`},166:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/state_vars/shared_mutable.nr",source:`use dep::protocol_types::{
    shared_mutable::{
        ScheduledDelayChange,
        ScheduledValueChange,
        shared_mutable_values::{unpack_delay_change, unpack_value_change},
        SharedMutableValues,
    },
    traits::Packable,
};

use crate::{
    context::{PrivateContext, PublicContext, UtilityContext},
    state_vars::storage::Storage,
    utils::with_hash::WithHash,
};

mod test;

pub struct SharedMutable<T, let INITIAL_DELAY: u32, Context> {
    context: Context,
    storage_slot: Field,
}

// This will make the Aztec macros require that T implements the Packable and Eq traits, and allocate \`M\` storage
// slots to this state variable.
impl<T, let INITIAL_DELAY: u32, Context, let M: u32> Storage<M> for SharedMutable<T, INITIAL_DELAY, Context>
where
    WithHash<SharedMutableValues<T, INITIAL_DELAY>, _>: Packable<M>,
{
    fn get_storage_slot(self) -> Field {
        self.storage_slot
    }
}

// SharedMutable<T> stores a value of type T that is:
//  - publicly known (i.e. unencrypted)
//  - mutable in public
//  - readable in private with no contention (i.e. multiple parties can all read the same value without blocking one
//    another nor needing to coordinate)
// This is famously a hard problem to solve. SharedMutable makes it work by introducing a delay to public mutation:
// the value is not changed immediately but rather a value change is scheduled to happen in the future after some delay
// measured in blocks. Reads in private are only valid as long as they are included in a block not too far into the
// future, so that they can guarantee the value will not have possibly changed by then (because of the delay).
// The delay for changing a value is initially equal to INITIAL_DELAY, but can be changed by calling
// \`schedule_delay_change\`.
impl<T, let INITIAL_DELAY: u32, Context> SharedMutable<T, INITIAL_DELAY, Context> {
    pub fn new(context: Context, storage_slot: Field) -> Self {
        assert(storage_slot != 0, "Storage slot 0 not allowed. Storage slots must start from 1.");
        Self { context, storage_slot }
    }
}

impl<T, let INITIAL_DELAY: u32> SharedMutable<T, INITIAL_DELAY, &mut PublicContext>
where
    T: Eq,
{

    pub fn schedule_value_change<let N: u32>(self, new_value: T)
    where
        T: Packable<N>,
    {
        let _value_change = self.schedule_and_return_value_change(new_value);
    }

    pub fn schedule_and_return_value_change<let N: u32>(
        self,
        new_value: T,
    ) -> ScheduledValueChange<T>
    where
        T: Packable<N>,
    {
        let mut value_change = self.read_value_change();
        let delay_change = self.read_delay_change();

        let block_number = self.context.block_number() as u32;
        let current_delay = delay_change.get_current(block_number);

        // TODO: make this configurable
        // https://github.com/AztecProtocol/aztec-packages/issues/5501
        let block_of_change = block_number + current_delay;
        value_change.schedule_change(new_value, block_number, current_delay, block_of_change);

        self.write(value_change, delay_change);

        value_change
    }

    pub fn schedule_delay_change<let N: u32>(self, new_delay: u32)
    where
        T: Packable<N>,
    {
        let mut delay_change = self.read_delay_change();

        let block_number = self.context.block_number() as u32;

        delay_change.schedule_change(new_delay, block_number);

        self.write(self.read_value_change(), delay_change);
    }

    pub fn get_current_value<let N: u32>(self) -> T
    where
        T: Packable<N>,
    {
        let block_number = self.context.block_number() as u32;
        self.read_value_change().get_current_at(block_number)
    }

    pub fn get_current_delay<let N: u32>(self) -> u32
    where
        T: Packable<N>,
    {
        let block_number = self.context.block_number() as u32;
        self.read_delay_change().get_current(block_number)
    }

    pub fn get_scheduled_value<let N: u32>(self) -> (T, u32)
    where
        T: Packable<N>,
    {
        self.read_value_change().get_scheduled()
    }

    pub fn get_scheduled_delay<let N: u32>(self) -> (u32, u32)
    where
        T: Packable<N>,
    {
        self.read_delay_change().get_scheduled()
    }

    fn read_value_change<let N: u32>(self) -> ScheduledValueChange<T>
    where
        T: Packable<N>,
    {
        // We don't read ScheduledValueChange directly by having it implement Packable because ScheduledValueChange
        // and ScheduledDelayChange are packed together (sdc and svc.block_of_change are stored in the same slot).
        let packed = self.context.storage_read(self.storage_slot);
        unpack_value_change::<T, N>(packed)
    }

    fn read_delay_change<let N: u32>(self) -> ScheduledDelayChange<INITIAL_DELAY>
    where
        T: Packable<N>,
    {
        // Since all ScheduledDelayChange member are packed into a single field, we can read a single storage slot
        // here and skip the ones that correspond to ScheduledValueChange members. We are abusing the fact that
        // the field containing the ScheduledDelayChange data is the first one in the storage layout - otherwise we'd
        // need to offset the storage slot to get the position where it'd land.
        // We don't read ScheduledDelayChange directly by having it implement Packable because
        // ScheduledValueChange and ScheduledDelayChange are packed together (sdc and svc.block_of_change are
        // stored in the same slot).
        let packed = self.context.storage_read(self.storage_slot);
        unpack_delay_change::<INITIAL_DELAY>(packed)
    }

    fn write<let N: u32>(
        self,
        value_change: ScheduledValueChange<T>,
        delay_change: ScheduledDelayChange<INITIAL_DELAY>,
    )
    where
        T: Packable<N>,
    {
        // Whenever we write to public storage, we write both the value change and delay change to storage at once.
        // We do so by wrapping them in a single struct (\`SharedMutableValues\`). Then we wrap the resulting struct in
        // \`WithHash\`.
        // Wrapping in \`WithHash\` makes for more costly writes but it also makes private proofs much simpler because
        // they only need to produce a historical proof for the hash, which results in a single inclusion proof (as
        // opposed to 4 in the best case scenario in which T is a single field). Private shared mutable reads are
        // assumed to be much more frequent than public writes, so this tradeoff makes sense.
        let values = WithHash::new(SharedMutableValues::new(value_change, delay_change));

        self.context.storage_write(self.storage_slot, values);
    }
}

impl<T, let INITIAL_DELAY: u32> SharedMutable<T, INITIAL_DELAY, &mut PrivateContext>
where
    T: Eq,
{
    pub fn get_current_value<let N: u32>(self) -> T
    where
        T: Packable<N>,
    {
        // When reading the current value in private we construct a historical state proof for the public value.
        // However, since this value might change, we must constrain the maximum transaction block number as this proof
        // will only be valid for however many blocks we can ensure the value will not change, which will depend on the
        // current delay and any scheduled delay changes.
        let (value_change, delay_change, historical_block_number) =
            self.historical_read_from_public_storage();

        // We use the effective minimum delay as opposed to the current delay at the historical block as this one also
        // takes into consideration any scheduled delay changes.
        // For example, consider a scenario in which at block 200 the current delay was 50. We may naively think that
        // the earliest we could change the value would be at block 251 by scheduling immediately after the historical
        // block, i.e. at block 201. But if there was a delay change scheduled for block 210 to reduce the delay to 20
        // blocks, then if a value change was scheduled at block 210 it would go into effect at block 230, which is
        // earlier than what we'd expect if we only considered the current delay.
        let effective_minimum_delay =
            delay_change.get_effective_minimum_delay_at(historical_block_number);
        let block_horizon =
            value_change.get_block_horizon(historical_block_number, effective_minimum_delay);

        // We prevent this transaction from being included in any block after the block horizon, ensuring that the
        // historical public value matches the current one, since it can only change after the horizon.
        self.context.set_tx_max_block_number(block_horizon);
        value_change.get_current_at(historical_block_number)
    }

    fn historical_read_from_public_storage<let N: u32>(
        self,
    ) -> (ScheduledValueChange<T>, ScheduledDelayChange<INITIAL_DELAY>, u32)
    where
        T: Packable<N>,
    {
        let header = self.context.get_block_header();
        let address = self.context.this_address();

        let historical_block_number = header.global_variables.block_number as u32;

        let values: SharedMutableValues<T, INITIAL_DELAY> =
            WithHash::historical_public_storage_read(header, address, self.storage_slot);

        (values.svc, values.sdc, historical_block_number)
    }
}

impl<T, let INITIAL_DELAY: u32> SharedMutable<T, INITIAL_DELAY, UtilityContext>
where
    T: Eq,
{
    pub unconstrained fn get_current_value<let N: u32>(self) -> T
    where
        T: Packable<N>,
    {
        let smv: SharedMutableValues<T, INITIAL_DELAY> =
            WithHash::utility_public_storage_read(self.context, self.storage_slot);

        let block_number = self.context.block_number() as u32;
        smv.svc.get_current_at(block_number)
    }
}
`},193:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/utils/with_hash.nr",source:`use crate::{
    context::{PublicContext, UtilityContext},
    history::public_storage::PublicStorageHistoricalRead,
    oracle,
};
use dep::protocol_types::{
    address::AztecAddress, block_header::BlockHeader, hash::poseidon2_hash, traits::Packable,
};

/// A struct that allows for efficient reading of value \`T\` from public storage in private.
///
/// The efficient reads are achieved by verifying large values through a single hash check
/// and then proving inclusion only of the hash in public storage. This reduces the number
/// of required tree inclusion proofs from \`N\` to 1.
///
/// # Type Parameters
/// - \`T\`: The underlying type being wrapped, must implement \`Packable<N>\`
/// - \`N\`: The number of field elements required to pack values of type \`T\`
pub struct WithHash<T, let N: u32> {
    value: T,
    packed: [Field; N],
    hash: Field,
}

impl<T, let N: u32> WithHash<T, N>
where
    T: Packable<N> + Eq,
{
    pub fn new(value: T) -> Self {
        let packed = value.pack();
        Self { value, packed, hash: poseidon2_hash(packed) }
    }

    pub fn get_value(self) -> T {
        self.value
    }

    pub fn get_hash(self) -> Field {
        self.hash
    }

    pub fn public_storage_read(context: PublicContext, storage_slot: Field) -> T {
        context.storage_read(storage_slot)
    }

    pub unconstrained fn utility_public_storage_read(
        context: UtilityContext,
        storage_slot: Field,
    ) -> T {
        context.storage_read(storage_slot)
    }

    pub fn historical_public_storage_read(
        header: BlockHeader,
        address: AztecAddress,
        storage_slot: Field,
    ) -> T {
        let historical_block_number = header.global_variables.block_number as u32;

        // We could simply produce historical inclusion proofs for each field in \`packed\`, but that would require one
        // full sibling path per storage slot (since due to kernel siloing the storage is not contiguous). Instead, we
        // get an oracle to provide us the values, and instead we prove inclusion of their hash, which is both a much
        // smaller proof (a single slot), and also independent of the size of T (except in that we need to pack and hash T).
        let hint = WithHash::new(
            // Safety: We verify that a hash of the hint/packed data matches the stored hash.
            unsafe {
                oracle::storage::storage_read(address, storage_slot, historical_block_number)
            },
        );

        let hash = header.public_storage_historical_read(storage_slot + N as Field, address);

        if hash != 0 {
            assert_eq(hash, hint.get_hash(), "Hint values do not match hash");
        } else {
            // The hash slot can only hold a zero if it is uninitialized. Therefore, the hints must then be zero
            // (i.e. the default value for public storage) as well.
            assert_eq(
                hint.get_value(),
                T::unpack(std::mem::zeroed()),
                "Non-zero hint for zero hash",
            );
        };

        hint.get_value()
    }
}

impl<T, let N: u32> Packable<N + 1> for WithHash<T, N>
where
    T: Packable<N>,
{
    fn pack(self) -> [Field; N + 1] {
        let mut result: [Field; N + 1] = std::mem::zeroed();
        for i in 0..N {
            result[i] = self.packed[i];
        }
        result[N] = self.hash;

        result
    }

    fn unpack(packed: [Field; N + 1]) -> Self {
        let mut value_packed: [Field; N] = std::mem::zeroed();
        for i in 0..N {
            value_packed[i] = packed[i];
        }
        let hash = packed[N];

        Self { value: T::unpack(value_packed), packed: value_packed, hash }
    }
}

mod test {
    use crate::{
        oracle::random::random,
        test::{
            helpers::{cheatcodes, test_environment::TestEnvironment},
            mocks::mock_struct::MockStruct,
        },
        utils::with_hash::WithHash,
    };
    use dep::protocol_types::hash::poseidon2_hash;
    use dep::protocol_types::traits::{Packable, ToField};
    use dep::std::{mem, test::OracleMock};

    global storage_slot: Field = 47;

    #[test]
    unconstrained fn create_and_recover() {
        let value = MockStruct { a: 5, b: 3 };
        let value_with_hash = WithHash::new(value);
        let recovered = WithHash::unpack(value_with_hash.pack());

        assert_eq(recovered.value, value);
        assert_eq(recovered.packed, value.pack());
        assert_eq(recovered.hash, poseidon2_hash(value.pack()));
    }

    #[test]
    unconstrained fn read_uninitialized_value() {
        let mut env = TestEnvironment::new();

        let block_header = env.private().historical_header;
        let address = env.contract_address();

        let result = WithHash::<MockStruct, _>::historical_public_storage_read(
            block_header,
            address,
            storage_slot,
        );

        // We should get zeroed value
        let expected: MockStruct = mem::zeroed();
        assert_eq(result, expected);
    }

    #[test]
    unconstrained fn read_initialized_value() {
        let mut env = TestEnvironment::new();

        let value = MockStruct { a: 5, b: 3 };
        let value_with_hash = WithHash::new(value);

        // We write the value with hash to storage
        cheatcodes::direct_storage_write(
            env.contract_address(),
            storage_slot,
            value_with_hash.pack(),
        );

        // We advance block by 1 because env.private() currently returns context at latest_block - 1
        env.advance_block_by(1);

        let result = WithHash::<MockStruct, _>::historical_public_storage_read(
            env.private().historical_header,
            env.contract_address(),
            storage_slot,
        );

        assert_eq(result, value);
    }

    #[test(should_fail_with = "Non-zero hint for zero hash")]
    unconstrained fn test_bad_hint_uninitialized_value() {
        let mut env = TestEnvironment::new();

        env.advance_block_to(6);

        let value_packed = MockStruct { a: 1, b: 1 }.pack();

        let block_header = env.private().historical_header;
        let address = env.contract_address();

        // Mock the oracle to return a non-zero hint/packed value
        let _ = OracleMock::mock("storageRead")
            .with_params((
                address.to_field(), storage_slot, block_header.global_variables.block_number as u32,
                value_packed.len(),
            ))
            .returns(value_packed)
            .times(1);

        // This should revert because the hint value is non-zero and the hash is zero (default value of storage)
        let _ = WithHash::<MockStruct, _>::historical_public_storage_read(
            block_header,
            address,
            storage_slot,
        );
    }

    #[test(should_fail_with = "Hint values do not match hash")]
    unconstrained fn test_bad_hint_initialized_value() {
        let mut env = TestEnvironment::new();

        let value_packed = MockStruct { a: 5, b: 3 }.pack();

        // We write the value to storage
        cheatcodes::direct_storage_write(env.contract_address(), storage_slot, value_packed);

        // Now we write incorrect hash to the hash storage slot
        let incorrect_hash = random();
        let hash_storage_slot = storage_slot + (value_packed.len() as Field);
        cheatcodes::direct_storage_write(
            env.contract_address(),
            hash_storage_slot,
            [incorrect_hash],
        );

        // We advance block by 1 because env.private() currently returns context at latest_block - 1
        env.advance_block_by(1);

        let _ = WithHash::<MockStruct, _>::historical_public_storage_read(
            env.private().historical_header,
            env.contract_address(),
            storage_slot,
        );
    }
}
`},200:{path:"/home/aztec-dev/nargo/github.com/noir-lang/poseidon/v0.1.0/src/poseidon2.nr",source:`use std::default::Default;
use std::hash::Hasher;

comptime global RATE: u32 = 3;

pub struct Poseidon2 {
    cache: [Field; 3],
    state: [Field; 4],
    cache_size: u32,
    squeeze_mode: bool, // 0 => absorb, 1 => squeeze
}

impl Poseidon2 {
    #[no_predicates]
    pub fn hash<let N: u32>(input: [Field; N], message_size: u32) -> Field {
        Poseidon2::hash_internal(input, message_size, message_size != N)
    }

    pub(crate) fn new(iv: Field) -> Poseidon2 {
        let mut result =
            Poseidon2 { cache: [0; 3], state: [0; 4], cache_size: 0, squeeze_mode: false };
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
        self.state = crate::poseidon2_permutation(self.state, 4);
    }

    fn absorb(&mut self, input: Field) {
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

    fn squeeze(&mut self) -> Field {
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
        let two_pow_64 = 18446744073709551616;
        let iv: Field = (in_len as Field) * two_pow_64;
        let mut sponge = Poseidon2::new(iv);
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

pub struct Poseidon2Hasher {
    _state: [Field],
}

impl Hasher for Poseidon2Hasher {
    fn finish(self) -> Field {
        let iv: Field = (self._state.len() as Field) * 18446744073709551616; // iv = (self._state.len() << 64)
        let mut sponge = Poseidon2::new(iv);
        for i in 0..self._state.len() {
            sponge.absorb(self._state[i]);
        }
        sponge.squeeze()
    }

    fn write(&mut self, input: Field) {
        self._state = self._state.push_back(input);
    }
}

impl Default for Poseidon2Hasher {
    fn default() -> Self {
        Poseidon2Hasher { _state: &[] }
    }
}
`},262:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/address/aztec_address.nr",source:`use crate::{
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
`},265:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/address/partial_address.nr",source:`use crate::{
    address::{aztec_address::AztecAddress, salted_initialization_hash::SaltedInitializationHash},
    constants::GENERATOR_INDEX__PARTIAL_ADDRESS,
    contract_class_id::ContractClassId,
    hash::poseidon2_hash_with_separator,
    traits::{Deserialize, Serialize, ToField},
};

global PARTIAL_ADDRESS_LENGTH: u32 = 1;

// Partial address
pub struct PartialAddress {
    pub inner: Field,
}

impl ToField for PartialAddress {
    fn to_field(self) -> Field {
        self.inner
    }
}

impl Serialize<PARTIAL_ADDRESS_LENGTH> for PartialAddress {
    fn serialize(self: Self) -> [Field; PARTIAL_ADDRESS_LENGTH] {
        [self.to_field()]
    }
}

impl Deserialize<PARTIAL_ADDRESS_LENGTH> for PartialAddress {
    fn deserialize(fields: [Field; PARTIAL_ADDRESS_LENGTH]) -> Self {
        PartialAddress { inner: fields[0] }
    }
}

impl PartialAddress {
    pub fn from_field(field: Field) -> Self {
        Self { inner: field }
    }

    pub fn compute(
        contract_class_id: ContractClassId,
        salt: Field,
        initialization_hash: Field,
        deployer: AztecAddress,
    ) -> Self {
        PartialAddress::compute_from_salted_initialization_hash(
            contract_class_id,
            SaltedInitializationHash::compute(salt, initialization_hash, deployer),
        )
    }

    pub fn compute_from_salted_initialization_hash(
        contract_class_id: ContractClassId,
        salted_initialization_hash: SaltedInitializationHash,
    ) -> Self {
        PartialAddress::from_field(poseidon2_hash_with_separator(
            [contract_class_id.to_field(), salted_initialization_hash.to_field()],
            GENERATOR_INDEX__PARTIAL_ADDRESS,
        ))
    }

    pub fn to_field(self) -> Field {
        self.inner
    }

    pub fn is_zero(self) -> bool {
        self.to_field() == 0
    }

    pub fn assert_is_zero(self) {
        assert(self.to_field() == 0);
    }
}
`},267:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/address/salted_initialization_hash.nr",source:`use crate::{
    address::aztec_address::AztecAddress, constants::GENERATOR_INDEX__PARTIAL_ADDRESS,
    hash::poseidon2_hash_with_separator, traits::ToField,
};

// Salted initialization hash. Used in the computation of a partial address.
pub struct SaltedInitializationHash {
    pub inner: Field,
}

impl ToField for SaltedInitializationHash {
    fn to_field(self) -> Field {
        self.inner
    }
}

impl SaltedInitializationHash {
    pub fn from_field(field: Field) -> Self {
        Self { inner: field }
    }

    pub fn compute(salt: Field, initialization_hash: Field, deployer: AztecAddress) -> Self {
        SaltedInitializationHash::from_field(poseidon2_hash_with_separator(
            [salt, initialization_hash, deployer.to_field()],
            GENERATOR_INDEX__PARTIAL_ADDRESS,
        ))
    }

    pub fn assert_is_zero(self) {
        assert(self.to_field() == 0);
    }
}
`},271:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/contract_class_id.nr",source:`use crate::constants::GENERATOR_INDEX__CONTRACT_LEAF;
use crate::traits::{Deserialize, Empty, FromField, Packable, Serialize, ToField};

pub struct ContractClassId {
    pub inner: Field,
}

impl Eq for ContractClassId {
    fn eq(self, other: ContractClassId) -> bool {
        other.inner == self.inner
    }
}

impl ToField for ContractClassId {
    fn to_field(self) -> Field {
        self.inner
    }
}

impl FromField for ContractClassId {
    fn from_field(value: Field) -> Self {
        Self { inner: value }
    }
}

impl Serialize<1> for ContractClassId {
    fn serialize(self: Self) -> [Field; 1] {
        [self.inner]
    }
}

impl Deserialize<1> for ContractClassId {
    fn deserialize(fields: [Field; 1]) -> Self {
        Self { inner: fields[0] }
    }
}

impl Empty for ContractClassId {
    fn empty() -> Self {
        Self { inner: 0 }
    }
}

// Implement the Packable trait so ContractClassId can be stored in contract's storage.
impl Packable<1> for ContractClassId {
    fn pack(self) -> [Field; 1] {
        self.serialize()
    }

    fn unpack(fields: [Field; 1]) -> Self {
        Self::deserialize(fields)
    }
}

impl ContractClassId {
    pub fn compute(
        artifact_hash: Field,
        private_functions_root: Field,
        public_bytecode_commitment: Field,
    ) -> Self {
        let hash = crate::hash::poseidon2_hash_with_separator(
            [artifact_hash, private_functions_root, public_bytecode_commitment],
            GENERATOR_INDEX__CONTRACT_LEAF,
        ); // TODO(@spalladino): Update generator index
        ContractClassId::from_field(hash)
    }

    pub fn assert_is_zero(self) {
        assert(self.to_field() == 0);
    }
}
`},279:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/debug_log.nr",source:`/// Utility function to console.log data in the acir simulator.
/// Example:
///   debug_log("blah blah this is a debug string");
pub fn debug_log<let N: u32>(msg: str<N>) {
    debug_log_format(msg, []);
}

/// Utility function to console.log data in the acir simulator. This variant receives a format string in which the
/// \`\${k}\` tokens will be replaced with the k-eth value in the \`args\` array.
/// Examples:
///   debug_log_format("get_2(slot:{0}) =>\\n\\t0:{1}\\n\\t1:{2}", [storage_slot, note0_hash, note1_hash]);
///   debug_log_format("whole array: {}", [e1, e2, e3, e4]);
pub fn debug_log_format<let M: u32, let N: u32>(msg: str<M>, args: [Field; N]) {
    // Safety: This oracle call returns nothing: we only call it for its side effects. It is therefore always safe
    // to call.
    unsafe { debug_log_oracle_wrapper(msg, args) };
}

pub unconstrained fn debug_log_oracle_wrapper<let M: u32, let N: u32>(
    msg: str<M>,
    args: [Field; N],
) {
    debug_log_oracle(msg, args.as_slice());
}

// WARNING: sometimes when using debug logs the ACVM errors with: \`thrown: "solver opcode resolution error: cannot solve opcode: expression has too many unknowns x155"\`
#[oracle(debugLog)]
unconstrained fn debug_log_oracle<let M: u32>(_msg: str<M>, args: [Field]) {}
`},280:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/hash.nr",source:`use crate::{
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
`},294:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/meta/mod.nr",source:`use super::traits::{Deserialize, Packable, Serialize};

/// Returns the typed expression of a trait method implementation.
///
/// This helper function is preferred over directly inlining with \`$typ::target_method()\` in a quote,
/// as direct inlining would result in missing import warnings in the generated code (specifically,
/// warnings that the trait implementation is not in scope).
///
/// # Note
/// A copy of this function exists in \`aztec-nr/aztec/src/macros/utils.nr\`. We maintain separate copies
/// because importing it there from here would cause the \`target_trait\` to be interpreted in the context
/// of this crate, making it impossible to compile code for traits from that crate (e.g. NoteType).
comptime fn get_trait_impl_method(
    typ: Type,
    target_trait: Quoted,
    target_method: Quoted,
) -> TypedExpr {
    let trait_constraint = target_trait.as_trait_constraint();
    typ
        .get_trait_impl(trait_constraint)
        .expect(f"Could not find impl for {target_trait} for type {typ}")
        .methods()
        .filter(|m| m.name() == target_method)[0]
        .as_typed_expr()
}

/// Generates code that deserializes a struct, primitive type, array or string from a field array.
///
/// # Parameters
/// - \`name\`: The name of the current field being processed, used to identify fields for replacement.
/// - \`typ\`: The type of the struct or field being deserialized (e.g., a custom struct, array, or primitive).
/// - \`field_array_name\`: The name of the field array containing serialized field data (e.g., \`"values"\`).
/// - \`num_already_consumed\`: The number of fields already processed in previous recursion calls.
/// - \`should_unpack\`: A boolean indicating whether the type should be unpacked (see description of \`Packable\`
/// and \`Serialize\` trait for more information about the difference between packing and serialization).
///
/// # Returns
/// A tuple containing:
/// - \`Quoted\`: A code that deserializes a given struct, primitive type, array, or string from the field array.
/// - \`u32\`: The total number of fields consumed during deserialization (used for recursion).
///
/// # Nested Struct Example
/// Given the following setup:
/// \`\`\`
/// struct UintNote {
///     value: u128,
///     owner: AztecAddress,
///     randomness: Field,
/// }
///
/// struct AztecAddress {
///     inner: Field,
/// }
/// \`\`\`
///
/// If \`UintNote\` is the input type, the function will generate the following deserialization code:
/// \`\`\`
/// UintNote {
///     value: fields[0] as u128,
///     owner: AztecAddress {
///         inner: fields[1],
///     },
///     randomness: fields[2],
/// }
/// \`\`\`
/// # Nested Struct Example with Unpacking
/// - given the same setup as above and given that u128, AztecAddress and Field implement the \`Packable\` trait
///   the result we get is:
/// \`\`\`
/// UintNote {
///     value: aztec::protocol_types::traits::Packable::unpack([fields[0]]),
///     owner: aztec::protocol_types::traits::Packable::unpack([fields[1]]),
///     randomness: aztec::protocol_types::traits::Packable::unpack([fields[2]]),
/// }
/// \`\`\`
///
/// # Panics
/// - If the deserialization logic encounters a type it does not support.
/// - If an incorrect number of fields are consumed when deserializing a string.
pub comptime fn generate_deserialize_from_fields(
    name: Quoted,
    typ: Type,
    field_array_name: Quoted,
    num_already_consumed: u32,
    should_unpack: bool,
) -> (Quoted, u32) {
    let mut result = quote {};
    // Counter for the number of fields consumed
    let mut consumed_counter: u32 = 0;

    // If the type implements \`Packable\`, its length will be assigned to the \`maybe_packed_len_typ\` variable.
    let maybe_packed_len_typ = std::meta::typ::fresh_type_variable();
    let packable_constraint = quote { Packable<$maybe_packed_len_typ> }.as_trait_constraint();

    if (should_unpack & typ.implements(packable_constraint)) {
        // Unpacking is enabled and the given type implements the \`Packable\` trait so we call the \`unpack()\`
        // method, add the resulting field array to \`aux_vars\` and each field to \`fields\`.
        let packed_len = maybe_packed_len_typ.as_constant().unwrap();

        // We copy the packed fields into a new array and pass that to the unpack function in a quote
        let mut packed_fields_quotes = &[];
        for i in 0..packed_len {
            let index_in_field_array = i + num_already_consumed;
            packed_fields_quotes =
                packed_fields_quotes.push_back(quote { $field_array_name[$index_in_field_array] });
        }
        let packed_fields = packed_fields_quotes.join(quote {,});

        // Now we call unpack on the type
        let unpack_method = get_trait_impl_method(typ, quote { Packable<_> }, quote { unpack });
        result = quote { $unpack_method([ $packed_fields ]) };

        consumed_counter = packed_len;
    } else if typ.is_field() | typ.as_integer().is_some() | typ.is_bool() {
        // The field is a primitive so we just reference it in the field array
        result = quote { $field_array_name[$num_already_consumed] as $typ };
        consumed_counter = 1;
    } else if typ.as_data_type().is_some() {
        // The field is a struct so we iterate over each struct field and recursively call
        // \`generate_deserialize_from_fields\`
        let (nested_def, generics) = typ.as_data_type().unwrap();
        let nested_name = nested_def.name();
        let mut deserialized_fields_list = &[];

        // Iterate over each field in the struct
        for field in nested_def.fields(generics) {
            let (field_name, field_type) = field;
            // Recursively call \`generate_deserialize_from_fields\` for each field in the struct
            let (deserialized_field, num_consumed_in_recursion) = generate_deserialize_from_fields(
                field_name,
                field_type,
                field_array_name,
                consumed_counter + num_already_consumed,
                should_unpack,
            );
            // We increment the consumed counter by the number of fields consumed in the recursion
            consumed_counter += num_consumed_in_recursion;
            // We add the deserialized field to the list of deserialized fields.
            // E.g. \`value: u128 { lo: fields[0], hi: fields[1] }\`
            deserialized_fields_list =
                deserialized_fields_list.push_back(quote { $field_name: $deserialized_field });
        }

        // We can construct the struct from the deserialized fields
        let deserialized_fields = deserialized_fields_list.join(quote {,});
        result = quote {
                $nested_name {
                    $deserialized_fields
                }
            };
    } else if typ.as_array().is_some() {
        // The field is an array so we iterate over each element and recursively call
        // \`generate_deserialize_from_fields\`
        let (element_type, array_len) = typ.as_array().unwrap();
        let array_len = array_len.as_constant().unwrap();
        let mut array_fields_list = &[];

        // Iterate over each element in the array
        for _ in 0..array_len {
            // Recursively call \`generate_deserialize_from_fields\` for each element in the array
            let (deserialized_field, num_consumed_in_recursion) = generate_deserialize_from_fields(
                name,
                element_type,
                field_array_name,
                consumed_counter + num_already_consumed,
                should_unpack,
            );
            // We increment the consumed counter by the number of fields consumed in the recursion
            consumed_counter += num_consumed_in_recursion;
            // We add the deserialized field to the list of deserialized fields.
            array_fields_list = array_fields_list.push_back(deserialized_field);
        }

        // We can construct the array from the deserialized fields
        let array_fields = array_fields_list.join(quote {,});
        result = quote { [ $array_fields ] };
    } else if typ.as_str().is_some() {
        // The field is a string and we expect each byte of the string to be represented as 1 field in the field
        // array. So we iterate over the string length and deserialize each character as u8 in the recursive call
        // to \`generate_deserialize_from_fields\`.
        let length_type = typ.as_str().unwrap();
        let str_len = length_type.as_constant().unwrap();
        let mut byte_list = &[];

        // Iterate over each character in the string
        for _ in 0..str_len {
            // Recursively call \`generate_deserialize_from_fields\` for each character in the string
            let (deserialized_field, num_consumed_in_recursion) = generate_deserialize_from_fields(
                name,
                quote {u8}.as_type(),
                field_array_name,
                consumed_counter + num_already_consumed,
                should_unpack,
            );

            // We should consume just one field in the recursion so we sanity check that
            assert_eq(
                num_consumed_in_recursion,
                1,
                "Incorrect number of fields consumed in string deserialization",
            );

            // We increment the consumed counter by 1 as we have consumed one field
            consumed_counter += 1;

            // We add the deserialized field to the list of deserialized fields.
            // E.g. \`fields[6] as u8\`
            byte_list = byte_list.push_back(deserialized_field);
        }

        // We construct the string from the deserialized fields
        let bytes = byte_list.join(quote {,});
        result = quote { [ $bytes ].as_str_unchecked() };
    } else {
        panic(
            f"Unsupported type for serialization of argument {name} and type {typ}",
        )
    }

    (result, consumed_counter)
}

/// Generates code that serializes a type into an array of fields. Also generates auxiliary variables if necessary
/// for serialization. If \`should_pack\` is true, we check if the type implements the \`Packable\` trait and pack it
/// if it does.
///
/// # Parameters
/// - \`name\`: The base identifier (e.g., \`self\`, \`some_var\`).
/// - \`typ\`: The type being serialized (e.g., a custom struct, array, or primitive type).
/// - \`should_pack\`: A boolean indicating whether the type should be packed.
///
/// # Returns
/// A tuple containing:
/// - A flattened array of \`Quoted\` field references representing the serialized fields.
/// - An array of \`Quoted\` auxiliary variables needed for serialization, such as byte arrays for strings.
///
/// # Examples
///
/// ## Struct
/// Given the following struct:
/// \`\`\`rust
/// struct MockStruct {
///     a: Field,
///     b: Field,
/// }
/// \`\`\`
///
/// Serializing the struct:
/// \`\`\`rust
/// generate_serialize_to_fields(quote { my_mock_struct }, MockStruct, false)
/// // Returns:
/// // ([\`my_mock_struct.a\`, \`my_mock_struct.b\`], [])
/// \`\`\`
///
/// ## Nested Struct
/// For a more complex struct:
/// \`\`\`rust
/// struct NestedStruct {
///     m1: MockStruct,
///     m2: MockStruct,
/// }
/// \`\`\`
///
/// Serialization output:
/// \`\`\`rust
/// generate_serialize_to_fields(quote { self }, NestedStruct, false)
/// // Returns:
/// // ([\`self.m1.a\`, \`self.m1.b\`, \`self.m2.a\`, \`self.m2.b\`], [])
/// \`\`\`
///
/// ## Array
/// For an array type:
/// \`\`\`rust
/// generate_serialize_to_fields(quote { my_array }, [Field; 3], false)
/// // Returns:
/// // ([\`my_array[0]\`, \`my_array[1]\`, \`my_array[2]\`], [])
/// \`\`\`
///
/// ## String
/// For a string field, where each character is serialized as a \`Field\`:
/// \`\`\`rust
/// generate_serialize_to_fields(quote { my_string }, StringType, false)
/// // Returns:
/// // ([\`my_string_as_bytes[0] as Field\`, \`my_string_as_bytes[1] as Field\`, ...],
/// // [\`let my_string_as_bytes = my_string.as_bytes()\`])
/// \`\`\`
///
/// ## Nested Struct with packing enabled
/// - u128 has a \`Packable\` implementation hence it will be packed.
///
/// For a more complex struct:
/// \`\`\`rust
/// struct MyStruct {
///     value: u128,
///     value2: Field,
/// }
/// \`\`\`
///
/// # Panics
/// - If the type is unsupported for serialization.
/// - If the provided \`typ\` contains invalid constants or incompatible structures.
pub comptime fn generate_serialize_to_fields(
    name: Quoted,
    typ: Type,
    should_pack: bool,
) -> ([Quoted], [Quoted]) {
    let mut fields = &[];
    let mut aux_vars = &[];

    // If the type implements \`Packable\`, its length will be assigned to the \`maybe_packed_len_typ\` variable.
    let maybe_packed_len_typ = std::meta::typ::fresh_type_variable();
    let packable_constraint =
        quote { crate::traits::Packable<$maybe_packed_len_typ> }.as_trait_constraint();

    if (should_pack & typ.implements(packable_constraint)) {
        // Packing is enabled and the given type implements the \`Packable\` trait so we call the \`pack()\`
        // method, add the resulting field array to \`aux_vars\` and each field to \`fields\`.
        let packed_len = maybe_packed_len_typ.as_constant().unwrap();

        // We collapse the name to a one that gets tokenized as a single token (e.g. "self.value" -> "self_value").
        let name_at_one_token = collapse_to_one_token(name);
        let packed_struct_name = f"{name_at_one_token}_aux_var".quoted_contents();

        // We add the individual fields to the fields array
        let pack_method = get_trait_impl_method(
            typ,
            quote { crate::traits::Packable<$packed_len> },
            quote { pack },
        );
        let packed_struct = quote { let $packed_struct_name = $pack_method($name) };
        for i in 0..packed_len {
            fields = fields.push_back(quote { $packed_struct_name[$i] });
        }

        // We add the new auxiliary variable to the aux_vars array
        aux_vars = aux_vars.push_back(packed_struct);
    } else if typ.is_field() {
        // For field we just add the value to fields
        fields = fields.push_back(name);
    } else if typ.as_integer().is_some() | typ.is_bool() {
        // For integer and bool we just cast to Field and add the value to fields
        fields = fields.push_back(quote { $name as Field });
    } else if typ.as_data_type().is_some() {
        // For struct we pref
        let nested_struct = typ.as_data_type().unwrap();
        let params = nested_struct.0.fields(nested_struct.1);
        let struct_flattened = params.map(|(param_name, param_type): (Quoted, Type)| {
            let maybe_prefixed_name = if name == quote {} {
                // Triggered when the param name is of a value available in the current scope (e.g. a function
                // argument) --> then we don't prefix the name with anything.
                param_name
            } else {
                // Triggered when we want to prefix the param name with the \`name\` from function input. This
                // can typically be \`self\` when implementing a method on a struct.
                quote { $name.$param_name }
            };
            generate_serialize_to_fields(quote {$maybe_prefixed_name}, param_type, should_pack)
        });
        let struct_flattened_fields = struct_flattened.fold(
            &[],
            |acc: [Quoted], (fields, _): (_, [Quoted])| acc.append(fields),
        );
        let struct_flattened_aux_vars = struct_flattened.fold(
            &[],
            |acc: [Quoted], (_, aux_vars): ([Quoted], _)| acc.append(aux_vars),
        );
        fields = fields.append(struct_flattened_fields);
        aux_vars = aux_vars.append(struct_flattened_aux_vars);
    } else if typ.as_array().is_some() {
        // For array we recursively call \`generate_serialize_to_fields(...)\` for each element
        let (element_type, array_len) = typ.as_array().unwrap();
        let array_len = array_len.as_constant().unwrap();
        for i in 0..array_len {
            let (element_fields, element_aux_vars) =
                generate_serialize_to_fields(quote { $name[$i] }, element_type, should_pack);
            fields = fields.append(element_fields);
            aux_vars = aux_vars.append(element_aux_vars);
        }
    } else if typ.as_str().is_some() {
        // For string we convert the value to bytes, we store the \`as_bytes\` in an auxiliary variables and
        // then we add each byte to fields as a Field
        let length_type = typ.as_str().unwrap();
        let str_len = length_type.as_constant().unwrap();
        let as_member = name.as_expr().unwrap().as_member_access();
        let var_name = if as_member.is_some() {
            as_member.unwrap().1
        } else {
            name
        };
        let as_bytes_name = f"{var_name}_as_bytes".quoted_contents();
        let as_bytes = quote { let $as_bytes_name = $name.as_bytes() };
        for i in 0..str_len {
            fields = fields.push_back(quote { $as_bytes_name[$i] as Field });
        }
        aux_vars = aux_vars.push_back(as_bytes);
    } else {
        panic(
            f"Unsupported type for serialization of argument {name} and type {typ}",
        )
    }

    (fields, aux_vars)
}

/// From a quote that gets tokenized to a multiple tokens we collapse it to a single token by replacing all \`.\` with \`_\`.
/// E.g. "self.values[0]" -> "self_values_0_"
comptime fn collapse_to_one_token(q: Quoted) -> Quoted {
    let tokens = q.tokens();

    let mut single_token = quote {};
    for token in tokens {
        let new_token = if ((token == quote {.}) | (token == quote {[}) | (token == quote {]})) {
            quote {_}
        } else {
            token
        };
        single_token = f"{single_token}{new_token}".quoted_contents();
    }
    single_token
}

pub(crate) comptime fn derive_serialize(s: TypeDefinition) -> Quoted {
    let typ = s.as_type();
    let (fields, aux_vars) = generate_serialize_to_fields(quote { self }, typ, false);
    let aux_vars_for_serialization = if aux_vars.len() > 0 {
        let joint = aux_vars.join(quote {;});
        quote { $joint; }
    } else {
        quote {}
    };

    let field_serializations = fields.join(quote {,});
    let serialized_len = fields.len();
    quote {
        impl Serialize<$serialized_len> for $typ {
            #[inline_always]
            fn serialize(self) -> [Field; $serialized_len] {
                $aux_vars_for_serialization
                [ $field_serializations ]
            }
        }
    }
}

pub(crate) comptime fn derive_deserialize(s: TypeDefinition) -> Quoted {
    let typ = s.as_type();
    let (fields, _) = generate_serialize_to_fields(quote { self }, typ, false);
    let serialized_len = fields.len();
    let (deserialized, _) =
        generate_deserialize_from_fields(quote { self }, typ, quote { serialized }, 0, false);
    quote {
        impl Deserialize<$serialized_len> for $typ {
            #[inline_always]
            fn deserialize(serialized: [Field; $serialized_len]) -> Self {
                $deserialized
            }
        }
    }
}

/// Generates \`Packable\` implementation for a given struct and returns the packed length.
///
/// Note: We are having this function separate from \`derive_packable\` because we use this in the note macros to get
/// the packed length of a note as well as the \`Packable\` implementation. We need the length to be able to register
/// the note in the global \`NOTES\` map. There the length is used to generate partial note helper functions.
pub comptime fn derive_packable_and_get_packed_len(s: TypeDefinition) -> (Quoted, u32) {
    let packing_enabled = true;

    let typ = s.as_type();
    let (fields, aux_vars) = generate_serialize_to_fields(quote { self }, typ, packing_enabled);
    let aux_vars_for_packing = if aux_vars.len() > 0 {
        let joint = aux_vars.join(quote {;});
        quote { $joint; }
    } else {
        quote {}
    };

    let (unpacked, _) =
        generate_deserialize_from_fields(quote { self }, typ, quote { packed }, 0, packing_enabled);

    let field_packings = fields.join(quote {,});
    let packed_len = fields.len();
    let packable_trait: TraitConstraint = quote { Packable<$packed_len> }.as_trait_constraint();
    (
        quote {
        impl $packable_trait for $typ {
            fn pack(self) -> [Field; $packed_len] {
                $aux_vars_for_packing
                [ $field_packings ]
            }

            fn unpack(packed: [Field; $packed_len]) -> Self {
                $unpacked
            }
        }
    },
        packed_len,
    )
}

pub(crate) comptime fn derive_packable(s: TypeDefinition) -> Quoted {
    let (packable_impl, _) = derive_packable_and_get_packed_len(s);
    packable_impl
}

#[derive(Packable, Serialize, Deserialize, Eq)]
pub struct Smol {
    a: Field,
    b: Field,
}

#[derive(Serialize, Deserialize, Eq)]
pub struct HasArray {
    a: [Field; 2],
    b: bool,
}

#[derive(Serialize, Deserialize, Eq)]
pub struct Fancier {
    a: Smol,
    b: [Field; 2],
    c: [u8; 3],
    d: str<16>,
}

fn main() {
    assert(false);
}

#[test]
fn smol_test() {
    let smol = Smol { a: 1, b: 2 };
    let serialized = smol.serialize();
    assert(serialized == [1, 2], serialized);
    let deserialized = Smol::deserialize(serialized);
    assert(deserialized == smol);

    // None of the struct members implements the \`Packable\` trait so the packed and serialized data should be the same
    let packed = smol.pack();
    assert_eq(packed, serialized, "Packed does not match serialized");
}

#[test]
fn has_array_test() {
    let has_array = HasArray { a: [1, 2], b: true };
    let serialized = has_array.serialize();
    assert(serialized == [1, 2, 1], serialized);
    let deserialized = HasArray::deserialize(serialized);
    assert(deserialized == has_array);
}

#[test]
fn fancier_test() {
    let fancier =
        Fancier { a: Smol { a: 1, b: 2 }, b: [0, 1], c: [1, 2, 3], d: "metaprogramming!" };
    let serialized = fancier.serialize();
    assert(
        serialized
            == [
                1, 2, 0, 1, 1, 2, 3, 0x6d, 0x65, 0x74, 0x61, 0x70, 0x72, 0x6f, 0x67, 0x72, 0x61,
                0x6d, 0x6d, 0x69, 0x6e, 0x67, 0x21,
            ],
        serialized,
    );
    let deserialized = Fancier::deserialize(serialized);
    assert(deserialized == fancier);
}
`},297:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/poseidon2.nr",source:`use crate::constants::TWO_POW_64;

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
`},307:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/public_keys.nr",source:`use crate::{
    address::public_keys_hash::PublicKeysHash,
    constants::{
        DEFAULT_IVPK_M_X, DEFAULT_IVPK_M_Y, DEFAULT_NPK_M_X, DEFAULT_NPK_M_Y, DEFAULT_OVPK_M_X,
        DEFAULT_OVPK_M_Y, DEFAULT_TPK_M_X, DEFAULT_TPK_M_Y, GENERATOR_INDEX__PUBLIC_KEYS_HASH,
    },
    hash::poseidon2_hash_with_separator,
    point::POINT_LENGTH,
    traits::{Deserialize, Hash, Serialize},
};

use dep::std::embedded_curve_ops::EmbeddedCurvePoint as Point;
use std::default::Default;

pub global PUBLIC_KEYS_LENGTH: u32 = 12;

pub struct PublicKeys {
    pub npk_m: NpkM,
    pub ivpk_m: IvpkM,
    pub ovpk_m: OvpkM,
    pub tpk_m: TpkM,
}

pub trait ToPoint {
    fn to_point(self) -> Point;
}

pub struct NpkM {
    pub inner: Point,
}

impl ToPoint for NpkM {
    fn to_point(self) -> Point {
        self.inner
    }
}

impl Serialize<POINT_LENGTH> for NpkM {
    fn serialize(self) -> [Field; POINT_LENGTH] {
        self.inner.serialize()
    }
}

// Note: If we store npk_m_hash directly we can remove this trait implementation. See #8091
impl Hash for NpkM {
    fn hash(self) -> Field {
        self.inner.hash()
    }
}

pub struct IvpkM {
    pub inner: Point,
}

impl ToPoint for IvpkM {
    fn to_point(self) -> Point {
        self.inner
    }
}

impl Serialize<POINT_LENGTH> for IvpkM {
    fn serialize(self) -> [Field; POINT_LENGTH] {
        self.inner.serialize()
    }
}

pub struct OvpkM {
    pub inner: Point,
}

impl Hash for OvpkM {
    fn hash(self) -> Field {
        self.inner.hash()
    }
}

impl ToPoint for OvpkM {
    fn to_point(self) -> Point {
        self.inner
    }
}

impl Serialize<POINT_LENGTH> for OvpkM {
    fn serialize(self) -> [Field; POINT_LENGTH] {
        self.inner.serialize()
    }
}

pub struct TpkM {
    pub inner: Point,
}

impl ToPoint for TpkM {
    fn to_point(self) -> Point {
        self.inner
    }
}

impl Serialize<POINT_LENGTH> for TpkM {
    fn serialize(self) -> [Field; POINT_LENGTH] {
        self.inner.serialize()
    }
}

impl Default for PublicKeys {
    fn default() -> Self {
        PublicKeys {
            npk_m: NpkM {
                inner: Point { x: DEFAULT_NPK_M_X, y: DEFAULT_NPK_M_Y, is_infinite: false },
            },
            ivpk_m: IvpkM {
                inner: Point { x: DEFAULT_IVPK_M_X, y: DEFAULT_IVPK_M_Y, is_infinite: false },
            },
            ovpk_m: OvpkM {
                inner: Point { x: DEFAULT_OVPK_M_X, y: DEFAULT_OVPK_M_Y, is_infinite: false },
            },
            tpk_m: TpkM {
                inner: Point { x: DEFAULT_TPK_M_X, y: DEFAULT_TPK_M_Y, is_infinite: false },
            },
        }
    }
}

impl Eq for PublicKeys {
    fn eq(self, other: PublicKeys) -> bool {
        (self.npk_m.inner == other.npk_m.inner)
            & (self.ivpk_m.inner == other.ivpk_m.inner)
            & (self.ovpk_m.inner == other.ovpk_m.inner)
            & (self.tpk_m.inner == other.tpk_m.inner)
    }
}

impl PublicKeys {
    pub fn hash(self) -> PublicKeysHash {
        PublicKeysHash::from_field(poseidon2_hash_with_separator(
            self.serialize(),
            GENERATOR_INDEX__PUBLIC_KEYS_HASH as Field,
        ))
    }
}

impl Serialize<PUBLIC_KEYS_LENGTH> for PublicKeys {
    fn serialize(self) -> [Field; PUBLIC_KEYS_LENGTH] {
        [
            self.npk_m.inner.x,
            self.npk_m.inner.y,
            self.npk_m.inner.is_infinite as Field,
            self.ivpk_m.inner.x,
            self.ivpk_m.inner.y,
            self.ivpk_m.inner.is_infinite as Field,
            self.ovpk_m.inner.x,
            self.ovpk_m.inner.y,
            self.ovpk_m.inner.is_infinite as Field,
            self.tpk_m.inner.x,
            self.tpk_m.inner.y,
            self.tpk_m.inner.is_infinite as Field,
        ]
    }
}

impl Deserialize<PUBLIC_KEYS_LENGTH> for PublicKeys {
    fn deserialize(serialized: [Field; PUBLIC_KEYS_LENGTH]) -> PublicKeys {
        PublicKeys {
            npk_m: NpkM {
                inner: Point {
                    x: serialized[0],
                    y: serialized[1],
                    is_infinite: serialized[2] as bool,
                },
            },
            ivpk_m: IvpkM {
                inner: Point {
                    x: serialized[3],
                    y: serialized[4],
                    is_infinite: serialized[5] as bool,
                },
            },
            ovpk_m: OvpkM {
                inner: Point {
                    x: serialized[6],
                    y: serialized[7],
                    is_infinite: serialized[8] as bool,
                },
            },
            tpk_m: TpkM {
                inner: Point {
                    x: serialized[9],
                    y: serialized[10],
                    is_infinite: serialized[11] as bool,
                },
            },
        }
    }
}

pub struct AddressPoint {
    pub inner: Point,
}

impl ToPoint for AddressPoint {
    fn to_point(self) -> Point {
        self.inner
    }
}

#[test]
unconstrained fn compute_public_keys_hash() {
    let keys = PublicKeys {
        npk_m: NpkM { inner: Point { x: 1, y: 2, is_infinite: false } },
        ivpk_m: IvpkM { inner: Point { x: 3, y: 4, is_infinite: false } },
        ovpk_m: OvpkM { inner: Point { x: 5, y: 6, is_infinite: false } },
        tpk_m: TpkM { inner: Point { x: 7, y: 8, is_infinite: false } },
    };

    let actual = keys.hash();
    let expected_public_keys_hash =
        0x0fecd9a32db731fec1fded1b9ff957a1625c069245a3613a2538bd527068b0ad;

    assert(actual.to_field() == expected_public_keys_hash);
}

#[test]
unconstrained fn compute_default_hash() {
    let keys = PublicKeys::default();

    let actual = keys.hash();
    let test_data_default_hash = 0x1d3bf1fb93ae0e9cda83b203dd91c3bfb492a9aecf30ec90e1057eced0f0e62d;

    assert(actual.to_field() == test_data_default_hash);
}

#[test]
unconstrained fn test_public_keys_serialization() {
    let keys = PublicKeys {
        npk_m: NpkM { inner: Point { x: 1, y: 2, is_infinite: false } },
        ivpk_m: IvpkM { inner: Point { x: 3, y: 4, is_infinite: false } },
        ovpk_m: OvpkM { inner: Point { x: 5, y: 6, is_infinite: false } },
        tpk_m: TpkM { inner: Point { x: 7, y: 8, is_infinite: false } },
    };

    let serialized = keys.serialize();
    let deserialized = PublicKeys::deserialize(serialized);

    assert_eq(keys.npk_m.inner.x, deserialized.npk_m.inner.x);
    assert_eq(keys.npk_m.inner.y, deserialized.npk_m.inner.y);
    assert_eq(keys.ivpk_m.inner.x, deserialized.ivpk_m.inner.x);
    assert_eq(keys.ivpk_m.inner.y, deserialized.ivpk_m.inner.y);
    assert_eq(keys.ovpk_m.inner.x, deserialized.ovpk_m.inner.x);
    assert_eq(keys.ovpk_m.inner.y, deserialized.ovpk_m.inner.y);
    assert_eq(keys.tpk_m.inner.x, deserialized.tpk_m.inner.x);
    assert_eq(keys.tpk_m.inner.y, deserialized.tpk_m.inner.y);
}
`},311:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/shared_mutable/scheduled_delay_change.nr",source:`use crate::traits::Empty;
use std::cmp::min;

mod test;

// This data structure is used by SharedMutable to store the minimum delay with which a ScheduledValueChange object can
// schedule a change.
// This delay is initially equal to INITIAL_DELAY, and can be safely mutated to any other value over time. This mutation
// is performed via \`schedule_change\` in order to satisfy ScheduleValueChange constraints: if e.g. we allowed for the
// delay to be decreased immediately then it'd be possible for the state variable to schedule a value change with a
// reduced delay, invalidating prior private reads.
pub struct ScheduledDelayChange<let INITIAL_DELAY: u32> {
    // Both pre and post are stored in public storage, so by default they are zeroed. By wrapping them in an Option,
    // they default to Option::none(), which we detect and replace with INITIAL_DELAY. The end result is that a
    // ScheduledDelayChange that has not been initialized has a delay equal to INITIAL_DELAY, which is the desired
    // effect. Once initialized, the Option will never be none again.
    pub(crate) pre: Option<u32>,
    pub(crate) post: Option<u32>,
    // Block at which \`post\` value is used instead of \`pre\`
    pub(crate) block_of_change: u32,
}

impl<let INITIAL_DELAY: u32> ScheduledDelayChange<INITIAL_DELAY> {
    pub fn new(pre: Option<u32>, post: Option<u32>, block_of_change: u32) -> Self {
        Self { pre, post, block_of_change }
    }

    /// Returns the current value of the delay stored in the data structure.
    /// This function only returns a meaningful value when called in public with the current block number - for
    /// historical private reads use \`get_effective_minimum_delay_at\` instead.
    pub fn get_current(self, current_block_number: u32) -> u32 {
        // The post value becomes the current one at the block of change, so any transaction that is included in the
        // block of change will use the post value.
        if current_block_number < self.block_of_change {
            self.pre.unwrap_or(INITIAL_DELAY)
        } else {
            self.post.unwrap_or(INITIAL_DELAY)
        }
    }

    /// Returns the scheduled change, i.e. the post-change delay and the block at which it will become the current
    /// delay. Note that this block may be in the past if the change has already taken place.
    /// Additionally, further changes might be later scheduled, potentially canceling the one returned by this function.
    pub fn get_scheduled(self) -> (u32, u32) {
        (self.post.unwrap_or(INITIAL_DELAY), self.block_of_change)
    }

    /// Mutates the delay change by scheduling a change at the current block number. This function is only meaningful
    /// when called in public with the current block number.
    /// The block at which the new delay will become effective is determined automatically:
    ///  - when increasing the delay, the change is effective immediately
    ///  - when reducing the delay, the change will take effect after a delay equal to the difference between old and
    ///    new delay. For example, if reducing from 3 days to 1 day, the reduction will be scheduled to happen after 2
    ///    days.
    pub fn schedule_change(&mut self, new: u32, current_block_number: u32) {
        let current = self.get_current(current_block_number);

        // When changing the delay value we must ensure that it is not possible to produce a value change with a delay
        // shorter than the current one.
        let blocks_until_change = if new > current {
            // Increasing the delay value can therefore be done immediately: this does not invalidate prior constraints
            // about how quickly a value might be changed (indeed it strengthens them).
            0
        } else {
            // Decreasing the delay requires waiting for the difference between current and new delay in order to ensure
            // that overall the current delay is respected.
            //
            //      current                    delay              earliest value block of change
            //       block                 block of change         if delay remained unchanged
            //  =======N=========================|================================X=================>
            //         ^                         ^                                ^
            //         |-------------------------|--------------------------------|
            //         |   blocks until change               new delay            |
            //         ------------------------------------------------------------
            //                            current delay
            current - new
        };

        self.pre = Option::some(current);
        self.post = Option::some(new);
        self.block_of_change = current_block_number + blocks_until_change;
    }

    /// Returns the minimum delay before a value might mutate due to a scheduled change, from the perspective of some
    /// historical block number. It only returns a meaningful value when called in private with historical blocks. This
    /// function can be used alongside \`ScheduledValueChange.get_block_horizon\` to properly constrain the
    /// \`max_block_number\` transaction property when reading mutable shared state.
    /// This value typically equals the current delay at the block following the historical one (the earliest one in
    /// which a value change could be scheduled), but it also considers scenarios in which a delay reduction is
    /// scheduled to happen in the near future, resulting in a way to schedule a change with an overall delay lower than
    /// the current one.
    pub fn get_effective_minimum_delay_at(self, historical_block_number: u32) -> u32 {
        if self.block_of_change <= historical_block_number {
            // If no delay changes were scheduled, then the delay value at the historical block (post) is guaranteed to
            // hold due to how further delay changes would be scheduled by \`schedule_change\`.
            self.post.unwrap_or(INITIAL_DELAY)
        } else {
            // If a change is scheduled, then the effective delay might be lower than the current one (pre). At the
            // block of change the current delay will be the scheduled one, with an overall delay from the historical
            // block number equal to the number of blocks until the change plus the new delay. If this value is lower
            // than the current delay, then that is the effective minimum delay.
            //
            //       historical
            //         block                  delay                  actual earliest value
            //           v                block of change              block of change
            //  =========NS=====================|=============================X===========Y=====>
            //            ^                     ^                             ^           ^
            //     earliest block in            |                             |           |
            //   which to schedule change       |                             |           |
            //           |                      |                             |           |
            //           |----------------------|------------------------------           |
            //           |         blocks                  new delay                      |
            //           |      until change                                              |
            //           |                                                                |
            //           |----------------------------------------------------------------|
            //                        current delay at the earliest block in
            //                             which to scheduled value change
            let blocks_until_change = self.block_of_change - (historical_block_number + 1);

            min(
                self.pre.unwrap_or(INITIAL_DELAY),
                blocks_until_change + self.post.unwrap_or(INITIAL_DELAY),
            )
        }
    }
}

impl<let INITIAL_DELAY: u32> Eq for ScheduledDelayChange<INITIAL_DELAY> {
    fn eq(self, other: Self) -> bool {
        (self.pre == other.pre)
            & (self.post == other.post)
            & (self.block_of_change == other.block_of_change)
    }
}

impl<let INITIAL_DELAY: u32> Empty for ScheduledDelayChange<INITIAL_DELAY> {
    fn empty() -> Self {
        Self { pre: Option::none(), post: Option::none(), block_of_change: 0 }
    }
}
`},313:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/shared_mutable/scheduled_value_change.nr",source:`use crate::traits::Empty;
use std::cmp::min;

mod test;

// This data structure is used by SharedMutable to represent a value that changes from \`pre\` to \`post\` at some block
// called the \`block_of_change\`. The value can only be made to change by scheduling a change event at some future block
// of change after some minimum delay measured in blocks has elapsed. This means that at any given block number we know
// both the current value and the smallest block number at which the value might change - this is called the
// 'block horizon'.
pub struct ScheduledValueChange<T> {
    pub(crate) pre: T,
    pub(crate) post: T,
    // Block at which \`post\` value is used instead of \`pre\`
    pub(crate) block_of_change: u32,
}

impl<T> ScheduledValueChange<T> {
    pub fn new(pre: T, post: T, block_of_change: u32) -> Self {
        Self { pre, post, block_of_change }
    }

    /// Returns the value stored in the data structure at a given block. This function can be called both in public
    /// (where \`block_number\` is simply the current block number, i.e. the number of the block in which the current
    /// transaction will be included) and in private (where \`block_number\` is the historical block number that is used
    /// to construct the proof).
    /// Reading in private is only safe if the transaction's \`max_block_number\` property is set to a value lower or
    /// equal to the block horizon (see \`get_block_horizon()\`).
    pub fn get_current_at(self, block_number: u32) -> T {
        // The post value becomes the current one at the block of change. This means different things in each realm:
        // - in public, any transaction that is included in the block of change will use the post value
        // - in private, any transaction that includes the block of change as part of the historical state will use the
        //   post value (barring any follow-up changes)
        if block_number < self.block_of_change {
            self.pre
        } else {
            self.post
        }
    }

    /// Returns the scheduled change, i.e. the post-change value and the block at which it will become the current
    /// value. Note that this block may be in the past if the change has already taken place.
    /// Additionally, further changes might be later scheduled, potentially canceling the one returned by this function.
    pub fn get_scheduled(self) -> (T, u32) {
        (self.post, self.block_of_change)
    }

    // Returns the previous value. This is the value that is current up until the block of change. Note that this value
    // might not be the current anymore since block of change might have already passed.
    pub fn get_previous(self) -> (T, u32) {
        (self.pre, self.block_of_change)
    }

    /// Returns the largest block number at which the value returned by \`get_current_at\` is known to remain the current
    /// value. This value is only meaningful in private when constructing a proof at some \`historical_block_number\`,
    /// since due to its asynchronous nature private execution cannot know about any later scheduled changes.
    /// The caller of this function must know how quickly the value can change due to a scheduled change in the form of
    /// \`minimum_delay\`. If the delay itself is immutable, then this is just its duration. If the delay is mutable
    /// however, then this value is the 'effective minimum delay' (obtained by calling
    /// \`ScheduledDelayChange.get_effective_minimum_delay_at\`), which equals the minimum number of blocks that need to
    /// elapse from the next block until the value changes, regardless of further delay changes.
    /// The value returned by \`get_current_at\` in private when called with a historical block number is only safe to use
    /// if the transaction's \`max_block_number\` property is set to a value lower or equal to the block horizon computed
    /// using the same historical block number.
    pub fn get_block_horizon(self, historical_block_number: u32, minimum_delay: u32) -> u32 {
        // The block horizon is the very last block in which the current value is known. Any block past the horizon
        // (i.e. with a block number larger than the block horizon) may have a different current value. Reading the
        // current value in private typically requires constraining the maximum valid block number to be equal to the
        // block horizon.
        if historical_block_number >= self.block_of_change {
            // Once the block of change has been mined, the current value (post) will not change unless a new value
            // change is scheduled. This did not happen at the historical block number (or else it would not be
            // greater or equal to the block of change), and therefore could only happen after the historical block
            // number. The earliest would be the immediate next block, and so the smallest possible next block of change
            // equals \`historical_block_number + 1 + minimum_delay\`. Our block horizon is simply the previous block to
            // that one.
            //
            //      block of      historical
            //       change         block            block horizon
            //   =======|=============N===================H===========>
            //                         ^                   ^
            //                         ---------------------
            //                             minimum delay
            historical_block_number + minimum_delay
        } else {
            // If the block of change has not yet been mined however, then there are two possible scenarios.
            //   a) It could be so far into the future that the block horizon is actually determined by the minimum
            //      delay, because a new change could be scheduled and take place _before_ the currently scheduled one.
            //      This is similar to the scenario where the block of change is in the past: the time horizon is the
            //      block prior to the earliest one in which a new block of change might land.
            //
            //         historical
            //           block                        block horizon      block of change
            //        =====N=================================H=================|=========>
            //              ^                                 ^
            //              |                                 |
            //              -----------------------------------
            //                        minimum delay
            //
            //   b) It could be fewer than \`minimum_delay\` blocks away from the historical block number, in which case
            //      the block of change would become the limiting factor for the time horizon, which would equal the
            //      block right before the block of change (since by definition the value changes at the block of
            //      change).
            //
            //           historical                         block horizon
            //             block     block of change       if not scheduled
            //        =======N=============|===================H=================>
            //                ^           ^                     ^
            //                |     actual horizon              |
            //                -----------------------------------
            //                          minimum delay
            //
            // Note that the current implementation does not allow the caller to set the block of change to an arbitrary
            // value, and therefore scenario a) is not currently possible. However implementing #5501 would allow for
            // this to happen.
            // Because historical_block_number < self.block_of_change, then block_of_change > 0 and we can safely
            // subtract 1.
            min(
                self.block_of_change - 1,
                historical_block_number + minimum_delay,
            )
        }
    }

    /// Mutates the value by scheduling a change at the current block number. This function is only meaningful when
    /// called in public with the current block number.
    pub fn schedule_change(
        &mut self,
        new_value: T,
        current_block_number: u32,
        minimum_delay: u32,
        block_of_change: u32,
    ) {
        assert(block_of_change >= current_block_number + minimum_delay);

        self.pre = self.get_current_at(current_block_number);
        self.post = new_value;
        self.block_of_change = block_of_change;
    }
}

impl<T> Eq for ScheduledValueChange<T>
where
    T: Eq,
{
    fn eq(self, other: Self) -> bool {
        (self.pre == other.pre)
            & (self.post == other.post)
            & (self.block_of_change == other.block_of_change)
    }
}

impl<T> Empty for ScheduledValueChange<T>
where
    T: Empty,
{
    fn empty() -> Self {
        Self { pre: T::empty(), post: T::empty(), block_of_change: 0 }
    }
}
`},315:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/shared_mutable/shared_mutable_values.nr",source:`use crate::{
    hash::poseidon2_hash,
    shared_mutable::{
        scheduled_delay_change::ScheduledDelayChange, scheduled_value_change::ScheduledValueChange,
    },
    traits::{Hash, Packable},
    utils::arrays,
};
use std::meta::derive;

mod test;

/// SharedMutableValues is just a wrapper around ScheduledValueChange and ScheduledDelayChange that then allows us
/// to wrap both of these values in WithHash. WithHash allows for efficient read of values in private.
///
/// Note that the WithHash optimization does not work in public (due to there being no unconstrained). But we also want
/// to be able to read the values efficiently in public and we want to be able to read each value separately. Reading
/// the values separately is tricky because ScheduledValueChange and ScheduledDelayChange are packed together (sdc and
/// svc.block_of_change are stored in the same slot). For that reason we expose \`unpack_value_change\` and
/// \`unpack_delay_change\` functions that can be used to extract the values from the packed representation. This
/// is "hacky" but there is no way around it.
#[derive(Eq)]
pub struct SharedMutableValues<T, let INITIAL_DELAY: u32> {
    pub svc: ScheduledValueChange<T>,
    pub sdc: ScheduledDelayChange<INITIAL_DELAY>,
}

impl<T, let INITIAL_DELAY: u32> SharedMutableValues<T, INITIAL_DELAY> {
    pub fn new(svc: ScheduledValueChange<T>, sdc: ScheduledDelayChange<INITIAL_DELAY>) -> Self {
        SharedMutableValues { svc, sdc }
    }
}

pub fn unpack_value_change<T, let N: u32>(packed: [Field; 2 * N + 1]) -> ScheduledValueChange<T>
where
    T: Packable<N>,
{
    let svc_pre_packed = arrays::subarray(packed, 1);
    let svc_post_packed = arrays::subarray(packed, N + 1);
    ScheduledValueChange::new(
        T::unpack(svc_pre_packed),
        T::unpack(svc_post_packed),
        packed[0] as u32,
    )
}

pub fn unpack_delay_change<let INITIAL_DELAY: u32>(
    packed: Field,
) -> ScheduledDelayChange<INITIAL_DELAY> {
    // This function expects to be called with just the first field of the packed representation, which contains sdc
    // and svc block_of_change. We'll discard the svc component.
    let svc_block_of_change = packed as u32;

    let mut tmp = (packed - svc_block_of_change as Field) / TWO_POW_32;
    let sdc_block_of_change = tmp as u32;

    tmp = (tmp - sdc_block_of_change as Field) / TWO_POW_32;
    let sdc_post_is_some = tmp as bool;

    tmp = (tmp - sdc_post_is_some as Field) / TWO_POW_8;
    let sdc_post_inner = tmp as u32;

    tmp = (tmp - sdc_post_inner as Field) / TWO_POW_32;
    let sdc_pre_is_some = tmp as bool;

    tmp = (tmp - sdc_pre_is_some as Field) / TWO_POW_8;
    let sdc_pre_inner = tmp as u32;

    ScheduledDelayChange {
        pre: if sdc_pre_is_some {
            Option::some(sdc_pre_inner)
        } else {
            Option::none()
        },
        post: if sdc_post_is_some {
            Option::some(sdc_post_inner)
        } else {
            Option::none()
        },
        block_of_change: sdc_block_of_change,
    }
}

global TWO_POW_32: Field = 2.pow_32(32);
global TWO_POW_8: Field = 2.pow_32(8);

// We pack to \`2 * N + 1\` fields because ScheduledValueChange contains T twice (hence \`2 * N\`) and we need one extra
// field to store ScheduledDelayChange and the block_of_change of ScheduledValueChange.
impl<T, let INITIAL_DELAY: u32, let N: u32> Packable<2 * N + 1> for SharedMutableValues<T, INITIAL_DELAY>
where
    T: Packable<N>,
{
    fn pack(self) -> [Field; 2 * N + 1] {
        let mut result = [0; 2 * N + 1];

        // We pack sdc.pre, sdc.post, sdc.block_of_change and svc.block_of_change into a single field as follows:
        // [ sdc.pre_inner: u32 | sdc.pre_is_some: u8 | sdc.post_inner: u32 | sdc.post_is_some: u8 | sdc.block_of_change: u32 | svc.block_of_change: u32 ]
        result[0] = self.svc.block_of_change as Field
            + ((self.sdc.block_of_change as Field) * 2.pow_32(32))
            + ((self.sdc.post.is_some() as Field) * 2.pow_32(64))
            + ((self.sdc.post.unwrap_unchecked() as Field) * 2.pow_32(72))
            + ((self.sdc.pre.is_some() as Field) * 2.pow_32(104))
            + ((self.sdc.pre.unwrap_unchecked() as Field) * 2.pow_32(112));

        // Pack the pre and post values from ScheduledValueChange
        let svc_pre_packed = self.svc.pre.pack();
        let svc_post_packed = self.svc.post.pack();
        for i in 0..N {
            result[i + 1] = svc_pre_packed[i];
            result[i + 1 + N] = svc_post_packed[i];
        }
        result
    }

    fn unpack(fields: [Field; 2 * N + 1]) -> Self {
        let svc = unpack_value_change::<T, N>(fields);
        let sdc = unpack_delay_change::<INITIAL_DELAY>(fields[0]);
        Self::new(svc, sdc)
    }
}

impl<T, let INITIAL_DELAY: u32, let N: u32> Hash for SharedMutableValues<T, INITIAL_DELAY>
where
    T: Packable<N>,
{
    fn hash(self) -> Field {
        poseidon2_hash(self.pack())
    }
}
`},318:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/storage/map.nr",source:`use crate::{hash::poseidon2_hash, traits::ToField};

pub fn derive_storage_slot_in_map<K>(storage_slot: Field, key: K) -> Field
where
    K: ToField,
{
    poseidon2_hash([storage_slot, key.to_field()])
}

mod test {
    use crate::{address::AztecAddress, storage::map::derive_storage_slot_in_map, traits::FromField};

    #[test]
    fn test_derive_storage_slot_in_map_matches_typescript() {
        let map_slot = 0x132258fb6962c4387ba659d9556521102d227549a386d39f0b22d1890d59c2b5;
        let key = AztecAddress::from_field(
            0x302dbc2f9b50a73283d5fb2f35bc01eae8935615817a0b4219a057b2ba8a5a3f,
        );

        let slot = derive_storage_slot_in_map(map_slot, key);

        // The following value was generated by \`map_slot.test.ts\`
        let slot_from_typescript =
            0x15b9fe39449affd8b377461263e9d2b610b9ad40580553500b4e41d9cbd887ac;

        assert_eq(slot, slot_from_typescript);
    }
}
`},336:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/type_packing.nr",source:`use crate::traits::Packable;

global BOOL_PACKED_LEN: u32 = 1;
global U8_PACKED_LEN: u32 = 1;
global U16_PACKED_LEN: u32 = 1;
global U32_PACKED_LEN: u32 = 1;
global U64_PACKED_LEN: u32 = 1;
global U128_PACKED_LEN: u32 = 1;
global FIELD_PACKED_LEN: u32 = 1;
global I8_PACKED_LEN: u32 = 1;
global I16_PACKED_LEN: u32 = 1;
global I32_PACKED_LEN: u32 = 1;
global I64_PACKED_LEN: u32 = 1;

impl Packable<BOOL_PACKED_LEN> for bool {
    fn pack(self) -> [Field; BOOL_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; BOOL_PACKED_LEN]) -> bool {
        fields[0] as bool
    }
}

impl Packable<U8_PACKED_LEN> for u8 {
    fn pack(self) -> [Field; U8_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; U8_PACKED_LEN]) -> Self {
        fields[0] as u8
    }
}

impl Packable<U16_PACKED_LEN> for u16 {
    fn pack(self) -> [Field; U16_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; U16_PACKED_LEN]) -> Self {
        fields[0] as u16
    }
}

impl Packable<U32_PACKED_LEN> for u32 {
    fn pack(self) -> [Field; U32_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; U32_PACKED_LEN]) -> Self {
        fields[0] as u32
    }
}

impl Packable<U64_PACKED_LEN> for u64 {
    fn pack(self) -> [Field; U64_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; U64_PACKED_LEN]) -> Self {
        fields[0] as u64
    }
}

impl Packable<U128_PACKED_LEN> for u128 {
    fn pack(self) -> [Field; U128_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; U128_PACKED_LEN]) -> Self {
        fields[0] as u128
    }
}

impl Packable<FIELD_PACKED_LEN> for Field {
    fn pack(self) -> [Field; FIELD_PACKED_LEN] {
        [self]
    }

    fn unpack(fields: [Field; FIELD_PACKED_LEN]) -> Self {
        fields[0]
    }
}

impl Packable<I8_PACKED_LEN> for i8 {
    fn pack(self) -> [Field; I8_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; I8_PACKED_LEN]) -> Self {
        fields[0] as i8
    }
}

impl Packable<I16_PACKED_LEN> for i16 {
    fn pack(self) -> [Field; I16_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; I16_PACKED_LEN]) -> Self {
        fields[0] as i16
    }
}

impl Packable<I32_PACKED_LEN> for i32 {
    fn pack(self) -> [Field; I32_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; I32_PACKED_LEN]) -> Self {
        fields[0] as i32
    }
}

impl Packable<I64_PACKED_LEN> for i64 {
    fn pack(self) -> [Field; I64_PACKED_LEN] {
        [self as Field]
    }

    fn unpack(fields: [Field; I64_PACKED_LEN]) -> Self {
        fields[0] as i64
    }
}

impl<T, let N: u32, let M: u32> Packable<N * M> for [T; N]
where
    T: Packable<M>,
{
    fn pack(self) -> [Field; N * M] {
        let mut result: [Field; N * M] = std::mem::zeroed();
        let mut serialized: [Field; M] = std::mem::zeroed();
        for i in 0..N {
            serialized = self[i].pack();
            for j in 0..M {
                result[i * M + j] = serialized[j];
            }
        }
        result
    }

    fn unpack(fields: [Field; N * M]) -> Self {
        let mut reader = crate::utils::reader::Reader::new(fields);
        let mut result: [T; N] = std::mem::zeroed();
        reader.read_struct_array::<T, M, N>(Packable::unpack, result)
    }
}

#[test]
fn test_u16_packing() {
    let a: u16 = 10;
    assert_eq(a, u16::unpack(a.pack()));
}

#[test]
fn test_i8_packing() {
    let a: i8 = -10;
    assert_eq(a, i8::unpack(a.pack()));
}

#[test]
fn test_i16_packing() {
    let a: i16 = -10;
    assert_eq(a, i16::unpack(a.pack()));
}

#[test]
fn test_i32_packing() {
    let a: i32 = -10;
    assert_eq(a, i32::unpack(a.pack()));
}

#[test]
fn test_i64_packing() {
    let a: i64 = -10;
    assert_eq(a, i64::unpack(a.pack()));
}
`},337:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/type_serialization.nr",source:`use crate::traits::{Deserialize, Serialize};

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
`},353:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/utils/arrays.nr",source:`pub mod assert_array_appended;
pub mod assert_array_prepended;
pub mod assert_combined_array;
pub mod assert_combined_transformed_array;
pub mod assert_exposed_sorted_transformed_value_array;
pub mod assert_sorted_array;
pub mod assert_sorted_transformed_value_array;
pub mod assert_split_sorted_transformed_value_arrays;
pub mod assert_split_transformed_value_arrays;
pub mod get_sorted_result;
pub mod get_sorted_tuple;
pub mod sort_by;
pub mod sort_by_counter;

// Re-exports.
pub use assert_array_appended::{
    assert_array_appended, assert_array_appended_and_scoped, assert_array_appended_reversed,
    assert_array_appended_scoped,
};
pub use assert_array_prepended::assert_array_prepended;
pub use assert_combined_array::{assert_combined_array, combine_arrays};
pub use assert_combined_transformed_array::{
    assert_combined_transformed_array, combine_and_transform_arrays,
};
pub use assert_exposed_sorted_transformed_value_array::{
    assert_exposed_sorted_transformed_value_array,
    get_order_hints::{get_order_hints_asc, OrderHint},
};
pub use assert_sorted_array::assert_sorted_array;
pub use assert_sorted_transformed_value_array::{
    assert_sorted_transformed_value_array, assert_sorted_transformed_value_array_capped_size,
};
pub use assert_split_sorted_transformed_value_arrays::{
    assert_split_sorted_transformed_value_arrays_asc,
    get_split_order_hints::{get_split_order_hints_asc, SplitOrderHints},
};
pub use assert_split_transformed_value_arrays::assert_split_transformed_value_arrays;
pub use get_sorted_result::{get_sorted_result, SortedResult};
pub use sort_by_counter::sort_by_counter_asc;

use crate::traits::{Empty, is_empty};

pub fn subarray<let SRC_LEN: u32, let DST_LEN: u32>(
    src: [Field; SRC_LEN],
    offset: u32,
) -> [Field; DST_LEN] {
    assert(offset + DST_LEN <= SRC_LEN, "offset too large");

    let mut dst: [Field; DST_LEN] = std::mem::zeroed();
    for i in 0..DST_LEN {
        dst[i] = src[i + offset];
    }

    dst
}

// Helper function to convert a validated array to BoundedVec.
// Important: Only use it for validated arrays: validate_array(array) should be true.
pub unconstrained fn array_to_bounded_vec<T, let N: u32>(array: [T; N]) -> BoundedVec<T, N>
where
    T: Empty + Eq,
{
    let len = array_length(array);
    BoundedVec::from_parts_unchecked(array, len)
}

// Helper function to find the index of the first element in an array that satisfies a given predicate. If the element
// is not found, the function returns N as the index.
pub unconstrained fn find_index_hint<T, let N: u32, Env>(
    array: [T; N],
    find: fn[Env](T) -> bool,
) -> u32 {
    let mut index = N;
    for i in 0..N {
        // We check \`index == N\` to ensure that we only update the index if we haven't found a match yet.
        if (index == N) & find(array[i]) {
            index = i;
        }
    }
    index
}

// Routine which validates that all zero values of an array form a contiguous region at the end, i.e.,
// of the form: [*,*,*...,0,0,0,0] where any * is non-zero. Note that a full array of non-zero values is
// valid.
pub fn validate_array<T, let N: u32>(array: [T; N]) -> u32
where
    T: Empty + Eq,
{
    let mut seen_empty = false;
    let mut length = 0;
    for i in 0..N {
        if is_empty(array[i]) {
            seen_empty = true;
        } else {
            assert(seen_empty == false, "invalid array");
            length += 1;
        }
    }
    length
}

// Helper function to count the number of non-empty elements in a validated array.
// Important: Only use it for validated arrays where validate_array(array) returns true,
// which ensures that:
// 1. All elements before the first empty element are non-empty
// 2. All elements after and including the first empty element are empty
// 3. The array forms a contiguous sequence of non-empty elements followed by empty elements
pub fn array_length<T, let N: u32>(array: [T; N]) -> u32
where
    T: Empty + Eq,
{
    // We get the length by checking the index of the first empty element.

    // Safety: This is safe because we have validated the array (see function doc above) and the emptiness
    // of the element and non-emptiness of the previous element is checked below.
    let length = unsafe { find_index_hint(array, |elem: T| is_empty(elem)) };
    if length != 0 {
        assert(!is_empty(array[length - 1]));
    }
    if length != N {
        assert(is_empty(array[length]));
    }
    length
}

// Returns the number of consecutive elements at the start of the array for which the predicate returns false.
// This function ensures that any element after the first matching element (predicate returns true) also matches the predicate.
pub fn array_length_until<T, let N: u32, Env>(array: [T; N], predicate: fn[Env](T) -> bool) -> u32 {
    let mut length = 0;
    let mut stop = false;
    for i in 0..N {
        if predicate(array[i]) {
            stop = true;
        } else {
            assert(
                stop == false,
                "matching element found after already encountering a non-matching element",
            );
            length += 1;
        }
    }
    length
}

pub fn array_concat<T, let N: u32, let M: u32>(array1: [T; N], array2: [T; M]) -> [T; N + M] {
    let mut result = [array1[0]; N + M];
    for i in 1..N {
        result[i] = array1[i];
    }
    for i in 0..M {
        result[i + N] = array2[i];
    }
    result
}

/// This function assumes that \`array1\` and \`array2\` contain no more than N non-empty elements between them,
/// if this is not the case then elements from the end of \`array2\` will be dropped.
pub fn array_merge<T, let N: u32>(array1: [T; N], array2: [T; N]) -> [T; N]
where
    T: Empty + Eq,
{
    // Safety: we constrain this array below
    let result = unsafe { array_merge_helper(array1, array2) };
    // We assume arrays have been validated. The only use cases so far are with previously validated arrays.
    let array1_len = array_length(array1);
    let mut add_from_left = true;
    for i in 0..N {
        add_from_left &= i != array1_len;
        if add_from_left {
            assert_eq(result[i], array1[i]);
        } else {
            assert_eq(result[i], array2[i - array1_len]);
        }
    }
    result
}

unconstrained fn array_merge_helper<T, let N: u32>(array1: [T; N], array2: [T; N]) -> [T; N]
where
    T: Empty + Eq,
{
    let mut result: [T; N] = [T::empty(); N];
    let mut i = 0;
    for elem in array1 {
        if !is_empty(elem) {
            result[i] = elem;
            i += 1;
        }
    }
    for elem in array2 {
        if !is_empty(elem) {
            result[i] = elem;
            i += 1;
        }
    }
    result
}

// Helper fn to create a subarray from a given array
pub fn array_splice<T, let N: u32, let M: u32>(array: [T; N], offset: u32) -> [T; M]
where
    T: Empty,
{
    assert(M + offset <= N, "Subarray length larger than array length");
    let mut result: [T; M] = [T::empty(); M];
    for i in 0..M {
        result[i] = array[offset + i];
    }
    result
}

pub fn check_permutation<T, let N: u32>(
    original_array: [T; N],
    permuted_array: [T; N],
    original_indexes: [u32; N],
)
where
    T: Eq + Empty,
{
    let mut seen_value = [false; N];
    for i in 0..N {
        let index = original_indexes[i];
        let original_value = original_array[index];
        assert(permuted_array[i].eq(original_value), "Invalid index");
        assert(!seen_value[index], "Duplicated index");
        seen_value[index] = true;
    }
}

// Helper function to find the index of the last element in an array, allowing empty elements.
// e.g. useful for removing trailing 0s from [1, 0, 2, 0, 0, 0] -> [1, 0, 2]
// Nothing to do with validated arrays. Correctness constrained by padded_array_length.
pub unconstrained fn find_last_value_index<T, let N: u32>(array: [T; N]) -> u32
where
    T: Empty + Eq,
{
    let mut index = N;
    for i in 0..N {
        let j = N - i - 1;
        // We check \`index == N\` to ensure that we only update the index if we haven't found a match yet.
        if (index == N) & !is_empty(array[j]) {
            index = j;
        }
    }
    index
}

// Routine which returns the length of an array right padded by empty elements
// of the form: [*,*,*...,0,0,0,0] where * is any value (zeroes allowed).
// See smoke_validate_array_trailing for examples.
// Nothing to do with validated arrays. Correctness constrained by padded_array_length.
pub unconstrained fn unsafe_padded_array_length<T, let N: u32>(array: [T; N]) -> u32
where
    T: Empty + Eq,
{
    let index = find_last_value_index(array);
    if index == N {
        0
    } else {
        index + 1
    }
}

// Routine which validates that zero values of an array form a contiguous region at the end, i.e.,
// of the form: [*,*,*...,0,0,0,0] where * is any value (zeroes allowed).
pub fn padded_array_length<T, let N: u32>(array: [T; N]) -> u32
where
    T: Empty + Eq,
{
    // Safety: this value is constrained in the below loop.
    let length = unsafe { unsafe_padded_array_length(array) };
    // Check the elt just before length is non-zero:
    if length != 0 {
        assert(!is_empty(array[length - 1]), "invalid right padded array");
    }
    // Check all beyond length are zero:
    let mut check_zero = false;
    for i in 0..N {
        check_zero |= i == length;
        if check_zero {
            assert(is_empty(array[i]), "invalid right padded array");
        }
    }
    length
}

// Helper function to check if an array is padded with a given value from a given index.
// Different to padded_array_length in that it allows the elements before the given index to be the same as the padded value.
pub fn array_padded_with<T, let N: u32>(array: [T; N], from_index: u32, padded_with: T) -> bool
where
    T: Eq,
{
    let mut is_valid = true;
    let mut should_check = false;
    for i in 0..N {
        should_check |= i == from_index;
        is_valid &= !should_check | (array[i] == padded_with);
    }
    is_valid
}

#[test]
fn smoke_validate_array() {
    let valid_array: [Field; 0] = [];
    assert(validate_array(valid_array) == 0);

    let valid_array = [0];
    assert(validate_array(valid_array) == 0);

    let valid_array = [3];
    assert(validate_array(valid_array) == 1);

    let valid_array = [1, 2, 3];
    assert(validate_array(valid_array) == 3);

    let valid_array = [1, 2, 3, 0];
    assert(validate_array(valid_array) == 3);

    let valid_array = [1, 2, 3, 0, 0];
    assert(validate_array(valid_array) == 3);
}

#[test]
fn smoke_validate_array_trailing() {
    let valid_array: [Field; 0] = [];
    assert(padded_array_length(valid_array) == 0);

    let valid_array = [0];
    assert(padded_array_length(valid_array) == 0);

    let valid_array = [3];
    assert(padded_array_length(valid_array) == 1);

    let valid_array = [1, 0, 3];
    assert(padded_array_length(valid_array) == 3);

    let valid_array = [1, 0, 3, 0];
    assert(padded_array_length(valid_array) == 3);

    let valid_array = [1, 2, 3, 0, 0];
    assert(padded_array_length(valid_array) == 3);

    let valid_array = [0, 0, 3, 0, 0];
    assert(padded_array_length(valid_array) == 3);
}

#[test(should_fail_with = "invalid array")]
fn smoke_validate_array_invalid_case0() {
    let invalid_array = [0, 1];
    let _ = validate_array(invalid_array);
}

#[test(should_fail_with = "invalid array")]
fn smoke_validate_array_invalid_case1() {
    let invalid_array = [1, 0, 0, 1, 0];
    let _ = validate_array(invalid_array);
}

#[test(should_fail_with = "invalid array")]
fn smoke_validate_array_invalid_case2() {
    let invalid_array = [0, 0, 0, 0, 1];
    let _ = validate_array(invalid_array);
}

#[test]
fn test_empty_array_length() {
    assert_eq(array_length([0]), 0);
    assert_eq(array_length([0, 0, 0]), 0);
}

#[test]
fn test_array_length() {
    assert_eq(array_length([123]), 1);
    assert_eq(array_length([123, 0, 0]), 1);
    assert_eq(array_length([123, 456]), 2);
    assert_eq(array_length([123, 456, 0]), 2);
}

#[test]
fn test_array_length_invalid_arrays() {
    // Result can be misleading (but correct) for invalid arrays.
    assert_eq(array_length([0, 0, 123]), 0);
    assert_eq(array_length([0, 123, 0]), 0);
    assert_eq(array_length([0, 123, 456]), 0);
    assert_eq(array_length([123, 0, 456]), 1);
}

#[test]
fn test_array_length_until() {
    let array = [11, 22, 33, 44, 55];
    assert_eq(array_length_until(array, |x| x == 55), 4);
    assert_eq(array_length_until(array, |x| x == 56), 5);
    assert_eq(array_length_until(array, |x| x > 40), 3);
    assert_eq(array_length_until(array, |x| x > 10), 0);
}

#[test(should_fail_with = "matching element found after already encountering a non-matching element")]
fn test_array_length_until_non_consecutive_fails() {
    let array = [1, 1, 0, 1, 0];
    let _ = array_length_until(array, |x| x == 0);
}

#[test(should_fail_with = "matching element found after already encountering a non-matching element")]
fn test_array_length_until_first_non_matching_fails() {
    let array = [1, 0, 0, 0, 0];
    let _ = array_length_until(array, |x| x == 1);
}

#[test]
unconstrained fn find_index_greater_than_min() {
    let values = [10, 20, 30, 40];
    let min = 22;
    let index = find_index_hint(values, |v: Field| min.lt(v));
    assert_eq(index, 2);
}

#[test]
unconstrained fn find_index_not_found() {
    let values = [10, 20, 30, 40];
    let min = 100;
    let index = find_index_hint(values, |v: Field| min.lt(v));
    assert_eq(index, 4);
}

#[test]
fn test_array_concat() {
    let array0 = [1, 2, 3];
    let array1 = [4, 5];
    let concatenated = array_concat(array0, array1);
    assert_eq(concatenated, [1, 2, 3, 4, 5]);
}

#[test]
fn check_permutation_basic_test() {
    let original_array = [1, 2, 3];
    let permuted_array = [3, 1, 2];
    let indexes = [2, 0, 1];
    check_permutation(original_array, permuted_array, indexes);
}

#[test(should_fail_with = "Duplicated index")]
fn check_permutation_duplicated_index() {
    let original_array = [0, 1, 0];
    let permuted_array = [1, 0, 0];
    let indexes = [1, 0, 0];
    check_permutation(original_array, permuted_array, indexes);
}

#[test(should_fail_with = "Invalid index")]
fn check_permutation_invalid_index() {
    let original_array = [0, 1, 2];
    let permuted_array = [1, 0, 0];
    let indexes = [1, 0, 2];
    check_permutation(original_array, permuted_array, indexes);
}

#[test]
fn test_array_padded_with() {
    let array = [11, 22, 33, 44, 44];
    assert_eq(array_padded_with(array, 0, 44), false);
    assert_eq(array_padded_with(array, 1, 44), false);
    assert_eq(array_padded_with(array, 2, 44), false);
    assert_eq(array_padded_with(array, 3, 44), true);
    assert_eq(array_padded_with(array, 4, 44), true);
    assert_eq(array_padded_with(array, 4, 33), false);
    assert_eq(array_padded_with(array, 5, 44), true); // Index out of bounds.
    assert_eq(array_padded_with(array, 0, 11), false);
}
`},356:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/utils/reader.nr",source:`pub struct Reader<let N: u32> {
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
`}},r={transpiled:!0,noir_version:e,name:n,functions:t,outputs:a,file_map:s};export{r as default,s as file_map,t as functions,n as name,e as noir_version,a as outputs,i as transpiled};
