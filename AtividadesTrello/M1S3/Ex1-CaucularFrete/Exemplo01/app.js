// Exercício 1 m1s03

// captura os elementos do DOM
const campoPeso = document.getElementById("campo-peso");
const campoDistancia = document.getElementById("campo-distancia");
const botaoCalcular = document.getElementById("botao-calcular");
const pResultado = document.getElementById("p-resultado");

function calculaFrete() {
  // pega valor dos campos e converte pra number
  const peso = Number(campoPeso.value);
  const distancia = Number(campoDistancia.value);

  // calcula o frete
  const frete = 6 * peso * distancia;

  // mostra no parágrafo
  pResultado.innerHTML = `O valor do frete é R$ ${frete}`;
}

botaoCalcular.addEventListener("click", calculaFrete);