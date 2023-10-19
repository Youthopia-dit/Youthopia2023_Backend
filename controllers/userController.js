const user = require("../models/registrationModel");
const profile = require("../models/profileModel");

const registeruser = async (req, res) => {
  try {
    const { teamName, mem, phone, eventID } = req.body.data;
    const user_id = req.userId;
    console.log(user_id);

    const newDetail = new user({
      user_id: user_id.id,
      team_name: teamName,
      team_members: mem,
      event_id: eventID,
      event_order_id: "dummy",
      phone: phone,
    });

    await newDetail.save();
    res.status(200).json({
      detail: newDetail,
      message: "Registered successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

const getRegisteredUsers = async (req, res) => {
  try {
    const user_id = req.userId;
    const details = await user.find({ user_id: user_id.id });
    res.status(200).json({ details });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user_id = req.userId;
    const details = await profile.find({ _id: user_id.id });
    res.status(200).json({ details });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = { registeruser, getRegisteredUsers, getUser };
