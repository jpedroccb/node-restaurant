const RecipeService = require('../../http/Recipe/Service/RecipeService')
const {recipeDataToSeed} = require('../../http/Recipe/Dto/recipeDto')
const Recipe = require('../RecipeModel')
const recipeSeed = async () => {
    const haveRecipe = await Recipe.findByPk(1)
    if(!haveRecipe){
        RecipeService.store(recipeDataToSeed)
    }
}

module.exports = recipeSeed