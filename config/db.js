const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgress',
  host: 'localhost', 
  database: 'HACSA', 
  password: 'mystrongpassword', 
  port: 5435
});

module.exports = pool;