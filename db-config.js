require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_root,
  password: process.env.DB_1Q2w3e4r5t6Y,
  database: process.env.expressquest3,
});

module.exports = connection;