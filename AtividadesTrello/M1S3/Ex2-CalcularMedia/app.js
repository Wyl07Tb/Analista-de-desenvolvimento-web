const campoNota1 = document.getElementById("nota01");
const campoNota2 = document.getElementById("nota02");
const campoNota3 = document.getElementById("nota03");

const botaoCalcular = document.getElementById("botao-calcular");
const pResultado = document.getElementById("p-resultado");

function calculaMedia(){
    const nota1 = Number (campoNota1.value);
    const nota2 = Number (campoNota2.value);
    const nota3 = Number (campoNota3.value);

    const media = (nota1 + nota2 + nota3) / 3;
    
    if ((media) >= 7){
        pResultado.textContent = "Parabéns! Você foi APROVADO!";
    }
    else{
        pResultado.textContent = `Sua média foi ${media},REPROVADO!`;
    }
}

botaoCalcular.addEventListener("click", calculaMedia);