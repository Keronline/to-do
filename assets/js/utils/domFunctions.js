// SOLID

// Princípios de boas práticas de programação 
// S - SRP - Single  Responsibility Principle
// Principio de Responsabilidade Única
// Funcções bem escritas devem ser  mantidas simples, curtas e realizando apenas um objetivo
// Quando precisamos da função de um outro arquivo precisaos esxportá-la

export function addTask(db, title=""){
// Criando um nova tarefa
    const task = document.createElement('div');
    //const id = Number(db.length) + 1;

    task.classList.add('task');
    task.setAttribute('id', db.id);
    
// Quando for criar elementos dinamicamente, o elemento que envolve todos mundo deve ser
// criado com o comando document.createElemente(''); (mostrado acima) . O que vem dentro dele pode ser 
// criado como texto (mostrado abaixo).
    const taskNew = `
    <div> <input type="checkbox" id="check_${db.id}"> </div>
        <div>
            <div><span class="title-task">${title?title:db.title}</span></div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path fill="#FFF" d="M12 12.775ZM8.4 18.35 9.75 13.875 6.3 11.35H10.6L12 6.75L13.4 11.35H17.7L14.275 13.875L15.625 18.35L12 15.6ZM9.625 16.625 12 14.8 14.4 16.625 13.525 13.625 15.75 12H12.95L12 8.925L11.075 12H8.275L10.5 13.625Z"/>
            </svg>
        </div>
    `;
    task.innerHTML = taskNew;
    document.querySelector('.tasks').appendChild(task);
}

export function removeTask(){
    const task = document.querySelector('.tasks');
    document.querySelector('.tasks').removeChild(task);
}

export function update(){
    alert("Atualizando uma tarefa já registrada");
}

export function getAllTasks(db){
    db.forEach(item => {
        addTask(item, item.title);
    });
}

export function getTaskById(){
    alert("Exibindo uma tarefa já registrada");
}

//Quando for importar arquivo domfunctions, o JS não sabe quantas funcções estão contidas dentro do arquivo
//Quando eu preciso extrair qualquer recurso usando a desestruturação. Destructing
//import { addTask } from '.js/utils/domFunctions.js';

