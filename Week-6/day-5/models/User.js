const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address"
    ]
  },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    validate: {
      validator: function (v) {
        // 10 digit phone number starting with 6, 7, 8, or 9
        return /^[6-9]\d{9}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid 10-digit mobile number!`
    }
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin", "vendor"],
      message: "{VALUE} is not a valid user role"
    },
    default: "user"
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (v) {
        // At least 6 characters and at least one digit
        return v && v.length >= 6 && /\d/.test(v);
      },
      message: "Password must be at least 6 characters long and contain at least one digit"
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
