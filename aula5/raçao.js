const prompt = require("prompt-sync")();

const peso = Number(prompt("Peso da ração (kg): "));
const consumo = Number(prompt("Consumo diário (g): "));

const dias = Math.floor((peso * 1000) / consumo);
const sobra = (peso * 1000) % consumo;

console.log(`Irá durar ${dias} dias.`);

if (sobra > 0) {
  console.log(`Sobrará ${sobra} gr.`);
}
