module.exports = {
  // contracts_build_directory: "./contracts",
  compilers: {
      solc: {
          version: "0.8.0"
      }
  },
  networks: {
      newNetwork: {
      host: "127.0.0.1",
      port: 7546,
      network_id: 502,
    }
  }
};
