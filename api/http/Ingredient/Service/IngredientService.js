const IngredientRepository = require('../Repository/IngredientRepository')

const store = async (ingredientCreateData) => {
    return await IngredientRepository.storeIngredient(ingredientCreateData)
}

const index = async (queryParams) => {
    return await IngredientRepository.findAllIngredientsWithFilters(queryParams)
}

const show = async (ingredientId) => {
    return await IngredientRepository.getByIngredientId(ingredientId)
}

const update = async (ingredientUpdateData, ingredientId) => {
    return await IngredientRepository.updateIngredient(ingredientUpdateData, ingredientId)
}

module.exports = {
    store,
    index,
    show,
    update
}