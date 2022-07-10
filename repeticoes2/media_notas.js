const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

console.log("Informe o nome do aluno ou fim para sair.");
do {
  const nome = prompt("Nome: ");
  if (nome == "fim") {
    break;
  }
  const nota = Number(prompt("Nota: "));
  soma = soma + nota;
  contador = contador + 1;
} while (true);

const media = soma / contador;

console.log("-".repeat(30));
console.log(`Média da turma: ${media.toFixed(2)}`);
