const accountService = require("../services/accountService");

exports.openAccount = async (req, res) => {
  try {
    const accountId = await accountService.openAccount();
    res.status(201).json({ accountId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deposit = async (req, res) => {
  try {
    const { accountId } = req.params;
    const { amount } = req.body;

    const txId = await accountService.deposit(accountId, amount);
    res.status(200).json({ txId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.withdraw = async (req, res) => {
  try {
    const { accountId } = req.params;
    const { amount } = req.body;

    const txId = await accountService.withdraw(accountId, amount);
    res.status(200).json({ txId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBalance = async (req, res) => {
  try {
    const { accountId } = req.params;
    const balance = await accountService.getBalance(accountId);
    res.status(200).json({ balance });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
