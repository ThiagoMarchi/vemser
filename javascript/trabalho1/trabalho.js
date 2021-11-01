let dados = []


// FUNÇAO 1
class Colaborador{
    id = '';
    nome = '';
    projeto = '';
    marcacoesPonto = [];
   
    constructor(id, nome, projeto, newProject){
        this.id = id 
        this.nome = nome
        this.projeto = projeto
    }

    marcarPonto(d,h){
        this.marcacoesPonto.push(new Marcacao(d,h));
    } 
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function criarColaborador() {

    var id = prompt('Por favor digite teu id')
    let checarId = isNumber(id)
    if(checarId === false) {
        var id = prompt('Por favor digite apenas números!') 
        var id
    } 

    var nome = prompt('Por favor digite teu nome')
    let checarName = /^[a-zA-Z]*$/.test(nome)
    if(checarName === false) {
        var nome = prompt('Por favor digite apenas letras!')
        var nome
    } 

    var projeto = String(prompt('Por favor digite teu projeto'))
    let checarProjeto = /^[a-zA-Z]*$/.test(projeto)
    if(checarProjeto === false) {
        var projeto = prompt('Por favor digite apenas letras!')
        var projeto
    } 
    
   
    let colaborador = new Colaborador(id, nome, projeto)
    console.log(colaborador)
    dados.push(id)
    dados.push(nome)
    dados.push(projeto)
}

// FUNÇAO 2

class Projeto{
    nomeColaborador = '';
    projetoAdicionado = ''
   
    constructor(nomeColaborador, projetoAdicionado){
        this.nomeColaborador = nomeColaborador
        this.projetoAdicionado = projetoAdicionado
    }
}
 


function criarProjeto() {

    var ColaboradorDonoProjeto= prompt('Por favor digite teu nome')
    let checarName = /^[a-zA-Z]*$/.test(ColaboradorDonoProjeto)
    if(checarName === false) {
        var ColaboradorDonoProjeto = prompt('Por favor digite apenas letras!')
        var ColaboradorDonoProjeto
    } 

    var projetoNovo = String(prompt('Por favor digite o nome do novo projeto a ser cadastrado'))
    let checarProjeto = /^[a-zA-Z]*$/.test(projetoNovo)
    if(checarProjeto === false) {
        var projetoNovo = prompt('Por favor digite apenas letras!')
        var projetoNovo
    } 
    
   
    let projeto = new Colaborador(ColaboradorDonoProjeto, projetoNovo)
    console.log(projeto)
    
}

//FUNÇAO 5

function marcarPonto() {
    let colaborador = new Colaborador(marcarPonto(12, '12h'))
    console.log(colaborador)
}








// FUNÇAO 9
function encerrarSistema() {
    alert('Menu encerrado!');
}


let menu = prompt(`
    Escolha uma das opções seguintes: \n

    1 - Cadastrar Colaborador \n
    2 - Cadastrar Projeto \n
    3 - Alocar Colaborador (à algum projeto) \n
    4 - Desalocar Colaborador \n
    5 - Marcar Ponto \n
    6 - Ver Lista de Colaboradores Sem Projeto \n
    7 - Ver Lista de Projetos Sem Colaboradores \n
    8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto \n
    9 - Encerrar Execução do Sistema \n
`)

if (menu >= 1 && menu <= 9) {
switch (menu) {
    case '1':
        criarColaborador()
        break
    case '2':
        criarProjeto()
        break
    case '3':
        alert('cadastrar Colaborador')
        break
    case '4':
        alert('cadastrar Colaborador')
        break
    case '5':
        marcarPonto()
        break
    case '6':
        alert('cadastrar Colaborador')
        break
    case '7':
        alert('cadastrar Colaborador')
        break
    case '8':
        alert('cadastrar Colaborador')
        break
    case '9':
        encerrarSistema()
        break
}
} else  alert('Por favor reiniciei o sistema e digite uma opção numérica desejada!')







