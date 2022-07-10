const prompt = require("prompt-sync")();

const num = Number(prompt("Decrescer a partir do número: "));

let resposta = "";

for (let i = num; i >= 1; i--) {
  resposta = resposta + i + ", ";
}

console.log(resposta);

//formas de retirar a última vírgula
//Acrescentando uma condição
let resposta2 = "";

for (let i = num; i >= 1; i--) {
  if (i > 1) {
    resposta2 = resposta2 + i + ", ";
  } else {
    resposta2 = resposta2 + i;
  }
}

console.log(resposta2);

//Formas de retirar a ultima vírgula
