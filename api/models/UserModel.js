const { DataTypes } = require('sequelize');
const sequelize = require('../../config/connection')

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  password:{
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User