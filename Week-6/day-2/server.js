try {
  require("dotenv").config();
} catch (e) {
  // dotenv optional in some testing environments
}

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/internship_db";

app.use(express.json());

// Connection event listeners
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB cluster successfully.");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB.");
});

// Async DB Connection function
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully to:", MONGO_URI);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
};

connectDB();

// Test Route
app.get("/ping", (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  res.json({
    status: "ok",
    server: "running",
    database: isDbConnected ? "connected" : "connecting/disconnected",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
