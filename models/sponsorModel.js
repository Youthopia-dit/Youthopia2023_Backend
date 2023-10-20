const mongoose = require("mongoose");
const sponsorSchema = new mongoose.Schema({
    sponser_img: {
        type: [String],
        required: true,
    },
    carousel_img:{
        type:[String],
        required:true,
    },
    featured_event:{
        type:[String],
        required:false,
    }
});
const Sponsors = mongoose.model("Sponsers", sponsorSchema);
module.exports = Sponsors;