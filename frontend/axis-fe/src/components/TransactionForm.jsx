import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const TransactionForm = ({ onSubmit }) => {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("deposit");

  const handleSubmit = () => {
    onSubmit({ accountId, amount: parseFloat(amount), type });
  };

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", my: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Make a Transaction
        </Typography>
        <TextField
          fullWidth
          label="Account ID"
          variant="outlined"
          margin="normal"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />
        <TextField
          fullWidth
          label="Amount"
          type="number"
          variant="outlined"
          margin="normal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <ToggleButtonGroup
          fullWidth
          value={type}
          exclusive
          onChange={(e, val) => val && setType(val)}
          sx={{ my: 2 }}
        >
          <ToggleButton value="deposit">Deposit</ToggleButton>
          <ToggleButton value="withdraw">Withdraw</ToggleButton>
        </ToggleButtonGroup>
        <Button fullWidth variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransactionForm;
