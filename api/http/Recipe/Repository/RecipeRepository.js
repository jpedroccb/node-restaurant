const Ingredient = require('../../../Models/IngredietModel')
const RecipeIngredients = require('../../../Models/RecipeIngredients')
const Recipe = require('../../../Models/RecipeModel')
const {Op} = require('sequelize')

const storeRecipe = async (recipeName) => {
    try {
        return await Recipe.create({name: recipeName})
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const saveRecipeIngredients = async (ingredientsListToSave) => {
    try {
        return await RecipeIngredients.bulkCreate(ingredientsListToSave)
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const findAllRecipesWithFilters = async (filters) => {
    try {
        return await Recipe.findAll({
            include: {
                model: Ingredient,
                as: 'ingredients'
            }
        })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const findByRecipeId = async (recipeId) => {
    try {
        return await Recipe.findByPk(recipeId, {
            include: {
                model: Ingredient,
                as: 'ingredients'
            }
        })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const findAllRecipeIngredients = async (recipeId) => {
    try {
        return await RecipeIngredients.findAll({
            where: {
                recipeId: recipeId
            }
        })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const deleteRecipeIngredients = async (ingredientsList = []) => {
    try {
        return await RecipeIngredients.destroy({
            where: {
                id: {
                    [Op.in]: ingredientsList
                }
            }
        })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const updateRecipe = async (recipeUpdateData, recipeId) => {
    try {
        return await Recipe.update(recipeUpdateData, {
            where: {id: recipeId}
        })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const updateRecipeIngredients = async (ingredientsListToUpdate) => {
    try {
        ingredientsListToUpdate.map(async (ingredient) => {
            await RecipeIngredients.update(ingredient , {
                where: {
                    id: ingredient.id
                }
            })
        })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

module.exports = {
    storeRecipe,
    saveRecipeIngredients,
    findAllRecipesWithFilters,
    findByRecipeId,
    findAllRecipeIngredients,
    deleteRecipeIngredients,
    updateRecipe,
    updateRecipeIngredients
}