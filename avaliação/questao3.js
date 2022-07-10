const prompt = require("prompt-sync")();

const num = Number(prompt("Número: "));
const simbolo = prompt("Símbolo: ");

for (let i = 1; i <= num; i++) {
  console.log((simbolo + " ").repeat(num));
}
