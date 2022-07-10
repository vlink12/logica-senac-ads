const prompt = require("prompt-sync")();

const titulo = [];
const autor = [];
const genero = [];
const paginas = [];

function cadastro() {
  console.log("\nCadastro de um novo Livro");
  console.log("=".repeat(40));

  const a = prompt("Nome da Obra: ");
  const b = prompt("Autor(a): ");
  const c = prompt("Gênero Literário: ");
  const d = prompt("Número de Páginas: ");

  titulo.push(a);
  autor.push(b);
  genero.push(c);
  paginas.push(d);

  console.log("-".repeat(40));

  console.log("Livro cadastrado com sucesso!");
}
function listar() {
  console.log("\nListagem de Livros cadastrados:");
  console.log("=".repeat(40));

  console.log(
    "\nTítulo...................: Autor(a)..................: Gênero....................: N°Páginas.......:"
  );
  console.log("-".repeat(40));

  for (let i = 0; i < titulo.length; i = i + 1) {
    console.log(` ${i + 1} ${titulo[i].padEnd(25)} ${autor[i].padEnd(
      25
    )} ${genero[i].padEnd(15)}
    ${paginas[i]}`);
  }
}
