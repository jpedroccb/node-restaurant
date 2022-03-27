const IngredientService = require('./Service/IngredientService')

exports.store = async (req , res) => {
    try{
        return res.status(200).send(await IngredientService.store(req.body))
    }catch(error){
        return res.status(500).send(error)
    }
}

exports.index = async (req , res) => {
    try {
        return res.status(200).json(await IngredientService.index(req.query))
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.show = async (req , res) => {
    try {
        return res.status(200).send(await IngredientService.show(req.params.id))
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.update = async (req, res) => {
    try {
        await IngredientService.update(req.body, req.params.id)
        return res.status(200).send()
    } catch (error) {
        return res.status(500).send(error)
    }
}

