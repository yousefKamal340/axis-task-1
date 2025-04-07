import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Balance = ({ onCheck }) => {
  const [accountId, setAccountId] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCheck = async () => {
    const bal = await onCheck(accountId);
    setBalance(bal);
  };

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", my: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Check Balance
        </Typography>
        <TextField
          fullWidth
          label="Account ID"
          variant="outlined"
          margin="normal"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />
        <Button fullWidth variant="contained" onClick={handleCheck}>
          Check Balance
        </Button>
        {balance !== null && (
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Balance: ${balance}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Balance;
