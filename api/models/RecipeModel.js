const {DataTypes} = require('sequelize')
const sequelize = require('../../config/connection')

const Recipe = sequelize.define('recipes', {
    name: {
        type: DataTypes.STRING,
    }
},{
    sequelize,
    modelName: 'Recipe'
})

module.exports = Recipe