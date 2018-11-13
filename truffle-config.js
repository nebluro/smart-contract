require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8080,
      network_id: "*" 
    },
    coverage: {
      host: "localhost",
      network_id: "*", // eslint-disable-line camelcase
      port: 8080,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    testrpc: {
      host: "localhost",
      port: 8081,
      network_id: "*" // eslint-disable-line camelcase
    },
    ganache: {
      host: "localhost",
      port: 8081,
      network_id: "*" // eslint-disable-line camelcase
    }
  }
};
