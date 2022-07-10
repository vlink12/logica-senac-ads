const prompt = require("prompt-sync")();

console.log("Digite um número ou 0 para sair.");

while (true) {
  const num = Number(prompt("Número: "));
  if (num == 0) {
    const confirma = prompt("Confirma a saída (S/N): ");
    if (confirma == "S") {
      break;
    } else {
      continue;
    }
  }
  if (num % 2 == 0) {
    console.log(`Dobro do par é: ${num * 2}.`);
  } else {
    console.log(`Triplo do impar é: ${num * 3}.`);
  }
}
