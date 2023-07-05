const express = require('express');
const router = express.Router();

// Import the recipes controller
const recipesController = require('../controllers/recipesController');

// Define the routes

// GET /recipes
router.get('/', recipesController.getAllRecipes);

// GET /recipes/:id
router.get('/:id', recipesController.getRecipeById);

// POST /recipes
router.post('/', recipesController.createRecipe);

// PUT /recipes/:id
router.put('/:id', recipesController.updateRecipe);

// DELETE /recipes/:id
router.delete('/:id', recipesController.deleteRecipe);

module.exports = router;