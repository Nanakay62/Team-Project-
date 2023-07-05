const express = require('express');
const router = express.Router();

// Import the recipes controller
const ingredientsController = require('../controllers/usersController');

// Define the routes

// GET /recipes
router.get('/', ingredientsController.getAllIngredients);

// GET /recipes/:id
router.get('/:id', ingredientsController.getIngredientById);

// POST /recipes
router.post('/', ingredientsController.createIngredient);

// PUT /recipes/:id
router.put('/:id', ingredientsController.updateIngredient);

// DELETE /recipes/:id
router.delete('/:id', ingredientsController.deleteIngredient);

module.exports = router;