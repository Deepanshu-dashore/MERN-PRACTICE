/**
 * Week 5 - Day 5 : Scalable MVC Express Server
 */

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 6000;

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.originalUrl}`);
    next();
});

// Root index
app.get('/', (req, res) => {
    res.json({
        message: 'Week 5 Day 5: Scalable MVC Architecture REST API',
        docs: {
            users: '/api/v1/users',
            health: '/api/v1/health'
        }
    });
});

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// Mount modular routes
app.use('/api/v1/users', userRoutes);

// 404 handler
app.use((req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found`);
    error.statusCode = 404;
    next(error);
});

// Centralized error handler
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).json({
        success: false,
        error: err.message || 'Server Error'
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`MVC Express Server running on port ${PORT}`);
    });
}

module.exports = app;
