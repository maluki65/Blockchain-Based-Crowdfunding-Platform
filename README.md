# Blockchain-Based Crowdfunding Platform

## Overview
This project is a decentralized crowdfunding platform built on the Ethereum blockchain. It enables users to create crowdfunding campaigns, contribute funds securely, and track contributions transparently using smart contracts.

## Features
- Create and manage crowdfunding campaigns
- Secure contributions using smart contracts
- Transparent fund tracking
- Decentralized and trustless funding mechanism
- Connects to MetaMask for user authentication and transactions

## Technologies Used
- **Solidity** - Smart contract development
- **Hardhat** - Ethereum development framework
- **Next.js** - Frontend for user interaction
- **MetaMask** - Wallet for interacting with the blockchain

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MetaMask Extension](https://metamask.io/)
- Hardhat: Install using:
  ```sh
  npm install --save-dev hardhat
  ```

## Getting Started

### 1. Clone the Repository
```sh
 git clone https://github.com/maluki65/Blockchain-Based-Crowdfunding-Platform.git
 cd client
```

### 2. Install Dependencies
```sh
 npm install
```

### 3. Start a Local Hardhat Node
```sh
 npx hardhat node
```
This command starts a local Ethereum blockchain for testing, providing multiple accounts with pre-funded ETH.

### 4. Deploy the Smart Contract
In a new terminal window, run:
```sh
 npx hardhat run scripts/deploy.js --network localhost
```
This deploys the crowdfunding smart contract to the local Hardhat blockchain.

### 5. Connect Hardhat Accounts to MetaMask
1. Open **MetaMask** and select **Ethereum Mainnet**.
2. Click on the **network selector** and choose **Localhost 8545**.
3. Import an account from Hardhat by:
   - Copying a private key from the Hardhat node output.
   - In MetaMask, go to **Import Account** and paste the private key.

### 6. Start the Frontend
If using React for the frontend, run:
```sh
 npm start
```
This launches the user interface for interacting with the crowdfunding platform.

## Interacting with the Platform
1. Create a new crowdfunding campaign.
2. Contribute ETH to an active campaign.
3. Track campaign progress and fund disbursement.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contributing
Feel free to fork, improve, and submit pull requests!

---
🚀 **Start your blockchain crowdfunding journey today!**

