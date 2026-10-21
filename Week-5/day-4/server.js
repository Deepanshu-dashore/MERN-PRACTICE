/**
 * Week 5 - Day 4 : Express Server with Middleware & CRUD API
 */

const express = require('express');
const requestLogger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

// 1. Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Custom Application-Level Middleware
app.use(requestLogger);

// 3. Mount Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Week 5 Day 4 API Running!',
        endpoints: {
            getAllUsers: 'GET /api/users',
            getUserById: 'GET /api/users/:id',
            createUser: 'POST /api/users',
            updateUser: 'PUT /api/users/:id',
            deleteUser: 'DELETE /api/users/:id'
        }
    });
});

app.use('/api/users', userRoutes);

// 4. 404 Route Not Found
app.use((req, res, next) => {
    const err = new Error(`Resource ${req.originalUrl} not found`);
    err.statusCode = 404;
    next(err);
});

// 5. Global Error Handler Middleware
app.use(errorHandler);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
