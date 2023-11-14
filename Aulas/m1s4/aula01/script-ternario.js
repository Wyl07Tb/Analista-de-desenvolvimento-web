var nome = prompt("insira seu nome:");

if (!nome) {
    nome = prompt("Favor inserir algum valor para o nome:");
}

var sobrenome = prompt("insira seu sobrenome:");
var nomeCompleto = nome + " " + sobrenome;

var idade = idade = prompt("insira sua idade:");

if (!idade) {
    idade = prompt("insira sua idade:")
}

alert(idade >= 18 ? "Maior de idade" : "Menor de idade");

var ehPar = idade % 2 == 0 ? "par" : "ímpar";

alert("idade é par ou ímpar? " + ehPar);