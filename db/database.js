const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./db/database.sqlite');

// Retrieve all diary entries
db.all('SELECT * FROM diary_entries', (err, rows) => {
  if (err) {
    console.error(err.message);
    return;
  }
  // Log retrieved diary entries
  console.log(rows);
});

// Close database connection
db.close();
