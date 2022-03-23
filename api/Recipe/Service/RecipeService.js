const RecipeRepository = require('../Repository/RecipeRepository')
const RecipeFactory = require('../Factory/RecipeFactory')

const store = async (recipeCreateData) => {
    const recipeCreatted = await RecipeRepository.storeRecipe(recipeCreateData.name)
    if(recipeCreateData.ingredients){
        const recipeIngredients = RecipeFactory.formatIngredientsToRecipeSave(
            recipeCreateData.ingredients,
            recipeCreatted.id
        )
        await RecipeRepository.saveIngredientsToRecipe(
            recipeIngredients
        )
    }
}

module.exports = {
    store
}