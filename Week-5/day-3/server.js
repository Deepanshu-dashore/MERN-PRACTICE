/**
 * Week 5 - Day 3 : Getting Started with Express.js
 * Topics:
 * - Basic routing (GET /, /about, /contact)
 * - JSON responses (/api/users, /api/products)
 * - Dynamic route parameters (req.params: /api/users/:id)
 * - Query parameters (req.query: /api/search?q=...)
 */

const express = require('express');
const app = express();
const PORT = 4000;

// Sample in-memory dataset
const users = [
    { id: 1, name: 'Dipanshu Dashore', role: 'Full Stack Developer', city: 'Indore' },
    { id: 2, name: 'Ananya Sharma', role: 'UI/UX Designer', city: 'Bhopal' },
    { id: 3, name: 'Rohit Verma', role: 'Backend Engineer', city: 'Pune' }
];

const products = [
    { id: 101, name: 'Mechanical Keyboard', category: 'Electronics', price: 79.99 },
    { id: 102, name: 'Ergonomic Desk Chair', category: 'Furniture', price: 199.99 },
    { id: 103, name: 'Ultra-wide Monitor', category: 'Electronics', price: 349.99 }
];

// 1. Basic HTML routes
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Week 5 - Day 3 Express</title></head>
            <body style="font-family: sans-serif; padding: 40px; background: #f8f9fa;">
                <h1 style="color: #00a76f;">🚀 Express.js Server Running!</h1>
                <p>Welcome to Week 5 - Day 3 Express API practice.</p>
                <ul>
                    <li><a href="/api/users">/api/users</a> - All Users JSON</li>
                    <li><a href="/api/users/1">/api/users/1</a> - Dynamic User ID</li>
                    <li><a href="/api/products">/api/products</a> - All Products JSON</li>
                    <li><a href="/api/search?q=desk">/api/search?q=desk</a> - Query String Search</li>
                </ul>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.send('<h1>About Express App</h1><p>Minimalist Express server built for Week-5 Day-3.</p>');
});

app.get('/contact', (req, res) => {
    res.json({ email: 'contact@dipanshu.dev', status: 'available', location: 'India' });
});

// 2. JSON API Endpoints
app.get('/api/users', (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
});

// 3. Dynamic Route Parameter (req.params)
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            error: `User with ID ${userId} not found`
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
});

app.get('/api/products', (req, res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
});

// 4. Query Parameters (req.query)
app.get('/api/search', (req, res) => {
    const { q, category } = req.query;

    let filtered = products;

    if (q) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
    }

    if (category) {
        filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    res.status(200).json({
        success: true,
        query: { q, category },
        resultsCount: filtered.length,
        results: filtered
    });
});

// 5. 404 Catch-all handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found',
        requestedUrl: req.originalUrl
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Express server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
