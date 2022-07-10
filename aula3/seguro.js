const prompt = require("prompt-sync")();

const modelo = prompt("Modelo do veículo: ");
const avaliacao = Number(prompt("Avaliação: "));
const ano = Number(prompt("Ano do veículo: "));

const seguro = avaliacao * 0.04;
const desconto = (2022 - ano) * 50;
const total = seguro - desconto;

console.log(`Proposta de Seguro - ${modelo}\n
Valor do Seguro: R$${seguro.toFixed(2)}\n
Valor do Desconto: R$${desconto.toFixed(2)}\n
Valor total a pagar: R$${total.toFixed(2)}`);
