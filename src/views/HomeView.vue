<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{toto}}
    <v-btn class="toto" @click="upgradeToto" color="toto"> upgradeToto </v-btn>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Web3 from 'web3';

const provider = window.ethereum;

// Connect to the Ethereum network using the MetaMask provider
const web3Account = new Web3(provider);

// Request access to the user's accounts
await provider.enable();

// Get the user's accounts
const accounts = await web3Account.eth.getAccounts();

// Use the first account as the default account
const defaultAccount = accounts[0];
console.log('accounts: ', accounts)
console.log('default accounts: ', defaultAccount)
// Create a new instance of web3, connected to the local node
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7546'));
// Set the contract address and ABI
const contractAddress = '0x1F0360117111Bc0146a7f17b3cf991EC2b583614';
const contractABI: any = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      }
    ],
    "name": "LogMessage",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "myFunction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
      }
    ],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]

// Create an instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call a function on the contract
contract.methods.set(32).call({from: defaultAccount}, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result); // Outputs the result of the method call
  }
});
contract.methods.set(32).call().then(function(result) {
  console.log("result: ", result)
  // Do something with the result
});
contract.methods.get().call().then(function(result) {
  console.log("result: ", result)
  // Do something with the result
});
console.log(contract)

contract.methods.myFunction().call().then(function(result) {
  console.log("result: ", result)
  // Do something with the result
});
const toto = ref(1);

function upgradeToto() {
  toto.value += 1;
}
</script>

<style lang="scss" scoped>
.toto {
  border-radius: 40px
}
</style>
