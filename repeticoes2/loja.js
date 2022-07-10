const prompt = require("prompt-sync")();

while (true) {
  const produto = prompt("Produto: ");
  const preco = Number(prompt("Preço R$: "));

  const desconto = preco - preco * 0.1;

  console.log(`Preço do ${produto} com desconto: R$${desconto.toFixed(2)}`);

  const continua = prompt("Deseja continuar (s/n): ");
  if (continua == "n") {
    break;
  }
}
