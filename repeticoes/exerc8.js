const prompt = require("prompt-sync")();

const simbolo1 = prompt("1° Símbolo: ");
const simbolo2 = prompt("2° Símbolo: ");
const num = Number(prompt("Número de repetições: "));

let resposta = "";

for (let i = 1; i <= num; i++) {
  if (i % 2 == 1) {
    resposta = resposta + simbolo1;
  } else {
    resposta = resposta + simbolo2;
  }
}

console.log(resposta);
