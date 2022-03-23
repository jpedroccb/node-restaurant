const Ingredient = require('../../models/IngredietModel')
const IngredientRepository = require('../Repositories/IngredientRepository')

const store = async (ingredientCreateData) => {
    return await IngredientRepository.storeIngredient(ingredientCreateData)
}

const index = async (queryParams) => {
    return await IngredientRepository.findAllIngredientsWithFilters(queryParams)
}

const show = async (ingredientId) => {
    return await IngredientRepository.getByIngredientId(ingredientId)
}

module.exports = {
    store,
    index,
    show
}