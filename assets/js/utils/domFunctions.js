// SOLID

// Princípios de boas práticas de programação 
// S - SRP - Single  Responsibility Principle
// Principio de Responsabilidade Única
// Funcções bem escritas devem ser  mantidas simples, curtas e realizando apenas um objetivo
//Quando precisamos da função de um outro arquivo precisaos esxportá-la

export function addTask(){
    alert("Cadastrando uma nova tarefa");
}
export function removeTask(){
    alert("Removendo uma nova tarefa");
}
export function update(){
    alert("Atualizando uma tarefa já registrada");
}
export function getAllTask(){
    alert("Listando todas as tarefas já registradas");
}
export function getTaskById(){
    alert("Exibindo uma tarefa já registrada ");
}

//Quando for importar arquivo domfunctions, o JS não sabe quantas funcções estão contidas dentro do arquivo
//Qaundo eu preciso extrair qualquer recurso usando a desestruturação. Destructing
//import { addTask } from '.js/utils/domFunctions.js';

