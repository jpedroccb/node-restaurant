const RecipeRepository = require('../Repository/RecipeRepository')
const RecipeFactory = require('../Factory/RecipeFactory')
const ManyToManyUtil = require('../../../Util/ManyToManyUtil')

const store = async (recipeCreateData) => {
    const recipeCreatted = await RecipeRepository.storeRecipe(recipeCreateData.name)
    if(recipeCreateData.ingredients){
        const recipeIngredients = RecipeFactory.formatIngredientsToRecipeSave(
            recipeCreateData.ingredients,
            recipeCreatted.id
        )
        await RecipeRepository.saveRecipeIngredients(
            recipeIngredients
        )
    }
}

const index = async (queryParams) => {
    return await RecipeRepository.findAllRecipesWithFilters(queryParams)
}

const show = async (recipeId) => {
    return await RecipeRepository.findByRecipeId(recipeId)
}

const update = async (recipeName, recipeId, ingredientsList = []) => {
    await RecipeRepository.updateRecipe({name: recipeName}, recipeId)

    const ingredientsRecipeOriginal = await RecipeRepository.findAllRecipeIngredients(recipeId)

    await updateOrCreateRecipeIngredients(ingredientsList, recipeId)

    const recipeIngredientsToDelete = ManyToManyUtil.verifyDeletedRows(ingredientsRecipeOriginal, ingredientsList, 'id')
    await deleteRecipeIngredients(
        recipeIngredientsToDelete
    )

    return true
}

const deleteRecipeIngredients = async (ingredientsToDelete) => {
    ingredientsToDelete.length > 0 && await RecipeRepository.deleteRecipeIngredients(ingredientsToDelete)
}

const updateOrCreateRecipeIngredients = async (ingredientsList, recipeId) => {
    if(ingredientsList.length <= 0){
        return
    }

    const recipeIngredients = RecipeFactory.separeCreateAndUpdateIngredients(
        RecipeFactory.formatIngredientsToRecipeSave(
            ingredientsList,
            recipeId
    ))

    await createRecipeIngredients(recipeIngredients.toCreate)
    await updateRecipeIngredients(recipeIngredients.toUpdate)
    
}

const createRecipeIngredients = async (recipeIngredientsToCreate) => {
    recipeIngredientsToCreate.length > 0 && await RecipeRepository.saveRecipeIngredients(recipeIngredientsToCreate)
}

const updateRecipeIngredients = async (recipeIngredientsToUpdate) => {
    recipeIngredientsToUpdate.length > 0 && await RecipeRepository.updateRecipeIngredients(recipeIngredientsToUpdate)
}

module.exports = {
    store,
    index,
    show,
    update
}