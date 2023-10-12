const express = require("express");
const headRouter = express.Router();
const { details,getUserDetails} = require("../controllers/headController");

headRouter.post("/b", details);
headRouter.get("/getheaddetails", getUserDetails);

module.exports = headRouter;
