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

console.log("Smart Account Address --->> ", alchemyAccountClient.getAddress());

console.log(
  "\n\n\n\n************************************* Send Transaction *************************************\n\n"
);

const hash = await alchemyAccountClient.sendUserOperation({
  uo: {
    target: "0x2d8f92fCDf196b683078d2a4b15879ed1b6479c3",
    data: "0x",
    value: 1000n,
  },
});

console.log("Transaction hash Detail --->> ", hash);

const tx = await alchemyAccountClient.waitForUserOperationTransaction(hash);
console.log("\n\ntx hash --->> ", tx);
console.log(
  "View tx on Explorer --->> ",
  `https://sepolia.etherscan.io/tx/${tx}`
);
