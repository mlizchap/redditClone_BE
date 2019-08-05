const Router = require('express')
const userRouter = require('./User')

let apiRouter = Router()
    .use('/users', userRouter)

module.exports = apiRouter