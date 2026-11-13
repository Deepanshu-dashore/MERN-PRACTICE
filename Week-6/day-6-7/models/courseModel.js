const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true
    },
    code: {
      type: String,
      required: [true, "Course code is required"],
      unique: true,
      uppercase: true,
      trim: true
    },
    credits: {
      type: Number,
      required: [true, "Credits are required"],
      min: [1, "Credits must be at least 1"]
    },
    instructor: {
      type: String,
      required: [true, "Instructor name is required"],
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
