const Ingredient = require('../models/IngredietModel')

exports.store = async (req , res) => {
    return res.status(200).json({message: "ok"})
}

