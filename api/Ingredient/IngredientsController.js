const Ingredient = require('../models/IngredietModel')

exports.store = async (req , res) => {
    await Ingredient.create(req.body)
    return res.status(200).json({message: "ok"})
}

exports.index = async (req , res) => {
    const {search , page=1,per_page=10, order='asc',order_field='name'} = req.query

    let where = {}
    if(search){
        where.name = {
            [Op.like] : `%${search}%`
        }
    }
    const offset = ((page*per_page)-per_page)

    const ingredientsList = await Ingredient.findAll({
        where,
        order: [
            [order_field, order]
        ],
        offset : offset,
        limit: parseInt(per_page)
    })
    return res.status(200).json(ingredientsList)
}

exports.show = async (req , res) => {
    const {id} = req.params
    return res.status(200).send(await Ingredient.findByPk(id))
}

