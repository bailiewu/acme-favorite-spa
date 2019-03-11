const {conn, Sequelize} = require('./conn')

const Favorites = conn.define('favorite', {
    rank: Sequelize.INTEGER
})

module.exports = Favorites
