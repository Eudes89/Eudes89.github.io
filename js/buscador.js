const searchField = document.querySelector(".searchField");
const searchButton = document.querySelector(".botaoPesquisar");
const resultSpace = document.querySelector(".divResultados");
const divAnButton = document.querySelector(".animated-div");
const animButton = document.querySelector(".animated-button1");



//=======================FUNCTION MASTER=================================================
function buscador () {
    
    let searchFieldLetters = mapArraySearch();
    // console.log(searchFieldLetters);
    for(let produto of allProducts){
        let dados = dataProducts(produto);
        // console.log(dados);
        for(i = 0; i < dados.length; i++){
            let letraPalavraProduto = mapWordProduct(dados[i]);
                
        }
    }

};

//========================END OF FUNCTION MASTER==========================================



//========================WORK WITH RESULTS================================================

// Cria um objeto de Resultado
function ObjResultado (identificador, name, letraXmatch) {
    this.id = identificador;
    this.produto = name;
    this.match = [letraXmatch];
    return
};

// Cria objeto de Palavras que deram Match
function objLetraMatch (letra, indice) {
    let match = {
        letra : letra,
        indice: indice
    }
    return match;
};

// Adiciona no Objeto resultado as palavras que deram match
// *variavel é o resultado da função objPalavraMatch
function addinObjResult (objResultado, variavel) {

}

// Função MASTER de RESULTADOS
function finalResult () {

}

//=========================END WORK WITH RESULTS===========================================



//=============================WORK WITH SEARCHFIELD========================================

function mapArraySearch () {
    
    let arraySearch = arraySearchValue(searchField.value);
    // console.log(arraySearch);
    
    let allLettersArray = [];
    
    for(i = 0; i < arraySearch.length; i++){
        // console.log(i)
        let sequelizeWord = arraySearchLetters(arraySearch[i]);
        // console.log(sequelizeWord);
        allLettersArray.push(sequelizeWord);
    };

    // console.log(allArraySearch);
    return allLettersArray;
};

//Usado no MapArraysearch
function arraySearchLetters (indice) {
    let x = [];
    for(let i of indice){
        x.push(i);
    };
    return x;
};

//Usado no mapArraySearch
function arraySearchValue (inputValue) {
    const regex = /[\W/" "]/;
    inputValue.toLowerCase();
    let resultado = inputValue.split(regex).filter(x => x !== "");
    return resultado;
};

//=============================END WORK WITH SEARCHFIELD=====================================



//===============================WORK WITH PRODUCTS===========================================

class Product {
    constructor(id, name, description, imgUrl){
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = imgUrl;
    }
    
    test() {
        console.log(`id: ${this.id}, name: ${this.name}, 
        descrição: ${this.description}, img: ${this.img} . `);
    }

    insertImagem () {
        let img = document.createElement('img');
        img.src = this.url;
        img.style.width = "100%";
        img.style.backgroundColor = "white";
        resultSpace.appendChild(img);
    }

    insertTitulo () {
        let name = document.createElement('h1');
        name.textContent = this.name;
        name.style.textAlign = 'center';
        name.style.color = 'white';
        name.style.border = '2px solid black';
        name.style.backgroundColor = 'blue';

        resultSpace.appendChild(name);
    }

    insertDescription () {
        let desc = document.createElement('h3');
        desc.textContent = this.description;
        desc.style.textAlign = 'center';
        desc.style.fontStyle = 'italic';
        desc.style.color = 'black';
        desc.style.border = '2px solid black';
        desc.style.backgroundColor = 'white';

        resultSpace.appendChild(desc);
    }

    insertButton () {
        resultSpace.appendChild(divAnButton);
        divAnButton.appendChild(animButton);
    }

    insertAll () {
        this.insertImagem();
        this.insertTitulo();
        this.insertDescription();
        this.insertButton();
    }
};

const srd = new Product(1, "W-THANE SRD 501 ",
"Tinta Pu Dupla função poliuretano acrílico " + 
"de secagem rápida, alta resistência anticorrosiva " + 
"e ao intemperismo. Produto aceita aplicação em diversos " +
"tipos de substrato: aço jateado, aço carbono " + 
"laminado a quente (chapa preta), aço carbono " + 
"fosfatizado e galvanizado.",
 "./img/lata-branca-weg.png");

const flex = new Product(2, "W-FROTA PU FLEX",
"Tinta base poliuretano para aplicação em lonas e outras " + 
"superfícies flexíveis. Devido a sua versatilidade também " +
"pode ser utilizado como verniz para sistema de dupla camada" +
" de até mesmo efeito metálico em substratos flexísiveis, outra" +
" característica importante é a proteção e brilho no substrato" +
" proporcionando uma grande facilidade no processo de limpeza.",
"./img/lata-weg-roxa.png")

// Array de Todos os produtos;
const allProducts = [srd, flex];

// Map date of each word in array product
function mapWordProduct (indiceArray) {
    let allLettersProduct = [];
    for(let letter of indiceArray){
        allLettersProduct.push(letter);
    };
    return allLettersProduct;
};


// Junção string dos dados do produto retorna uma array
function dataProducts (produto) {
    
    const regex = /[\W/" "]/;
    
    let titulo = produto.name;
    let desc = produto.description;

    let stringDados = (titulo + desc).toLowerCase();
    let arrayDados = stringDados.split(regex).filter(x => x !== "");
    
    return arrayDados;
};

//==========================END WORK WITH PRODUCTS===========================















// FUNÇÃO BUSCAR ANTIGA ABAIXO \/

// botaoBuscar.addEventListener("click", mostrarResultado);
// // CADASTRO DE TODOS OS PRODUTOS

// const produtoSrd = {
//     name: document.querySelector(".tituloSrd").textContent,
//     cod: "01",
//     lista: document.querySelector(".produto__srd"),
//     descricao: document.querySelector(".descricaoSrd").textContent
    
// };

// const produtoFlex = {
//     name: document.querySelector(".tituloflex").textContent,
//     cod: "02",
//     lista: document.querySelector(".produtoFlex"),
//     descricao: document.querySelector(".descricaoFlex").textContent
// };

// const produtoSintetico = {
//     name: document.querySelector(".tituloSintetico").textContent,
//     cod: "03",
//     lista: document.querySelector(".produtoSintetico"),
//     descricao: document.querySelector(".descricaoSintetico").textContent
// };

// //TODOS OS OBJETOS PRODUTOS
// let todosProdutos = [produtoSrd, produtoFlex, produtoSintetico];

// function mostrarResultado () {

//     let obj = objetosAchados();
//     let ordem = ordenarResultado(obj);

//     for(let achado of ordem){
//         achado.obj.lista.hidden = false;
//     };
// };

// function ordenarResultado (arrayAchados) {
    
//     let arrayNumeros = [];
//     let listaOrdenada = [];

//     //extrai os numeros e cria uma array
//     for(let item of arrayAchados){
//         arrayNumeros.push(item.qtDmatch);
//     };

//     //array em ordem decrescente
//     arrayNumeros.sort((a,b) => {
//         if(a > b){
//             return -1;
//         }
//         if(a < b) {
//             return 1;
//         }
//         return 0;

//     });

//     // ordena a lista 
//     for(i = 0; i < arrayNumeros.length; i++){
//         for(let item of arrayAchados){
//             if(arrayNumeros[i] === item.qtDmatch){
//                 listaOrdenada.push(item);
//                 break;
//             };
//         };
//     };

//     return listaOrdenada;
// };

// function objetosAchados () {
    
//     let achados = [];
    
//     for(let produto of todosProdutos){
//         let encontrados = quantosMatch(produto);
//         if(encontrados.obj){
//         achados.push(encontrados);
//         }
//     };
    
//     return achados;
// };

// function quantosMatch (produto){
    
    //     let produtoName = produto.name.toLowerCase();
//     let produtoDescricao = produto.descricao.toLowerCase();
//     let allInfoProduct = produtoName + " " + produtoDescricao;
//     let arrayProduto = allInfoProduct.split(" ");
//     let campoDeBusca = inputBuscar.value.toLowerCase();
//     let arrayBusca = campoDeBusca.split(" ");
//     let achados = {};

//     for(let palavraBusca of arrayBusca){
//         for(let palavraProduto of arrayProduto){
            
//             if(palavraBusca === palavraProduto){
            
//                 if(achados["produto"]){
//                     achados["qtDmatch"] += 1;
//                 } else {
//                     achados = {
//                         "produto" : produto.name,
//                         "qtDmatch" : 1,
//                         "obj" : produto
//                     };
//                 };
//             };
//         };
//     };

//     return achados;
// };




  