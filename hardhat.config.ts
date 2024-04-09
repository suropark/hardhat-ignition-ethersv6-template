import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-ignition-ethers';
import { ethers } from 'ethers';
const PVT = process.env.PVT || ethers.Wallet.createRandom().privateKey;
const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    hardhat: {
      forking: {
        url: 'http://127.0.0.1:8645',
      },
      accounts: [
        {
          privateKey: PVT,
          balance: '1000000000000000000000000000',
        },
      ],
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
  },
};

export default config;
