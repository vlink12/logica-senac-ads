const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

let resposta = "";

for (let i = num + 1; i <= num + 10; i++) {
  if (i < num + 10) {
    resposta = resposta + i + ", ";
  } else {
    resposta = resposta + i + ".";
  }
}

console.log(resposta);
