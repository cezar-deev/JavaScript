var notas_aluno =[7, 6, 8, 5];
var total_notas = notas_aluno.length;
var soma_notas = notas_aluno[0] + notas_aluno[1] + notas_aluno[2] + notas_aluno[3];
var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno);

//---------------------------------------------------------------------------

var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 },
    { id: 2, nome: "Matemática",    carga_horaria: 220 },
    { id: 3, nome: "História",      carga_horaria: 160 },
    { id: 4, nome: "Geografia",     carga_horaria: 140 },
    { id: 5, nome: "Química",       carga_horaria: 160 },
    { id: 6, nome: "Física",        carga_horaria: 150 },
    { id: 7, nome: "Inglês",        carga_horaria: 120 }
];

console.log( colecao_disciplinas[1].id );
console.log( colecao_disciplinas[4].nome );
console.log( colecao_disciplinas[6].carga_horaria );

//---------------------------------------------------------------------------

var signos = [
    { nome: "Aquário",       descricao: "Inovação, originalidade e independência" },
    { nome: "Peixes",        descricao: "Solidariedade, intuição e desapego" },
    { nome: "Áries",         descricao: "Espontaneidade, coragem e energia" },
    { nome: "Touro",         descricao: "Persistência, sensualidade e teimosia" },
    { nome: "Gêmeos",        descricao: "Curiosidade, inteligência e liberdade" },
    { nome: "Câncer",        descricao: "Sensibilidade, carinho e família" },
    { nome: "Leão",          descricao: "Criatividade, autoestima e nobreza" },
    { nome: "Virgem",        descricao: "Objetividade, humanidade e organização" },
    { nome: "Libra",         descricao: "Vaidade, empatia e diplomacia" },
    { nome: "Escorpião",     descricao: "Intensidade, mistério e intuição" },
    { nome: "Sagitário",     descricao: "Otimismo, liberdade e movimento" },
    { nome: "Capricórnio",   descricao: "Responsabilidade, ambição e persistência"}
  ];

  var signo = {nome: "Gêmeos",descricao: "Curiosidade, inteligência e liberdade"};


  console.log( signos[11].nome);
  console.log( signo.nome);


  //---------------------------------------------------------------------------


var peso = 75.8;
var altura = 1.72;
var imc = peso / ( altura * altura );
imc = imc.toFixed(2);

console.log("O IMC é: " + imc);

//---------------------------------------------------------------------------


var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];

console.log(colecao_disciplinas[5].id);
console.log(colecao_disciplinas[1].carga_horaria);

//---------------------------------------------------------------------------

