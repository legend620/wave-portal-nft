const { ethers } = require('hardhat')

const run = async () => {
  const [deployer] = await ethers.getSigners()
  const contractFactory = await ethers.getContractFactory('WavePortal')
  const contract = await contractFactory.deploy()
  await contract.deployed()

  console.log('WavePortal address: ', contract.address)
}

run()
