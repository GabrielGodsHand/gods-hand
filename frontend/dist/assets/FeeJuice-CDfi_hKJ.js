const i=!0,e="1.0.0-beta.5+0000000000000000000000000000000000000000",n="FeeJuice",t=[{name:"_increase_public_balance",is_unconstrained:!0,custom_attributes:["public","internal"],abi:{parameters:[{name:"to",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]},visibility:"private"},{name:"amount",type:{kind:"integer",sign:"unsigned",width:128},visibility:"private"}],return_type:null,error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"10502589790419500451":{error_kind:"string",string:"Function _increase_public_balance can only be called internally"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"tZjdbts6DMffJde50AdFSn2VYRjSNh0CBGmRtQc4KPruh5RIOi0gY/PBbqKfafEfiaQl2e+7x+P9288fp8vT86/d3bf33f31dD6ffv44Pz8cXk/PF7a+74L8xJR3d3HPLY02J23raEGvQe8X7V/0GvU+6jXF3R1Ii7s74rbydZUWR9tA27a7a/tdCqCtXke9jnW0KWmLo81BW+2XtR9oPxmntEWvi/qh+qH6ofqRjB8EZMLIULOBWZpYqkAdkINacowG/D+RBXOKBsWgKeRsQApgncE6g3UuYGAWNHc0dzJ3MnfizikzVHZPPHgofCsngaYgIRhgFjILmUWCMMAsTfuUEAxUuUgQMv9pkeIZgApgt8AsxSzFLJKaAWYh60OkUE1ZktJBkjJA+nDpYYgGqBCDARg0Ban7AebeB9+hKoBZwPpI9WcQqApS/wNQgYIBGFjnap0rKTSzNHWnPosOxaApxGyg7pSsc7LOORi4Rdy5EgjEnZ9J6ino0BR6SXSQoXI9E2UDUpAneUAxaArNOjd1ryEbqHvtRdIEmoKkALh+ao4GTUEC3qHydCAL8AiBp1MlYgJN6nBAMWgKEigoDLJKAApUBcnpAFQowcD6yIPWoS9mHaQzx6dJBgc0BXkuBGLoAxpUjKLbpARBVr4gS5oSGUm2BkFwcg+oRsV9UcbWOqGRlJ4SOFWjPvZB7tFcpZkthuAETqYSI6uU0KkaSfUNkvJTQiNZA5SaUdEQx76RDMLo5DaprNL3J4lfSZ2qkURSiYx6MeVOaATBqRgVtxW3odvQbeQ2cr3qtl6Wg6pRr9BB5pFDcCo6oyzlWrqtj76TjL7PI/f4dQK3yeiVxFf22b5PKLlNCriUTtVINjolV67JqRk1izPImJXsfyG6zfMBng/wfECy/4DcfT8+9js7ffx4vR6Pcvi4OY7wIeXlcD1eXnd3l7fzeb/753B+651+vRwuvX09XPkuV8/x8sgtCz6dzkehj/3iHeauRDWpN69GyQX4qfpdCS4+Wcy6BnPBqUiai5RQbRaM1SXo80zyXKGWWGwmJYeZwvpEMC0TqfNolLkItECqAS3ibBi4MhEAC2flc8m2idxmpMKmtOISDKzRJUrcpNDCTCGuSUSwpMZIi0Qk+KwRV0q8Zist3qbjLJ5xpToJUzMJxGl1xrw6k5Z9KiVNK2N9KmmZCs4lylpSInlS8lIZGXBbXnGaV5pLpGbx5LeFZQztt4dA8n4yhkA5bynOWwWYKqQ1CQjRJCDRtDjTSkb5nGeRqPxSNMtoWilOLiaTiAXSNKOrw0jLNpDDdM1JsCIRqq+/vMdOJdZqM2Lwyop4k5U/WPsyel55P16Sgl/2IlqLKKpECjfxTPWzQl3bVsEXDLp5RFL7Eo0218jFYgE3+0iKX3bElVik2KxAE39MmGusVMZSXLeb6h8pNFtwMJZt80jVBsHfOtI2DYqeVFqbSfm7Grx4Bl88qW7T4DdRX7ta2qbBb4am0dJcY3X9qzcLD04fNVjR4C8DVqKUMN8cVD4/bLC2K6JL3AT06yq8NpGQfNkJWDbFIvohg3f6uk1i2VZj3TaK7M8a47ZRFD9icFJpmwQudVHbtoks1Snr7iYJ8I0gl00TIbCEEOAWgeanV/6QsknAXyZa2jYCr6lG5X9O4avAd748PJyunz6hf4jU9XS4Px/18unt8nBz9/XfF7tjn+Bfrs8Px8e361GUlu/w/PMtNdjnWL7L1xi+pLavIBf8+v+ND597PsZ9/5Ch/Ac=",brillig_names:["_increase_public_balance"]},{name:"balance_of_public",is_unconstrained:!0,custom_attributes:["public","view"],abi:{parameters:[{name:"owner",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]},visibility:"private"}],return_type:{abi_type:{kind:"integer",sign:"unsigned",width:128},visibility:"public"},error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"6067862452620309358":{error_kind:"string",string:"Function balance_of_public can only be called statically"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"JwACBAEoAAABBIBJJwAABAMnAgIEAScCAwQAHwoAAgADgEcuCIBHAAElAAAASyUAAABoLgIAAYBIKAIAAgSASCcCAwQBOw4AAwACKACAQwQAAygAgEQBAAAoAIBFBAAAKACARgQAASYlAAACIh4CAAIJJwIDAAEKKgIDBCQCAAQAAACJJQAAAksnAgIAAC0IAQQnAgUEBAAIAQUBJwMEBAEAIgQCBS0KBQYtDgIGACIGAgYtDgIGACIGAgYtDgIGKwIABQAAAAAAAAAAAgAAAAAAAAAALQgBBicCBwQFAAgBBwEnAwYEAQAiBgIHLQoHCC0OAggAIggCCC0OAggAIggCCC0OAggAIggCCC0OBQgtCAEFAAABAgEtDgQFLQgBBAAAAQIBLQ4GBC0IAQYAAAECAS4MgEUABi0IAQcAAAECAS4MgEQABycCCAQJLQgACS0KBQotCgQLLQoGDC0KBw0tCgMOAAgACAAlAAACXS0CAAAnAgMECC0IAAgtCgUJLQoECi0KBgstCgcMLQoBDQAIAAMAJQAAAl0tAgAALQsHAQsiAAGARAADJAIAAwAAAbsnAggEADwGCAEnAgEECC0IAAgtCgUJLQoECi0KBgstCgcMAAgAAQAlAAADiy0CAAAtCwQBASIAAYBGAAQtCwQDCioDAgELIgABgEQAAiQCAAIAAAIMJQAABJ4vCgADAAEcCgEDBhwKAwIAHAoCAQYmKACABAR4AA0AAACABIADJACAAwAAAkoqAQABBfeh86+lrdTKPAQCASYqAQABBVQ1YMByXTNuPAQCASYlAAACIi0LBAYLIgAGgEQAByQCAAcAAAJ/JwIIBAA8BggBLQsDBgsiAAaAQwAHJAIABwAAAxcjAAACmC0LAwYtCwEHLQsCCC0LBAkNIgAGgEMACicCCwEBJAIACgAAAsIlAAAEsC4CAAeAAygAgAQEAAQlAAAEwi4IgAUACgAiCgILACoLBgwtDgUMASIABoBGAAUOKgYFByQCAAcAAAMCJQAABVAtDgoBLQ4IAi0OBQMtDgkEIwAAA4onAgYEBy0IAActCgEILQoCCS0KAwotCgQLAAgABgAlAAADiy0CAAAtCwEGLQsCBy0LBAguAgAGgAMoAIAEBAAEJQAABMIuCIAFAAkAIgkCCgEiAAqARQALLQ4FCy0OCQEtDgcCLgyARgADLQ4IBCMAAAOKJiUAAAIiLgiARQAFIwAAA5sNIgAFgEMABiQCAAYAAAQLIwAAA7AtCwIFLQsFBgAiBgIGLQ4GBScCBgQELQgBBycCCAQFAAgBCAEnAwcEAQAiBQIIJwIJBAQAIgcCCj8PAAgACi0LAQUtCwMGLQsECC0OBQEtDgcCLQ4GAy0OCAQmLQsDBgwqBQYHJAIABwAABCEjAAAEjS0LAgYAIgYCCAAqCAUJLQsJBy0LAQgAIggCCgAqCgULLQsLCQAqBwkKLQsDBy0LBAkuAgAGgAMoAIAEBAAFJQAABMIuCIAFAAsAIgsCDAAqDAUNLQ4KDS0OCAEtDgsCLQ4HAy0OCQQjAAAEjQEiAAWARgAGLQoGBSMAAAObKgEAAQUC3G4ngHYSnTwEAgEmKgEAAQXFa8RaDhAAAjwEAgEmLgGAA4AGCwCABgACgAckAIAHAAAE3SMAAAToLgCAA4AFIwAABU8uAAABgAUBAAABgAQAAQEAgAOABIAJLgCAA4AKLgCABYALCwCACoAJgAwkAIAMAAAFOy4BgAqACC4EgAiACwEAgAoAAoAKAQCACwACgAsjAAAFCigBgAUEAAEDAIAGAAKABiMAAAVPJioBAAEFRafKcRlB5BU8BAIBJg==",debug_symbols:"tZjdbuM4DIXfxde9EKlf9lUGRZG26SBAkBaZdoFF0XdfUuZRkgVs7HgxN/FnWjomJYqS8zW97J8+fz4eTq9vv6b7H1/T0/lwPB5+Ph7fnncfh7eTWr+mYD8UZLqPdxNRmu6TXWW+st9H9mud7okUEgOKQyYALAWWAksNgAQQhxYBzUHsFXw3MUVAdWA8YlgiLBGWRIDskAMgAcSh4BWlOVQTDAbFoREgA8RBEqDNEAMDqkOPogMsjDZsvXT4Y4yA6tCj6JAB4pDROKNxYQAsFd17FAYtABIAbxd0F2+cQgD42xPBYplC2cC6FwUuDjEBxCGZq9WgOWQGFIcSAAmAxhXdKywN3Zt1bwp9CjpoG9b8ySE6EAHEwdKa1bEc9aXcDLJDckuxSFkMtHHUaSo2Xx2s1wwZIA4WadRXFIsiskFzsIyaoTjYXMyANhJnqIEA1lgHvBIDxMGi6ND96ZAdEizJ2ujKrTbgM1SHkh1sVc6AxjbOHRp6ifmTDcoMzXJjhgRoDt3VDmjMBIAlontE94juVltiMWgOOTtYksxQHCzDZxCH5mPYWnUQArhF2Npo/kgfn2bQHPpAdagOVscsE8Re2qEGQHZosDRYBBZxC4UQBhUQDZvlmVMDWco5jR5x9OjTXTtZ8N3Wve5kbpv/SgVUh808d7JaH4ysJDgNm2Vkok7Niay4OUGZiAcJiBOoz/ZMeC+lYUujHWaBKA+9PN7RM7Z9f99N2MIeP877ve1gV3ua7nTvu/P+9DHdnz6Px7vpr93xszf69b479evH7qxPNb796UWvKvh6OO6Nvu8uvcNyV+JSyLsrtzgkdAZuRGhZRJdrdo2qlXpI1Fs3eFlBOEBBmNuSwm8EkhcDWRFhzTDX4HAlkelGIa+4EUuCF7q1XJwot06UFYl88YGHgO6tNwJ1ZTpqEkyHlrkhwXI7mm1ZImZ2hURXAnQrICsjSYLZYA6yKEErs5EZYej2tk1BqisUypvC0KMRwohXs/E7EpXGfNa1ONKf1dDDK+oEldq2adQaoVGFt2lIwJDqyXhZY22RpTErlFNZXGS0Mi1FTyZYJHpqvqoWt+uMV9KrjopTrwZUvwk21RupS/WGVyqnbjWonKSfJYtecFyJo0WkRm15uX6ntaEYi7XqSXFRIq9GIiO7dNssiyKrofAllLIsUdcWCtWxUOKlhEfNtP+6GQVG/dSTxXLlWZOgMSd2mtgmUYYX1LZ5EUcFVdzmRR4zoou1bpMol/XeZFsgl6oTeVsgMY2tXT9Vt0jUhAmpqWwRkLHYJW8KQkId56xtHoyc0m+G/xnCvwUe9Hb3fDjf/LHzbVLnw+7puPfb18/T89XTj7/f8QR/DL2f3573L5/nvSld/h3Snx+s3xRcwoN9COitlvs7XWp2S/ZUK7ruBg/f5sw/",brillig_names:["balance_of_public"]},{name:"check_balance",is_unconstrained:!0,custom_attributes:["public","view"],abi:{parameters:[{name:"fee_limit",type:{kind:"integer",sign:"unsigned",width:128},visibility:"private"}],return_type:null,error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"3219842053230618354":{error_kind:"string",string:"Function check_balance can only be called statically"},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"15238796416211288225":{error_kind:"string",string:"Balance too low"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"JwACBAEoAAABBIBIJwAABAMnAgIEAScCAwQAHwoAAgADgEcdAIBHgEcGLgiARwABJQAAAEwlAAAAaSgCAAEEgEgnAgIEADsOAAIAASgAgEMEAAMoAIBEAQAAKACARQQAACgAgEYEAAEmJQAAAkIeAgACCScCAwABCioCAwQkAgAEAAAAiiUAAAJrHgIAAgEnAgQAAC0IAQUnAgYEBAAIAQYBJwMFBAEAIgUCBi0KBgctDgQHACIHAgctDgQHACIHAgctDgQHKwIABgAAAAAAAAAAAgAAAAAAAAAALQgBBycCCAQFAAgBCAEnAwcEAQAiBwIILQoICS0OBAkAIgkCCS0OBAkAIgkCCS0OBAkAIgkCCS0OBgktCAEGAAABAgEtDgUGLQgBBQAAAQIBLQ4HBS0IAQcAAAECAS4MgEUABy0IAQgAAAECAS4MgEQACCcCCQQKLQgACi0KBgstCgUMLQoHDS0KCA4tCgMPAAgACQAlAAACfS0CAAAnAgMECS0IAAktCgYKLQoFCy0KBwwtCggNLQoCDgAIAAMAJQAAAn0tAgAALQsIAgsiAAKARAADJAIAAwAAAcEnAgkEADwGCQEnAgIECS0IAAktCgYKLQoFCy0KBwwtCggNAAgAAgAlAAADqy0CAAAtCwUCASIAAoBGAAUtCwUDCioDBAILIgACgEQABCQCAAQAAAISJQAABL4vCgADAAIcCgIEBhwKBAMAHAoDAgYMKgIBAwsiAAOARAABJAIAAQAAAkElAAAE0CYoAIAEBHgADQAAAIAEgAMkAIADAAACaioBAAEF96Hzr6Wt1Mo8BAIBJioBAAEFLK8tSbes5vI8BAIBJiUAAAJCLQsEBgsiAAaARAAHJAIABwAAAp8nAggEADwGCAEtCwMGCyIABoBDAAckAgAHAAADNyMAAAK4LQsDBi0LAQctCwIILQsECQ0iAAaAQwAKJwILAQEkAgAKAAAC4iUAAATiLgIAB4ADKACABAQABCUAAAT0LgiABQAKACIKAgsAKgsGDC0OBQwBIgAGgEYABQ4qBgUHJAIABwAAAyIlAAAFgi0OCgEtDggCLQ4FAy0OCQQjAAADqicCBgQHLQgABy0KAQgtCgIJLQoDCi0KBAsACAAGACUAAAOrLQIAAC0LAQYtCwIHLQsECC4CAAaAAygAgAQEAAQlAAAE9C4IgAUACQAiCQIKASIACoBFAAstDgULLQ4JAS0OBwIuDIBGAAMtDggEIwAAA6omJQAAAkIuCIBFAAUjAAADuw0iAAWAQwAGJAIABgAABCsjAAAD0C0LAgUtCwUGACIGAgYtDgYFJwIGBAQtCAEHJwIIBAUACAEIAScDBwQBACIFAggnAgkEBAAiBwIKPw8ACAAKLQsBBS0LAwYtCwQILQ4FAS0OBwItDgYDLQ4IBCYtCwMGDCoFBgckAgAHAAAEQSMAAAStLQsCBgAiBgIIACoIBQktCwkHLQsBCAAiCAIKACoKBQstCwsJACoHCQotCwMHLQsECS4CAAaAAygAgAQEAAUlAAAE9C4IgAUACwAiCwIMACoMBQ0tDgoNLQ4IAS0OCwItDgcDLQ4JBCMAAAStASIABYBGAAYtCgYFIwAAA7sqAQABBQLcbieAdhKdPAQCASYqAQABBdN7FJoYxQChPAQCASYqAQABBcVrxFoOEAACPAQCASYuAYADgAYLAIAGAAKAByQAgAcAAAUPIwAABRouAIADgAUjAAAFgS4AAAGABQEAAAGABAABAQCAA4AEgAkuAIADgAouAIAFgAsLAIAKgAmADCQAgAwAAAVtLgGACoAILgSACIALAQCACgACgAoBAIALAAKACyMAAAU8KAGABQQAAQMAgAYAAoAGIwAABYEmKgEAAQVFp8pxGUHkFTwEAgEm",debug_symbols:"tZjdbuM4DIXfJde50A9FSn2VQVGkbToIEKRFpl1gUfTdl5R5lKSADdSLuak/0+KxKFKUm8/N8/7x4/fD4fTy+mdz9+tz83g+HI+H3w/H16fd++H1pNbPTbA/Meolb/VaNnek1xT86vc5+7Vu7kSvpPfRDFQdSgKIA8PCsAgswg41AAqgOTQC2CvKdpNic0gZgEcZlgwLwULiUCKAHTgACgCvEAKYoC5NqgkgDi0CygQ5BAAB3D3HDGgOCZaEMdm82KA59Cg6iEOPokMBYDBjMFcHgUXg3qPowA4tAPD25u4UEsAHU4wAWKxSYjUw96aQkwMFQAHoVFNQKASoDlYtE7CDBAAGC9wrLBXuzdzjdlMsBRPYGDJoDlEcrKo7ZBvcDPSl2bwoAmCxBc/JgB2YHKyeDZgMsoGNUWW2ADtYXBOIg0SATiNrjXEzL11MsclPQIDqEJNDwhiLooMV/wQ2WLenEDn0yXdghz6fDuIgsNiuzJpKseWdoDk0maBaSUzgg2tvHR3cq1ph52ZQHawkJmAHq40JCIDBBe4FFoY7w13gbrVBWgDVOskE4mAlMUGdoIXsYGU8ga9hs13ZIWUALLbRSCuh2fqQprv1d3UgQHNoeaqEZi81iCGkQQKKwxaHLQ1bGrY8bHno0bD1autUwiAaNDx4eFjSLZYYrAqp2/rcO9nkLQql6hRDHiSgvnzUiUFp2PqZUYxseznRoKFMBLIqdWKQzdlpvFeGTcY45EJp6NXxjtZ9v762Gxx6D+/n/d7OvKtTUM/Gt915f3rf3J0+jsft5p/d8aMP+vO2O/Xr++6sT7Vk9qdnvargy+G4N/raXrzDvGtMzNHdlWseEpqpG5E4LyLa9V1DssQhIbfTSPMKLQUoND0+5xR+EEiZDWRJRLcyNGqlIVHijUKZVyihIhuKs4HwvEItEUuhPSesWYpKlyi4zEVRFxQyExQoXtYh8u1StgWJgjmkkIaAflTcFtVCGCLUUFXSeGikdrsScaEyc0kuoZ8GF4X4TWGhMvXzDmWVUmjzGnmhKBICuU7ojxSauALHsi6OVDGJlK8y8iMNiSOpshSJ/F2NyIxNpm24rtMQydCQltZptIA1jdq2ZjWWdhqNtET9uJvdaWkhLSwBJSqJrzv47WZLCwUmo3nK1YJGoVVN52o9vzWdtNA79exF59OjNMzOIi10T6kZpSHaSWePIllairFdhXm2hae6GEkb1aX/g/KsyGIo6RIKz0rkpaRwlLFR8qWPZ620FXltQebyuqQQEpqwfunNd68liTiyqktb10nwmEWs62aRRxdWXDeLMnKq213WSfClY9S2LpBL38ppXSCZxhdCLqsCEUJChHiNQBvtopVVQWg9j4/OdTMYNdWk/M8Qvgvc6+3u6XC++V3sy6TOh93jce+3Lx+np6un7/++4Ql+V3s7vz7tnz/Oe1O6/Limf37pr1Bb/Va+t/+t9Fa32VY3h91Ge6qFpsf1/ZdN5j8=",brillig_names:["check_balance"]},{name:"claim",is_unconstrained:!1,custom_attributes:["private"],abi:{parameters:[{name:"inputs",type:{kind:"struct",path:"aztec::context::inputs::private_context_inputs::PrivateContextInputs",fields:[{name:"call_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"historical_header",type:{kind:"struct",path:"authwit::aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"authwit::aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"authwit::aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"authwit::aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]},visibility:"private"},{name:"to",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]},visibility:"private"},{name:"amount",type:{kind:"integer",sign:"unsigned",width:128},visibility:"private"},{name:"secret",type:{kind:"field"},visibility:"private"},{name:"message_leaf_index",type:{kind:"field"},visibility:"private"}],return_type:{abi_type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::private_circuit_public_inputs::PrivateCircuitPublicInputs",fields:[{name:"call_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"min_revertible_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"is_fee_payer",type:{kind:"boolean"}},{name:"max_block_number",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::max_block_number::MaxBlockNumber",fields:[{name:"_opt",type:{kind:"struct",path:"std::option::Option",fields:[{name:"_is_some",type:{kind:"boolean"}},{name:"_value",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}},{name:"note_hash_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifier_read_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::read_request::ReadRequest",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"key_validation_requests_and_generators",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::validation_requests::key_validation_request_and_generator::KeyValidationRequestAndGenerator",fields:[{name:"request",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::validation_requests::key_validation_request::KeyValidationRequest",fields:[{name:"pk_m",type:{kind:"struct",path:"std::embedded_curve_ops::EmbeddedCurvePoint",fields:[{name:"x",type:{kind:"field"}},{name:"y",type:{kind:"field"}},{name:"is_infinite",type:{kind:"boolean"}}]}},{name:"sk_app",type:{kind:"field"}}]}},{name:"sk_app_generator",type:{kind:"field"}}]}}},{name:"note_hashes",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::note_hash::NoteHash",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"nullifiers",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::nullifier::Nullifier",fields:[{name:"value",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"note_hash",type:{kind:"field"}}]}}},{name:"private_call_requests",type:{kind:"array",length:5,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::private_call_request::PrivateCallRequest",fields:[{name:"call_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::call_context::CallContext",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"function_selector",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::function_selector::FunctionSelector",fields:[{name:"inner",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"is_static_call",type:{kind:"boolean"}}]}},{name:"args_hash",type:{kind:"field"}},{name:"returns_hash",type:{kind:"field"}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_call_requests",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"public_teardown_call_request",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::public_call_request::PublicCallRequest",fields:[{name:"msg_sender",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"contract_address",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"is_static_call",type:{kind:"boolean"}},{name:"calldata_hash",type:{kind:"field"}}]}},{name:"l2_to_l1_msgs",type:{kind:"array",length:2,type:{kind:"struct",path:"authwit::aztec::protocol_types::messaging::l2_to_l1_message::L2ToL1Message",fields:[{name:"recipient",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"content",type:{kind:"field"}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"private_logs",type:{kind:"array",length:16,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::private_log::PrivateLogData",fields:[{name:"log",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::log::Log",fields:[{name:"fields",type:{kind:"array",length:18,type:{kind:"field"}}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"note_hash_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"contract_class_logs_hashes",type:{kind:"array",length:1,type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::side_effect::counted::Counted",fields:[{name:"inner",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::log_hash::LogHash",fields:[{name:"value",type:{kind:"field"}},{name:"length",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"counter",type:{kind:"integer",sign:"unsigned",width:32}}]}}},{name:"start_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"end_side_effect_counter",type:{kind:"integer",sign:"unsigned",width:32}},{name:"historical_header",type:{kind:"struct",path:"authwit::aztec::protocol_types::block_header::BlockHeader",fields:[{name:"last_archive",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"content_commitment",type:{kind:"struct",path:"authwit::aztec::protocol_types::content_commitment::ContentCommitment",fields:[{name:"num_txs",type:{kind:"field"}},{name:"blobs_hash",type:{kind:"field"}},{name:"in_hash",type:{kind:"field"}},{name:"out_hash",type:{kind:"field"}}]}},{name:"state",type:{kind:"struct",path:"authwit::aztec::protocol_types::state_reference::StateReference",fields:[{name:"l1_to_l2_message_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"partial",type:{kind:"struct",path:"authwit::aztec::protocol_types::partial_state_reference::PartialStateReference",fields:[{name:"note_hash_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"nullifier_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"public_data_tree",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::append_only_tree_snapshot::AppendOnlyTreeSnapshot",fields:[{name:"root",type:{kind:"field"}},{name:"next_available_leaf_index",type:{kind:"integer",sign:"unsigned",width:32}}]}}]}}]}},{name:"global_variables",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::global_variables::GlobalVariables",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"block_number",type:{kind:"field"}},{name:"slot_number",type:{kind:"field"}},{name:"timestamp",type:{kind:"integer",sign:"unsigned",width:64}},{name:"coinbase",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::eth_address::EthAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"fee_recipient",type:{kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress",fields:[{name:"inner",type:{kind:"field"}}]}},{name:"gas_fees",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}},{name:"total_fees",type:{kind:"field"}},{name:"total_mana_used",type:{kind:"field"}}]}},{name:"tx_context",type:{kind:"struct",path:"authwit::aztec::protocol_types::transaction::tx_context::TxContext",fields:[{name:"chain_id",type:{kind:"field"}},{name:"version",type:{kind:"field"}},{name:"gas_settings",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_settings::GasSettings",fields:[{name:"gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"teardown_gas_limits",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas::Gas",fields:[{name:"da_gas",type:{kind:"integer",sign:"unsigned",width:32}},{name:"l2_gas",type:{kind:"integer",sign:"unsigned",width:32}}]}},{name:"max_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}},{name:"max_priority_fees_per_gas",type:{kind:"struct",path:"authwit::aztec::protocol_types::abis::gas_fees::GasFees",fields:[{name:"fee_per_da_gas",type:{kind:"field"}},{name:"fee_per_l2_gas",type:{kind:"field"}}]}}]}}]}}]},visibility:"databus"},error_types:{"2920182694213909827":{error_kind:"string",string:"attempt to subtract with overflow"},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"7233212735005103307":{error_kind:"string",string:"attempt to multiply with overflow"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"14514982005979867414":{error_kind:"string",string:"attempt to bit-shift with overflow"},"17288131482828810359":{error_kind:"string",string:"Message not in state"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"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66I5xw2XCC4RXLLmXleFgIZLBJcILhFcIrhEcIngkjX3umjJccMlgksEl6y511UhoeESwSWCSwSXCC4RXCK4ZM29LtrguOESwSWCS9bc665QNMUliksUlyguUVyiuERxyZp7nbQ197pj7aTiEsUla+51VWjQcIniEsUliksUlyguUVyy5l4XTYSoRCN2IjSBhksUlyguUVyiuERxieKSNfe6aOpEdhKXKC5Zc6+rgkHDJYpLFJcoLlFcorhEcYlyXaJclyguUVyiuES5LlGuSxSXKC5RXKK4RHGJ4hLFJWvuddGc44ZLFJcoLllzr7sCNFyiuERxieISxSWKSxSXrLnXRQuOGy5RXKK4ZM29rgoJDZcoLlFcorhEcYniEsUla+510QbHDZcoLlFcsuZedwVouERxieESwyWGSwyXGC5Zc6+TtuZedwxiEmsn19zrqtCg4RLDJYZLDJcYLjFcYrhkzb0umhzERhSiEqEJNFxiuMRwieESwyWGSwyXrLnXRVMjspO4xHDJmnvdFaDhEsMlhksMlxguMVxiuGTNvS6acdxwieESwyXGPY5xj2O4xHCJ4RLDJYZLDJcYLllzr4vmHDdcYrjEcIlxj7PmXneEhksMlxguMVxiuMRwyZp7XbTguOESwyWGS4x7nDX3uiM0XGK4xHCJ4RLDJYZL1tzrog2OGy4xXGK4xLjHWXOvO0LDJYZLDJd0XNJxSccla+510tbc646d6MQgJhWg4ZKOSzou6bik45KOSzouWXOvi9aSWDvZcUnHJZ17nDX3uiM0XNJxScclHZd0XNJxyZp7XTQVIjuJSzou6dzjrLnXHaHhko5LOi7puKTjko5L1tzrohnHDZd0XNJxSecep+OSznVJ57qk45LOPc6ae90RGi7puKTjks51yZp7vX7Poay51+vfucuae92xE50YxCSOisslKzaiEKEFtIAW0AJaQAtoCS2hJbSEltASWkJLaAktoQ1oA9qANqANaAPagLZcEjMmcdxxzb1evzVX1tzrjkJUohE7FZwYxORrR8UGrUFr0Bq0Bq1Ba9AatJZE1ibQBJpAE2gCbblkRScGkbUJtOWSFRtRiEqEptAUmkJTaMpOGmsz1maszaAtl6zITho7aeykQTNoHVqH1qF1drKzts7aOmvr0DrHrbOTzk46O+nQHJpDc2gOzdlJZ23O2oK1BbTg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Hdfc647trrDmXndUovG1nejEICYRWoPWoDVoDVozYidCa9AatAZNoE2X7ChEJbI2gTZdsmMQkzgqKjSFptAUmkJTdlJZm7I2ZW0KbbpkR3bS2EljJw2aQTNoBs2gGTvZWVtnbZ21dWid49bZyc5OdnayQ+vQHJpDc2jOTjprc9bmrM2hOcfN2clgJ4OdDGgBLaAFtIAW7GSwtmBtydoSWnLckp1MdjLZyYSW0BJaQhvQBjs5WNtgbYO14ZI197ojOznYyVE76bhkzb3uKEQlGrETnRjEJEJrB7ERhahEaA0aLnFc4rjEcYnjEscljkvW3OuiiRE70YlBhCbQcInjEscljksclzgucVyy5l4XTZPITuISxyVr7nVVMGi4xHGJ4xLHJY5LHJc4Lllzr4vWOW64xHGJ45I197orQMMljksclzgucVziuMRxyZp7XTTnuOESxyWOS9bc66oQ0HCJ4xLHJY5LHJc4LnFcsuZeFy05brjEcYnjkjX3uiokNFziuMRxieMSxyWOSxyXONclznWJ4xLHJY5LnOsS57okcEngksAlgUsClwQuCVyy5l4nbc297lg7GbgkcMmae10VGjRcErgkcEngksAlgUsCl6y510UTISrRiJ0ITaDhksAlgUsClwQuCVwSuGTNvS6aOpGdxCWBS9bc66pg0HBJ4JLAJYFLApcELglcsuZeF61z3HBJ4JLAJWvudVXo0HBJ4JLAJYFLApcELglcsuZeF805brgkcEngkjX3uitAwyWBSwKXBC4JXBK4JHDJmntdtOC44ZLAJYFL1tzrqpDQcEngksAlgUsClwQuCVyy5l4XbXDccEngksAlwT1OcI8TuCRwSeKSxCWJSxKXJC5Zc6+TtuZedwxiEmsnk3ucNfe6IzRckrgkcUniksQliUvW3OuiyUFsRCEqEZpAwyWJSxKXJC5JXJK4JHHJmntdNDUiO4lLEpck9zhr7nVFXJK4JHFJ4pLEJYlLEpesuddFM44bLklckrgkucdZc687QsMliUsSlyQuSVySuGTNvS6ac9xwSeKSxCXJPc6ae90RGi5JXJK4JHFJ4pLEJWvuddGC44ZLEpckLknucdbc647QcEniksQliUsSlyQuWXOvizY4brgkcUnikuQeJ3FJcl2SXJckLknucdbc646NWGsbuGTgksF1yZp7NZ/xol2/l1bX3OuO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",brillig_names:["build_msg_block","attach_len_to_msg_block","build_msg_block","get_l1_to_l2_membership_witness","notify_created_nullifier_oracle_wrapper","store_in_execution_cache_oracle_wrapper","notify_enqueued_public_function_call_wrapper","directive_to_radix","directive_invert","directive_integer_quotient"],verification_key:"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"},{name:"public_dispatch",is_unconstrained:!0,custom_attributes:["public"],abi:{parameters:[{name:"selector",type:{kind:"field"},visibility:"private"}],return_type:null,error_types:{"206160798890201757":{error_kind:"string",string:"Storage slot 0 not allowed. Storage slots must start from 1."},"2830029349304997821":{error_kind:"fmtstring",length:27,item_types:[{kind:"field"}]},"3219842053230618354":{error_kind:"string",string:"Function check_balance can only be called statically"},"5019202896831570965":{error_kind:"string",string:"attempt to add with overflow"},"6067862452620309358":{error_kind:"string",string:"Function balance_of_public can only be called statically"},"10502589790419500451":{error_kind:"string",string:"Function _increase_public_balance can only be called internally"},"14225679739041873922":{error_kind:"string",string:"Index out of bounds"},"15238796416211288225":{error_kind:"string",string:"Balance too low"},"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"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",debug_symbols:"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",brillig_names:["public_dispatch"]},{name:"sync_private_state",is_unconstrained:!0,custom_attributes:["utility"],abi:{parameters:[],return_type:null,error_types:{"17843811134343075018":{error_kind:"string",string:"Stack too deep"}}},bytecode:"H4sIAAAAAAAA/7WTPQ+CMBCGi2KUjzjgoD+jBAyM+LG4OLpXCkpUSAB3frqQXENtwKjAJU17FJ5736OVUB0SzDLqEAyyglmBecTtj8vhQY67hakIdfvku9i2lQZ/Peq3FGBKw/Ax4w/UfzwFzr6o+bwXVndWDo1b66g+H0P5Z/9vSP+LD5418GpAXnmew/oS5Nt74t+Oz8c5SNnXTR1EgnIxdK5CSd0lcZ4SP99QmgZZJhJGDWTUQlU56pVE8YG26fmRdgrSLEpikSZ/Sav6yu6lXLyr8eA57hCOizHTMAb+BDV3X+b2+feXkKuCJ+bT+1Nn6BAztEhI1oRS2yeGwK+CP38vlizs4eEFAAA=",debug_symbols:"nZPRioQgFIbf5Vx3oaZmvsowDFY2CGLh1MISvfvqoDO14LLMjSc7fl9/pRsMulvvN+PG6QHyskHnjbXmfrNTrxYzuXB3AxQHXIOsK8AUJAuFgWxC4SDbfa8gr78tXuu4/CAI2ll57RaQbrW2gi9l1+eix6zcsy7Khy6qQLsh1CAcjdXxaq/eNCqjGDHKE44RR+ylCJ2TBJcljcgKgehL0JATT8o8IyzxjL3fAdPmvwFE3eQArC0FoGWe1m3iKRcfBRA0B2hFKQAv8+HDJ54T/kmAlpAkaGtWCiD+CCDyJmrQr19wDVPVG3/a23tUeaM6q9N0XF1/6C7fc+7kszH7qdfD6nU0HQ5IGC9YVKS+7vFpPw==",brillig_names:["sync_private_state"]}],s={globals:{storage:[{fields:[{name:"contract_name",value:{kind:"string",value:"ContractInstanceDeployer"}},{name:"fields",value:{fields:[{name:"updated_class_ids",value:{fields:[{name:"slot",value:{kind:"integer",sign:!1,value:"0000000000000000000000000000000000000000000000000000000000000001"}}],kind:"struct"}}],kind:"struct"}}],kind:"struct"},{fields:[{name:"contract_name",value:{kind:"string",value:"FeeJuice"}},{name:"fields",value:{fields:[{name:"balances",value:{fields:[{name:"slot",value:{kind:"integer",sign:!1,value:"0000000000000000000000000000000000000000000000000000000000000001"}}],kind:"struct"}}],kind:"struct"}}],kind:"struct"}]},structs:{functions:[{fields:[{name:"parameters",type:{fields:[{name:"to",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress"}},{name:"amount",type:{kind:"integer",sign:"unsigned",width:128}}],kind:"struct",path:"FeeJuice::_increase_public_balance_parameters"}}],kind:"struct",path:"FeeJuice::_increase_public_balance_abi"},{fields:[{name:"parameters",type:{fields:[{name:"owner",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress"}}],kind:"struct",path:"FeeJuice::balance_of_public_parameters"}},{name:"return_type",type:{kind:"integer",sign:"unsigned",width:128}}],kind:"struct",path:"FeeJuice::balance_of_public_abi"},{fields:[{name:"parameters",type:{fields:[{name:"fee_limit",type:{kind:"integer",sign:"unsigned",width:128}}],kind:"struct",path:"FeeJuice::check_balance_parameters"}}],kind:"struct",path:"FeeJuice::check_balance_abi"},{fields:[{name:"parameters",type:{fields:[{name:"to",type:{fields:[{name:"inner",type:{kind:"field"}}],kind:"struct",path:"authwit::aztec::protocol_types::address::aztec_address::AztecAddress"}},{name:"amount",type:{kind:"integer",sign:"unsigned",width:128}},{name:"secret",type:{kind:"field"}},{name:"message_leaf_index",type:{kind:"field"}}],kind:"struct",path:"FeeJuice::claim_parameters"}}],kind:"struct",path:"FeeJuice::claim_abi"},{fields:[{name:"parameters",type:{fields:[],kind:"struct",path:"FeeJuice::sync_private_state_parameters"}}],kind:"struct",path:"FeeJuice::sync_private_state_abi"}]}},a={18:{path:"std/field/mod.nr",source:`pub mod bn254;
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
`},39:{path:"std/ops/arith.nr",source:`use crate::convert::AsPrimitive;

// docs:start:add-trait
pub trait Add {
    fn add(self, other: Self) -> Self;
}
// docs:end:add-trait

impl Add for Field {
    fn add(self, other: Field) -> Field {
        self + other
    }
}

impl Add for u128 {
    fn add(self, other: u128) -> u128 {
        self + other
    }
}
impl Add for u64 {
    fn add(self, other: u64) -> u64 {
        self + other
    }
}
impl Add for u32 {
    fn add(self, other: u32) -> u32 {
        self + other
    }
}
impl Add for u16 {
    fn add(self, other: u16) -> u16 {
        self + other
    }
}
impl Add for u8 {
    fn add(self, other: u8) -> u8 {
        self + other
    }
}
impl Add for u1 {
    fn add(self, other: u1) -> u1 {
        self + other
    }
}

impl Add for i8 {
    fn add(self, other: i8) -> i8 {
        self + other
    }
}
impl Add for i16 {
    fn add(self, other: i16) -> i16 {
        self + other
    }
}
impl Add for i32 {
    fn add(self, other: i32) -> i32 {
        self + other
    }
}
impl Add for i64 {
    fn add(self, other: i64) -> i64 {
        self + other
    }
}

// docs:start:sub-trait
pub trait Sub {
    fn sub(self, other: Self) -> Self;
}
// docs:end:sub-trait

impl Sub for Field {
    fn sub(self, other: Field) -> Field {
        self - other
    }
}

impl Sub for u128 {
    fn sub(self, other: u128) -> u128 {
        self - other
    }
}
impl Sub for u64 {
    fn sub(self, other: u64) -> u64 {
        self - other
    }
}
impl Sub for u32 {
    fn sub(self, other: u32) -> u32 {
        self - other
    }
}
impl Sub for u16 {
    fn sub(self, other: u16) -> u16 {
        self - other
    }
}
impl Sub for u8 {
    fn sub(self, other: u8) -> u8 {
        self - other
    }
}
impl Sub for u1 {
    fn sub(self, other: u1) -> u1 {
        self - other
    }
}

impl Sub for i8 {
    fn sub(self, other: i8) -> i8 {
        self - other
    }
}
impl Sub for i16 {
    fn sub(self, other: i16) -> i16 {
        self - other
    }
}
impl Sub for i32 {
    fn sub(self, other: i32) -> i32 {
        self - other
    }
}
impl Sub for i64 {
    fn sub(self, other: i64) -> i64 {
        self - other
    }
}

// docs:start:mul-trait
pub trait Mul {
    fn mul(self, other: Self) -> Self;
}
// docs:end:mul-trait

impl Mul for Field {
    fn mul(self, other: Field) -> Field {
        self * other
    }
}

impl Mul for u128 {
    fn mul(self, other: u128) -> u128 {
        self * other
    }
}
impl Mul for u64 {
    fn mul(self, other: u64) -> u64 {
        self * other
    }
}
impl Mul for u32 {
    fn mul(self, other: u32) -> u32 {
        self * other
    }
}
impl Mul for u16 {
    fn mul(self, other: u16) -> u16 {
        self * other
    }
}
impl Mul for u8 {
    fn mul(self, other: u8) -> u8 {
        self * other
    }
}
impl Mul for u1 {
    fn mul(self, other: u1) -> u1 {
        self * other
    }
}

impl Mul for i8 {
    fn mul(self, other: i8) -> i8 {
        self * other
    }
}
impl Mul for i16 {
    fn mul(self, other: i16) -> i16 {
        self * other
    }
}
impl Mul for i32 {
    fn mul(self, other: i32) -> i32 {
        self * other
    }
}
impl Mul for i64 {
    fn mul(self, other: i64) -> i64 {
        self * other
    }
}

// docs:start:div-trait
pub trait Div {
    fn div(self, other: Self) -> Self;
}
// docs:end:div-trait

impl Div for Field {
    fn div(self, other: Field) -> Field {
        self / other
    }
}

impl Div for u128 {
    fn div(self, other: u128) -> u128 {
        self / other
    }
}
impl Div for u64 {
    fn div(self, other: u64) -> u64 {
        self / other
    }
}
impl Div for u32 {
    fn div(self, other: u32) -> u32 {
        self / other
    }
}
impl Div for u16 {
    fn div(self, other: u16) -> u16 {
        self / other
    }
}
impl Div for u8 {
    fn div(self, other: u8) -> u8 {
        self / other
    }
}
impl Div for u1 {
    fn div(self, other: u1) -> u1 {
        self / other
    }
}

impl Div for i8 {
    fn div(self, other: i8) -> i8 {
        self / other
    }
}
impl Div for i16 {
    fn div(self, other: i16) -> i16 {
        self / other
    }
}
impl Div for i32 {
    fn div(self, other: i32) -> i32 {
        self / other
    }
}
impl Div for i64 {
    fn div(self, other: i64) -> i64 {
        self / other
    }
}

// docs:start:rem-trait
pub trait Rem {
    fn rem(self, other: Self) -> Self;
}
// docs:end:rem-trait

impl Rem for u128 {
    fn rem(self, other: u128) -> u128 {
        self % other
    }
}
impl Rem for u64 {
    fn rem(self, other: u64) -> u64 {
        self % other
    }
}
impl Rem for u32 {
    fn rem(self, other: u32) -> u32 {
        self % other
    }
}
impl Rem for u16 {
    fn rem(self, other: u16) -> u16 {
        self % other
    }
}
impl Rem for u8 {
    fn rem(self, other: u8) -> u8 {
        self % other
    }
}
impl Rem for u1 {
    fn rem(self, other: u1) -> u1 {
        self % other
    }
}

impl Rem for i8 {
    fn rem(self, other: i8) -> i8 {
        self % other
    }
}
impl Rem for i16 {
    fn rem(self, other: i16) -> i16 {
        self % other
    }
}
impl Rem for i32 {
    fn rem(self, other: i32) -> i32 {
        self % other
    }
}
impl Rem for i64 {
    fn rem(self, other: i64) -> i64 {
        self % other
    }
}

// docs:start:neg-trait
pub trait Neg {
    fn neg(self) -> Self;
}
// docs:end:neg-trait

// docs:start:neg-trait-impls
impl Neg for Field {
    fn neg(self) -> Field {
        -self
    }
}

impl Neg for i8 {
    fn neg(self) -> i8 {
        -self
    }
}
impl Neg for i16 {
    fn neg(self) -> i16 {
        -self
    }
}
impl Neg for i32 {
    fn neg(self) -> i32 {
        -self
    }
}
impl Neg for i64 {
    fn neg(self) -> i64 {
        -self
    }
}
// docs:end:neg-trait-impls

// docs:start:wrapping-add-trait
pub trait WrappingAdd {
    fn wrapping_add(self, y: Self) -> Self;
}
// docs:end:wrapping-add-trait

impl WrappingAdd for u1 {
    fn wrapping_add(self: u1, y: u1) -> u1 {
        self ^ y
    }
}

impl WrappingAdd for u8 {
    fn wrapping_add(self: u8, y: u8) -> u8 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for u16 {
    fn wrapping_add(self: u16, y: u16) -> u16 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for u32 {
    fn wrapping_add(self: u32, y: u32) -> u32 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for u64 {
    fn wrapping_add(self: u64, y: u64) -> u64 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for u128 {
    fn wrapping_add(self: u128, y: u128) -> u128 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for i8 {
    fn wrapping_add(self: i8, y: i8) -> i8 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for i16 {
    fn wrapping_add(self: i16, y: i16) -> i16 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for i32 {
    fn wrapping_add(self: i32, y: i32) -> i32 {
        wrapping_add_hlp(self, y)
    }
}

impl WrappingAdd for i64 {
    fn wrapping_add(self: i64, y: i64) -> i64 {
        wrapping_add_hlp(self, y)
    }
}
impl WrappingAdd for Field {
    fn wrapping_add(self: Field, y: Field) -> Field {
        self + y
    }
}

// docs:start:wrapping-sub-trait
pub trait WrappingSub {
    fn wrapping_sub(self, y: Self) -> Self;
}
// docs:start:wrapping-sub-trait

impl WrappingSub for u1 {
    fn wrapping_sub(self: u1, y: u1) -> u1 {
        self ^ y
    }
}

impl WrappingSub for u8 {
    fn wrapping_sub(self: u8, y: u8) -> u8 {
        wrapping_sub_hlp(self, y) as u8
    }
}

impl WrappingSub for u16 {
    fn wrapping_sub(self: u16, y: u16) -> u16 {
        wrapping_sub_hlp(self, y) as u16
    }
}

impl WrappingSub for u32 {
    fn wrapping_sub(self: u32, y: u32) -> u32 {
        wrapping_sub_hlp(self, y) as u32
    }
}
impl WrappingSub for u64 {
    fn wrapping_sub(self: u64, y: u64) -> u64 {
        wrapping_sub_hlp(self, y) as u64
    }
}
impl WrappingSub for u128 {
    fn wrapping_sub(self: u128, y: u128) -> u128 {
        wrapping_sub_hlp(self, y) as u128
    }
}

impl WrappingSub for i8 {
    fn wrapping_sub(self: i8, y: i8) -> i8 {
        wrapping_sub_hlp(self, y) as i8
    }
}

impl WrappingSub for i16 {
    fn wrapping_sub(self: i16, y: i16) -> i16 {
        wrapping_sub_hlp(self, y) as i16
    }
}

impl WrappingSub for i32 {
    fn wrapping_sub(self: i32, y: i32) -> i32 {
        wrapping_sub_hlp(self, y) as i32
    }
}
impl WrappingSub for i64 {
    fn wrapping_sub(self: i64, y: i64) -> i64 {
        wrapping_sub_hlp(self, y) as i64
    }
}
impl WrappingSub for Field {
    fn wrapping_sub(self: Field, y: Field) -> Field {
        self - y
    }
}

// docs:start:wrapping-mul-trait
pub trait WrappingMul {
    fn wrapping_mul(self, y: Self) -> Self;
}
// docs:start:wrapping-mul-trait

impl WrappingMul for u1 {
    fn wrapping_mul(self: u1, y: u1) -> u1 {
        self & y
    }
}

impl WrappingMul for u8 {
    fn wrapping_mul(self: u8, y: u8) -> u8 {
        wrapping_mul_hlp(self, y)
    }
}

impl WrappingMul for u16 {
    fn wrapping_mul(self: u16, y: u16) -> u16 {
        wrapping_mul_hlp(self, y)
    }
}

impl WrappingMul for u32 {
    fn wrapping_mul(self: u32, y: u32) -> u32 {
        wrapping_mul_hlp(self, y)
    }
}
impl WrappingMul for u64 {
    fn wrapping_mul(self: u64, y: u64) -> u64 {
        wrapping_mul_hlp(self, y)
    }
}

impl WrappingMul for i8 {
    fn wrapping_mul(self: i8, y: i8) -> i8 {
        wrapping_mul_hlp(self, y)
    }
}

impl WrappingMul for i16 {
    fn wrapping_mul(self: i16, y: i16) -> i16 {
        wrapping_mul_hlp(self, y)
    }
}

impl WrappingMul for i32 {
    fn wrapping_mul(self: i32, y: i32) -> i32 {
        wrapping_mul_hlp(self, y)
    }
}

impl WrappingMul for i64 {
    fn wrapping_mul(self: i64, y: i64) -> i64 {
        wrapping_mul_hlp(self, y)
    }
}

impl WrappingMul for u128 {
    fn wrapping_mul(self: u128, y: u128) -> u128 {
        wrapping_mul128_hlp(self, y)
    }
}
impl WrappingMul for Field {
    fn wrapping_mul(self: Field, y: Field) -> Field {
        self * y
    }
}

fn wrapping_add_hlp<T>(x: T, y: T) -> T
where
    T: AsPrimitive<Field>,
    Field: AsPrimitive<T>,
{
    AsPrimitive::as_(x.as_() + y.as_())
}

fn wrapping_sub_hlp<T>(x: T, y: T) -> Field
where
    T: AsPrimitive<Field>,
{
    //340282366920938463463374607431768211456 is 2^128, it is used to avoid underflow
    x.as_() + 340282366920938463463374607431768211456 - y.as_()
}

fn wrapping_mul_hlp<T>(x: T, y: T) -> T
where
    T: AsPrimitive<Field>,
    Field: AsPrimitive<T>,
{
    AsPrimitive::as_(x.as_() * y.as_())
}

global two_pow_64: u128 = 0x10000000000000000;
/// Splits a 128 bits number into two 64 bits limbs
unconstrained fn split64(x: u128) -> (u64, u64) {
    let lo = x as u64;
    let hi = (x / two_pow_64) as u64;
    (lo, hi)
}

/// Split a 128 bits number into two 64 bits limbs
/// It will fail if the number is more than 128 bits
fn split_into_64_bit_limbs(x: u128) -> (u64, u64) {
    // Safety: the limbs are constrained below
    let (x_lo, x_hi) = unsafe { split64(x) };
    assert(x as Field == x_lo as Field + x_hi as Field * two_pow_64 as Field);
    (x_lo, x_hi)
}

#[field(bn254)]
fn wrapping_mul128_hlp(x: u128, y: u128) -> u128 {
    let (x_lo, x_hi) = split_into_64_bit_limbs(x);
    let (y_lo, y_hi) = split_into_64_bit_limbs(y);
    // Multiplication using the limbs:(x_lo + 2**64*x_hi)*(y_lo + 2**64*y_hi)=x_lo*y_lo+...
    // and skipping the terms over 2**128
    // Working with u64 limbs ensures that we cannot overflow the field modulus.
    let low = x_lo as Field * y_lo as Field;
    let lo = low as u64 as Field;
    let carry = (low - lo) / two_pow_64 as Field;
    let high = x_lo as Field * y_hi as Field + x_hi as Field * y_lo as Field + carry;
    let hi = high as u64 as Field;
    (lo + two_pow_64 as Field * hi) as u128
}
`},43:{path:"std/panic.nr",source:`pub fn panic<T, U, let N: u32>(message: fmtstr<N, T>) -> U {
    assert(false, message);
    crate::mem::zeroed()
}
`},50:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-contracts/contracts/protocol/fee_juice_contract/src/lib.nr",source:`use dep::aztec::context::PublicContext;
use dep::aztec::prelude::AztecAddress;
use dep::aztec::protocol_types::hash::sha256_to_field;
use dep::aztec::protocol_types::traits::ToField;

pub fn calculate_fee<TPublicContext>(context: PublicContext) -> Field {
    context.transaction_fee()
}

pub fn get_bridge_gas_msg_hash(owner: AztecAddress, amount: u128) -> Field {
    let mut hash_bytes = [0; 68];
    let recipient_bytes: [u8; 32] = owner.to_field().to_be_bytes();
    let amount_bytes: [u8; 32] = (amount as Field).to_be_bytes();

    // The purpose of including the following selector is to make the message unique to that specific call. Note that
    // it has nothing to do with calling the function.
    let selector = comptime { keccak256::keccak256("claim(bytes32,uint256)".as_bytes(), 22) };

    for i in 0..4 {
        hash_bytes[i] = selector[i];
    }

    for i in 0..32 {
        hash_bytes[i + 4] = recipient_bytes[i];
        hash_bytes[i + 36] = amount_bytes[i];
    }

    let content_hash = sha256_to_field(hash_bytes);
    content_hash
}
`},51:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-contracts/contracts/protocol/fee_juice_contract/src/main.nr",source:`mod lib;

use dep::aztec::macros::aztec;

#[aztec]
pub contract FeeJuice {
    use dep::aztec::{
        macros::{functions::{internal, private, public, view}, storage::storage},
        protocol_types::{
            address::{AztecAddress, EthAddress},
            constants::FEE_JUICE_ADDRESS,
            traits::ToField,
        },
        state_vars::{Map, PublicMutable},
    };

    use crate::lib::get_bridge_gas_msg_hash;
    use std::ops::Add;

    #[storage]
    struct Storage<Context> {
        // This map is accessed directly by protocol circuits to check balances for fee payment.
        // Do not change this storage layout unless you also update the base rollup circuits.
        balances: Map<AztecAddress, PublicMutable<u128, Context>, Context>,
    }

    #[private]
    fn claim(to: AztecAddress, amount: u128, secret: Field, message_leaf_index: Field) {
        let content_hash = get_bridge_gas_msg_hash(to, amount);
        let portal_address = EthAddress::from_field(FEE_JUICE_ADDRESS.to_field());
        assert(!portal_address.is_zero());

        // Consume message and emit nullifier
        context.consume_l1_to_l2_message(content_hash, secret, portal_address, message_leaf_index);

        // TODO(palla/gas) Emit an unencrypted log to announce which L1 to L2 message has been claimed
        // Otherwise, we cannot trace L1 deposits to their corresponding claims on L2
        FeeJuice::at(context.this_address())._increase_public_balance(to, amount).enqueue(
            &mut context,
        );
    }

    #[public]
    #[internal]
    fn _increase_public_balance(to: AztecAddress, amount: u128) {
        let new_balance = storage.balances.at(to).read().add(amount);
        storage.balances.at(to).write(new_balance);
    }

    #[public]
    #[view]
    fn check_balance(fee_limit: u128) {
        assert(storage.balances.at(context.msg_sender()).read() >= fee_limit, "Balance too low");
    }

    // utility function for testing
    #[public]
    #[view]
    fn balance_of_public(owner: AztecAddress) -> pub u128 {
        storage.balances.at(owner).read()
    }
}
`},62:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/call_interfaces.nr",source:`use dep::protocol_types::{
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
`},69:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/private_context.nr",source:`use crate::{
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
`},70:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/public_context.nr",source:`use crate::context::gas::GasOpts;
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
`},72:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/context/utility_context.nr",source:`use crate::oracle::{
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
`},76:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/hash.nr",source:`use dep::protocol_types::{
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
`},98:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/dispatch.nr",source:`use super::utils::compute_fn_selector;
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
`},105:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/functions/utils.nr",source:`use crate::macros::{
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
`},108:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/macros/storage.nr",source:`use poseidon::poseidon2::Poseidon2Hasher;
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
`},128:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/messaging.nr",source:`use crate::{
    hash::{compute_l1_to_l2_message_hash, compute_l1_to_l2_message_nullifier, compute_secret_hash},
    oracle::get_l1_to_l2_membership_witness::get_l1_to_l2_membership_witness,
};

use dep::protocol_types::{
    address::{AztecAddress, EthAddress},
    merkle_tree::root::root_from_sibling_path,
};

pub fn process_l1_to_l2_message(
    l1_to_l2_root: Field,
    contract_address: AztecAddress,
    portal_contract_address: EthAddress,
    chain_id: Field,
    version: Field,
    content: Field,
    secret: Field,
    leaf_index: Field,
) -> Field {
    let secret_hash = compute_secret_hash(secret);
    let message_hash = compute_l1_to_l2_message_hash(
        portal_contract_address,
        chain_id,
        contract_address,
        version,
        content,
        secret_hash,
        leaf_index,
    );

    // We prove that \`message_hash\` is in the tree by showing the derivation of the tree root, using a merkle path we
    // get from an oracle.
    // Safety: The witness is only used as a "magical value" that makes the merkle proof below pass. Hence it's safe.
    let (_leaf_index, sibling_path) =
        unsafe { get_l1_to_l2_membership_witness(contract_address, message_hash, secret) };

    let root = root_from_sibling_path(message_hash, leaf_index, sibling_path);
    assert_eq(root, l1_to_l2_root, "Message not in state");

    compute_l1_to_l2_message_nullifier(message_hash, secret)
}
`},146:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/enqueue_public_function_call.nr",source:`use dep::protocol_types::address::AztecAddress;

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
`},147:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/execution.nr",source:`use dep::protocol_types::address::AztecAddress;

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
`},148:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/execution_cache.nr",source:`/// Stores values represented as slice in execution cache to be later obtained by its hash.
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
`},150:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/get_l1_to_l2_membership_witness.nr",source:`use dep::protocol_types::{address::AztecAddress, constants::L1_TO_L2_MSG_TREE_HEIGHT};

/// Returns the leaf index and sibling path of an entry in the L1 to L2 messaging tree, which can then be used to prove
/// its existence.
pub unconstrained fn get_l1_to_l2_membership_witness(
    contract_address: AztecAddress,
    message_hash: Field,
    secret: Field,
) -> (Field, [Field; L1_TO_L2_MSG_TREE_HEIGHT]) {
    get_l1_to_l2_membership_witness_oracle(contract_address, message_hash, secret)
}

// Obtains membership witness (index and sibling path) for a message in the L1 to L2 message tree.
#[oracle(getL1ToL2MembershipWitness)]
unconstrained fn get_l1_to_l2_membership_witness_oracle(
    _contract_address: AztecAddress,
    _message_hash: Field,
    _secret: Field,
) -> (Field, [Field; L1_TO_L2_MSG_TREE_HEIGHT]) {}
`},159:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/oracle/notes.nr",source:`use crate::note::{
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
`},165:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/state_vars/map.nr",source:`use crate::state_vars::storage::Storage;
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
`},174:{path:"/home/aztec-dev/aztec-packages/noir-projects/aztec-nr/aztec/src/state_vars/public_mutable.nr",source:`use crate::context::{PublicContext, UtilityContext};
use crate::state_vars::storage::Storage;
use dep::protocol_types::traits::Packable;

// docs:start:public_mutable_struct
pub struct PublicMutable<T, Context> {
    context: Context,
    storage_slot: Field,
}
// docs:end:public_mutable_struct

impl<T, Context, let N: u32> Storage<N> for PublicMutable<T, Context>
where
    T: Packable<N>,
{
    fn get_storage_slot(self) -> Field {
        self.storage_slot
    }
}

impl<T, Context> PublicMutable<T, Context> {
    // docs:start:public_mutable_struct_new
    pub fn new(
        // Note: Passing the contexts to new(...) just to have an interface compatible with a Map.
        context: Context,
        storage_slot: Field,
    ) -> Self {
        assert(storage_slot != 0, "Storage slot 0 not allowed. Storage slots must start from 1.");
        PublicMutable { context, storage_slot }
    }
    // docs:end:public_mutable_struct_new
}

impl<T> PublicMutable<T, &mut PublicContext> {
    // docs:start:public_mutable_struct_read
    pub fn read<let T_PACKED_LEN: u32>(self) -> T
    where
        T: Packable<T_PACKED_LEN>,
    {
        self.context.storage_read(self.storage_slot)
    }
    // docs:end:public_mutable_struct_read

    // docs:start:public_mutable_struct_write
    pub fn write<let T_PACKED_LEN: u32>(self, value: T)
    where
        T: Packable<T_PACKED_LEN>,
    {
        self.context.storage_write(self.storage_slot, value);
    }
    // docs:end:public_mutable_struct_write
}

impl<T> PublicMutable<T, UtilityContext> {
    pub unconstrained fn read<let T_PACKED_LEN: u32>(self) -> T
    where
        T: Packable<T_PACKED_LEN>,
    {
        self.context.storage_read(self.storage_slot)
    }
}
`},210:{path:"/home/aztec-dev/nargo/github.com/noir-lang/poseidon/v0.1.0/src/poseidon2.nr",source:`use std::default::Default;
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
`},272:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/address/aztec_address.nr",source:`use crate::{
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
`},290:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/hash.nr",source:`use crate::{
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
`},300:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/merkle_tree/root.nr",source:`use crate::{hash::merkle_hash, merkle_tree::merkle_tree::MerkleTree};

// Calculate the Merkle tree root from the sibling path and leaf.
//
// The leaf is hashed with its sibling, and then the result is hashed
// with the next sibling etc in the path. The last hash is the root.
//
// TODO(David/Someone): The cpp code is using a uint256, whereas its
// TODO a bit simpler in Noir to just have a bit array.
// TODO: I'd generally like to avoid u256 for algorithms like
// this because it means we never even need to consider cases where
// the index is greater than p.
pub fn root_from_sibling_path<let N: u32>(
    leaf: Field,
    leaf_index: Field,
    sibling_path: [Field; N],
) -> Field {
    let mut node = leaf;
    let indices: [u1; N] = leaf_index.to_le_bits();

    for i in 0..N {
        let (hash_left, hash_right) = if indices[i] == 1 {
            (sibling_path[i], node)
        } else {
            (node, sibling_path[i])
        };
        node = merkle_hash(hash_left, hash_right);
    }
    node
}

pub fn calculate_subtree_root<let N: u32>(leaves: [Field; N]) -> Field {
    MerkleTree::new(leaves).get_root()
}

// These values are precomputed and we run tests to ensure that they
// are correct. The values themselves were computed from the cpp code.
//
// Would be good if we could use width since the compute_subtree
// algorithm uses depth.
pub fn calculate_empty_tree_root(depth: u32) -> Field {
    if depth == 0 {
        0
    } else if depth == 1 {
        0x0b63a53787021a4a962a452c2921b3663aff1ffd8d5510540f8e659e782956f1
    } else if depth == 2 {
        0x0e34ac2c09f45a503d2908bcb12f1cbae5fa4065759c88d501c097506a8b2290
    } else if depth == 3 {
        0x21f9172d72fdcdafc312eee05cf5092980dda821da5b760a9fb8dbdf607c8a20
    } else if depth == 4 {
        0x2373ea368857ec7af97e7b470d705848e2bf93ed7bef142a490f2119bcf82d8e
    } else if depth == 5 {
        0x120157cfaaa49ce3da30f8b47879114977c24b266d58b0ac18b325d878aafddf
    } else if depth == 6 {
        0x01c28fe1059ae0237b72334700697bdf465e03df03986fe05200cadeda66bd76
    } else if depth == 7 {
        0x2d78ed82f93b61ba718b17c2dfe5b52375b4d37cbbed6f1fc98b47614b0cf21b
    } else if depth == 8 {
        0x067243231eddf4222f3911defbba7705aff06ed45960b27f6f91319196ef97e1
    } else if depth == 9 {
        0x1849b85f3c693693e732dfc4577217acc18295193bede09ce8b97ad910310972
    } else if depth == 10 {
        0x2a775ea761d20435b31fa2c33ff07663e24542ffb9e7b293dfce3042eb104686
    } else {
        panic(f"depth should be between 0 and 10")
    }
}

#[test]
fn test_merkle_root_interop_test() {
    // This is a test to ensure that we match the cpp implementation.
    // You can grep for \`TEST_F(root_rollup_tests, noir_interop_test)\`
    // to find the test that matches this.
    let root = calculate_subtree_root([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]);
    assert(0x1a09d935ae110b4c861fcec8f9099ec30b4485022aeb3d3cf9d7168e38fdc231 == root);

    let empty_root = calculate_subtree_root([0; 16]);
    assert(0x2373ea368857ec7af97e7b470d705848e2bf93ed7bef142a490f2119bcf82d8e == empty_root);
}

#[test]
fn test_empty_subroot() {
    assert(calculate_empty_tree_root(0) == 0);

    let expected_empty_root_2 = calculate_subtree_root([0; 2]);
    assert(calculate_empty_tree_root(1) == expected_empty_root_2);

    let expected_empty_root_4 = calculate_subtree_root([0; 4]);
    assert(calculate_empty_tree_root(2) == expected_empty_root_4);

    let expected_empty_root_8 = calculate_subtree_root([0; 8]);
    assert(calculate_empty_tree_root(3) == expected_empty_root_8);

    let expected_empty_root_16 = calculate_subtree_root([0; 16]);
    assert(calculate_empty_tree_root(4) == expected_empty_root_16);

    let expected_empty_root_32 = calculate_subtree_root([0; 32]);
    assert(calculate_empty_tree_root(5) == expected_empty_root_32);

    let expected_empty_root_64 = calculate_subtree_root([0; 64]);
    assert(calculate_empty_tree_root(6) == expected_empty_root_64);

    let expected_empty_root_128 = calculate_subtree_root([0; 128]);
    assert(calculate_empty_tree_root(7) == expected_empty_root_128);

    let expected_empty_root_256 = calculate_subtree_root([0; 256]);
    assert(calculate_empty_tree_root(8) == expected_empty_root_256);

    let expected_empty_root_512 = calculate_subtree_root([0; 512]);
    assert(calculate_empty_tree_root(9) == expected_empty_root_512);

    let expected_empty_root_1024 = calculate_subtree_root([0; 1024]);
    assert(calculate_empty_tree_root(10) == expected_empty_root_1024);
}
`},307:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/poseidon2.nr",source:`use crate::constants::TWO_POW_64;

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
`},328:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/storage/map.nr",source:`use crate::{hash::poseidon2_hash, traits::ToField};

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
`},346:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/type_packing.nr",source:`use crate::traits::Packable;

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
`},347:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/type_serialization.nr",source:`use crate::traits::{Deserialize, Serialize};

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
`},366:{path:"/home/aztec-dev/aztec-packages/noir-projects/noir-protocol-circuits/crates/types/src/utils/reader.nr",source:`pub struct Reader<let N: u32> {
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
`},372:{path:"/home/aztec-dev/nargo/github.com/noir-lang/sha256/v0.1.3/src/sha256.nr",source:`use std::hash::sha256_compression;
use std::runtime::is_unconstrained;

use constants::{
    BLOCK_BYTE_PTR, BLOCK_SIZE, HASH, INITIAL_STATE, INT_BLOCK, INT_BLOCK_SIZE, INT_SIZE,
    INT_SIZE_PTR, MSG_BLOCK, MSG_SIZE_PTR, STATE, TWO_POW_16, TWO_POW_24, TWO_POW_32, TWO_POW_8,
};

pub(crate) mod constants;
mod tests;

// Implementation of SHA-256 mapping a byte array of variable length to
// 32 bytes.

// Deprecated in favour of \`sha256_var\`
// docs:start:sha256
pub fn sha256<let N: u32>(input: [u8; N]) -> HASH
// docs:end:sha256
{
    digest(input)
}

// SHA-256 hash function
#[no_predicates]
pub fn digest<let N: u32>(msg: [u8; N]) -> HASH {
    sha256_var(msg, N as u64)
}

// Variable size SHA-256 hash
pub fn sha256_var<let N: u32>(msg: [u8; N], message_size: u64) -> HASH {
    let message_size = message_size as u32;
    assert(message_size <= N);

    if std::runtime::is_unconstrained() {
        // Safety: SHA256 is running as an unconstrained function.
        unsafe {
            __sha256_var(msg, message_size)
        }
    } else {
        let mut msg_block: MSG_BLOCK = [0; INT_BLOCK_SIZE];
        // Intermediate hash, starting with the canonical initial value
        let mut h: STATE = INITIAL_STATE;
        // Pointer into msg_block on a 64 byte scale
        let mut msg_byte_ptr = 0;
        let num_blocks = N / BLOCK_SIZE;
        for i in 0..num_blocks {
            let msg_start = BLOCK_SIZE * i;
            let (new_msg_block, new_msg_byte_ptr) =
                unsafe { build_msg_block(msg, message_size, msg_start) };

            if msg_start < message_size {
                msg_block = new_msg_block;
            }

            // Verify the block we are compressing was appropriately constructed
            let new_msg_byte_ptr = verify_msg_block(msg, message_size, msg_block, msg_start);
            if msg_start < message_size {
                msg_byte_ptr = new_msg_byte_ptr;
            }

            // If the block is filled, compress it.
            // An un-filled block is handled after this loop.
            if (msg_start < message_size) & (msg_byte_ptr == BLOCK_SIZE) {
                h = sha256_compression(msg_block, h);
            }
        }

        let modulo = N % BLOCK_SIZE;
        // Handle setup of the final msg block.
        // This case is only hit if the msg is less than the block size,
        // or our message cannot be evenly split into blocks.
        if modulo != 0 {
            let msg_start = BLOCK_SIZE * num_blocks;
            let (new_msg_block, new_msg_byte_ptr) =
                unsafe { build_msg_block(msg, message_size, msg_start) };

            if msg_start < message_size {
                msg_block = new_msg_block;
            }

            let new_msg_byte_ptr = verify_msg_block(msg, message_size, msg_block, msg_start);
            if msg_start < message_size {
                msg_byte_ptr = new_msg_byte_ptr;
                verify_msg_block_padding(msg_block, msg_byte_ptr);
            }
        }

        // If we had modulo == 0 then it means the last block was full,
        // and we can reset the pointer to zero to overwrite it.
        if msg_byte_ptr == BLOCK_SIZE {
            msg_byte_ptr = 0;
        }

        // Pad the rest such that we have a [u32; 2] block at the end representing the length
        // of the message, and a block of 1 0 ... 0 following the message (i.e. [1 << 7, 0, ..., 0]).
        // Here we rely on the fact that everything beyond the available input is set to 0.
        let index = msg_byte_ptr / INT_SIZE;
        msg_block[index] = set_item_byte_then_zeros(msg_block[index], msg_byte_ptr, 1 << 7);

        msg_byte_ptr = msg_byte_ptr + 1;
        let last_block = msg_block;

        // If we don't have room to write the size, compress the block and reset it.
        if msg_byte_ptr > MSG_SIZE_PTR {
            h = sha256_compression(msg_block, h);
            // \`attach_len_to_msg_block\` will zero out everything after the \`msg_byte_ptr\`.
            msg_byte_ptr = 0;
        }

        msg_block = unsafe { attach_len_to_msg_block(msg_block, msg_byte_ptr, message_size) };

        verify_msg_len(msg_block, last_block, msg_byte_ptr, message_size);

        hash_final_block(msg_block, h)
    }
}

// Variable size SHA-256 hash
unconstrained fn __sha256_var<let N: u32>(msg: [u8; N], message_size: u32) -> HASH {
    let num_full_blocks = message_size / BLOCK_SIZE;
    // Intermediate hash, starting with the canonical initial value
    let mut h: STATE = INITIAL_STATE;
    // Pointer into msg_block on a 64 byte scale
    for i in 0..num_full_blocks {
        let (msg_block, _) = build_msg_block(msg, message_size, BLOCK_SIZE * i);
        h = sha256_compression(msg_block, h);
    }

    // Handle setup of the final msg block.
    // This case is only hit if the msg is less than the block size,
    // or our message cannot be evenly split into blocks.
    let modulo = message_size % BLOCK_SIZE;
    let (mut msg_block, mut msg_byte_ptr): (INT_BLOCK, u32) = if modulo != 0 {
        let msg_start = BLOCK_SIZE * num_full_blocks;
        let (new_msg_block, new_msg_byte_ptr) = build_msg_block(msg, message_size, msg_start);

        (new_msg_block, new_msg_byte_ptr)
    } else {
        // If we had modulo == 0 then it means the last block was full,
        // and we can reset the pointer to zero to overwrite it.
        ([0; INT_BLOCK_SIZE], 0)
    };

    // Pad the rest such that we have a [u32; 2] block at the end representing the length
    // of the message, and a block of 1 0 ... 0 following the message (i.e. [1 << 7, 0, ..., 0]).
    // Here we rely on the fact that everything beyond the available input is set to 0.
    let index = msg_byte_ptr / INT_SIZE;
    msg_block[index] = set_item_byte_then_zeros(msg_block[index], msg_byte_ptr, 1 << 7);

    // If we don't have room to write the size, compress the block and reset it.
    let (h, mut msg_byte_ptr): (STATE, u32) = if msg_byte_ptr >= MSG_SIZE_PTR {
        // \`attach_len_to_msg_block\` will zero out everything after the \`msg_byte_ptr\`.
        (sha256_compression(msg_block, h), 0)
    } else {
        (h, msg_byte_ptr + 1)
    };
    msg_block = attach_len_to_msg_block(msg_block, msg_byte_ptr, message_size);

    hash_final_block(msg_block, h)
}

// Take \`BLOCK_SIZE\` number of bytes from \`msg\` starting at \`msg_start\`.
// Returns the block and the length that has been copied rather than padded with zeros.
unconstrained fn build_msg_block<let N: u32>(
    msg: [u8; N],
    message_size: u32,
    msg_start: u32,
) -> (MSG_BLOCK, BLOCK_BYTE_PTR) {
    let mut msg_block: MSG_BLOCK = [0; INT_BLOCK_SIZE];

    // We insert \`BLOCK_SIZE\` bytes (or up to the end of the message)
    let block_input = if message_size < msg_start {
        // This function is sometimes called with \`msg_start\` past the end of the message.
        // In this case we return an empty block and zero pointer to signal that the result should be ignored.
        0
    } else if message_size < msg_start + BLOCK_SIZE {
        message_size - msg_start
    } else {
        BLOCK_SIZE
    };

    // Figure out the number of items in the int array that we have to pack.
    // e.g. if the input is [0,1,2,3,4,5] then we need to pack it as 2 items: [0123, 4500]
    let mut int_input = block_input / INT_SIZE;
    if block_input % INT_SIZE != 0 {
        int_input = int_input + 1;
    };

    for i in 0..int_input {
        let mut msg_item: u32 = 0;
        // Always construct the integer as 4 bytes, even if it means going beyond the input.
        for j in 0..INT_SIZE {
            let k = i * INT_SIZE + j;
            let msg_byte = if k < block_input {
                msg[msg_start + k]
            } else {
                0
            };
            msg_item = lshift8(msg_item, 1) + msg_byte as u32;
        }
        msg_block[i] = msg_item;
    }

    // Returning the index as if it was a 64 byte array.
    // We have to project it down to 16 items and bit shifting to get a byte back if we need it.
    (msg_block, block_input)
}

// Verify the block we are compressing was appropriately constructed by \`build_msg_block\`
// and matches the input data. Returns the index of the first unset item.
// If \`message_size\` is less than \`msg_start\` then this is called with the old non-empty block;
// in that case we can skip verification, ie. no need to check that everything is zero.
fn verify_msg_block<let N: u32>(
    msg: [u8; N],
    message_size: u32,
    msg_block: MSG_BLOCK,
    msg_start: u32,
) -> BLOCK_BYTE_PTR {
    let mut msg_byte_ptr = 0;
    let mut msg_end = msg_start + BLOCK_SIZE;
    if msg_end > N {
        msg_end = N;
    }
    // We might have to go beyond the input to pad the fields.
    if msg_end % INT_SIZE != 0 {
        msg_end = msg_end + INT_SIZE - msg_end % INT_SIZE;
    }

    // Reconstructed packed item.
    let mut msg_item: u32 = 0;

    // Inclusive at the end so that we can compare the last item.
    let mut i: u32 = 0;
    for k in msg_start..=msg_end {
        if k % INT_SIZE == 0 {
            // If we consumed some input we can compare against the block.
            if (msg_start < message_size) & (k > msg_start) {
                assert_eq(msg_block[i], msg_item as u32);
                i = i + 1;
                msg_item = 0;
            }
        }
        // Shift the accumulator
        msg_item = lshift8(msg_item, 1);
        // If we have input to consume, add it at the rightmost position.
        if k < message_size & k < msg_end {
            msg_item = msg_item + msg[k] as u32;
            msg_byte_ptr = msg_byte_ptr + 1;
        }
    }

    msg_byte_ptr
}

// Verify the block we are compressing was appropriately padded with zeros by \`build_msg_block\`.
// This is only relevant for the last, potentially partially filled block.
fn verify_msg_block_padding(msg_block: MSG_BLOCK, msg_byte_ptr: BLOCK_BYTE_PTR) {
    // Check all the way to the end of the block.
    verify_msg_block_zeros(msg_block, msg_byte_ptr, INT_BLOCK_SIZE);
}

// Verify that a region of ints in the message block are (partially) zeroed,
// up to an (exclusive) maximum which can either be the end of the block
// or just where the size is to be written.
fn verify_msg_block_zeros(
    msg_block: MSG_BLOCK,
    mut msg_byte_ptr: BLOCK_BYTE_PTR,
    max_int_byte_ptr: u32,
) {
    // This variable is used to get around the compiler under-constrained check giving a warning.
    // We want to check against a constant zero, but if it does not come from the circuit inputs
    // or return values the compiler check will issue a warning.
    let zero = msg_block[0] - msg_block[0];

    // First integer which is supposed to be (partially) zero.
    let mut int_byte_ptr = msg_byte_ptr / INT_SIZE;

    // Check partial zeros.
    let modulo = msg_byte_ptr % INT_SIZE;
    if modulo != 0 {
        let zeros = INT_SIZE - modulo;
        let mask = if zeros == 3 {
            TWO_POW_24
        } else if zeros == 2 {
            TWO_POW_16
        } else {
            TWO_POW_8
        };
        assert_eq(msg_block[int_byte_ptr] % mask, zero);
        int_byte_ptr = int_byte_ptr + 1;
    }

    // Check the rest of the items.
    for i in 0..max_int_byte_ptr {
        if i >= int_byte_ptr {
            assert_eq(msg_block[i], zero);
        }
    }
}

// Verify that up to the byte pointer the two blocks are equal.
// At the byte pointer the new block can be partially zeroed.
fn verify_msg_block_equals_last(
    msg_block: MSG_BLOCK,
    last_block: MSG_BLOCK,
    mut msg_byte_ptr: BLOCK_BYTE_PTR,
) {
    // msg_byte_ptr is the position at which they are no longer have to be the same.
    // First integer which is supposed to be (partially) zero contains that pointer.
    let mut int_byte_ptr = msg_byte_ptr / INT_SIZE;

    // Check partial zeros.
    let modulo = msg_byte_ptr % INT_SIZE;
    if modulo != 0 {
        // Reconstruct the partially zero item from the last block.
        let last_field = last_block[int_byte_ptr];
        let mut msg_item: u32 = 0;
        // Reset to where they are still equal.
        msg_byte_ptr = msg_byte_ptr - modulo;
        for i in 0..INT_SIZE {
            msg_item = lshift8(msg_item, 1);
            if i < modulo {
                msg_item = msg_item + get_item_byte(last_field, msg_byte_ptr) as u32;
                msg_byte_ptr = msg_byte_ptr + 1;
            }
        }
        assert_eq(msg_block[int_byte_ptr], msg_item);
    }

    for i in 0..INT_SIZE_PTR {
        if i < int_byte_ptr {
            assert_eq(msg_block[i], last_block[i]);
        }
    }
}

// Set the rightmost \`zeros\` number of bytes to 0.
#[inline_always]
fn set_item_zeros(item: u32, zeros: u8) -> u32 {
    lshift8(rshift8(item, zeros), zeros)
}

// Replace one byte in the item with a value, and set everything after it to zero.
fn set_item_byte_then_zeros(msg_item: u32, msg_byte_ptr: BLOCK_BYTE_PTR, msg_byte: u8) -> u32 {
    let zeros = INT_SIZE - msg_byte_ptr % INT_SIZE;
    let zeroed_item = set_item_zeros(msg_item, zeros as u8);
    let new_item = byte_into_item(msg_byte, msg_byte_ptr);
    zeroed_item + new_item
}

// Get a byte of a message item according to its overall position in the \`BLOCK_SIZE\` space.
fn get_item_byte(mut msg_item: u32, msg_byte_ptr: BLOCK_BYTE_PTR) -> u8 {
    // How many times do we have to shift to the right to get to the position we want?
    let max_shifts = INT_SIZE - 1;
    let shifts = max_shifts - msg_byte_ptr % INT_SIZE;
    msg_item = rshift8(msg_item, shifts as u8);
    // At this point the byte we want is in the rightmost position.
    msg_item as u8
}

// Project a byte into a position in a field based on the overall block pointer.
// For example putting 1 into pointer 5 would be 100, because overall we would
// have [____, 0100] with indexes [0123,4567].
#[inline_always]
fn byte_into_item(msg_byte: u8, msg_byte_ptr: BLOCK_BYTE_PTR) -> u32 {
    let mut msg_item = msg_byte as u32;
    // How many times do we have to shift to the left to get to the position we want?
    let max_shifts = INT_SIZE - 1;
    let shifts = max_shifts - msg_byte_ptr % INT_SIZE;
    lshift8(msg_item, shifts as u8)
}

// Construct a field out of 4 bytes.
#[inline_always]
fn make_item(b0: u8, b1: u8, b2: u8, b3: u8) -> u32 {
    let mut item = b0 as u32;
    item = lshift8(item, 1) + b1 as u32;
    item = lshift8(item, 1) + b2 as u32;
    item = lshift8(item, 1) + b3 as u32;
    item
}

// Shift by 8 bits to the left between 0 and 4 times.
// Checks \`is_unconstrained()\` to just use a bitshift if we're running in an unconstrained context,
// otherwise multiplies by 256.
#[inline_always]
fn lshift8(item: u32, shifts: u8) -> u32 {
    if is_unconstrained() {
        // Brillig wouldn't shift 0<<4 without overflow.
        if shifts >= 4 {
            0
        } else {
            item << (8 * shifts)
        }
    } else {
        // We can do a for loop up to INT_SIZE or an if-else.
        if shifts == 0 {
            item
        } else if shifts == 1 {
            item * TWO_POW_8
        } else if shifts == 2 {
            item * TWO_POW_16
        } else if shifts == 3 {
            item * TWO_POW_24
        } else {
            // Doesn't make sense, but it's most likely called on 0 anyway.
            0
        }
    }
}

// Shift by 8 bits to the right between 0 and 4 times.
// Checks \`is_unconstrained()\` to just use a bitshift if we're running in an unconstrained context,
// otherwise divides by 256.
fn rshift8(item: u32, shifts: u8) -> u32 {
    if is_unconstrained() {
        item >> (8 * shifts)
    } else {
        // Division wouldn't work on \`Field\`.
        if shifts == 0 {
            item
        } else if shifts == 1 {
            item / TWO_POW_8
        } else if shifts == 2 {
            item / TWO_POW_16
        } else if shifts == 3 {
            item / TWO_POW_24
        } else {
            0
        }
    }
}

// Zero out all bytes between the end of the message and where the length is appended,
// then write the length into the last 8 bytes of the block.
unconstrained fn attach_len_to_msg_block(
    mut msg_block: MSG_BLOCK,
    mut msg_byte_ptr: BLOCK_BYTE_PTR,
    message_size: u32,
) -> MSG_BLOCK {
    // We assume that \`msg_byte_ptr\` is less than 57 because if not then it is reset to zero before calling this function.
    // In any case, fill blocks up with zeros until the last 64 bits (i.e. until msg_byte_ptr = 56).
    // There can be one item which has to be partially zeroed.
    let modulo = msg_byte_ptr % INT_SIZE;
    if modulo != 0 {
        // Index of the block in which we find the item we need to partially zero.
        let i = msg_byte_ptr / INT_SIZE;
        let zeros = INT_SIZE - modulo;
        msg_block[i] = set_item_zeros(msg_block[i], zeros as u8);
        msg_byte_ptr = msg_byte_ptr + zeros;
    }

    // The rest can be zeroed without bit shifting anything.
    for i in (msg_byte_ptr / INT_SIZE)..INT_SIZE_PTR {
        msg_block[i] = 0;
    }

    // Set the last two 4 byte ints as the first/second half of the 8 bytes of the length.
    let len = 8 * message_size;
    let len_bytes: [u8; 8] = (len as Field).to_be_bytes();
    for i in 0..=1 {
        let shift = i * 4;
        msg_block[INT_SIZE_PTR + i] = make_item(
            len_bytes[shift],
            len_bytes[shift + 1],
            len_bytes[shift + 2],
            len_bytes[shift + 3],
        );
    }
    msg_block
}

// Verify that the message length was correctly written by \`attach_len_to_msg_block\`,
// and that everything between the byte pointer and the size pointer was zeroed,
// and that everything before the byte pointer was untouched.
fn verify_msg_len(
    msg_block: MSG_BLOCK,
    last_block: MSG_BLOCK,
    msg_byte_ptr: BLOCK_BYTE_PTR,
    message_size: u32,
) {
    // Check zeros up to the size pointer.
    verify_msg_block_zeros(msg_block, msg_byte_ptr, INT_SIZE_PTR);

    // Check that up to the pointer we match the last block.
    verify_msg_block_equals_last(msg_block, last_block, msg_byte_ptr);

    // We verify the message length was inserted correctly by reversing the byte decomposition.
    let mut reconstructed_len: u64 = 0;
    for i in INT_SIZE_PTR..INT_BLOCK_SIZE {
        reconstructed_len = reconstructed_len * TWO_POW_32;
        reconstructed_len = reconstructed_len + msg_block[i] as u64;
    }
    let len = 8 * message_size as u64;
    assert_eq(reconstructed_len, len);
}

// Perform the final compression, then transform the \`STATE\` into \`HASH\`.
fn hash_final_block(msg_block: MSG_BLOCK, mut state: STATE) -> HASH {
    let mut out_h: HASH = [0; 32]; // Digest as sequence of bytes
    // Hash final padded block
    state = sha256_compression(msg_block, state);

    // Return final hash as byte array
    for j in 0..8 {
        let h_bytes: [u8; 4] = (state[j] as Field).to_be_bytes();
        for k in 0..4 {
            out_h[4 * j + k] = h_bytes[k];
        }
    }

    out_h
}

mod equivalence_test {

    #[test]
    fn test_implementations_agree(msg: [u8; 100], message_size: u64) {
        let message_size = message_size % 100;
        // Safety: test function
        let unconstrained_sha = unsafe { super::__sha256_var(msg, message_size as u32) };
        let sha = super::sha256_var(msg, message_size);
        assert_eq(sha, unconstrained_sha);
    }
}
`}},l={transpiled:!0,noir_version:e,name:n,functions:t,outputs:s,file_map:a};export{l as default,a as file_map,t as functions,n as name,e as noir_version,s as outputs,i as transpiled};
