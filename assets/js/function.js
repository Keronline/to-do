//Funação nominal com parâmetros obrigatórios
//Uma função sem return é uma subrotina

function escreve(nome, sobrenome){
    const a = sobrenome;
    if( a == null){
        console.log("É nulo!");
        console.log("O valor de a é", a, "!\n");
        console.log("O valor de sobrenome é", sobrenome, "!\n");
    }
    console.log(`${nome} ${sobrenome}`);
}

//Imprime KAroline undefined - o segundo 
//parâmetro não existe, não foi passada como parâmetro

//escreve('Karoline');

//Se não realizar o cast para Number, a soma resultará em concatenação

function soma(a,b="2"){
    return Number(a) + Number(b);
}

// expreção de função = é uma função abônima atribuída à uma variável

const exibe = function(x){
    return `Exibe o parâmetro ${x}`
}

//console.log(exibe("chocolate"));

// Onde o JS está endo executado? Qual o contexto?
// Contexto: Navegador. O this depende do contexto.
// No navegador, o this é o window.
// Mas se você estiver usando a versão estrita do JS,
// o this não será o window

// console.log(this === window);

function quemEoThis(){
    console.log(this === window);
}

function quemEoThisEstrito(){
    // quando queremos usar o JS na forma mais polida, 
    // o use strict deve ser informado no inicio
    "use strict";

    console.log("strict");
    console.log(this === window);
}

// console.log(this === document);

// quemEoThis();
// quemEoThisEstrito();

function Exibe2(){
    this.a = 50;
}

const novoObjeto = new Exibe2();
// console.log(novoObjeto.a);


function Pessoa(a) {
    let velocidade;

    this.velocidade = a;
     
    function andar() {
        console.log("velocidade atual", this.velocidade);
    }
}

// This no contexto global (fora de função) e dentro de uma função representa o objeto global  
// window, que é a janela do browser document está dentro do window, é uma 
// propriedade 

// Quando uso o use strict, o this é undefined

// console.log(Pessoa(2).andar());

let karol = this;

// console.log("quem é o this no contexto globlal", karol);

function globlalObj() {
    return this;
}

// document.write('<h1>A<h1>');
// document.write(globlalObj());

// O this é o próprio objeto quando está dentro de um objeto

const aluno = {
    nome: "Karol",
    matricula: 123,
    executar: function(){
        return this.nome;
    },
};

// document.write(aluno.executar());
// console.log(aluno.executar());

// this em um evente representa o elemento que está sofrendo a alteração

// Arrow function - função de seta, ela é mais curta, não possui contexto próprio

const novaFuncao = (a,b)=>{
    console.log("chamando de dentro de uma arrow function");
    // interpolação - chamar varável dentro de uma string
    console.log(`exibindo o valor de ${a}`);
    // concatenação
    console.log("exibindo o total de " + b.length);
};


const funcao3 = (a)=> {
    console.log(`O total de caractere de "${a}" é ${a.length}`);
}

funcao3("Bora almoçar");

//Quando for importar arquivo domfunctions, o JS não sabe quantas funcções estão contidas dentro do arquivo
//Quando eu preciso extrair qualquer recurso usando a desestruturação. Destructing
//import { addTask } from '.js/utils/domFunctions.js';

// o this não é utilizado na arrow function, é invalidado

// três pontinho é o spread operator

const carros = (primeiro, segundo, ...restante) =>{
    console.log(`Os carros informados forma: ${primeiro}, ${segundo}. Todos os demais são ${restante.join(",")}`);
};

carros("fusca", "corsa", "brasilia", "kombi", "opala");

const frutas = ["guaraná", "Cupuaçu", "Açai"];

// coloca as frutas como elementos e não como um array dentro de outro

const todasFrutas = [...frutas, "banana", "abacaxi"];

console.log("Todas as frutas", todasFrutas);


// destructinf assignment - atribuição por desestruturação
let a = 50;
let b = 100;
const [primeiro, segundo, ...resto] = [a, b, 10, 1000, 5000 ];
console.log("exivindo o primiero", primeiro);
console.log("exibindo o resto", resto);

const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(" - "));

// const [p,s,t,q] = meuArray;
const [q,...p] = meuArray.reverse();

console.log("exibindo o quarto elemento", p.reverse());