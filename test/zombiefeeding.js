
const ganache = require('ganache');
const Web3 = require('web3');
const [web3, provider] = require('tronbox-web3')(new Web3(Web3.givenProvider), ganache.provider());
const SimpleStorage = artifacts.require("zombiefeeding.sol");

contract("zombiefeeding", (accounts) => {
  it("Should store and retrieve a value", async () => {
    const simpleStorageInstance = await SimpleStorage.new();

    await simpleStorageInstance.createRandomZombie("some body");

   simpleStorageInstance.NewZombie(function(error, result) {
        if (error) return
       console.log(result)
       assert(result);
      })
  });
});

        