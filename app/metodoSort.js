const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarPorPreco);

function ordenarPorPreco() {
    let livrosPorPreco = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosPorPreco);
}