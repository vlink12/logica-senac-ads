const prompt = require("prompt-sync")();

// declaração dos vetores (array) produtos e precos

const produtos = [];
const precos = [];

do {
  // lê as 2 variáveis informadas pelo usuário
  const x = prompt("Produto: ");
  const y = Number(prompt("Preço R$: "));

  // adiciona aos vetores
  produtos.push(x);
  precos.push(y);

  const continua = prompt("Continuar (S/N): ");
  if (continua == "N" || continua == "n") {
    break;
  }
} while (true);

console.log("\nLista de Compras");
console.log("-".repeat(40));

// obtém o tamanho do vetor (número de elementos)
const tam = produtos.length;
for (let i = 0; i < tam; i++) {
  console.log(`${produtos[i]} - R$ ${precos[i].toFixed(2)}`);
}
