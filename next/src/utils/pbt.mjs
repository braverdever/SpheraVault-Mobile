import { execHaloCmdWeb } from "@arx-research/libhalo/api/web.js";
import { Web3 } from "web3";

const generateSignature = async (messageHash) => {
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

const imitateSignature = (messageHash) => {
  var web3Provider = new Web3.providers.HttpProvider(
    "https://testnet.hashio.io/api"
  );
  const web3Instance = new Web3(web3Provider);
  const signer = web3Instance.eth.accounts.sign(
    messageHash,
    "0x865aba28f210f192e60bca223b3467e6a59f842da17f1ebfadb4787f611542d0"
  );
  alert(signer.signature);
  return signature;
};

export { generateSignature, imitateSignature };
