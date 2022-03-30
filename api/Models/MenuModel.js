const { DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');


const Menu = sequelize.define('menus', {
    name: {
        type: DataTypes.STRING,
    }
}, {
  sequelize,
  modelName: 'RecipeIngredients',
})

module.exports = Menu