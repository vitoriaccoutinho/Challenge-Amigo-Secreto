let listaNomes = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    listaNomes.push(nome);
    atualizarLista();

    input.value = "";
    input.focus();
}


function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    listaNomes.forEach((nome, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${nome}`;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert("A lista está vazia! Adicione nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
    const amigoSorteado = listaNomes[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;

    listaNomes = []; 
    atualizarLista(); 
}
