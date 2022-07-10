const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

if (num % 2 == 0) {
  console.log(`Próximo número par é ${num + 2}.`);
} else {
  console.log(`Próximo número par é ${num + 1}.`);
}
