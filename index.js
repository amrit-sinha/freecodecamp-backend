const express = require("express");
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const authRouter = require("./src/routes/authRouter");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

app.use(helmet());
app.use(
  cors({
    origin: process.env.DASHBOARD,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
