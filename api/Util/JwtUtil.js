const jwt = require('jsonwebtoken')
const {SECRET} = require('../../config/consts')
function generateJwt(params, expiresIn) {
    console.log(SECRET)
    console.log('***********************')
    const jwtToken = jwt.sign({params}, SECRET, expiresIn);

    return jwtToken
}

module.exports = {
    generateJwt
}

