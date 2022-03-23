const Ingredient = require('../../models/IngredietModel')

const storeIngredient = async (ingredientCreateData) => {
    await Ingredient.create(ingredientCreateData)
}

const findAllIngredientsWithFilters = async (filters) => {
    const {search , page=1,per_page=10, order='asc',order_field='name'} = filters
    
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

const getByIngredientId = async (ingredientId) => {
    return await Ingredient.findByPk(ingredientId)
}

module.exports = {
    storeIngredient,
    findAllIngredientsWithFilters,
    getByIngredientId
}