



let contador = 0;
while ( contador < 5) {
    console.log(contador); 
    contador++;  // é obrigaorio o uso do incremento, senão entra em loop //
}  

/* Resultado : 
1
2
3
4 
*/

//---------------------------//

let numero = 3;
let contador = 0;
console.log("Tabuada de multiplicação - Nº " + numero);
while ( contador <= 10 ) {
    let resultado = numero * contador;
    console.log( numero + " x " + contador + " = " + resultado );
    contador++;
}

// Tabuada de multiplicação - Nº 3
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

//---------------------------//

let paises = ["Brasil", "Suíça", "França", "Japão"];
let contador = 0;
while ( contador < paises.length ) {
    console.log(paises[contador]);
    contador++;
}

// Brasil
// Suíça
// França
// Japão

//---------------------------//


let numeros = [10, 5, 7, 8, 9, 6, 12, 4];
let total_impares = 0;
let total_pares = 0;
let contador = 0;
while ( contador < numeros.length ) {
    if( numeros[contador] % 2 == 0 ){
        total_pares++;
    } else {
        total_impares++;
    }
    contador++;
}
console.log(" O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);

// O total de números ímpares é: 3
// O total de números pares é: 5


//---------------------------//


let alunos = ["Diogo","Carlos","Danilo","Pedro","César"];
let contador = 0;
while ( contador < alunos.length ) {
    let aluno_nome = alunos[contador];
    console.log( "Aluno: " + aluno_nome );
    contador++;
}

// Aluno: Diogo
// Aluno: Carlos
// Aluno: Danilo
// Aluno: Pedro
// Aluno: César


//---------------------------//

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;
while ( contador < funcionarios.length ) {
    let funcionario = funcionarios[contador];
    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }
    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// Funcionário habilitado encontrado: Renan


//---------------------------//

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];
let contador = 0;

while ( contador < alunos.length ) {
    let aluno = alunos[contador];
    contador++;
    if ( aluno.media < 6 ) {
        continue;
    }
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
}

// Id: 1
// Nome: Bruna
// Média: 8


// Id: 2
// Nome: Laura
// Média: 7


// Id: 5
// Nome: Rafael
// Média: 10


//---------------------------//

let contador = 0;
do {
    console.log(contador);
    contador++;
} while ( contador < 0 );

// 0

//---------------------------//

let contador = 0;
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
do {
    console.log(meses[contador]);
    contador++;
} while ( contador < meses.length );

// Janeiro
// Fevereiro
// Março
// Abril
// Maio
// Junho
// Julho
// Agosto
// Setembro
// Outubro
// Novembro
// Dezembro


//---------------------------//


let multiplicador = 8;
console.log("Tabuada de multiplicação do Nº " + multiplicador);
for ( let contador = 0; contador <= 10; contador++ ) {
    let resultado = multiplicador * contador;
    console.log( multiplicador + " x " + contador + " = " + resultado );
}

// 8 x 0 = 0
// 8 x 1 = 8
// 8 x 2 = 16
// 8 x 3 = 24
// 8 x 4 = 32
// 8 x 5 = 40
// 8 x 6 = 48
// 8 x 7 = 56
// 8 x 8 = 64
// 8 x 9 = 72
// 8 x 10 = 80

//---------------------------//

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for( let contador = 0; contador < meses.length; contador++ ) {
    console.log(meses[contador]);
}

// Janeiro
// Fevereiro
// Março
// Abril
// Maio
// Junho
// Julho
// Agosto
// Setembro
// Outubro
// Novembro
// Dezembro

//---------------------------//

let notas_trimestrais = [7, 8, 6, 5];
let soma_notas = 0;
const quantidade_notas = 4;
for ( let contador = 0; contador < quantidade_notas; contador++ ) {

    soma_notas = soma_notas + notas_trimestrais[contador];

}
let media = soma_notas / quantidade_notas;
if ( media >= 6 ) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Aprovado


//---------------------------//


let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };
for ( let dados in aluno ) {
    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25

//---------------------------//


let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };
let percentual_desconto = 5;
for ( let propriedade in carro ) {
    if ( propriedade == "preco" ) {
        let preco = propriedade;
        let desconto = ( carro[preco] * percentual_desconto ) / 100;
        let novo_preco = carro[preco] - desconto;
        console.log("novo preço: R$" + novo_preco + ",00");
    } else {
        console.log(propriedade + ": " + carro[propriedade]);
    }
}

// nome: Argo
// marca: Fiat
// Novo preço: R$47500,00
// ano: 2020


//---------------------------//

let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;
for ( let contador = 0; contador < produtos.length; contador++ ){
    let produto = produtos[contador];
    for ( let propriedade in produto ){
        if ( propriedade == "preco" ) {
            let preco = propriedade;
            let novo_preco = produto[preco] - desconto;
            console.log("preço atualizado: R$" + novo_preco + ",00");
        } else {
            console.log(propriedade + ": " + produto[propriedade]);
        }
    }
    console.log("\n");
}

// id: 1
// nome: pizza
// preço atualizado: R$45,00

// id: 2
// nome: macarronada
// preço atualizado: R$20,00

// id: 3
// nome: lasanha
// preço atualizado: R$40,00

// id: 4
// nome: nhoque
// preço atualizado: R$25,00



//---------------------------//



let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {
    console.log("Email: " + email);
}

// Email: danilo@email.com
// Email: jessica@email.com
// Email: luana@email.com
// Email: gustavo@email.com


//---------------------------//

let clientes_array = [
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {
    let nome = cliente.nome;
    let telefone = cliente.telefone;
    console.log("Nome: " + nome + " - Telefone: " + telefone);
}

// Nome: Mônica - Telefone: 99999-6565
// Nome: Tânia - Telefone: 99999-0778
// Nome: Carlos - Telefone: 99999-0551


//---------------------------//


let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

let percentual_desconto = 10;
for ( let produto of produtos_array ) {
    let nome = produto.nome;
    let preco = produto.preco;

    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");
}

// Novo valor do produto mouse: R$45,00
// Novo valor do produto teclado: R$81,00
// Novo valor do produto monitor: R$315,00
// Novo valor do produto nobreak: R$540,00





//-------------------------------//


let notas_trimestrais = [9, 7, 6, 7];
let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for ( let nota of notas_trimestrais ) {
    soma_notas = soma_notas + nota;
}

let media = soma_notas / total_notas;
console.log("Média: " + media);
if ( media >= 7 ) {
    console.log("Aprovado");
} else if ( media >= 6 && media < 7 ) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// Média: 7.25
// Aprovado


// -------------------------------------   //

let categorias =[
    {id: 1, nome: "Ficção científica"},
    {id: 2, nome: "Aventura"},
    {id: 3, nome: "Comédia"},
    {id: 4, nome: "Terror"},
    {id: 5, nome: "Drama"}
];

for (let categoria of categorias) {
    console.log(categoria.id);
    console.log(categoria.nome);
}

//-----------------------------------//

let artigos = [
    { id: 1, titulo: "Introdução a orientação a objetos", ano: 2010 },
    { id: 2, titulo: "Desvendando os padrões de projeto", ano: 2016 },
    { id: 3, titulo: "Testes unitários com JUnit",        ano: 2018 },
    { id: 4, titulo: "Aplicações com Laravel",            ano: 2015 },
    { id: 5, titulo: "Introdução ao Spring MVC",          ano: 2017 }
];

let contador = 0;
let total_artigos = artigos.length;

while ( contador < total_artigos ) {
    let id_artigo = artigos[contador].id;
    let titulo_artigo = artigos[contador].titulo;
    let ano_artigo = artigos[contador].ano;

    contador++;

    if ( ano_artigo <= 2016 ){
        continue;
    }

    console.log("Id do artigo: " + id_artigo);
    console.log("Título do artigo: " + titulo_artigo);
    console.log("Ano do artigo: " + ano_artigo);
    console.log("\n");
}


// --------------------------------------//


let chuvas_de_meteoros = [
    { nome: 'Alfa Centaurídeos',            declinacao: -59,  intensidade: 'Média'},
    { nome: 'Gama Normídeos',               declinacao: -50,  intensidade: 'Média'},
    { nome: 'Pi Pupídeos',                  declinacao: -45,  intensidade: 'Irregular'},
    { nome: 'Líridas',                      declinacao:  34,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',                declinacao:  -1,  intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',                  declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',           declinacao:  48,  intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          declinacao: -10,  intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       declinacao: -16,  intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',          declinacao: -30,  intensidade: 'Média'},
    { nome: 'Perseidas',                    declinacao:  58,  intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               declinacao:  59,  intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',              declinacao:  39,  intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        declinacao:  40,  intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              declinacao:   9,  intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    declinacao:  16,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   declinacao:  54,  intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           declinacao:  27,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               declinacao:  37,  intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            declinacao:  22,  intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     declinacao:  22,  intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          declinacao:   1,  intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               declinacao:   8,  intensidade: 'Fraca'},
    { nome: 'Fenícidas',                    declinacao: -53,  intensidade: 'Irregular'},
    { nome: 'Quadrântidas',                 declinacao:  49,  intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',              declinacao: -45,  intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              declinacao:   2,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   declinacao:  30,  intensidade: 'Média'},
    { nome: 'Gemínidas',                    declinacao:  33,  intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            declinacao:  18,  intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      declinacao:  76,  intensidade: 'Média'},
];

for
 ( let chuva of chuvas_de_meteoros ) {
    
console.log(chuva.nome);  
console.log(chuva.declinacao);

}


// ---------------------------------  //

let produtos= [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0 ; contador < produtos.lenght;contador++ ) {
let produto = produtos[contador];
 
    for ( let propriedade in produtos ){
          if ( propriedade == "preco" ) {
             let preco = propriedade;
             let novo_preco = produto[preco] - desconto;
             console.log("preço atualizado: R$" + novo_preco + ",00");
          }  else {
            console.log(propriedade + ": " + produto[propriedade]);
    }
}
    console.log("\n");
}


// ------------------------------------------------------ //



let linguagem = "JavaScript";
let stack = "mobile";
let msg = "";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}


// -------------------------- EXEMPLO-1-------------------------- ///
let nome = "Isabela";
let frase = nome + " está aprendendo Javascript";

let tamanho_nome = nome.length;
let frase_nome = frase.length;

console.log(tamanho_nome); // 7
console.log(frase_nome); // 34

//-----------------------------------------//

let cep = "23010-090";

if ( cep.length != 9 ){
    console.log("O CEP deve ter 9 caracteres");
}

// --------------------------------//

let programador_1 = "Flávia";
let programador_2 = "Rogério";

console.log(programador_1.toUpperCase()); // FLÁVIA
console.log(programador_2.toLowerCase()); // rogério

//-------------------------------------//

let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}

// -----------------------------------//

let nome = "   Diego     ";
let resultado = nome.trim();

console.log(resultado); // Diego


// --------------------------------------


let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);
console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

//                Aluno: Edmilson
// Grau de escolaridade: Ensino Médio Completo

// -----------------------------------------------

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome.padEnd(25, '.') + valor_nome );
console.log( label_profissao.padEnd(25, '.') + valor_profissao );
console.log( label_endereco.padEnd(25, '.') + valor_endereco );

// Nome:....................Jorge Luiz
// Profissão:...............Professor
// Endereço:................Rua Cruzeiro do Sul

//---------------------------------


let texto = "A linguagem PHP é muito poderosa";
let resultado = texto.replace("PHP", "JavaScript");

console.log(resultado); // A linguagem JavaScript é muito poderosa

// -----------------------------------

let texto = "Gabriel adora JavaScript! Ele faz exercícios de JavaScript todos os dias para aprender mais.";
let resultado = texto.replace("JavaScript", "JS");

console.log(resultado); // Gabriel adora JS! Ele faz exercícios de JavaScript todos os dias para aprender mais.

// -------------------------------


let texto = "O Rio de Janeiro é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!";

let resultado = texto.replace("Rio de Janeiro", "RJ");

console.log(resultado);

// O RJ é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!

//---------------------

let frase = "Estou aprendendo JavaScript na DevMedia";
let resultado = frase.substr(17, 10);

console.log(resultado); // JavaScript

//---------------------------------

let frase = "Eu sou programador JavaScript";
let resultado = frase.substring(7, 18);

console.log(resultado); // programador


//--------------------------------------

let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao = frase.indexOf("sonho");

console.log(posicao); // 14

//----------------

let frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao = frase.indexOf("esperança");

console.log(posicao); // -1

//----------------------------------

let expressao_proibida = "passaporte falso";
let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else {
    console.log("Seu comentário foi aprovado");
}

console.log(comentario); // venda de passaporte falso

//-----------------------

let paises_string = "Brasil Espanha Canadá Irlanda Suíça";
let paises_array = paises_string.split(" ");

console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]

//-------------------------------

let cores_string = "vermelho,azul,branco,cinza,roxo";
let cores_array = cores_string.split(",");

console.log(cores_array); // (5) ["vermelho", "azul", "branco", "cinza", "roxo"]

// --------------------------

let nome_completo = "Ana Mendes da Silva";
let array = nome_completo.split(" ");
let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a)

// ----------------------------