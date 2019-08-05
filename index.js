const express = require('express');
const app = express();
const Sequelize = require('sequelize');

app.get('/', (req, res) => res.send('hello'))

// database
const dbConnect = 'postgres://localhost:5432/reddit';
const db = new Sequelize(dbConnect, { logging: false });

const eraseDatabaseOnSync = true;
db.sync({ force: eraseDatabaseOnSync }).then(async => {
    // if (eraseDatabaseOnSync) { seedDB(); }
})


const PORT = process.env.PORT || '8080'
app.listen(PORT, () => console.log(`running on port ${PORT}`))

