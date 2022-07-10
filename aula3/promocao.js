const prompt = require("prompt-sync")();

const produto = prompt("Produto: ");
const preco = Number(prompt("Preço: "));

const avista = preco - preco * 0.1;
const parcelado = preco / 3;

console.log("Promoção de " + produto + ":");
console.log(
  `À vista: R$${avista.toFixed(2)}\n 
  Ou em 3x de: R$${parcelado.toFixed(2)}.`
);
