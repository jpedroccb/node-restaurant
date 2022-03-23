const { DataTypes } = require('sequelize');
const sequelize = require('../../config/connection')


const Ingredient = sequelize.define('ingredients', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Ingredients'
})

Ingredient.sync({ alter: true });

module.exports = Ingredient