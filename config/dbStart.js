const migrationsExecute = require('../api/models/migrations/run')
const seedersExecute = require('../api/models/seeders/index')

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