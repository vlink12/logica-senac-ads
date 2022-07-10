const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor do lanche: "));
const bairro = prompt("Bairro para entrega: ");

let entrega = 5;

if (bairro == "Laranjal") {
  entrega = 10;
}
if (valor >= 200) {
  entrega = 0;
}

const total = valor + entrega;

console.log(`Valor do lanche com taxa de entrega: R$${total.toFixed(2)}.`);
