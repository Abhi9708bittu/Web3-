// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title Web3Fusion
 * @notice Minimal and gas-efficient smart contract for demonstration.
 */

contract Web3Fusion {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Minimal setter/getter example
    string private data;

    function setData(string calldata _data) external {
        require(msg.sender == owner, "Only owner");
        data = _data;
    }

    function getData() external view returns (string memory) {
        return data;
    }
}
