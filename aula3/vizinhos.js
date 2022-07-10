const prompt = require("prompt-sync")();

const num = Number(prompt("Número: "));

const v1 = num - 1;
const v2 = num + 1;

console.log(`Os vizinhos são: ${v1} e ${v2}.`);
