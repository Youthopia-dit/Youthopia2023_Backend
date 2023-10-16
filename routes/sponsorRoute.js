
const express = require("express");
const sponsorRouter = express.Router();
const { getlandingpagedata } = require("../controllers/sponsorController");

sponsorRouter.get("/getlandingpagedetails", getlandingpagedata);

module.exports = sponsorRouter;
