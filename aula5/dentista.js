const prompt = require("prompt-sync")();

const pacientes = Number(prompt("Número de pacientes: "));

if (pacientes <= 5) {
  console.log(`Dentista A: ${pacientes} pacientes.`);
} else if (pacientes % 2 == 1) {
  const a = Math.floor(pacientes / 2);
  const b = Math.ceil(pacientes / 2);
  console.log(`Dentista A: ${a} pacientes.\nDentista B: ${b} pacientes.`);
} else {
  console.log(
    `Dentista A: ${pacientes / 2} pacientes.\nDentista B: ${
      pacientes / 2
    } pacientes.`
  );
}
