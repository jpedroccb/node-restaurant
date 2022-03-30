const Menu = require('../../../Models/MenuModel')
const MenuRecipes = require('../../../Models/MenuRecipes')

const storeMenu = async (menuName) => {
    try {
        return await Menu.create({
            name: menuName
        })
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

const saveMenuRecipes = async (recipesListToSave) => {
    try {
        MenuRecipes.bulkCreate(recipesListToSave)
    } catch (error) {
        throw {message: "HasServerError"}
    }
}

module.exports = {
    storeMenu,
    saveMenuRecipes
}