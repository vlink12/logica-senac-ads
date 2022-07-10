const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite um número: "));
const num2 = Number(prompt("Digite um número: "));

let resposta = "";

for (let i = num1; i <= num2; i++) {
  resposta = resposta + i + " ";
}

console.log(resposta);
