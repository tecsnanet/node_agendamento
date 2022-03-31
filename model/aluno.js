const db = require('../config/db')
const Aluno = db.sequelize.define('aluno', {
    cpf:{
        type: db.Sequelize.INTEGER(11),       
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING(20),
        allowNull: false,
    },
    email:{
        type: db.Sequelize.STRING(100),
        allowNull: false,
    },
    matricula:{
        type: db.Sequelize.STRING(6),
        allowNull: false        
    },
    senha:{
        type: db.Sequelize.STRING(6),
        defaultValue: "123456",
        allowNull: false        
    }
    
}) 
Aluno.sync({force:true})
module.exports = Aluno