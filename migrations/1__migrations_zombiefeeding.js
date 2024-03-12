const SimpleStorage = artifacts.require("zombiefeeding.sol");
const SimpleStorages = artifacts.require("zombiefactory.sol");
const simple = artifacts.require('simpleStorage.sol');

module.exports = function (deployer){
  deployer.deploy(SimpleStorages);
  deployer.deploy(SimpleStorage);
  deployer.deploy(simple);
}