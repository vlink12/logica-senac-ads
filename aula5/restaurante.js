const prompt = require("prompt-sync")();

const conta = Number(prompt("Valor da conta: R$"));
const pago = Number(prompt("Valor pago: R$"));

if (pago > conta) {
  const troco = pago - conta;
  console.log(`Troco: R$${troco.toFixed(2)}`);
}else if (pago < conta) {
  const faltou = conta - pago;
  console.log(`Ops, faltou R$${faltou.toFixed(2)}`);
} else {
  console.log("Obrigado, volte sempre!");
}
