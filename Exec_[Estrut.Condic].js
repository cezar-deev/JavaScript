if (idade >= 16) {
    console.log('Pode votar');
}
else {
    console.log('Não pode votar');
}

// -------------------------------------------------------------------

if (media >= 7 ) {
    console.log("Aprovado");
}
else {
    console.log(“Reprovado”);
}

//--------------------------------------------------------------------

if ( limite >= valor ) {
    console.log("Compra aprovada");
}
else {
    console.log("Compra negada");
}


//--------------------------------------------------------------------


if ( resposta == 5 ) {
    console.log("Resposta correta");
}
else {
    console.log("Resposta incorreta");
}

//-----------------------------------------------------------------------

if ( mes == 11 || mes == 12) {
    console.log("Promoção!");
}
else {
    console.log("Preço normal");
}

// --------------------------------------------------------------------

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica se o dia da semana é sábado ou domingo
if(dia_semana == 0 || dia_semana == 6) {
    //Imprime uma mensagem informando o horário de funcionamento
    console.log("Funcionamos apenas de Segunda à Sexta");
}
else
{
    //Do contrário, informa que a loja está aberta
    console.log("Loja aberta");
}


//-------------------------------------------------------------------


switch (ddd) {
    case 11:
        console.log("São Paulo");
        break;
    case 21:
        console.log("Rio de Janeiro")
        break;
}

//--------------------------------------------------------------------


If ternário


//--------------------------------------------------------------------


var status = "";
if ( nota > 7 ) {
status = "Aprovado";
}
else {
 status = "Reprovado";
}



Exemplo de if ternário :

var status = nota > 7 ? "Aprovado" : "Reprovado";

var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";


//--------------------------------------------------------------------


let montadora = "Fiat";

 if (montadora == "Nissan") {
    console.log("Nissan");
 }
   else if (montadora == "Honda") {
   console.log("Honda");
 }
 else
 {
    console.log("Fiat");
 }


//--------------------------------------------------------------------


 var dia_semana = 6;

switch (dia_semana) {
    
case 0:
    console.log("Domingo");   
break;
    
case 1:
    console.log("Segunda-feira");   
break;
    
case 2:
    console.log("Terça-feira");  
break;
    
case 3:
    console.log("Quarta-feira");  
break;
    
case 4:
    console.log("Quinta-feira");   
break;
    
case 5:
    console.log("Sexta-feira");  
break;
    
case 6:
    console.log("Sábado");   
break;
}


//--------------------------------------------------------------------


var consulta = 1;

switch (consulta) {
        case 0:
        console.log("Hoje");
        break; 
        
        case 1:
        console.log("Amanhã");      
        break;
    
        default:
        console.log("Sem compromisso");
}


//--------------------------------------------------------------------
//Complete corretamente o código abaixo para que o resultado impresso seja "Curso de JavaScript":

const nome = 'Ana';

switch (nome) {
    
    case "Ana":    
    case "Alberto":
      console.log("Curso de JavaScript");       
    break;
}


//--------------------------------------------------------------------
//Complete corretamente o código abaixo para que o resultado impresso seja "Gears of War":

let plataforma = 'xbox';
let jogo = "";

switch (plataforma) {  
  case 'xbox':    
  jogo = 'Gears of War';
  break;
  
  case "":
  jogo = 'Não temos jogos para seu console';
}

console.log(jogo);

//--------------------------------------------------------------------
//Reescreva os códigos abaixo alternando apenas as partes incorretas:

//Curto-circuito
let status = false;
status && console.log("Aprovado");

//If ternário
let status = false;
let resultado = (status) ? "Aprovado" : "Reprovado";


//--------------------------------------------------------------------
//Mudando de If termanio para If simples

let status = true;

   if (status == true) {  
   console.log("Compra aprovada");
}


/--------------------------------------------------------------------
//Complete o código abaixo de acordo com as instruções para converter corretamente o if em if ternário:

let produto = "Geladeira";
let retorno = "";

if(produto == "Geladeira")
{
    retorno = "desconto";
}
else
{
    retorno = "normal";
}

// convertendo

let retorno = ( produtto == "Geladeira" ) ? "desconto" : "normal"