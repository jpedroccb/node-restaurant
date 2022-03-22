const express = require('express')
const router = express.Router()
const IngredientsController = require('../api/Ingredient/IngredientsController') 
const { body } = require('express-validator');
const {IngredientCreateValidator} = require('../api/Ingredient/Validator/IngredientCreateValidator')

router.post('/' ,IngredientsController.store);
// router.get('/', IngredientsController.index);
// router.get('/:id', IngredientsController.show);

module.exports = router