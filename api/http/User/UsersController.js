const {Op} = require('sequelize')
const User = require('../../Models/UserModel')

exports.store  =  async (req, res) => {  
    const userData = req.body    
    console.log(userData) 
    await User.create(userData).then((result)=>{
        return res.status(200).json(result)
    }).catch((error)=>{
        return res.status(400).json(error)
    })
};

exports.show  =  async (req, res) => {  
    const {id} = req.params
    await User.findByPk(id).then( (result) => {
        return res.status(200).json(result)
    })
    .catch((err) => {
        return res.status(400).json(err)
    })
};

exports.index  =  async (req, res) => {  
    const {search , page=1,per_page=10, order='asc',order_field='name'} = req.query
    let where = {}
    if(search){
        where.name = {
            [Op.like] : `%${search}%`
        }
    }
    const offset = ((page*per_page)-per_page)
    await User.findAll({
        where,
        order: [
            [order_field, order]
        ],
        offset : offset,
        limit: parseInt(per_page)
    })
    .then( (result) => {
        return res.status(200).json(result)
    })
    .catch((err) => {
        return res.status(400).json(err)
    }) 
};