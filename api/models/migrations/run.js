const User = require('../UserModel')
const Ingredient = require('../IngredietModel')
const Recipe = require('../RecipeModel')
const RecipeIngredients = require('../RecipeIngredients')


const migrationsExecute = async () => {
    await User.sync({alter: true})
    await Ingredient.sync({ alter: true })
    await Recipe.sync({alter: true})
    
    Ingredient.belongsToMany(Recipe, { through: RecipeIngredients})
    Recipe.belongsToMany(Ingredient, { through: RecipeIngredients})

    await RecipeIngredients.sync({ alter: true });
}

module.exports = migrationsExecute
  