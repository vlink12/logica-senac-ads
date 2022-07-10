const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

console.log(`\nTabuada do ${num}:`);
console.log("-".repeat(40));

//Para i, começando em 1
//Enquanto i for <= 10
//aumentando 1 a cada repetição
for (let i = 1; i <= 10; i = i + 1) {
  console.log(`${num} x ${i} = ${num * i}`);
}

console.log("-".repeat(40));
