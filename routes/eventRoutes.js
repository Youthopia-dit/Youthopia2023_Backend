const express = require("express");
const eventRouter = express.Router();
const {
  eventdetails,
  getEventDetails,
} = require("../controllers/eventController");

eventRouter.post("/eventdetails", eventdetails);
eventRouter.get("/geteventdetails", getEventDetails);

module.exports = eventRouter;
