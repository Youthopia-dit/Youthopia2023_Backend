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
});
const Sponsors = mongoose.model("Sponsers", sponsorSchema);
module.exports = Sponsors;