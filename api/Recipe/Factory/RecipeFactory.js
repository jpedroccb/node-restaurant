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

const separeCreateAndUpdateIngredients = (ingredientsList) => {
    return ingredientsList.reduce((acc,cur) => {
        if(cur.id){
            return addUpdateIngredient(acc, cur)
        }

        return addCreateIngredient(acc,cur)
    },{toCreate: [], toUpdate: []})
}

const addCreateIngredient = (ingredientsList, ingredient) => {
    return {
        ...ingredientsList,
        toCreate: [
            ...ingredientsList.toCreate,
            ingredient
        ],
    }
}

const addUpdateIngredient = (ingredientsList, ingredient) => {
    return {
        ...ingredientsList,
        toUpdate: [
            ...ingredientsList.toUpdate,
            ingredient
        ]
    }
}

module.exports = {
    formatIngredientsToRecipeSave,
    separeCreateAndUpdateIngredients
}