const prompt = require("prompt-sync")();

const conta = Number(prompt("Valor da conta: "));
const cliente = Number(prompt("Numero de clientes: "));

const porCliente = conta / cliente;

console.log("Valor a pagar por cliente: R$" + porCliente.toFixed(2));
