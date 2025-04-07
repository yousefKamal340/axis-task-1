import React from "react";
import { Container, Typography } from "@mui/material";
import AccountForm from "./components/AccountForm";
import TransactionForm from "./components/TransactionForm";
import Balance from "./components/Balance";
import axios from "axios";

const App = () => {
  const handleCreate = async () => {
    const res = await axios.post("http://localhost:5000/api/accounts/open");
    alert(`Account created! ID: ${res.data.accountId}`);
  };

  const handleTransaction = async ({ accountId, amount, type }) => {
    const res = await axios.post(
      `http://localhost:5000/api/accounts/${accountId}/${type}`,
      { amount }
    );
    console.log(res.data);
    alert(`Transaction complete! ID: ${res.data.txId}`);
  };

  const handleCheck = async (accountId) => {
    const res = await axios.get(
      `http://localhost:5000/api/accounts/${accountId}/balance`
    );
    return res.data.balance;
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        💰 Fintech Account Manager
      </Typography>
      <AccountForm onCreate={handleCreate} />
      <TransactionForm onSubmit={handleTransaction} />
      <Balance onCheck={handleCheck} />
    </Container>
  );
};
export default App;
