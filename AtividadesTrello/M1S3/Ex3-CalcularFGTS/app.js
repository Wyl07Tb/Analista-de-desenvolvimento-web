const salarioBruto = document.getElementById("salario-bruto");
const botaoCalcular = document.getElementById("botao-calcular");
const fgtsMensal = document.getElementById("fgts-mensal");
const fgtsAnual = document.getElementById("fgts-anual");
const botaoCalcularNovamente = document.getElementById("botao-calcular-novamente");

function calcularFGTS(){
    let salario = parseFloat(salarioBruto.value);
    // Fórmula para cálculo do FGTS: 8/100 * Salário bruto
    let fgtsMes = salario * 0.08;
    fgtsMensal.innerHTML = `FGTS mensal: R$ ${parseFloat(fgtsMes).toFixed(2)}`;

    let fgtsAno = fgtsMes * 12;
    fgtsAnual.innerHTML = `FGTS anual: R$ ${parseFloat(fgtsAno).toFixed(2)}`;
}

botaoCalcular.addEventListener('click', () => {
    if (isNaN(parseInt(salarioBruto.value))){
        alert("Insira um valor numérico no campo de Salário Bruto!");
    } else{
        calcularFGTS();
    }
});

botaoCalcularNovamente.addEventListener("click", () => {
    salarioBruto.value = "Salário Bruto";
    fgtsMensal.innerHTML = "FGTS mensal: R$";
    fgtsAnual.innerHTML = "FGTS anual: R$";
});
