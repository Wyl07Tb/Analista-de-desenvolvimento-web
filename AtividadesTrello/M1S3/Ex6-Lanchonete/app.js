const campoCodigo = document.getElementById("codigo-produto");
const campoQuantidade = document.getElementById("quantidade");
const botaoPedir = document.getElementById("pedir");
const pPedido= document.getElementById("pedido-feito");
const pValor = document.getElementById("valor-pedido");

function calcularPedido() {
    const codigo = campoCodigo.value;
    const quantidade = Number(campoQuantidade.value);
    let preco = 0;
    let nome = "";

    if (codigo === "1123") {
        nome = "Hambúrguer";
        preco = 12;
    } else if (codigo === "3423") {
        nome = "Sanduíche de pernil";
        preco = 9;
    } else if (codigo === "4521") {
        nome = "Bauru";
        preco = 15;
    } else if (codigo === "5322") {
        nome = "Sanduíche de mortadela";
        preco = 34.99;
    }

    const valor = preco * quantidade;

pPedido.innerHTML = `Pedido: ${quantidade} ${nome}`
pValor.innerHTML = `Total a pagar: R$ ${valor.toFixed(2)}`;
}

botaoPedir.addEventListener("click", calcularPedido);