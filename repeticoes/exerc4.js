const prompt = require("prompt-sync")();

const produto = prompt("Produto: ");
const preco = Number(prompt("Preço R$: "));

console.log(`\nOpções de pagamento: ${produto}:`);
console.log("-".repeat(40));

for (let i = 1; i <= 10; i = i + 1) {
  console.log(`${i} x R$${(preco / i).toFixed(2)}`);
}

console.log("-".repeat(40));
