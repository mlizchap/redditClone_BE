const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const apiRouter = require('./src/routes')
require('./src/database')

app.use(cors());
app.use(bodyParser.json())
app.use('/api', apiRouter)


const PORT = process.env.PORT || '8080'
app.listen(PORT, () => console.log(`running on port ${PORT}`))

