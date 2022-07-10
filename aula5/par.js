const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

if (num % 2 == 1) {
  console.log(`${num} é impar.`);
} else {
  console.log(`${num} é par.`);
}
