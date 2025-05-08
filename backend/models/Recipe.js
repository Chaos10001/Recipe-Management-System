
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', recipeSchema);
