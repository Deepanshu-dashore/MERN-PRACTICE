try {
  require("dotenv").config();
} catch (e) {}

const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Body Parser Middleware
app.use(express.json());

// Mount API routes
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);

// Base Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Student Management API (Week 6 Day 6-7 Mini-Project)",
    endpoints: {
      students: "/api/students",
      courses: "/api/courses"
    }
  });
});

// Central 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Student Management API running on port ${PORT}`);
});

module.exports = app;
