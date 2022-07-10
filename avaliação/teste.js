const prompt = require("prompt-sync")();

console.log("Campeonato de Tênis de Mesa");
console.log("-".repeat(40));
let sets = 0;
let games = 0;

do {
  const player1 = prompt("Jogador #1: ");
  const setsPlay1 = Number(prompt("Sets Vencidos: "));
  const player2 = prompt("Jogador #2: ");
  const setsPlay2 = Number(prompt("Sets Vencidos: "));
  if (setsPlay1 > setsPlay2) {
    console.log(`${player1} venceu o jogo por ${setsPlay1} x ${setsPlay2}`);
  } else {
    console.log(`${player2} venceu o jogo por ${setsPlay2} x ${setsPlay1}`);
  }
  sets += setsPlay1 + setsPlay2;
  games++;
  const continuee = prompt("Continuar (S/N): ");
  if (continuee == "N" || continuee == "n") {
    break;
  }
} while (true);
console.log(`Foram disputados: ${games} partidas`);
console.log(`Total de sets: ${sets}`);
