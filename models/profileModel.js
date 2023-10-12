const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  registered_events: {
    type: [String],
    default: [], 
  },
  password: {
    type: String,
    required: true,
  },
  participant_identity:{
    type: String,
    required: false,
  },
  participant_identity_number:{
    type:String,
    required:false,
  }
  
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
