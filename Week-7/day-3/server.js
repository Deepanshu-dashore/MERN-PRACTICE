try {
  require("dotenv").config();
} catch (e) {}

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/auth_db";

app.use(express.json());

// Routes
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Week 7 Day 3: User Login & JWT Token Generation API Running");
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
