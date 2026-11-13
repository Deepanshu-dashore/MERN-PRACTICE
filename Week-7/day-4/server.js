try {
  require("dotenv").config();
} catch (e) {}

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/auth_db";

app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Week 7 Day 4: Protected Routes & Auth Middleware API Running");
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
