const Ingredient = require('../models/IngredietModel')
const Recipe = require('../models/RecipeModel')
const RecipeService = require('./Service/RecipeService')

exports.store = async (req, res) => {
    try {
        await RecipeService.store(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.index = async (req, res) => {
    return res.status(200).send(await Recipe.findAll({
        include: {
            model: Ingredient,
            as: 'ingredients'
        }
    }))
}

exports.show = async (req, res) => {

}

exports.update = async (req, res) => {

}