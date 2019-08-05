const Sequelize = require('sequelize');
const dbConnect = 'postgres://localhost:5432/reddit'

const db = new Sequelize(dbConnect, { logging: false })


const models = {
    User: db.import('./User')
}

module.exports = {
    db,
    models
}