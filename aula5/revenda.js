const prompt = require("prompt-sync")();

const modelo = prompt("Modelo do Veículo: ");
const marca = prompt("Marca do Veículo: ");
const preco = Number(prompt("Preço do Veículo: "));

let desconto;

if (marca == "Fiat") {
  desconto = preco * 0.1;
} else {
  desconto = preco * 0.2;
}

const prFinal = preco - desconto;

console.log(`Desconto: R$${desconto.toFixed(2)}`);
console.log(`Preço final: R$${prFinal.toFixed(2)}`);
