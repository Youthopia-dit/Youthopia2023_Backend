
const user=require("../models/registrationModel")

const registeruser = async (req, res) => {
    const {team_name, team_members, event_id } = req.body;
     try {
      const user_id = req.userId;
      console.log(user_id);

    const newDetail = new user({
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

module.exports={registeruser}