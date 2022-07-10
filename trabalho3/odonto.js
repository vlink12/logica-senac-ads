const prompt = require("prompt-sync")();
const pacientes = [];
function incluir() {
  console.log();
  const nome = prompt("Nome do Paciente: ");
  pacientes.push(nome);
  console.log("Ok! Paciente Cadastrado com Sucesso...");
}
function listar() {
  console.log("\nPacientes na Fila de Espera");
  console.log("=".repeat(30));
  // forma alternativa de percorres todos os elementos do vetor
  for (const paciente of pacientes) {
    console.log(paciente);
  }
  // for (let i=0; i < pacientes.length; i++) {
  // console.log(pacientes[i])
  // }
}
function atender() {
  console.log();
  if (pacientes.length == 0) {
    console.log("Não há pacientes na fila de espera");
    return;
  }
  //const nome = pacientes[0]
  // remove e retorna o nome do paciente removido
  const nome = pacientes.shift();
  console.log(`Nome do Paciente a ser Atendido: ${nome}`);
}
function urgencia() {
  console.log();
  const nome = prompt("Nome do Paciente: ");
  pacientes.unshift(nome);
  console.log("Ok! Paciente Cadastrado como Urgência...");
}
do {
  console.log("\nConsultório Odontológico");
  console.log("=".repeat(40));
  console.log("1. Incluir Paciente");
  console.log("2. Listar Pacientes");
  console.log("3. Atender Paciente");
  console.log("4. Incluir Urgência");
  console.log("5. Finalizar");
  const opcao = Number(prompt("Opção: "));
  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    atender();
  } else if (opcao == 4) {
    urgencia();
  } else {
    break;
  }
} while (true);
