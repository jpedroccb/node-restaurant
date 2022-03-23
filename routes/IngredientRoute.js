const express = require('express')
const router = express.Router()
const IngredientsController = require('../api/Ingredient/IngredientsController') 
const { body } = require('express-validator');
const {IngredientCreateValidator} = require('../api/Ingredient/Validator/IngredientCreateValidator')

router.post('/', IngredientCreateValidator, IngredientsController.store);
router.get('/', IngredientsController.index);
router.get('/:id', IngredientsController.show);
router.put('/:id', IngredientsController.update);

module.exports = router