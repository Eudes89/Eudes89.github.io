const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'eudes1512e',
    database: 'new-tech-db'
});

con.connect(function(err) {
    if(err) throw err;
    console.log('connected!');
});

con.connect(function(err) {
    if(err) throw err;
    console.log('connected!');
    con.query("SELECT produto FROM `new-tech-db`.products", (err, result) => {
        if(err) throw err;
        const produto = JSON.stringify(result);
        return produto;
    });
}); 

