const heads = require("../models/headModel");
const details = async (req, res) => {
  try {
    const newDetail = new heads({
      name: "dummy",
      designation: "dummy",
      image: "dummy",
      index: 1,
    });
    await newDetail.save();
    res
      .status(200)
      .json({ detail: newDetail, message: "Details saved successfully" });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
const getUserDetails = async (req, res) => {
  try {
    const details = await heads.find();
    res.status(200).json({ details });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
module.exports = { details,getUserDetails };
