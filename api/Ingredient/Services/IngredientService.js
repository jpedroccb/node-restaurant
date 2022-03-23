const Ingredient = require('../../models/IngredietModel')

const store = async (ingredientCreateData) => {
    return await Ingredient.create(ingredientCreateData)
}

const index = async (queryParams) => {
    const {search , page=1,per_page=10, order='asc',order_field='name'} = queryParams
    
    let where = {}
    if(search){
        where.name = {
            [Op.like] : `%${search}%`
        }
    }
    const offset = ((page*per_page)-per_page)

    return await Ingredient.findAll({
        where,
        order: [
            [order_field, order]
        ],
        offset : offset,
        limit: parseInt(per_page)
    })
}

const show = async (ingredientId) => {
    return await Ingredient.findByPk(ingredientId)
}

module.exports = {
    store,
    index,
    show
}