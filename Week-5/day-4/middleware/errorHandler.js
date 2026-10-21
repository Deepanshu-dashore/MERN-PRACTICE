/**
 * Global Error Handling Middleware:
 * Catches all forwarded errors and provides standard JSON response
 */
module.exports = function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(`[Error Handler] ${req.method} ${req.originalUrl}:`, message);

    res.status(statusCode).json({
        success: false,
        error: message,
        statusCode,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};
