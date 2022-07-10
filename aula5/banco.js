const prompt = require("prompt-sync")();

const saque = Number(prompt("Valor do saque: "));

if (saque % 10 == 0) {
  const notas = saque / 10;
  console.log(`Quantidade de notas: ${notas}.`);
} else {
  console.log(
    `Não é possível sacar R$${saque.toFixed(2)} com notas de R$10.00`
  );
}
