const prompt = require("prompt-sync")();

const nome = prompt("Candidato: ");
const acertos = Number(prompt("N° acertos: "));

if (acertos >= 20 && acertos <= 30) {
  console.log(`${nome}, você deve realizar um teste complementar.`);
} else if (acertos < 20) {
  console.log(`${nome}, você foi reprovado(a).`);
} else {
  console.log(`${nome}, você foi aprovado(a).`);
}
