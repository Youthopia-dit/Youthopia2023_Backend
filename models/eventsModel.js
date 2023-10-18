const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event_id: {
    type: String,
    required: true,
  },
  event_name: {
    type: String,
    required: true,
  },
  event_description: {
    type: String,
    required: true,
  },
  event_poster: {
    type: String,
    required: true,
  },
  fees1: {
    type: String,
    required: true,
  },
  fees2: {
    type: String,
    required: false,
  },
  fees3: {
    type: String,
    required: false,
  },
  feesnondit1: {
    type: Number,
    required: true,
  },
  feesnondit2: {
    type: Number,
    required: false,
  },
  feesnondit3: {
    type: Number,
    required: false,
  },
  venue: {
    type: String,
    required: true,
  },
  date: {
    type: String, // You may want to consider using Date type for dates
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  coordinator: {
    type: {}, // Array of strings
    required: true,
  },
  rules: {
    type: [String],
    required: true,
  },
  bots: {
    type: [String],
    required: false,
  },
  club_name: {
    type: String,
    required: true,
  },
  overall_head: {
    type: {},
    required: true,
  },
  participant_max: {
    type: Number,
    required: true,
  },
  participant_min: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
