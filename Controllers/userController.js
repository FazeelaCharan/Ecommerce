const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../Utils/ErrorHandler");

exports.createUser = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const userMail = await User.findOne({ email });
  if (userMail) {
    const msg = "user already exist";
    res.status(403).json({ success: false, msg });
    return next(new ErrorHandler("user already exist", 400));
  }
  const data = await User.create(req.body);

  res.status(201).json({ success: true, data });
});
exports.getUser = catchAsyncErrors(async (req, res) => {
  // console.log(req);
  const result = await User.find();
  res.send(result);
});
