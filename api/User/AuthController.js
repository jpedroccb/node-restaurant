const {Op} = require('sequelize')
const User = require('../models/UserModel')
const {generateJwt} = require('../Util/JwtUtil')

exports.login  =  async (req, res) => {  
    const {email, password} = req.body
    await User.findOne({
        where : {
            password,
            email
        },
        attributes: [
            'id',
            'name',
            'email'
        ]
    }).then((result)=>{
        if(!result){
            return res.status(422).json({message:"Invalid Credentials"})    
        }
        return res.status(200).json({
            ...result.toJSON(),
            token: generateJwt(result, {expiresIn: '1h'})
        })
    }).catch((error)=>{
        return res.status(400).json(error)
    })
};