const Ingredient = require('../../../Models/IngredietModel')

const storeIngredient = async (ingredientCreateData) => {
    try{
        return await Ingredient.create(ingredientCreateData)
    }catch(error){
        throw {message: "HasServerError"}
    }
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
    try{
        return await Ingredient.findAll({
            where,
            order: [
                [order_field, order]
            ],
            offset : offset,
            limit: parseInt(per_page)
        })
    }catch(error){
        throw {message: "HasServerError"} 
    }
}

const getByIngredientId = async (ingredientId) => {
    try {
        return await Ingredient.findByPk(ingredientId)
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const updateIngredient = async (ingredientUpdateData, ingredientId) => {
    try {
        return await Ingredient.update(ingredientUpdateData,{
            where: {
                id: ingredientId
              }
            })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

module.exports = {
    storeIngredient,
    findAllIngredientsWithFilters,
    getByIngredientId,
    updateIngredient
}