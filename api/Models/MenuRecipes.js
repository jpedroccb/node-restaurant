const { DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');
const Menu = require('./MenuModel');
const Recipe = require('./RecipeModel');


const MenuRecipes = sequelize.define('menu_recipes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    menuId: {
        type: DataTypes.INTEGER,
        references: {
            model: Menu,
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
    price: {
        type: DataTypes.STRING
    }
}, {
  sequelize,
  modelName: 'MenuRecipes',
  unique: false
})

module.exports = MenuRecipes