const express = require('express');
const router = express.Router();

// Import the recipes controller
const usersController = require('../controllers/usersController');

// Define the routes

// GET /recipes
router.get('/', usersController.getAllUsers);

// GET /recipes/:id
router.get('/:id', usersController.getUserById);

// POST /recipes
router.post('/', usersController.createUser);

// PUT /recipes/:id
router.put('/:id', usersController.updateUser);

// DELETE /recipes/:id
router.delete('/:id', usersController.deleteUser);

module.exports = router;