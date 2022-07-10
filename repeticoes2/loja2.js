const prompt = require("prompt-sync")();

console.log("Informe produto, ou 'Fim' para sair.");

while (true) {
  const produto = prompt("Produto: ");
  if (produto == "Fim") {
    break;
  }
  const preco = Number(prompt("Preço R$: "));

  const desconto = preco - preco * 0.1;

  console.log(`Preço do ${produto} com desconto: R$${desconto.toFixed(2)}`);
}
