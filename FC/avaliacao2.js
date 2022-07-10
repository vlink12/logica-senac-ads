const prompt = require("prompt-sync")();

const etanol = Number(5);
const gasol = Number(7);
const combustivel = prompt("Digite E(Etanol) ou G(Gasolina): ");
const litro = Number(prompt("Digite a quantidade de Litros: "));

let desc;
let pagar;

if (combustivel == "E" || combustivel == "e") {
  if (litro < 30) {
    desc = etanol * 0.04;
    pagar = etanol * litro - desc * litro;
  } else {
    desc = etanol * 0.06;
    pagar = etanol * litro - desc * litro;
  }
} else if (combustivel == "G" || combustivel == "g") {
  if (litro < 25) {
    desc = gasol * 0.05;
    pagar = gasol * litro - desc * litro;
  } else {
    desc = gasol * 0.08;
    pagar = gasol * litro - desc * litro;
  }
}

console.log(`Valor total a pagar: R$ ${pagar.toFixed(2)}`);
