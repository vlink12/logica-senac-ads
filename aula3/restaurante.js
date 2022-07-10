const prompt = require("prompt-sync")();

const quilo = Number(prompt("Valor do Kg: R$"));
const cliente = Number(prompt("Cliente serviu(g): "));

const preco = (quilo / 1000) * cliente;

console.log(`Valor a pagar: R$${preco.toFixed(2)}`);
