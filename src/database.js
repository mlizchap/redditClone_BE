const db = require('./models').db
const models = require('./models').models

const eraseDatabaseOnSync = true;
db.sync({ force: eraseDatabaseOnSync }).then(async => {
    if (eraseDatabaseOnSync) {
        models.User.create(
            {
                id: 1,
                username: "bill",
                email: "bill@gmail.com",
                password: "pass123"
            }
        )
     }
})

module.exports = db;