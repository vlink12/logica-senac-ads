const prompt = require("prompt-sync")();

const modelo = prompt("Modelo do Veículo: ");
const preco = Number(prompt("Preço do Veículo: "));

const entrada = preco * 0.5;
const parcela = entrada / 12;

console.log(`Entrada R$${entrada.toFixed(2)}.\n 
Saldo em 12x de R$${parcela.toFixed(2)}.`);
