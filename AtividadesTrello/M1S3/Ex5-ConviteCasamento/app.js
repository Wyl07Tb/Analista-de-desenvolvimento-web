const Convidado = document.getElementById("convidado");
const Noivo = document.getElementById("noivo");
const Noiva = document.getElementById("noiva");
const Data = document.getElementById("data");
const Horario = document.getElementById("horario");
const Local = document.getElementById("local");
const botaoGerar = document.getElementById("gerar");

function gerarConvite(){
    convite.innerHTML = `
    <h1>Convite Especial</h1><hr>
    
    <h2>Caro(a) ${Convidado.value};</h2>

    <p>
        Você está convidado(a) para o casamento de <strong>${Noivo.value} & ${Noiva.value}</strong>!<br>
    </p>
    <p>Este memorável evento será realizado na presente data e local:<br>
    Desde já agradecemos pela atenção e aguardamos ansiosamente a sua presença!
    </p>
    <strong>
    <p>
        Data :${Data.value}<br>
        Horário: ${Horario.value}<br>
    </p>
    <p>
        Local: ${Local.value}
    </p>
    </strong>
    <p>
        Carinhosamente, os Noivos.
    </p>
    `
}

botaoGerar.addEventListener("click", gerarConvite)