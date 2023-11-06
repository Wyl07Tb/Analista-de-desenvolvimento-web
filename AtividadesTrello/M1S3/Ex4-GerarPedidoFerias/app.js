const nomeFuncionario = document.getElementById("nome-funcionario");
const dataInicio = document.getElementById("data-inicio");
const dataTermino = document.getElementById("data-termino");
const botaoGerar = document.getElementById("gerar");

function gerarPedido(){
    peticao.innerHTML = `
    <h1>Petição de Férias</h1><hr>
    
    <h2>Caro(a) responsável;</h2>

    <p>
        Gostaria de solicitar minhas férias.
    </p>
    <p>
        Funcionário(a): ${nomeFuncionario.value}<br>
        Data de início: ${dataInicio.value}<br>
        Data de término: ${dataTermino.value}
    </p>
    <p>
        Desde já agradeço pela atenção.<br>
    </p>
    <p>
        Atenciosamente, ${nomeFuncionario.value}.
    </p>
    `
}

botaoGerar.addEventListener("click", gerarPedido)