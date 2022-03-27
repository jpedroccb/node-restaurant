const migrationsExecute = require('../api/Models/migrations/run')
const seedersExecute = require('../api/Models/seeders/index')

const dbStart = async () => {
    try {
        await migrationsExecute()
    } catch (error) {
        console.log('Error Migration')
    }

    try {
        await seedersExecute()
    } catch (error) {
        console.log('Error Seed')
    }
}

module.exports = dbStart