
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    ephemery: {
      url: process.env.VITE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};