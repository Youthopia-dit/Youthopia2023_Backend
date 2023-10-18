const events=require("../models/eventsModel");
const eventdetails = async (req, res) => {
  const {
    event_id,
    event_name,
    event_description,
    event_poster,
    fees1,
    fees2,
    fees3,
    venue,
    date,
    start_time,
    end_time,
    coordinator,
    rules,
    bots,
    club_name,
    overall_head,
    participant_max,
    participant_min,
    category,
  } = req.body;
  try {
    const newDetail = new events({
      event_id,
      event_name,
      event_description,
      event_poster,
      fees1,
      fees2,
      fees3,
      venue,
      date,
      start_time,
      end_time,
      coordinator,
      rules,
      bots,
      club_name,
      overall_head,
      participant_max,
      participant_min,
      category,
    });
    await newDetail.save();
    res
      .status(200)
      .json({ detail: newDetail, message: "Details saved successfully" });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
const getEventDetails = async (req, res) => {
  try {
    const details = await events.find();
    res.status(200).json({ details });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const getEventDetailsbyId = async (req, res) => {
  try {
    const { id } = req.body;
    const details = await events.find({ event_id: id });
    console.log(details);
    res.status(200).json({ details });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  } 
}

const getEventDetailsByDate = async (req, res) => {
  try {
    const {date} = req.body;
    if(date.includes("-")){
      const newdate=date.split("-")[0]; 
      const details = await events.find({ date: newdate });
      res.status(200).json({ details });
    }
    else{
      const details = await events.find({ date: date });
      res.status(200).json({ details });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}
module.exports = { eventdetails,getEventDetails, getEventDetailsByDate, getEventDetailsbyId };