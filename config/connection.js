const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project_restaurant', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
})

sequelize.authenticate().then(function(){
    console.log("Banco conectado")
}).catch(function(err){
    console.log("Falha ao logar no Servidor "+err)
})

module.exports = sequelize