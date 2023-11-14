var random = Math.floor(Math.random() * 10); // gera um número aleatório entre 0 e 9.

// var numeroDoUsuario = prompt("adivinhe um número de 0 a 9:");

/* if (random == numeroDoUsuario) {
    alert("você acertou");
} else {
    alert("você errou, o número era: " + random); 
} */

do {
    var numeroDoUsuario = prompt("adivinhe um número de 0 a 9:");
} while (random != numeroDoUsuario);

alert("Você acertou!");