const mariadb = require('mariadb');

const db = mariadb.createPool({
    host: 'localhost',
    user: 'myUser',
    password: 'myPassword',
    database: 'myDatabase',
    connectionLimit: 5
});

db.getConnection()
    .then(conn => {
        console.log('Connected to MariaDB database!');
        conn.release(); // release connection back to pool
    })
    .catch(err => {
        console.error('Error connecting to MariaDB database:', err);
    });


