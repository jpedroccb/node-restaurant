const formatRecipesToMenuSave = (unformattedRecipes, menuId) => {
    return unformattedRecipes.reduce((acc, cur) => {
        return [
            ...acc,
            {
                ...cur,
                menuId
            }
        ]
    }, [])
}

module.exports = {
    formatRecipesToMenuSave
}