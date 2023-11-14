var nome = prompt("insira seu nome:");

if (!nome) {
    nome = prompt("Favor inserir algum valor para o nome:");
}

var sobrenome = prompt("insira seu sobrenome:");
var nomeCompleto = nome + " " + sobrenome;

var idade;// = prompt("Insira sua idade:");

if (!idade) {
    idade = prompt("insira sua idade:")
}

if (idade >= 18) {
    if (idade >= 60) {
        alert("O aluno é idoso.");
    } else {
        alert("O aluno é adulto.");
    }
    //alert("O aluno " + nomeCompleto + " é maior de idade.");
} else {
    alert("O aluno " + nomeCompleto + " é menor de idade.");
}

if (idade >= 18 && idade < 60) {
    alert("O aluno é adulto.")
} else if (idade >= 60) {
    alert("O aluno é idoso")
} else {
    alert("O aluno é menor de idade")
}

alert("O aluno " + nomeCompleto + " possui " + idade + " anos de idade.");

/* 
var numero = prompt("Insira um número:"); // "2"
var outroNumero = 3;
var soma = numero + outroNumero;

alert("soma dos números: " + soma);
 */
