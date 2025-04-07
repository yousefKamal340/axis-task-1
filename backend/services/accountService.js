const { v4: uuidv4 } = require("uuid");
const Account = require("../models/accountModel"); // Import the Account model

// Open account (Create a new account)
exports.openAccount = async () => {
  try {
    const account = new Account({ balance: 0, transactions: [] });
    await account.save();
    return account._id; // Return the account's MongoDB ObjectId
  } catch (error) {
    console.error("Error opening account:", error);
    throw new Error("Could not create account");
  }
};

// Deposit funds
exports.deposit = async (accountId, amount) => {
  try {
    if (amount <= 0) throw new Error("Invalid amount");

    const account = await Account.findById(accountId);
    if (!account) throw new Error("Account not found");

    const txId = uuidv4(); // Generate a transaction ID
    account.balance += amount; // Update balance
    account.transactions.push({ txId, type: "deposit", amount }); // Add transaction

    await account.save(); // Save the updated account

    return txId;
  } catch (error) {
    console.error("Error depositing funds:", error);
    throw new Error("Could not deposit funds");
  }
};

// Withdraw funds
exports.withdraw = async (accountId, amount) => {
  try {
    if (amount <= 0) throw new Error("Invalid amount");

    const account = await Account.findById(accountId);
    if (!account) throw new Error("Account not found");
    if (account.balance < amount) throw new Error("Insufficient funds");

    const txId = uuidv4(); // Generate a transaction ID
    account.balance -= amount; // Update balance
    account.transactions.push({ txId, type: "withdraw", amount }); // Add transaction

    await account.save(); // Save the updated account

    return txId;
  } catch (error) {
    console.error("Error withdrawing funds:", error);
    throw new Error("Could not withdraw funds");
  }
};

// Get account balance
exports.getBalance = async (accountId) => {
  try {
    const account = await Account.findById(accountId);
    if (!account) throw new Error("Account not found");

    return account.balance;
  } catch (error) {
    console.error("Error getting balance:", error);
    throw new Error("Could not retrieve balance");
  }
};
