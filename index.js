const express = require('express');
const app = express();
const models = require('./src/models').models;

app.get('/', (req, res) => res.send('hello'))



const PORT = process.env.PORT || '8080'
app.listen(PORT, () => console.log(`running on port ${PORT}`))

