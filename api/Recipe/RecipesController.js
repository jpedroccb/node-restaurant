const RecipeService = require('./Service/RecipeService')

exports.store = async (req, res) => {
    try {
        await RecipeService.store(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.index = async (req, res) => {

}

exports.show = async (req, res) => {

}

exports.update = async (req, res) => {

}