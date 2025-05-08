
const express = require('express');
const Recipe = require('../models/Recipe');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', async (req, res) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 });
  res.json(recipes);
});

router.post('/', authMiddleware, async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const recipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    createdBy: req.user.id,
  });
  res.json(recipe);
});

module.exports = router;
