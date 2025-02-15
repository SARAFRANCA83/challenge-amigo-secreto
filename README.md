# Amigo Secreto - Desafio

Este projeto é uma implementação simples de um sorteio de Amigo Secreto, permitindo adicionar amigos a uma lista e sorteá-los automaticamente. Além disso, o projeto inclui um botão de **"Limpar Lista"**, que permite remover todos os amigos da lista a qualquer momento.

## Arquivos Principais

- **`index.html`**: Contém a estrutura básica da página, incluindo o formulário de entrada e os botões.
- **`style.css`**: Arquivo de estilos responsáveis pela aparência da página.
- **`app.js`**: Lógica principal de interação, como adicionar amigos, sortear e limpar a lista.

## Funcionalidade do Arquivo `app.js`

O arquivo **`app.js`** contém as principais funções que tornam o sorteio de Amigo Secreto interativo:

### Adicionar Amigos
O script permite que o usuário adicione um amigo à lista. O nome do amigo é inserido em um campo de entrada, e ao clicar no botão **"Adicionar"**, o nome é adicionado ao array `amigos` e exibido na lista na interface.

### Sortear Amigo Secreto
Quando a lista de amigos está preenchida, o botão **"Sortear Amigo"** pode ser clicado para sortear aleatoriamente um amigo da lista. O nome do amigo sorteado será exibido na tela.

### Limpar Lista
Implementei o botão de **"Limpar Lista"**, que, ao ser clicado, limpa todos os nomes da lista de amigos, permitindo que o usuário comece um novo sorteio ou recomece a lista de amigos.

## Funcionalidade do Botão **Limpar Lista**

O botão **"Limpar Lista"** foi adicionado para oferecer uma maneira simples de limpar a lista de amigos sem precisar recarregar a página ou remover os itens manualmente.

### Como funciona:
Ao clicar no botão **"Limpar Lista"**, o script chama a função `limparLista()`, que limpa o array `amigos` e atualiza a interface, removendo todos os itens da lista de amigos exibida.

A funcionalidade é especialmente útil quando o usuário deseja reiniciar a lista antes de adicionar novos amigos ou refazer o sorteio sem ter que recarregar a página.

## Como Usar

1. Adicione nomes de amigos no campo de entrada.
2. Clique em **"Adicionar"** para adicionar o nome à lista.
3. Quando desejar sortear um amigo, clique em **"Sortear amigo"**.
4. Se quiser limpar a lista e recomeçar, clique em **"Limpar Lista"**.

## Tecnologias Utilizadas

- ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)  Para a estrutura da página.
- ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)  Para o design e estilo da interface.
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)  Para a lógica do sorteio e interação com a lista de amigos.
