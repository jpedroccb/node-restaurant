const ingreditSeed = require("./ingredientSeed")
const recipeSeed = require("./recipeSeed")
const userSeed = require("./userSeed")


const seedersExecute = async () => {
    await userSeed()
    await ingreditSeed()
    await recipeSeed()
}

module.exports = seedersExecute