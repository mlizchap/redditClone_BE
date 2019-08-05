const db = require('../database')

const models = {
    User: db.import('./User')
}

module.exports = {
    models
}