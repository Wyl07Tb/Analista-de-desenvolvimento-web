var data = new Date();

var mes = data.getMonth();

switch (mes) {
    case 0:
        alert("Estamos em janeiro");
        break;
    case 1:
        alert("Estamos em fevereiro");
        break;
    case 2:
        alert("Estamos em março");
        break;
    case 3:
    case 4:
    case 5:
        alert("Estamos no segundo trimestre, no mês: " + (mes + 1));
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert("Estamos no segundo semestre, no mês: " + (mes + 1));
        break;
    default:
        alert("não foi possível identificar o mês");
}

alert("fim do switch");

// continua a execução