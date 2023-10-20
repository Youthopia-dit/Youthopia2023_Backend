const express = require("express");
const userRouter = express.Router();
const {
  registeruser,
  getRegisteredUsers,
  getUser,
  getUserbyId
} = require("../controllers/userController");
const authenticateToken = require("../Middleware/authenticateToken");

userRouter.post("/registeruser", authenticateToken, registeruser);
userRouter.get("/getregisteruser", authenticateToken, getRegisteredUsers);
userRouter.get("/getuser", authenticateToken, getUser);
userRouter.get("/getuserbyid", getUserbyId)

module.exports = userRouter;
