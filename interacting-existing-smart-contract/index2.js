//address
//abi

const contractAddress = "0x161bDEEB48479e2A851f6FD19908616c99D493C2";
const contractABI = [
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_favoriteNumber", type: "uint256" },
    ],
    name: "addPerson",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_favoriteNumber", type: "uint256" },
    ],
    name: "addPerson2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "favoriteNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "nameToFavoriteNumberMapping",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "people",
    outputs: [
      { internalType: "uint256", name: "favoriteNumber", type: "uint256" },
      { internalType: "string", name: "name", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "person",
    outputs: [
      { internalType: "uint256", name: "favoriteNumber", type: "uint256" },
      { internalType: "string", name: "name", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removePerson",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_favoriteNumber", type: "uint256" },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

async function callContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const simpleStorageContract = new ethers.Contract(
    contractAddress,
    contractABI,
    provider.getSigner()
  );
  const number = await simpleStorageContract.retrieve();
  console.log(number.toString());
}
