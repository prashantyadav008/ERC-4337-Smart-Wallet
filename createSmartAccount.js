/** @format */
import "dotenv/config";
import { createModularAccountAlchemyClient } from "@account-kit/smart-contracts";
import { sepolia, alchemy } from "@account-kit/infra";
import { LocalAccountSigner } from "@aa-sdk/core";

const alchemyAccountClient = await createModularAccountAlchemyClient({
  transport: alchemy({ apiKey: process.env.ALCHEMY_API_KEY }),
  chain: sepolia,
  signer: LocalAccountSigner.privateKeyToAccountSigner(process.env.PRIVATE_KEY),
});

console.log("Account Address --->> ", alchemyAccountClient.getAddress());

const hash = await alchemyAccountClient.sendUserOperation({
  uo: {
    target: "0x2d8f92fCDf196b683078d2a4b15879ed1b6479c3",
    data: "0x",
    value: 1000n,
  },
});

console.log("hash --->> ", hash);

const tx = await alchemyAccountClient.waitForUserOperationTransaction(hash);
console.log("tx --->> ", tx);
console.log("tx --->> ", `https://sepolia.etherscan.io/tx/${tx}`);
