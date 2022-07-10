const prompt = require("prompt-sync")();

do {
  const nome = prompt("Aluno: ");
  const nota = Number(prompt("Nota: "));

  if (nota >= 7) {
    console.log(`${nome}, você foi aprovado(a).`);
  } else {
    console.log(`${nome}, você foi reprovado(a).`);
  }

  const continua = prompt("Continuar? (S/N): ");

  if (continua == "N" || continua == "n") {
    break;
  }
} while (true);

console.log("Fim");
