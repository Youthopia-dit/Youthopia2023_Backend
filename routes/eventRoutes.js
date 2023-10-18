const express = require("express");
const eventRouter = express.Router();
const {
  eventdetails,
  getEventDetails,
  getEventDetailsByDate,
  getEventDetailsbyId,
} = require("../controllers/eventController");

eventRouter.post("/eventdetails", eventdetails);
eventRouter.get("/geteventdetails", getEventDetails);
eventRouter.post("/geteventdetailsbydate", getEventDetailsByDate);
eventRouter.post("/geteventdetailsbyid", getEventDetailsbyId);

module.exports = eventRouter;
