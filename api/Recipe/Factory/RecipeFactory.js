const formatIngredientsToRecipeSave = (ingredients, recipeId) => {
    return ingredients.reduce((acc,cur) => {
        return [
            ...acc,
            {
                ...cur,
                recipeId
            }
        ]
    },[])
}

module.exports = {
    formatIngredientsToRecipeSave
}