const MenuRepository = require('../Repositories/MenuRepository')
const MenuFactory = require('../Factories/MenuFactory')

const store = async (menuBody) => {
    const menuCreated = await MenuRepository.storeMenu(menuBody.name)
    const formattedRecipes = MenuFactory.formatRecipesToMenuSave(menuBody.recipes, menuCreated.id)

    await MenuRepository.saveMenuRecipes(formattedRecipes)
}

module.exports = {
    store
}