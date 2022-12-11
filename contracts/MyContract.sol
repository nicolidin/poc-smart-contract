// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract MyContract {
    uint storedData;
    event LogMessage(string message);

    function myFunction() public {
        emit LogMessage("Hello, world!");
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData + 10;
    }
}
