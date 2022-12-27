const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'eudes1512e',
    database: 'new-tech-db'
});

// console.log('Banco de Dados Mysql Conectado!');


function dbProducts () {
    
    // const regex = /['[{"},-: '']/;
    
    con.query(`SELECT produto FROM products WHERE idproducts LIKE 1`, (err, result) => {
        if(err) throw err;
        console.log(result);
        // console.log(result[0]['produto']);
        // console.log(result[1]['produto']);
        // let produto = JSON.stringify(result).split(regex);
        // produto.shift();
        // produto.pop();
        
        // let fResult = [];
        // for(let idx of produto){
        
        //     if(idx !== ''){
        //         fResult.push(idx);
        //     };
        // };
        
        // console.log(fResult);
        
    });
    
};

// dbProducts();







