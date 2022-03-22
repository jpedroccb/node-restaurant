const { DataTypes } = require('sequelize');
const sequelize = require('../../config/connection')

const Ingredient = sequelize.define('Ingredients', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  created_at:{
    type: DataTypes.DATE
  },
  updated_at:{
    type: DataTypes.DATE
  }
}, {
  sequelize,
  modelName: 'Ingredients'
}).sync({ alter: true });

module.exports = Ingredient