const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FirstSchema = new Schema({
  first_question: {
    type: String,
    required: true
  },
  second_question: {
    type: String,
    required: true
  },
  third_question: {
    type: String,
    required: true
  },
  forth_question: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("first_steps", FirstSchema);
