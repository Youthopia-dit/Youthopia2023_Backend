const User=require("../models/profileModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    password,
    college,
    year,
    participant_identity,
    participant_identity_number,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "user already exists", success: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      password: hashedPassword,
      college: college,
      year: year,
      participant_identity: participant_identity,
      participant_identity_number: participant_identity_number,
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
  const { email, password } = req.body;

  try {
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

module.exports = {
  login,
  register,
};