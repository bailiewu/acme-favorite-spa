const {conn, Sequelize} = require('./conn')

const Thing = conn.define('thing', {
    name: Sequelize.TEXT,
})

module.exports = Thing
