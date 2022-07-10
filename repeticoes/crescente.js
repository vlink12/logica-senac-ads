const prompt = require("prompt-sync")();

const num = Number(prompt("Contar até: "));
const pulo = Number(prompt("Pular de quanto em quanto? "));

for (i = pulo; i <= num; i = i + pulo) {
  console.log(i);
}
