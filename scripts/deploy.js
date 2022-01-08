const { ethers } = require('hardhat')

const run = async () => {
  const contractFactory = await ethers.getContractFactory('WavePortal')
  const contract = await contractFactory.deploy({
    value: ethers.utils.parseEther("0.1"),
  })
  await contract.deployed()

  console.log('WavePortal address: ', contract.address)
}

run()
