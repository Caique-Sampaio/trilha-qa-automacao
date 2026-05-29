// =============================================
// Estruturas condicionais — exercícios de prática
// Trilha QA Automação
// =============================================

console.log("=== Início dos exercícios: estruturas condicionais ===\n");

// ---------------------------------------------
// Exercício 1 — Crie uma condição para verificar se um usuário é maior de idade.
// Objetivo: usar if para checar se o usuário é maior de idade.
// ---------------------------------------------

const idadeUsuario = 19;

if (idadeUsuario >= 18) {
  console.log("O usuário é maior de idade.");
} else {
  console.log("O usuário é menor de idade.");
}

// ---------------------------------------------
// Exercício 2 — Crie uma condição para verificar status code:
// Objetivo: usar if / else com base no status code
// ---------------------------------------------

const statusCode = 200;

if (statusCode === 200) {
  console.log("Status code 200: Sucesso!");
} else if (statusCode === 404) {
  console.log("Status code 404: Recurso não encontrado.");
} else if (statusCode === 500) {
  console.log("Status code 500: Erro interno do servidor.");
} else {
  console.log("Status desconhecido.");
}

// ---------------------------------------------
// Exercício 3 — Crie uma condição que permita login apenas se: usuário estiver ativo / senha estiver correta
// Objetivo: usar if / else para permitir login de acordo com alguns condições
// ---------------------------------------------

const usuarioAtivo = false;
const usuarioSenha = 1234;

if (usuarioAtivo) {
  if (usuarioSenha === 123) {
    console.log("Login permitido!");
  }
  else{
    console.log("Senha inválida.");
  }
} else {
  console.log("Usuário desativado.");
}
