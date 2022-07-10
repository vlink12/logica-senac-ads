const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da hora (R$): "));
const tempo = Number(prompt("Tempo de uso (min): "));

const pagar = Math.ceil(tempo / 60) * valor;

console.log(`Valor à pagar: R$${pagar.toFixed(2)}`);
