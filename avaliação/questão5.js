const prompt = require("prompt-sync")();

console.log(`Informe o nome dos alunos ou "fim" para sair`);
console.log("=".repeat(40));

const alunos = [];
let posicao = 1;
let quant = 1;

while (true) {
  const aluno = prompt(`${posicao}° Aluno(a):`);
  if (aluno == "fim" || aluno == "Fim" || aluno == "FIM") {
    break;
  }
  posicao += 1;
  alunos.push(aluno);
}

const grupos = Number(prompt("\nGrupo de quantos alunos: "));
console.log("Grupos: ");
console.log("=".repeat(40));

for (let i = 0; i <= alunos.length - 1; i++) {
  console.log(alunos[i]);
  if (quant != 1) {
    if (Number.isInteger(quant / grupos) == true) {
      console.log("=".repeat(15));
    }
  }
  quant += 1;
}
