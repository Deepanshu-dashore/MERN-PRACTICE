/**
 * Custom Logger Middleware:
 * Prints Method, URL, status code, and response duration in ms
 */
module.exports = function requestLogger(req, res, next) {
    const startTime = Date.now();
    const { method, originalUrl } = req;
    const timestamp = new Date().toLocaleTimeString();

    // Hook into response finish event
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        const status = res.statusCode;
        console.log(`[${timestamp}] ${method} ${originalUrl} -> Status ${status} (${duration}ms)`);
    });

    next();
};
