const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Herzel',
    database: 'hr_db',
    post: 5432
});

module.exports = pool