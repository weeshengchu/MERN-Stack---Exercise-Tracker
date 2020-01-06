//5. similar template from user.model.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//5 information that we are going to store
const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
