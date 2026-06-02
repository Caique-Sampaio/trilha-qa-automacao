// =============================================
// Estruturas de repetição — exercícios de prática
// Trilha QA Automação
// =============================================

console.log("=== Início dos exercícios: estruturas de repetição ===\n");

// ---------------------------------------------
// Exercício 1 — Crie um for que exiba números de 1 até 10.
// Objetivo: Exercitar estruturas de repetição.    
// ---------------------------------------------
console.log("EX1 - Crie um for que exiba números de 1 até 10.")

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// ---------------------------------------------
// Exercício 2 — Crie um array com nomes de usuários e percorra utilizando forEach.
// Objetivo: Exercitar estruturas de repetição.    
// ---------------------------------------------
console.log("EX2 - Crie um array com nomes de usuários e percorra utilizando forEach.")

const listaUsuarios = ["Carlos", "Jéssica", "Diego", "Laura", "Bruno", "Helena"];

listaUsuarios.forEach((nome) => {
    console.log(`Usuário: ${nome}`);
});

// ---------------------------------------------
// Exercício 3 — Crie um loop que exiba apenas números pares de 0 até 20.
// Objetivo: Exercitar estruturas de repetição.    
// ---------------------------------------------
console.log("EX3 - Crie um loop que exiba apenas números pares de 0 até 20.")

for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

// ---------------------------------------------
// Exercício 4 — Crie um array com status code e exiba cada um utilizando forEach.
// Objetivo: Exercitar estruturas de repetição.    
// ---------------------------------------------
console.log("EX4 - Crie um array com status code e exiba cada um utilizando forEach.")

const listaStatusCode = ["300", "200", "201", "202", "500", "404"];

listaStatusCode.forEach((status) => {
    console.log(`Status code: ${status}`);
})