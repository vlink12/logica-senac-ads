const prompt = require("prompt-sync")();

const produto = prompt("Produto: ");
const preco = Number(prompt("Preço: R$"));

const promo = preco * 3 - preco / 2;
const produto3 = preco / 2;

console.log(`Promoção - ${produto}\n
Leve 3 por apenas R$${promo.toFixed(2)}\n
O 3° custa apenas R$${produto3.toFixed(2)}`);
