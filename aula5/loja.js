const prompt = require("prompt-sync")();

const produto = prompt("Produto: ");
const preco = Number(prompt("Preço: R$"));

console.log(`Produto: ${produto}.`);
console.log(`Preço: R$${preco.toFixed(2)}`);

if (preco < 100) {
  console.log(`Pagamento somente a vista.`);
} else {
  const parcelado = preco / 3;
  console.log(`Pode pagar em 3x de: R$${parcelado.toFixed(2)}`);
}
