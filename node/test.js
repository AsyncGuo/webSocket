const mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (error, result, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
})