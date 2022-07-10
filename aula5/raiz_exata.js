const prompt = require("prompt-sync")();

const num = Number(prompt("Digite um número: "));

const raiz = Math.sqrt(num);

if (Number.isInteger(raiz)) {
  console.log(`Raíz: ${raiz}`);
} else {
  console.log(`Não existe raíz exata de ${num}`);
}
