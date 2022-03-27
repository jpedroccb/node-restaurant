const { ingredientsSeed } = require("../../Ingredient/Dto/IngredientDto")
const Ingredient = require("../IngredietModel")

const ingreditSeed = async () => {
    ingredientsSeed.map(async (ingredient) => {
        const haveIngredient = await Ingredient.findByPk(ingredient.id)
        if(!haveIngredient){
            return await Ingredient.create(ingredient)
        }
    })
}

module.exports = ingreditSeed