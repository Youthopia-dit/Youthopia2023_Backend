const express = require("express");
const userRouter = express.Router();
const { registeruser } = require("../controllers/userController");
const authenticateToken = require("../Middleware/authenticateToken");

userRouter.post("/registeruser", authenticateToken , registeruser);

module.exports = userRouter;
