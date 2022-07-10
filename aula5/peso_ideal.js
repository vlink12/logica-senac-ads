const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const sexo = prompt("Digite seu sexo (M / F): ");
const altura = Number(prompt("Digite sua altura (em metros): "));

if (sexo == "M" || sexo == "m") {
  const peso = 72.7 * altura - 58;
  console.log(`${nome}, seu peso ideal é ${peso.toFixed(2)}.`);
} else {
  const peso = 62.1 * altura - 44.7;
  console.log(`${nome}, seu peso ideal é ${peso.toFixed(2)}.`);
}
