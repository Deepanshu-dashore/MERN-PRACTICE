const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"]
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [16, "Age must be at least 16"],
      max: [70, "Age cannot exceed 70"]
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      enum: ["Computer Science", "Information Technology", "Management", "Agriculture", "Civil Engineering", "Mechanical Engineering"],
      default: "Computer Science"
    },
    gpa: {
      type: Number,
      min: [0, "GPA cannot be less than 0"],
      max: [10, "GPA cannot exceed 10"],
      default: 0
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
