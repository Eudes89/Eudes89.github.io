const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'eudes1512e',
    database: 'new-tech-db'
});

console.log('Banco de Dados Mysql Conectado!');
//==============================CAMPO DE BUSCA=====================================//

// Campo de busca no html
// const searchInput = document.querySelector(".campo__pesquisar");
// // Botão de pesquisa
// const searchButton = document.querySelector(".botaoPesquisar");

// regex tira todos caracteres indesejados, obs: o simbolo '*' entrega 
// letra por letra, se retirado irá fornecer palavras

// Pesquisa os produtos no banco de dados e retorna uma array de letras
// con.connect(function(err) {
//     if(err) throw err;
//     console.log('connected!');
//     con.query("SELECT produto FROM `new-tech-db`.products", (err, result) => {
//         if(err) throw err;
//         let produto = JSON.stringify(result).split(regex);
//         produto.shift();
//         produto.pop();               
//         console.log(produto);
//     });
// }); 

function dbProducts () {
    
    // const regex = /['[{"},-: '']/;
    
    con.query(`SELECT * FROM products`, (err, result) => {
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


// let dados = dbProductString();
// console.log(dados);

// let expl = [
//     {
//         produto: 'Tinta Pu W-Thane SRD 501'
//     }
// ];

// console.log(expl)





