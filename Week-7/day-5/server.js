try {
  require("dotenv").config();
} catch (e) {}

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// 1. HTTP Security Headers with Helmet
app.use(helmet());

// 2. Cross-Origin Resource Sharing (CORS) Configuration
app.use(
  cors({
    origin: [FRONTEND_URL, "https://myapp.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// 3. Body Parser with Size Limiting
app.use(express.json({ limit: "10kb" }));

// 4. Rate Limiting Middleware (100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    status: 429,
    error: "Too many requests from this IP, please try again after 15 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false
});

app.use("/api", limiter);

// 5. Mount Routes
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Week 7 Day 5: Production Security Best Practices API Active");
});

// 6. Safe Central Error Handler (Avoids leaking stack traces or sensitive DB credentials)
app.use((err, req, res, next) => {
  console.error("Internal Error Log:", err.message);
  res.status(err.status || 500).json({
    error: "Internal Server Error"
  });
});

app.listen(PORT, () => {
  console.log(`Security-hardened server running on port ${PORT}`);
});

module.exports = app;
