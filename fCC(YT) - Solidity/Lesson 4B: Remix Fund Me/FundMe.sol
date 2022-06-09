//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

error NotOwner();

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256; //Explanation on using: https://medium.com/coinmonks/soliditys-using-keyword-c05c18aaa088

    uint256 public constant MINIMUM_USD = 10 * 1e18;
    address[] public fundersArray;
    mapping(address => uint256) public addressToAmountFunded;

    address public immutable i_owner;

    //Constructor function will be called immediately when contract is deployed
    constructor() { 
        i_owner = msg.sender;
    }

    function fund() public payable {
        require(msg.value.getConversionRate() >= MINIMUM_USD, "Not enough eth");
        fundersArray.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public onlyOwner {

        for(uint256 i = 0; i < fundersArray.length; i++) {
            address funder = fundersArray[i];
            addressToAmountFunded[funder] = 0;
        }

        //resset Array
        fundersArray = new address[](0);

        // //transfer
        // payable(msg.sender).transfer(address(this).balance);

        // //send
        // bool sendSuccess = payable(msg.sender).send(address(this).balance);
        // require(sendSuccess, "Sending failed!");

        //call
        //internal transactions explained: https://cryptoapis.io/blog/42-internal-transactions-in-ethereum-know-them-and-solve-them#:~:text=Unlike%20standard%20transactions%2C%20internal%20transactions,isn't%20seen%20very%20often.
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Calling failed!");
    }

    modifier onlyOwner {
        // require(msg.sender == i_owner, "Only owner can execute");
        if(msg.sender != i_owner) { revert NotOwner(); }
        _;
    }

    //If someone send this smart contract ETH directly
    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }
}

/*
1. enum
2. events
3. Try / Catch
4. Functions Selectors
5. abi encode / decode
6. Hashing
7. Yul / Assembly
*/