const connection = require("./config/connection");
const mysql = require("mysql");

const conn = mysql.createConnection(connection);

conn.connect();

conn.query('show tables', (err, res , fields) => {
  console.log(res);
});