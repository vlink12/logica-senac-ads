const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const ano = Number(prompt("Digite o ano de seu nascimento: "));

const idade = 2022 - ano;

console.log(`Você tem ${idade} anos.`);

if (idade >= 18) {
  console.log(`Você é maior de idade.`);
} else {
  console.log(`Você é menor de idade.`);
}
