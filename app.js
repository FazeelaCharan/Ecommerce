const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const username = require("./routes/userRoute");

const app = express();

app.use(express.json());

app.use("/api/v1", username);
module.exports = app;
