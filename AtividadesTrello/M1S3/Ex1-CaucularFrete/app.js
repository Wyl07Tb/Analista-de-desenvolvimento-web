const campoPeso = document.getElementById("campo-peso");
const campoDistancia = document.getElementById("campo-distancia");
const botaoCalcular = document.getElementById("botao-calcular");
const pResultado = document.getElementById("p-resultado");

function calculaFrete() {
    const peso = Number(campoPeso.value);
    const distancia = Number(campoDistancia.value);
    const frete = 6 * peso * distancia;
    if (isNaN(frete)) {
        pResultado.textContent = "Insira apenas números.";
    } else {
        pResultado.textContent = `O valor do frete é R$ ${frete}`;
    }
}

botaoCalcular.addEventListener("click", calculaFrete);