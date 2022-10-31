

alert("Parte 1: Calcular area de retângulo.");

function calcularArea(x, y){
	return x * y;
}

function Retangulo(x, y){
	this.x = x;
	this.y = y;
	this.area = calcularArea(this.x, this.y);
}

var base = parseFloat(prompt("Insira o valor da base do retângulo: "));
var altura = parseFloat(prompt("Insira o valor da altura do retângulo: "));

var objRetangulo = new Retangulo(base, altura);

alert("O valor da área do retângulo é: " + objRetangulo.area.toFixed(2));

/// 2

alert("Parte 2: Criar conta poupança e conta corrente");

function Conta(){
	var nomeCorrentista;
	this.getNomeCorrentista = function(){
		return nomeCorrentista;
	};
	this.setNomeCorrentista = function(valor){
		nomeCorrentista = valor;
	};
	var banco;
	this.getBanco = function(){
		return banco;
	};
	this.setBanco = function(valor){
		banco = valor;
	};
	var numeroConta;
	this.getNumeroConta = function(){
		return numeroConta;
	};
	this.setNumeroConta = function(valor){
		numeroConta = valor;
	};
	var saldo;
	this.getSaldo = function(){
		return saldo;
	};
	this.setSaldo = function(valor){
		saldo = valor;
	};
}

function ContaCorrente(){
	var saldoEspecial;
	this.getSaldoEspecial = function(){
		return saldoEspecial;
	};
	this.setSaldoEspecial = function(valor){
		saldoEspecial = valor;
	};
}

function ContaPoupanca(){
	var juros;
	this.getJuros = function(){
		return juros;
	};
	this.setJuros = function(valor){
		juros = valor;
	};
	var dataVencimento;
	this.getDataVencimento = function(){
		return dataVencimento;
	};
	this.setDataVencimentio = function(valor){
		dataVencimento = valor;
	};
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

var contaPoupanca = new ContaPoupanca();

var titular = prompt("Dados para a conta poupança:"
	+ "\n\nInsira o nome do titular:");
contaPoupanca.setNomeCorrentista(titular);

var banco = prompt("Insira o banco:");
contaPoupanca.setBanco(banco);

var numeroConta = prompt("Insira o número da conta:");
contaPoupanca.setNumeroConta(numeroConta);

var saldoInicial = prompt("Insira o saldo inicial da conta:");
contaPoupanca.setSaldo(saldoInicial);

var juros = prompt("Insira agora a taxa de juros da conta:");
contaPoupanca.setJuros(juros);

var dataVencimento = prompt("Insira a data de vencimento da conta:");
contaPoupanca.setDataVencimentio(dataVencimento);

alert("- Conta Poupança Criada com Sucesso! -"
	+ "\n\nDados da conta:"
	+ "\nTitular: " + contaPoupanca.getNomeCorrentista()
	+ "\nBanco: " + contaPoupanca.getBanco()
	+ "\nNúmero da Conta: " + contaPoupanca.getNumeroConta()
	+ "\nSaldo Inicial: " + contaPoupanca.getSaldo()
	+ "\nJuros: " + contaPoupanca.getJuros()
	+ "\nVence em: " + contaPoupanca.getDataVencimento());

var contaCorrente = new ContaCorrente();

var titular = prompt("Dados para a conta corrente:"
	+ "\n\nInsira o nome do titular:");
contaCorrente.setNomeCorrentista(titular);

var banco = prompt("Insira o banco:");
contaCorrente.setBanco(banco);

var numeroConta = prompt("Insira o número da conta:");
contaCorrente.setNumeroConta(numeroConta);

var saldoInicial = prompt("Insira o saldo inicial da conta:");
contaCorrente.setSaldo(saldoInicial);

var saldoEspecial = prompt("Insira o saldo Especial: ");
contaCorrente.setSaldoEspecial(saldoEspecial);

alert("- Conta Corrente Criada com Sucesso! -"
	+ "\n\nDados da conta:"
	+ "\nTitular: " + contaCorrente.getNomeCorrentista()
	+ "\nBanco: " + contaCorrente.getBanco()
	+ "\nNúmero da Conta: " + contaCorrente.getNumeroConta()
	+ "\nSaldo Inicial: " + contaCorrente.getSaldo()
	+ "\nSaldo Especial: " + contaCorrente.getSaldoEspecial());