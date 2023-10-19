const User = require("../models/profileModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phonenumber,
      password,
      college,
      year,
      identityNumber,
      photo,
    } = req.body.data;
    console.log(req.body);
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "user already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({
      firstname: firstName,
      lastname: lastName,
      email: email,
      phonenumber: phonenumber,
      password: hashedPassword,
      college: college,
      year: year,
      participant_identity_number: identityNumber,
      participant_identity: photo,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(201).json({
      user: result,
      token: token,
      message: "User created successfully",
      success: true,
      email: email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server error", success: false });
  }
};

const login = async (req, res) => {


  try {
      const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email", success: false });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Invalid password", success: false });
    }
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      message: "Login successful",
      user: user,
      token: token,
      email: email,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong server error", success: false });
  }
};
const resetPassword = async (req, res) => {
  try {
    const { email, password, newpassword } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    const verified = await bcrypt.compare(password, user.password);
    if (verified) {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(newpassword, salt);
      await User.findByIdAndUpdate(
        user._id,
        { password: hashed },
        { new: true }
      );
      res
        .status(200)
        .json({ success: true, message: "Password Changed Successfully" });
    } else {
      throw new Error({ message: "Wrong Password", success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Worng Credentials", success: false });
  }
};

module.exports = {
  login,
  register,
  resetPassword,
};
