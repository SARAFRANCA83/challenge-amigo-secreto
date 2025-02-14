//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Script para sorteio de Amigo Secreto

// Array para armazenar os nomes

let amigos = [];

// Função para adicionar amigos na lista
function adicionarAmigo() {
  const input = document.getElementById("amigo"); //Pega o elemento input com o ID amigo  do html
  const nome = input.value.trim(); //input.value: Obtém o texto digitado pelo usuário no campo de entrada o .trim(): Remove espaços extras no início e no final do texto.

  if (nome && !amigos.includes(nome)) {
    amigos.push(nome);
    input.value = ""; // Limpa o campo de entrada apos o nome ser adicionado
    exibirAmigos(); // Atualiza a lista exibida cada vez que um novo nome é digitado no input
  } else if (!nome) {
    alert("Por favor, digite um nome válido.");
  } else {
    alert("Este nome já está na lista!");
  }
}

// Função para exibir a lista de amigos
function exibirAmigos() {
  const lista = document.getElementById("listaAmigos"); //Obtém o elemento ul onde a lista será exibida
  lista.innerHTML = ""; // Limpa a lista atual

  amigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione amigos para sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo Sorteado: ${amigoSorteado}</li>`;
}
