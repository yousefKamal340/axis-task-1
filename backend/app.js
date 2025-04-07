const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./models/database");
const accountRoutes = require("./routes/accountRoutes");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/accounts", accountRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
