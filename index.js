const express = require('express');
const app = express();
const apiRouter = require('./src/routes')

require('./src/database')


app.use('/api', apiRouter)


//app.use('/api', routes.User)

const PORT = process.env.PORT || '8080'
app.listen(PORT, () => console.log(`running on port ${PORT}`))

