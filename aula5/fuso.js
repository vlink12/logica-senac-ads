const prompt = require("prompt-sync")();

const hora = Number(prompt("Hora no Brasil: "));

const franca = hora + 5;

console.log(`Hora na França: ${franca}h.`);
