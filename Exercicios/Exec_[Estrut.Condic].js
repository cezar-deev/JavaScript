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


