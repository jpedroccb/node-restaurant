const { DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');
const Ingredient = require('./IngredietModel');
const Recipe = require('./RecipeModel');


const RecipeIngredients = sequelize.define('recipe_ingredients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ingredientId: {
        type: DataTypes.INTEGER,
        references: {
            model: Ingredient,
            key: 'id'
        },
        unique: false
    },
    recipeId: {
        type: DataTypes.INTEGER,
        references: {
            model: Recipe,
            key: 'id'
        },
        unique: false
    },
    amount: {
        type: DataTypes.BIGINT
    }
}, {
  sequelize,
  modelName: 'RecipeIngredients',
  unique: false
})

module.exports = RecipeIngredients