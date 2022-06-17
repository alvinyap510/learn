const Wallet = require("ethereumjs-wallet");

let EthWallet = Wallet.default.generate();
console.log(EthWallet.getAddressString());
// console.log(typeof EthWallet.getAddressString());

function evaluateZeroAddress(wallet) {
  if (wallet.getAddressString()[2] === "0")
    if (wallet.getAddressString()[3] === "0")
      if (wallet.getAddressString()[4] === "0")
        if (wallet.getAddressString()[5] === "0")
          if (wallet.getAddressString()[6] === "0")
            if (wallet.getAddressString()[7] === "0") return true;
  return false;
}

console.log(evaluateZeroAddress(EthWallet));

let i = 0;
while (evaluateZeroAddress(EthWallet) != true) {
  EthWallet = Wallet.default.generate();
  console.log(EthWallet.getAddressString());
  console.log(EthWallet.getPrivateKeyString());
  console.log(i);
  i++;
}

// console.log(EthWallet.getAddressString());
// console.log(EthWallet.getPrivateKeyString());
