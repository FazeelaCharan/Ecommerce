const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "please enter your name"] },

  email: {
    type: String,
    required: [true, "please enter your email"],

    // unique: [true, "name already exists!"],
  },
  password: {
    type: String,
    required: [true, "please enter a Password"],
    minLength: [4, "password must be at least 4 characters"],
    select: false,
  },
  phoneNumber: {
    type: Number,
    required: [true, "please enter a valid phone number"],
  },
  role: {
    type: String, //user,seller,admin
    default: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});
userSchema.pre("save", async function () {
  if (!this.isModified) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12); //this function will create in update and create
});
module.exports = mongoose.model("User", userSchema);
