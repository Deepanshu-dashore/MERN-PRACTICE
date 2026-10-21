/**
 * User REST API Routes with In-Memory CRUD
 */

const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'Dipanshu Dashore', email: 'dipanshu@example.com', role: 'Admin' },
    { id: 2, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'User' },
    { id: 3, name: 'Pooja Verma', email: 'pooja@example.com', role: 'Editor' }
];

// 1. GET /api/users - Read all
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
});

// 2. GET /api/users/:id - Read by ID
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === id);

    if (!user) {
        const err = new Error(`User with ID ${id} not found.`);
        err.statusCode = 404;
        return next(err);
    }

    res.status(200).json({
        success: true,
        data: user
    });
});

// 3. POST /api/users - Create new user
router.post('/', (req, res, next) => {
    const { name, email, role } = req.body;

    if (!name || !email) {
        const err = new Error('Both "name" and "email" fields are required.');
        err.statusCode = 400;
        return next(err);
    }

    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name,
        email,
        role: role || 'User'
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });
});

// 4. PUT /api/users/:id - Update existing user
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        const err = new Error(`Cannot update: User with ID ${id} does not exist.`);
        err.statusCode = 404;
        return next(err);
    }

    const { name, email, role } = req.body;

    users[userIndex] = {
        ...users[userIndex],
        ...(name && { name }),
        ...(email && { email }),
        ...(role && { role })
    };

    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: users[userIndex]
    });
});

// 5. DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        const err = new Error(`Cannot delete: User with ID ${id} does not exist.`);
        err.statusCode = 404;
        return next(err);
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        data: deletedUser
    });
});

module.exports = router;
