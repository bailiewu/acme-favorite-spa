const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.PORT || process.env.DATABASE_URL || 'postgres://localhost/acme_favorite_spa', {
    logging: false
})

module.exports = { conn, Sequelize }
