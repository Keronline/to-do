import { addTask, getAllTasks } from "./utils/domFunctions.js";


// Programar em inglês é um aboa prática.

// Construção do sistema de terefas.

// Local onde as tarefas serão armazenadas. Armazenamento em memória.
//Usamos um vetor de objetos literais.

// Os dados são armazenados em local Storage e sessionStorage.

// Com NodeJS, armazenaremos nossos dados em banco de dados não relacionais
// como MongoDB e Firebase. Realiza armazenamento persistente.

const db = [
    {
        id: 1,
        title: 'Concluir App Conexão Arte', 
        steps: [
            {step: 'Ajustar testos'},
            {step: 'Trocar imagens para imagens públicas'},
            {step: 'Publicar no Expo'},
            {step: 'Publicar no Expo Store Connect'},
        ],
        done: false,
        dueDate: '2022-05-06',
        reminder: '2022-05-02 10:00',
    },

    {
        id: 2,
        title: 'Aula 4 Fiap - Avanade', 
        steps: [
            {step: 'Atributos Globais'},
            {step: 'Estrutura CSS'},
        ],
        done: false,
        dueDate: '2022-04-28',
    },
];

getAllTasks(db);
//console.log(db[0].title);

// Dom - Document Object Model - é o JS acessando o HTML e o manipulando
// HTML é interpretado pelo navegador e gera uma árvore de comandos chamada DOM
// Psso selecionar elemesntos por tag, ID (mais usado em JS) e classes

// A diferença entre getElementent r querySelector é que o último dá mais
// opções de parâmetros ( não lembro o real nome).

const form = document.querySelector("#addNewTask");

// Usar document.query ao invés de form.query na linha abaixo deixa o código mais
// abstrato, possibilitando alterações de design

const newTask = document.querySelector("#inputTxtNewTask");

// 

form.addEventListener("submit", (e) => {
    e.preventDefault();
});
newTask.addEventListener("keyup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(e.key == "Enter"){
        if(!newTask.value){
            alert('Digite uma nova tarefa para ser adicionada');
        }
        else{
            // Mostra mensagem em um box na parte superior tela
            alert(newTask.value);
            // Inserir novo item no array
            const day = new Date();
            const today = `${day.getFullYear()}-${(day.getMonth() + 1)}-${day.getDate()}`;
            db.push({
                id: Number(db.length) + 1, 
                title: newTask.value, 
                steps: [], 
                done: false, 
                dueDate: today,
            });
            
            //seleciona todas os elementos que estão inclusos na classe tasks e apago 

            document.querySelector(".tasks").innerHTML = "";

            //crio uma div para todos os elementos no banco de dados db

            getAllTasks(db);
            
            //addTask(db, newTask.value);
            
            newTask.value = "";            
        }        
    }     
    console.log(db);    
});




