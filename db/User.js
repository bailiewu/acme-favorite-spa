const {conn, Sequelize} = require('./conn')

const User = conn.define('user', {
    name: Sequelize.TEXT,
})

module.exports = User
