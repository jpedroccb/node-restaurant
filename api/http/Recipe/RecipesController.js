const RecipeService = require('./Service/RecipeService')

exports.store = async (req, res) => {
    try {
        await RecipeService.store(req.body)
        res.status(200).send()
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.index = async (req, res) => {
    try {
        return res.status(200).send(await RecipeService.index(req.query))
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.show = async (req, res) => {
    try {
        return res.status(200).send(await RecipeService.show(req.params.id))
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.update = async (req, res) => {
    try {
        await RecipeService.update(req.body.name, req.params.id, req.body.ingredients || [])
        return res.status(200).send()
    } catch (error) {
        return res.status(500).send(error)
    }
}