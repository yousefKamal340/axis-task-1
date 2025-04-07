import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const AccountForm = ({ onCreate }) => {
  return (
    <Card sx={{ maxWidth: 400, mx: "auto", my: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Open New Account
        </Typography>
        <Button fullWidth variant="contained" onClick={onCreate}>
          Create Account
        </Button>
      </CardContent>
    </Card>
  );
};
export default AccountForm;
