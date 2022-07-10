const prompt = require("prompt-sync")();

console.log("Campeonato de Tênis de Mesa:");
console.log("=".repeat(40));

let sets = 0;
let partidas = 0;

while (true) {
  const jogador1 = prompt("Jogador(a) #1: ");
  const sets1 = Number(prompt("Sets Vencidos: "));
  const jogador2 = prompt("Jogador(a) #2: ");
  const sets2 = Number(prompt("Sets Vencidos: "));

  if (sets1 > sets2) {
    console.log(`${jogador1} venceu o jogo por ${sets1} x ${sets2}`);
  } else {
    console.log(`${jogador2} venceu o jogo por ${sets2} x ${sets1}`);
  }

  sets += sets1 + sets2;
  partidas++;

  const continuar = prompt("Continuar (S/N): ");

  if (continuar == "N" || continuar == "n") {
    break;
  }
}
console.log(`Foram disputados: ${partidas} partidas`);
console.log(`Total de sets: ${sets}`);
