//Declarando uma variável
var preco = 54.99;

// Multiplicando um número
var desconto = preco * 0.1;

// Imprimindo o valor do desconto
console.log("O valor do desconto é: " + desconto);

// ------------------------------------------

const n1 = 19 >= 18 ;

var atendeAClassificacaoEtaria = (idade >= 18);

console.log(
"Resultado : " + atendeAClassificacaoEtaria);


// ------------------------------------------

var nota_1 = 10;
var nota_2 = 8;
var nota_3 = 7;
var nota_4 = 5;
var media = (nota_1 + nota_2 + nota_3 + nota_4) / 4;

console.log  ("Média: " + media);


// ------------------------------------------

var maior_de_idade = 19 >= 18 ;
var habilitado =  maior_de_idade >= 17);

console.log("Maior de Idade: " + maior_de_idade);
console.log("Habilitado: " + habilitado);


// ------------------------------------------

var salario = 2800;
var bonus = 500;
var salario_total = salario + bonus;
console.log ("O salário a ser pago acrescido com o bônus será de : R$" + salario_total + ",00");

// ------------------------------------------

const n1 = 20 % 2 == 0;
const n2 = n1 + "0";
const n3 = 0 / 0;

console.log(n1, n2, n3);

// ------------------------------------------

var posicao_inicial =5; // m
var posicao_final = 23; // m
var tempo = 6; // s
var deslocamento = posicao_final - posicao_inicial;
var velocidade_media = deslocamento / tempo;

console.log("A velocidade média foi de " + velocidade_media + "m/s");

// ------------------------------------------

var nome = "Caio";
var sobrenome = "Teixeira";
var nome_completo = nome +" "+ sobrenome;

console.log("Nome completo: " + nome_completo);


// ------------------------------------------

var forca; // N
var massa = 2; // kg
var aceleracao = 6; // m/s²

forca = massa * aceleracao;

console.log
("O valor da força é de " + forca + "N");


// ------------------------------------------


var idade= 17;
var atendeAClassificacaoEtaria = idade >= 18;

console.log("É Maior ou Igual a 18 ? " + atendeAClassificacaoEtaria);

// ------------------------------------------

var tecnologia = "JavaScript";

console.log (tecnologia);

// ------------------------------------------

var numero_1 = 4;
var numero_2 = 7;

numero_1++
;
numero_2--
;

console.log(numero_1);
console.log(numero_2);


// ------------------------------------------


var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();

var dia_semana = data_atual.getDay();

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);


// ------------------------------------------

var disciplina = {   
    id: 1,
    nome: "Português",
    carga_horaria: 160
  };
  
  console.log(disciplina.id +" - "+ disciplina.nome +": "+ disciplina.carga_horaria+" Horas");

// ------------------------------------------


var curiosidades_pokemon = [
    { pokemon: "Kabuto",        curiosidade: "Pokémon regenerado a partir de um fóssil" },
    { pokemon: "Electabuzz",    curiosidade: "Possui seis dedos em cada mão" },
    { pokemon: "Ekans",         curiosidade: "Seu nome ao contrário significa cobra em inglês" },
    { pokemon: "Dragonite",     curiosidade: "Pode voar duas vezes a velocidade do som" },
    { pokemon: "Magikarp",      curiosidade: "Pula montanhas facilmente" },
    { pokemon: "Taillow",       curiosidade: "Voa mais de 180 milhas por dia" },
    { pokemon: "Muk",           curiosidade: "Uma gota desse pokémon pode poluir um lago inteiro" },
    { pokemon: "Slowbro",       curiosidade: "Único pokémon que pode voltar a evolução anterior" },
    { pokemon: "Zapdos",        curiosidade: "Tem maior vantagem de tipo entre os pássaros lendários" },
    { pokemon: "Spoink",        curiosidade: "Esse pokémon nunca para de pular" }
];

var tamanho_colecao = curiosidades_pokemon.length;
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);
var pokemon_escolhido = curiosidades_pokemon[numero_sorteado];
var nome_pokemon = pokemon_escolhido.pokemon;
var curiosidade_pokemon = pokemon_escolhido.curiosidade;

console.log("CURIOSIDADE SOBRE O UNIVERSO POKÉMON");
console.log("Pokémon: " + nome_pokemon);
console.log("Curiosidade: " + curiosidade_pokemon);


// ------------------------------------------

var programadores = [
    { nome: "Ramon",    linguagem: "PHP" },
    { nome: "Mateus",   linguagem: "Python" },
    { nome: "Régis",    linguagem: "JavaScript" },
    { nome: "André",    linguagem: "Java" },
    { nome: "Josué",    linguagem: "C#" }
];

console.log(programadores[4].linguagem);
console.log(programadores[2].nome);


// ------------------------------------------


var colecao_animes = [
    { id: 1, titulo: "Naruto",      episodios: 673 },
    { id: 2, titulo: "Bleach",      episodios: 366 },
    { id: 3, titulo: "One Piece",   episodios: 931 }
];

var primeiro_anime = colecao_animes[0];

var id_anime = primeiro_anime.id;
var titulo_anime = primeiro_anime.titulo;
var total_episodios_anime = primeiro_anime.episodios;

console.log("Id do anime: " + id_anime);
console.log("Título do anime: " + titulo_anime);
console.log("Total de episódios do anime: " + total_episodios_anime);


// ------------------------------------------


var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

console.log(colecao_series_programacao[5].sinopse);


// ------------------------------------------


