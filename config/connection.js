const mysql = require('mysql');
require("dotenv").config(); 

// Create Connection
const db_config = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
  port:3306,
  database: 'daj99ebjlhgapx9n'
};

module.exports = db_config;