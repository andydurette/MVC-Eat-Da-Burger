/*
DB: heroku_27dc7e1957ed417
H: us-cdbr-iron-east-05.cleardb.net
U: baff9b29011800
P: eadc8d19
*/

const mysql = require('mysql');

// Create Connection
const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-05.cleardb.net',
  user: 'baff9b29011800',
  password: 'eadc8d19',
  database: 'heroku_27dc7e1957ed417',
  port:3306
});

module.exports = connection;