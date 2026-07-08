const { ethers } = require("ethers");
async function main() {
    const provider = new ethers.JsonRpcProvider("https://rpc.testnet.arc.network");
    const wallet = new ethers.Wallet("0x44e69e94f14c60ba75dbc5bfc2fd9952d0236c0ec9ad474e8c9670a6d8696185", provider);

    const abi = [{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increment","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const bytecode = "0x6080604052348015600f57600080fd5b5060a48061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806306661abd14602d578063d09de08a14604b575b600080fd5b60336067565b604051604291906087565b60405180910390f35b6065606d565b005b60005481565b600080546001019055565b600081905091905056fea2646970667358221220a22f30b91e92d7747fae30a586a117b34b172a6e9a6f1947e923e690f0559e3564736f6c63430008140033";

    console.log("Deploying...");
    const factory = new ethers.ContractFactory(abi, bytecode, wallet);
    const contract = await factory.deploy();
    await contract.waitForDeployment();
    console.log("Success! Address:", await contract.getAddress());
}
main().catch(console.error);
