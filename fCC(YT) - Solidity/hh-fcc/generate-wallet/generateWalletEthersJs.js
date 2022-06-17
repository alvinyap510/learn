const ethers = require("ethers");

let randomMnemonic = ethers.Wallet.createRandom().mnemonic;
console.log(randomMnemonic);

let wallet = ethers.Wallet.fromMnemonic(randomMnemonic.phrase);
console.log("Wallet address: " + wallet.address);

randomMnemonic.path = "m/44'/60'/0'/0/1";
console.log(randomMnemonic);

let wallet2 = ethers.Wallet.fromMnemonic(
  randomMnemonic.phrase,
  "m/44'/60'/0'/1/1"
);
console.log("Wallet address: " + wallet.address);
