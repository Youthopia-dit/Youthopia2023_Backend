const express = require("express");
const userRouter = express.Router();
const { registeruser, getRegisteredUsers } = require("../controllers/userController");
const authenticateToken = require("../Middleware/authenticateToken");

userRouter.post("/registeruser", authenticateToken , registeruser);
userRouter.get("/getregisteruser", authenticateToken , getRegisteredUsers);

module.exports = userRouter;
