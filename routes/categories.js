const express = require('express');
const router = express.Router();

// Import the recipes controller
const categoriesController = require('../controllers/categoriesController');

// Define the routes

// GET /recipes
router.get('/', categoriesController.getAllCategories);

// GET /recipes/:id
router.get('/:id', categoriesController.getCategoryById);

// POST /recipes
router.post('/', categoriesController.createCategory);

// PUT /recipes/:id
router.put('/:id', categoriesController.updateCategory);

// DELETE /recipes/:id
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;