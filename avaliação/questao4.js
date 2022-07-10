const prompt = require("prompt-sync")();

const num = Number(prompt("Número: "));

let div = "";
let soma = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    div += i + ", ";
    soma += i;
  }
}

console.log(`Divisores do ${num}: ${div}`);
console.log(`Soma dos divisores: ${soma}`);

if (soma == num) {
  console.log(`Portanto, ${num} é um número perfeito.`);
} else {
  console.log(`Portanto, ${num} é um número imperfeito.`);
}
