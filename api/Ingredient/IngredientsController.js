const IngredientService = require('./Services/IngredientService')

exports.store = async (req , res) => {
    return res.status(200).send(await IngredientService.store(req.body))
}

exports.index = async (req , res) => {
    return res.status(200).json(await IngredientService.index(req.query))
}

exports.show = async (req , res) => {
    return res.status(200).send(await IngredientService.show(req.params.id))
}

