const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student name is required"],
    trim: true
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [5, "Age must be at least 5"],
    max: [80, "Age cannot exceed 80"]
  },
  department: {
    type: String,
    default: "General",
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Student", studentSchema);
