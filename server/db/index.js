var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'student',
  password: 'student',
  database: 'chat'

});

// connection.connnect((err) => {
//   if (err) {
//     throw (err);
//   }
// });
connection.connect()

module.exports = connection;
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


