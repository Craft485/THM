const sqlite3 = require('sqlite3').verbose()
// Spin up connection
const db = new sqlite3.Database('./webapp.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      console.error(err.message)
    }
    console.log('Connected to the flat file database.')
})

// Send queries
db.serialize(() => {
    // SHOW TABLES; but in sqlite apparently
    db.all(`SELECT name FROM sqlite_master WHERE type='table';`, (err, res) => {
        if (err) {
        console.error(err.message)
        }
        console.log(res)
    })
    db.all(`SELECT * FROM users;`, (err, res) => {
        if (err) {
            console.error(err.message)
        }
        console.log(res)
    })
})

// Close connection
db.close((err) => {
    if (err) {
      console.error(err.message)
    }
    console.log('Close the database connection.')
})