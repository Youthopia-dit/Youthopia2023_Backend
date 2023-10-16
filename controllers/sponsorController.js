const sponsor = require("../models/sponsorModel");
const getlandingpagedata = async (req, res) => {
    try {
        const details = await sponsor.find();
        res.status(200).json({ details });
    } catch (err) {
        res.status(400).json({
        status: "fail",
        message: err,
        });
    }
}
module.exports = { getlandingpagedata };