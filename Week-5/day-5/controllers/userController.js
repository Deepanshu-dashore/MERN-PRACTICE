/**
 * User Controller - Business logic for user resources
 */

let users = [
    { id: 1, name: 'Dipanshu Dashore', role: 'Full Stack Engineer', email: 'dipanshu@example.com' },
    { id: 2, name: 'Aarav Patel', role: 'Cloud Architect', email: 'aarav@example.com' },
    { id: 3, name: 'Sneha Roy', role: 'Frontend Specialist', email: 'sneha@example.com' }
];

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};

exports.getUserById = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === id);

    if (!user) {
        const error = new Error(`User with ID ${id} not found.`);
        error.statusCode = 404;
        return next(error);
    }

    res.status(200).json({
        success: true,
        data: user
    });
};

exports.createUser = (req, res, next) => {
    const { name, role, email } = req.body;

    if (!name || !email) {
        const error = new Error('Both name and email are required fields.');
        error.statusCode = 400;
        return next(error);
    }

    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name,
        role: role || 'Student',
        email
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });
};

exports.updateUser = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        const error = new Error(`User with ID ${id} not found.`);
        error.statusCode = 404;
        return next(error);
    }

    users[index] = { ...users[index], ...req.body };

    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: users[index]
    });
};

exports.deleteUser = (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        const error = new Error(`User with ID ${id} not found.`);
        error.statusCode = 404;
        return next(error);
    }

    const deleted = users.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        data: deleted
    });
};
