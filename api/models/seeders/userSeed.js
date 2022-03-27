const User = require("../UserModel")

const userSeed = async () => {
    const userDefault = await User.findByPk(1)
    if(!userDefault){
        return await User.create({
            id: 1,
            name: 'João',
            email: 'joao@gmail.com',
            password: '1234567'
        })
    }
}

module.exports = userSeed