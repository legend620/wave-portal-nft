const { ethers } = require('hardhat')

const main = async () => {
  const [owner, randomPerson] = await ethers.getSigners()
  const waveContractFactory = await ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy()
  await waveContract.deployed()

  console.log('Contract deployed to: ', waveContract.address)
  console.log('Contract deployed by: ', owner.address)

  let waveTxn = await waveContract.wave()
  await waveTxn.wait()
  waveTxn = await waveContract.wave()
  await waveTxn.wait()

  let ownerBalance = await waveContract.getWalletBalance(owner.address)

  waveTxn = await waveContract.connect(randomPerson).wave()
  await waveTxn.wait()

  ownerBalance = await waveContract.getWalletBalance(randomPerson.address)

  waveCount = await waveContract.getTotalWaves()

}

const run = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

run()
