const prompt = require("prompt-sync")();

const num = Number(prompt("Número: "));

let resposta = "";

for (let i = 1; i <= num; i++) {
  resposta = resposta + i + ", ";
}

let resposta2 = "";

for (let i = num - 1; i >= 2; i--) {
  resposta2 = resposta2 + i + ", ";
}

console.log(`Contagem: ${resposta}${resposta2}1`);
