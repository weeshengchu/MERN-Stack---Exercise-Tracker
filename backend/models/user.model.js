//4. mongoose and schema (similar template for exercise.model.js)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//4. Validation for User
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
