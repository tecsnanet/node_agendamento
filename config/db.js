const Sequelize = require('sequelize')
const sequelize = new Sequelize('boletim', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})
module.exports = {
    Sequelize,
    sequelize
}