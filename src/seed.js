const models = require('./models').models

const seed = async () => {
    await models.User.create(
        {
            username: "bill",
            email: "bill@gmail.com",
            password: "pass123"
        }
    )
    await models.User.create(
        {
            username: "jane",
            email: "jane@gmail.com",
            password: "password1"
        }
    )
}

module.exports = seed;