const mongoose = require("mongoose");
const registrationSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  team_name: {
    type: String,
    required: true,
  },
  team_members: {
    type: [String],
    required: true,
    default: [],
  },
  event_id: {
    type: String,
    required: true,
  },
  event_order_id: {
    type: String,
    required: true,
  },
});

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;
