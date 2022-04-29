### console.log("Hello, World");

### const nome = 'Karol';
### let email = 'tecnologia.karol@gmail.com';
### console.log(`Nome: ${nome}  Email: ${email}`);

### if((nome == "Karol")){
###     console.log('Nome correto');
### }

### function escreve(x){
###     console.log("Frase:" + x);
### }

### escreve(`Seja bem vinda, ${nome}`);
### escreve("Treinamento HTML5, CSS3 e JS")

### console.log(`número de elementos: ${db.length}`);

### const frutas = ['banana', ' abacate', 'melância', 'abacaxi'];

### console.log(frutas.length);

### ### criando um objeto literal
### ### Padrão parecido com JSON, de modo a não incluir ações
### const dados = {
###     nome: 'Karol',
###     idade: 25,
###     programadora: true,
###     acao: (x,y)=>{
###         console.log(`Executando uma ação ${x+y}`);
###     }
### };
### console.log(dados.acao(15,7));

### ### Objeto é um conjunto de atributos (propriedade ou valores) e métodos (ações ou frutas)

### HTML para colocar um novo step na ultima tarefa

            <form id="addNewStep">
                <label for="inputTxtNewStep" draggable="true">
                    <input type="text" id="inputTxtNewStep" placeholder="Adicionar nova step" />
                </label>
            </form>

### Adicionar novo step na última tarefa 

### const newStep = document.querySelector('#inputTxtNewStep');
### const forms = document.querySelector('#addNewStep');
### forms.addEventListener("submit", (a) => {
###     a.preventDefault();
### });
### newStep.addEventListener("keyup", (a) => {
###     a.preventDefault();
###     a.stopPropagation();
###     if(a.key == "Enter"){       
###         db[db.length-1].steps.push({step: newStep.value});
###         newStep.value = "";
###         console.log(db);
###         console.log(db[db.length - 1].steps);
###     }    
### });