const ingreditSeed = require("./ingredientSeed")
const userSeed = require("./userSeed")


const seedersExecute = async () => {
    await userSeed()
    await ingreditSeed()
}

module.exports = seedersExecute