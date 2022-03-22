const jwt = require('jsonwebtoken')
const { SECRET } = require('../../config/consts')

function authenticator (req, res, next)  {

    if(!req.headers.authorization){
        return res.status(400).json({message: 'Without Authorization header'})
    }

    const tokenValidation = req.headers.authorization.split(' ')
    
    if(tokenValidation.length !== 2){
        return res.status(400).json({message: 'Token Malformed'})
    }

    if(tokenValidation[0] !== "Bearer"){
        return res.status(400).json({message: 'Without Bearer in token authorization'})
    }

    jwt.verify(tokenValidation[1], SECRET, function(err, decoded) {
      if(err){
          return res.status(401).json({message: 'Invalid Authorization'})
      }
       req.user = decoded
       next()
    });

}

module.exports = authenticator