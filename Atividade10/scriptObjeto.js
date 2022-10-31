alert("Criando objetos!");

//Usando Construtor
function Aluno(nome, ra){
	this.nome = nome;
	this.ra = ra;
	
}

var aluno = new Aluno("Paulo Henrique Raitz Cervencove",
	"0030481921006");
	

alert("Testando com construtor: "
	+ "\nNome: " + aluno.nome
	+ "\nRA: " + aluno.ra);
	

//Sem Construtor
var aluno2 = {};
aluno2.nome = "Maria Cristina Herrador Raitz Cervencove";
aluno2.ra = "00304819210009";


alert("Testando sem construtor: "
	+ "\nNome: " + aluno2.nome
	+ "\nRA: " + aluno2.ra);
	

//Forma Literal
var aluno3 = {
	nome: "Angelo",
	ra: "0000000000002",
	
};

alert("Testando forma literal: "
	+ "\nNome: " + aluno3.nome
	+ "\nRA: " + aluno3.ra);
	