<!-- @format -->

# 🚀 Smart Account Example with Alchemy and Sepolia

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![Sepolia Network](https://img.shields.io/badge/Network-Sepolia-orange)](https://sepolia.etherscan.io/)

This project demonstrates how to create a **smart account** using Alchemy on the **Sepolia testnet** and perform a transaction to transfer 1000 wei to another wallet.

---

## 📖 What is a Smart Account?

### 🔍 Definition

A **Smart Account** is a programmable account managed via a smart contract on the blockchain. Unlike traditional externally owned accounts (EOAs), smart accounts enable advanced features like:

- Meta-transactions (gasless transactions)
- Account abstraction
- Multi-signature support
- Session keys

Smart accounts are essential in modern decentralized applications (dApps) to improve user experience and security.

---

<br>

## ❓ Why Do We Need Smart Accounts?

✅ To sign and send transactions programmatically (without requiring a user's wallet every time).  
✅ To implement custom business logic (e.g., automatic payments, custom permissions).  
✅ To enable advanced features like batched transactions, gasless transactions, or social login.  
✅ To improve automation and developer flexibility in dApps.

---

<br>

## 🔗 Where and How Are Smart Accounts Used?

- Gasless transactions in dApps
- Seamless onboarding in gaming
- Permission management in DeFi protocols
- Automation and governance in DAOs

---

<br>

## 📝 What Does This Project Do?

### 🛠️ Purpose

This project:

1. Creates a **smart account client** using the Alchemy SDK on the Sepolia testnet.
2. Configures the signer using environment variables (API key and Private Key).
3. Prints the smart account’s address to the console.
4. Sends a user operation (transaction) transferring 1000 wei to a target wallet.
5. Prints the transaction hash and Etherscan link to the console.

### ⚙️ How It Works

- The Alchemy SDK (`createModularAccountAlchemyClient`) creates the smart account client.
- The `LocalAccountSigner` converts the private key into a signer that can sign user operations.
- The transaction is sent using the `sendUserOperation` method.
- The script waits for the transaction confirmation and prints its hash and Etherscan link.

---

<br>

## 🛠️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/prashantyadav008/ERC-4337-Smart-Wallet.git
cd ERC-4337-Smart-Wallet.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a .env File

In the root directory, create a file named .env and add your API keys:

```bash
ALCHEMY_API_KEY=your-alchemy-api-key
PRIVATE_KEY=your-wallet-private-key
```

---

<br>

## 🔑 How to Get Environment Variables

### 1️⃣ How to Get ALCHEMY_API_KEY

- Step 1: Sign up or log in to the Alchemy Dashboard.

- Step 2: Click on "Create App" and select the Sepolia network.

- Step 3: After creating the app, click "View Key" to copy the HTTP API Key.

- Step 4: Paste this key into your .env file like this:

  ```bash
  ALCHEMY_API_KEY=your-alchemy-api-key
  ```

### 2️⃣ How to Get `PRIVATE_KEY`

- Step 1: Open your wallet (e.g., MetaMask).

- Step 2: Export the Private Key from your account settings.

- Step 3: Paste this private key into your .env file like this:

  ```bash
  PRIVATE_KEY=your-wallet-private-key
  ```

  ⚠️ Important: Never share your private key publicly. Always use test accounts for learning purposes.

---

<br>

## 🚀 How to Run the Script

Run the Command

```bash
node createSmartAccount.js
```

Expected console output:

```bash
Smart Account Address --->> 0xYourSmartAccountAddress

************************************* Send Transaction *************************************

Transaction hash Detail --->>  0xYourUserOperationHash

tx hash --->> 0xYourTransactionHash
View tx on Explorer --->> https://sepolia.etherscan.io/tx/0xYourTransactionHash
```

## 📸 Sample Output Screenshot

![Expected Output Screenshot](https://github.com/prashantyadav008/ERC-4337-Smart-Wallet/blob/main/Expected_Output.png)

---

## 🔎 Check Out the Transaction on Sepolia Explorer

👉 [Click here to view the transaction](https://sepolia.etherscan.io/tx/0xa2834b643d798e7fc23bedd015b392c9926fcca7c22ea947ebd4341046041d30)

---

---

<br>

## 📝 Important Note on Running the Script

When you first run the script, it performs the following steps:

1️⃣ It **creates a smart account** using the provided private key.  
2️⃣ It **prints the smart account address** to the console.

⚠️ However, at this point, the newly created smart account does not have any funds (ETH) to pay for transaction fees.  
That means if you immediately try to execute a transaction, it will fail due to insufficient balance.

---

## 🪙 Funding Your Smart Account

👉 **Step 1:** Note the smart account address from the console output (e.g., `0xYourSmartAccountAddress`).  
👉 **Step 2:** Send some Sepolia ETH to this address using a faucet or another wallet.  
👉 **Step 3:** Wait for the transaction to be confirmed on the Sepolia network.

---

## 🔁 Running the Script Again

After funding the smart account:

#### 1. Run the script again:

```bash
node createSmartAccount.js
```

#### 2. This time, the smart account will have enough ETH to pay for transaction fees and can successfully execute the user operation to transfer 1000 wei to the target wallet.

---

<br>

## 🔒 Smart Account and Private Key Relationship

The smart account address is derived from the **EOA (Externally Owned Account) private key** you use.

This means:

- Every time you use the same private key to initialize the smart account, **the smart account address will remain the same.**
- This ensures that you can always fund and use the same smart account for transactions.

---

## 🔑 Why the Script Might Fail on the First Run

If you run the script **before funding the smart account**:

- The script will print the smart account address but will throw an error when trying to execute the transaction.
- This is because the smart account needs ETH to pay for gas fees (even on testnets like Sepolia).

After funding the account and re-running the script, everything should work properly!

---

<br>

### ⚠️ Notes

- This project is for educational purposes only don't transfer more fund into Smart Wallet account.

- Do not commit your .env file or private key to any public repository.

- Always use testnets for experimentation; thoroughly test before deploying to mainnet.
