/**
 * User Routes using Express Router
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route chaining for cleaner syntax
router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route('/:id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
