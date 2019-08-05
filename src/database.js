const db = require('./models').db;
const seed = require('./seed');

const eraseDatabaseOnSync = true;
db.sync({ force: eraseDatabaseOnSync }).then(async => {
    if (eraseDatabaseOnSync) {
        seed();
    }
})

module.exports = db;