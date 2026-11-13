const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Authentication Middleware: Verifies JWT token and attaches user
exports.protect = async (req, res, next) => {
  try {
    let token;

    // Check if Authorization header exists with Bearer schema
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ error: "Not authorized, token missing" });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "supersecretkey123"
    );

    // Attach user to request (excluding password)
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ error: "User no longer exists" });
    }

    next(); // Continue to next handler
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

// Role-Based Authorization Middleware: Restricts access by user role
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied: insufficient role" });
    }
    next();
  };
};
