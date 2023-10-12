const express = require("express");
const authRouter = express.Router();
const {
  login,
  register,
  resetPassword
} = require("../controllers/authController");

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/resetpassword", resetPassword);



module.exports = authRouter;
