var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'burger_db'
    });
};

// = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });
  
  // Make connection.
  connection.connect();
    console.log("connected as id " + connection.threadId);

  module.exports = connection;