const express = require("express");
const router = express.Router();
const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const User = require("../models/User");

// Protected route: only logged-in users can access
router.get("/users", protect, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// Admin-only route: only users with role "admin" can access
router.get("/admin/users", protect, authorizeRoles("admin"), async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json({
      admin: req.user.name,
      users
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

module.exports = router;
