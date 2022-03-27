const express = require('express')
const router = express.Router()
const RecipesController = require('../api/http/Recipe/RecipesController') 
const { body } = require('express-validator');
//const {IngredientCreateValidator} = require('../api/Ingredient/Validator/IngredientCreateValidator')

router.post('/', RecipesController.store);
router.get('/', RecipesController.index);
router.get('/:id', RecipesController.show);
router.put('/:id', RecipesController.update);

module.exports = router