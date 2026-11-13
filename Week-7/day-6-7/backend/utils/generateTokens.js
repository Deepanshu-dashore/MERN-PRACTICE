const jwt = require("jsonwebtoken");

const generateAccessToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET || "super_secret_jwt_access_key_2026",
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "15m"
    }
  );
};

const generateRefreshToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET || "super_secret_refresh_token_key_2026",
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d"
    }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
