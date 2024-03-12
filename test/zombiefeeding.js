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
