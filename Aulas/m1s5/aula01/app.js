// m1s05a1
//console.log("m1s05a1");

const campoTarefa = document.getElementById("tarefa");
const botaoAdiciona = document.getElementById("adiciona");
const listaTarefas = document.getElementById("lista-tarefas");

// exemplo com array
const tarefas = ["lavar", "passar", "guardar"];

// adicionar itens
tarefas.push("EXTRA");

function atualizaTela() {
	listaTarefas.innerHTML = "";

	tarefas.forEach((tarefa) => {
		//console.log(tarefa);
		const liElem = document.createElement("li");
		liElem.innerHTML = `
<input type="checkbox">
<span>${tarefa}</span>
<button>🗑️</button>
`;
		listaTarefas.appendChild(liElem);
	});
}

botaoAdiciona.addEventListener("click", () => {
	const novaTarefa = campoTarefa.value;
	tarefas.push(novaTarefa);
	atualizaTela();
	campoTarefa.value = "";
});

atualizaTela();

const numeros = [3, 8, 1, 6, 7, 4];

const mapeado = numeros.map((numero) => {
	// operação de transformação
	return `${numero}`;
});

const filtrado = numeros.filter((numero) => {
	// operação de condição
	return numero % 2 === 0;
});

const todos = numeros.some((numero) => {
	// operação de condição
	return numero === 1;
});

console.log(numeros, mapeado, filtrado, todos);
//console.log(mapeado.join(""));
