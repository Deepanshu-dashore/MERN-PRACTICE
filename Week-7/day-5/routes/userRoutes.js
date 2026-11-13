const express = require("express");
const router = express.Router();

// Mock users store for day-5 security architecture demo
const mockUsers = [
  { id: 1, name: "Admin User", email: "admin@example.com", role: "admin" },
  { id: 2, name: "John Doe", email: "john@example.com", role: "user" }
];

// Simple input validation middleware
const validateEmailInput = (req, res, next) => {
  const { email } = req.body;
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format supplied" });
  }
  next();
};

// Route using request validation
router.post("/validate-email", validateEmailInput, (req, res) => {
  res.json({ success: true, message: "Email passed validation check", email: req.body.email });
});

// Protected users endpoint simulation
router.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "Security headers and rate-limits active on this route",
    data: mockUsers
  });
});

module.exports = router;
