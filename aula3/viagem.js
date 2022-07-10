const prompt = require("prompt-sync")();

const cidade = prompt("Cidade: ");
const dias = Number(prompt("N° Dias: "));
const horas = Number(prompt("N° Horas: "));

const tempo = horas + dias * 24;

console.log(`Total da viagem para ${cidade}: ${tempo} horas.`);
