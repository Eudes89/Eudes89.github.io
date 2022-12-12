let inputBuscar = document.querySelector(".campo__pesquisar");
const botaoBuscar = document.querySelector(".botaoPesquisar");
const listaProdutos = document.querySelectorAll(".listaResultados li");
const campoNadaEncontrado = document.querySelector(".secaoNadaEncontrado");

botaoBuscar.addEventListener("click", mostrarResultado);
// CADASTRO DE TODOS OS PRODUTOS

const produtoSrd = {
    name: document.querySelector(".tituloSrd").textContent,
    cod: "01",
    lista: document.querySelector(".produto__srd"),
    descricao: document.querySelector(".descricaoSrd").textContent
    
};

const produtoFlex = {
    name: document.querySelector(".tituloflex").textContent,
    cod: "02",
    lista: document.querySelector(".produtoFlex"),
    descricao: document.querySelector(".descricaoFlex").textContent
};

const produtoSintetico = {
    name: document.querySelector(".tituloSintetico").textContent,
    cod: "03",
    lista: document.querySelector(".produtoSintetico"),
    descricao: document.querySelector(".descricaoSintetico").textContent
};

//TODOS OS OBJETOS PRODUTOS
let todosProdutos = [produtoSrd, produtoFlex, produtoSintetico];

function mostrarResultado () {

    let obj = objetosAchados();
    let ordem = ordenarResultado(obj);

    for(let achado of ordem){
        achado.obj.lista.hidden = false;
    };
};

function ordenarResultado (arrayAchados) {
    
    let arrayNumeros = [];
    let listaOrdenada = [];

    //extrai os numeros e cria uma array
    for(let item of arrayAchados){
        arrayNumeros.push(item.qtDmatch);
    };

    //array em ordem decrescente
    arrayNumeros.sort((a,b) => {
        if(a > b){
            return -1;
        }
        if(a < b) {
            return 1;
        }
        return 0;

    });

    // ordena a lista 
    for(i = 0; i < arrayNumeros.length; i++){
        for(let item of arrayAchados){
            if(arrayNumeros[i] === item.qtDmatch){
                listaOrdenada.push(item);
                break;
            };
        };
    };

    return listaOrdenada;
};

function objetosAchados () {
    
    let achados = [];
    
    for(let produto of todosProdutos){
        let encontrados = quantosMatch(produto);
        if(encontrados.obj){
        achados.push(encontrados);
        }
    };
    
    return achados;
};

function quantosMatch (produto){
    
    let produtoName = produto.name.toLowerCase();
    let produtoDescricao = produto.descricao.toLowerCase();
    let allInfoProduct = produtoName + " " + produtoDescricao;
    let arrayProduto = allInfoProduct.split(" ");
    let campoDeBusca = inputBuscar.value.toLowerCase();
    let arrayBusca = campoDeBusca.split(" ");
    let achados = {};

    for(let palavraBusca of arrayBusca){
        for(let palavraProduto of arrayProduto){
            
            if(palavraBusca === palavraProduto){
            
                if(achados["produto"]){
                    achados["qtDmatch"] += 1;
                } else {
                    achados = {
                        "produto" : produto.name,
                        "qtDmatch" : 1,
                        "obj" : produto
                    };
                };
            };
        };
    };

    return achados;
};

const allProducts = require("con");

console.log(allProducts);