const Sequelize = require('sequelize');


// database
const dbConnect = 'postgres://localhost:5432/reddit';
const db = new Sequelize(dbConnect, { logging: false });

const eraseDatabaseOnSync = true;
db.sync({ force: eraseDatabaseOnSync }).then(async => {
    // if (eraseDatabaseOnSync) { seedDB(); }
})

module.exports = db;