import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const MintToken = await ethers.getContractFactory('MintToken');

  const mintToken = await MintToken.deploy('10000000000000000000000');

  console.log(`Mint Token is deployed at ${mintToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
