const searchField = document.querySelector(".searchField");
const searchButton = document.querySelector(".botaoPesquisar");
const resultSpace = document.querySelector(".divResultados");
const divAnButton = document.querySelector(".animated-div");
const animButton = document.querySelector(".animated-button1");



//=======================FUNCTION MASTER=================================================
// intuição da função é encontrar a maior sequência de letras em uma palavra
function sequenceMatch() {

    let encontrados = indexLetterName();
    for(i = 0; i < encontrados.length; i++){
        // obE = objeto dos encotrados
        let obE = encontrados[i].achados[0];
        // console.log(obE);
                
        for(let chave in obE){
            
            console.log(chave);
            console.log(obE[chave]);
            console.log(typeof obE[chave]);

        }
        
    }
    
}

// RESULTADO DA COMPARAÇÃO ENTRE O CAMPO DE BUSCA COM AS PALAVRAS INTEIRAS DOS PRODUTOS.

function fullWordsResult () {
    
    let resultado = [];
    
    let campoBusca = arraySearchValue(searchField.value); // ex: "SRD DUPLA FUNÇÂO"
    
    for(let produto of allProducts){
        
        let dados = dataProducts(produto);
        let arrayDadosProduto = arrayDataProducts(dados);
        // console.log(arrayDadosProduto.length);
        
        let objResult = {
            nomeProduto: produto.name,
            palavras: []
        }

        for(let palavraBusca of campoBusca){
            // console.log(palavraBusca);
            for(let palavraProduto of arrayDadosProduto){
                // console.log(palavraProduto);
                // console.log(arrayDadosProduto.indexOf(palavraProduto));
                if(palavraBusca == palavraProduto){
                    // console.log(palavraBusca + " " + palavraProduto + " " + produto.name);
                    objResult.palavras.push(palavraProduto);
                    // console.log(objResult);
                }
            }
        }
        resultado.push(objResult);
    }
    console.log(resultado)
    return resultado;
}


//========================END OF FUNCTION MASTER==========================================




//=========================SUPPORT FUNCTION OF MASTER=====================================

function indexLetterName () {

    let busca = searchField.value.toLowerCase().replaceAll(" ", "");

    let resultadoFinal = [];

    for(let produto of allProducts){

        let resultado = compareLetters(produto, busca);
        resultadoFinal.push(resultado);
    }

    return resultadoFinal;

}

function compareLetters (produto, campoDeBusca){

    let produtoString = produto.name.toLowerCase().replaceAll(" ", "");

    let objDeRetorno = {

        nomeProduto: produtoString,
        achados: []
    }

    let finds = {};

    for(i = 0; i < campoDeBusca.length; i++){

        for(x = 0; x < produtoString.length; x++){

            if(campoDeBusca[i] === produtoString[x]){

                
                // if(finds[produtoString[x]]){
                    
                //     finds[produtoString[x]].push(x);
                    
                // } else {
                    
                //     finds[produtoString[x]] = [x];
                    
                // }
            }
        }
    }
    
    objDeRetorno.achados.push(finds);
    return objDeRetorno;

}


//==========================END SUPPORT FUNCTIONS=========================================




//=============================WORK WITH SEARCHFIELD========================================

function mapArraySearch () {
    
    let arraySearch = arraySearchValue(searchField.value);
    // console.log(arraySearch);
    
    let allLettersArray = [];
    
    for(i = 0; i < arraySearch.length; i++){
        // console.log(i)
        let sequelizeWord = arrayLetters(arraySearch[i]);
        // console.log(sequelizeWord);
        allLettersArray.push(sequelizeWord);
    };

    // console.log(allArraySearch);
    return allLettersArray;
};

//Usado no MapArraysearch
function arrayLetters (indice) {
    let x = [];
    for(let i of indice){
        x.push(i);
    };
    return x;
};

//Usado no mapArraySearch
function arraySearchValue (inputValue) {
    const regex = /[()" ",]/;
    inputValue.toLowerCase();
    let resultado = inputValue.split(regex).filter(x => x !== "");
    return resultado;
};

//=============================END WORK WITH SEARCHFIELD=====================================



//===============================WORK WITH PRODUCTS===========================================

class Product {
    constructor(id, name, description, imgUrl, indexA, indexB){
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = imgUrl;
        this.indexA = indexA;
        this.indexB = indexB;
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

const srd = new Product(1, "W THANE SRD 501 ",
"Tinta Pu Dupla função poliuretano acrílico " + 
"de secagem rápida, alta resistência anticorrosiva " + 
"e ao intemperismo. Produto aceita aplicação em diversos " +
"tipos de substrato: aço jateado, aço carbono " + 
"laminado a quente (chapa preta), aço carbono " + 
"fosfatizado e galvanizado.",
 "./img/lata-branca-weg.png",
 "tinta pu dupla função elimina etapas do primer e verniz",
 "src sre crd drd rds drc drs tane dane thene tene taine");

const flex = new Product(2, "W FROTA PU FLEX",
"Tinta base poliuretano para aplicação em lonas e outras " + 
"superfícies flexíveis. Devido a sua versatilidade também " +
"pode ser utilizado como verniz para sistema de dupla camada" +
" de até mesmo efeito metálico em substratos flexísiveis, outra" +
" característica importante é a proteção e brilho no substrato" +
" proporcionando uma grande facilidade no processo de limpeza.",
"./img/lata-weg-roxa.png",
"tinta pu lonas siders flexísiveis",
"frex frix frax lona side saide said seid frequisi frequixi fresquisci frequissi flequisi flecsi flexe");

// Array de Todos os produtos;
const allProducts = [srd, flex];

// Map date of each word in array product
function mapWordProduct (produto) {
    
    let arrayProductsLetters = [];

    let dados = dataProducts(produto);
    let arrayDados = arrayDataProducts(dados);
        
    for(i = 0; i < arrayDados.length; i++){
        let Letters = arrayLetters(arrayDados[i])
        arrayProductsLetters.push(Letters);
    };
    
    return arrayProductsLetters;
};

// Junção string dos dados do produto retorna uma array
function arrayDataProducts (produtoDados) {
    
    const regex = /[()" ",]/;
    
    let arrayDados = produtoDados.split(regex).filter(x => x !== "");
    
    return arrayDados;
};

function dataProducts (produto){
    
    let titulo = produto.name;
    let desc = produto.description;

    let stringDados = (titulo + " " + desc).toLowerCase();

    return stringDados;
}
//==========================END WORK WITH PRODUCTS===========================
