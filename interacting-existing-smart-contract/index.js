const keepersContractAddress = "0x42F3055B3a522f7805Ac1228a90Ccee9d6d5086A";

const keeperContractABI = [
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function callContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const keepersContract = new ethers.Contract(
    keepersContractAddress,
    keeperContractABI,
    provider
  );

  const counter = await keepersContract.counter();
  console.log(counter.toString());
}

async function connectMetaMask() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }

    document.getElementById("connectButton").innerHTML = "Connected";

    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}
