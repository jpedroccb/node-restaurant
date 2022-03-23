const RecipeIngredients = require('../../models/RecipeIngredients')
const Recipe = require('../../models/RecipeModel')

const storeRecipe = async (recipeName) => {
    try {
        return await Recipe.create({name: recipeName})
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const saveIngredientsToRecipe = async (ingredientsList) => {
    try {
        await RecipeIngredients.bulkCreate(ingredientsList)
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

module.exports = {
    storeRecipe,
    saveIngredientsToRecipe
}