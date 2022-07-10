const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

let resposta = "";

for (let i = 2; i < num; i = i + 2) {
  resposta = resposta + i + ", ";
}

console.log(`Pares até o ${num}: ${resposta}${num}.`);
