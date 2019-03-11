const app = require('express')()
const { User, Thing, Favorite } = require('./db/index').models

// api/users
app.get('/users', (req, res, next) => {
    User.findAll(/* { order: [['name', 'ASC']] }*/)
        .then( (user) => {
            res.json(user)
        })
        .catch(next)
})

// api/things
app.get('/things', (req, res, next) => {
    Thing.findAll( /*{ order: [['name', 'ASC']] }*/)
        .then( (thing) => {
            res.json(thing)
        })
        .catch(next)
})

//favorites
app.get('/favorites', (req, res, next) => {
    Favorite.findAll()
        .then( (favorite) => {
            res.json(favorite)
        })
        .catch(next)
})

module.exports = app
