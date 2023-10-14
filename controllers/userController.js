const heads = require("../models/headModel");

const registeruser = async (req, res) => {
    const { user_id, team_name, team_members, event_id } = req.body;
     try {
    const existingUser = await heads.findOne({ user_id: user_id });
    if (!existingUser) {
      res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }

    const newDetail = new heads({
      user_id: user_id,
      team_name: team_name,
      team_members: team_members,
      event_id: event_id,
      event_order_id: "dummy",
    });

    await newDetail.save();
    res.status(200).json({
      detail: newDetail,
      message: "Registered successfully",
    });
     }

     catch(err)  {
        console.log(err)
     }
    }

module.export={registeruser}