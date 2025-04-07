const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    txId: { type: String, required: true },
    type: { type: String, enum: ["deposit", "withdraw"], required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

const accountSchema = new mongoose.Schema({
  balance: { type: Number, default: 0 },
  transactions: [transactionSchema], // Embedding transaction schema
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
