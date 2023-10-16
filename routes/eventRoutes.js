const express = require("express");
const eventRouter = express.Router();
const {
  eventdetails,
  getEventDetails,
  getEventDetailsByDate
} = require("../controllers/eventController");

eventRouter.post("/eventdetails", eventdetails);
eventRouter.get("/geteventdetails", getEventDetails);
eventRouter.post("/geteventdetailsbydate", getEventDetailsByDate);

module.exports = eventRouter;
