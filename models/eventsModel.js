const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    event_id:{
        type: String,
        required: true,
    },
    event_name:{
        type: String,
        required: true,
    },
    event_description:{
        type: String,
        required: true,
    },
    event_poster:{
        type:String,
        required:true,
    },
    fees1:{
        type:BigInt,
        required:true,
    }
    }

);
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
