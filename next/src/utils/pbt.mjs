import { execHaloCmdWeb } from "@arx-research/libhalo/api/web.js";
import { Web3 } from "web3";

const getInfoToSign = async () => {
  var web3Provider = new Web3.providers.HttpProvider(
    "https://testnet.hashio.io/api"
  );
  const web3Instance = new Web3(web3Provider);
  const account = web3Instance.eth.accounts.wallet.add(
    "0x2e7dcddaa71bf5e7c56faa18777cb3f2ce7b5e1a9018b6083cdc9c57dceb1465"
  );

  const latestBlockNumber = await web3Instance.eth.getBlockNumber();
  const block = await web3Instance.eth.getBlock(latestBlockNumber);

  return {
    addr: account[0].address,
    recentBlockHash: block.hash,
  };
};

const generateSignature = async (addr, blockHash) => {
  var web3Provider = new Web3.providers.HttpProvider(
    "https://testnet.hashio.io/api"
    // process.env.RPC_URL
  );
  const web3Instance = new Web3(web3Provider);
  const messageHash = web3Instance.utils.keccak256(
    web3Instance.utils.encodePacked(
      { value: addr, type: "address" },
      { value: blockHash, type: "bytes" }
    )
  );
  const signature = (
    await execHaloCmdWeb({
      name: "sign",
      message: messageHash,
      keyNo: 1,
    })
  ).signature.ether;
  alert(signature);
  return signature;
};

export { getInfoToSign, generateSignature };
