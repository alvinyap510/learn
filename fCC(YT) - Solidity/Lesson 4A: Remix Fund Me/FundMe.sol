//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256; //Explanation on using: https://medium.com/coinmonks/soliditys-using-keyword-c05c18aaa088

    uint256 public minimumUSD = 10 * 1e18;
    address[] public fundersArray;
    mapping(address => uint256) public addressToAmountFunded;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function fund() public payable {
        require(msg.value.getConversionRate() >= minimumUSD, "Not enough eth");
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
        require(msg.sender == owner, "Only owner can execute");
        _;
    }
}