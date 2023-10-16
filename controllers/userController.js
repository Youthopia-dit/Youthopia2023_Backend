const user = require("../models/registrationModel");

const registeruser = async (req, res) => {
  const { teamName, mem, phone, eventID } = req.body.data;
  try {
    const user_id = req.userId;
    console.log(user_id);

    const newDetail = new user({
      user_id: user_id.id,
      team_name: teamName,
      team_members: mem,
      event_id: eventID,
      event_order_id: "dummy",
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

module.exports = { registeruser };
