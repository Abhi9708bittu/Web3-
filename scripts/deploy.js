const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("Web3Fusion");
  const instance = await Contract.deploy();
  await instance.deployed();

  console.log("Web3Fusion deployed to:", instance.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
