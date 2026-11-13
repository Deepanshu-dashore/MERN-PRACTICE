try {
  require("dotenv").config();
} catch (e) {}

const express = require("express");
const mongoose = require("mongoose");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/university_db";

// Built-in & Custom Middlewares
app.use(express.json());
app.use(logger);

// Mount Routes
app.use("/api/students", studentRoutes);

// Base route
app.get("/", (req, res) => {
  res.send("Week 6 Day 3: Mongoose Schemas & CRUD API Running");
});

// Connect DB & start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB database successfully.");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

module.exports = app;
