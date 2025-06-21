set -e

# cd inner
# nargo compile
# bb write_vk --oracle_hash keccak -b ./target/inner.json -o ./target
# cd ..

nargo compile
bb write_vk --oracle_hash keccak -b ./target/main.json -o ./target

echo "Done"