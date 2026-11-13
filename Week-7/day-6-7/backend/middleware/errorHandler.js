module.exports = (err, req, res, next) => {
  console.error("Server Error:", err);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || "Internal Server Error"
  });
};
