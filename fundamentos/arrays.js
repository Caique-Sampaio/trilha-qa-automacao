// =============================================
// Objetos — exercícios de prática
// Trilha QA Automação
// =============================================

console.log("=== Início dos exercícios: Array ===\n");

// ---------------------------------------------
// Exercício 1 — Prática com arrays.
// Objetivo: Exercitar a criação e manipulação de arrays.    
// ---------------------------------------------
console.log("EX1\n 1. Montar um array de objetos simulando cenários de teste.\n 2. Acessar o terceiro elemento e uma propriedade aninhada. \n 3. Filtrar só cenários ativo: true com filter. \n 4. Extrair todos os IDs com map. \n 5. Verificar se existe cenário com tag smoke usando some.\n");

const cenarios = [{id: "CT-001", titulo: "Cadastro de usuário", ativo: true, tag: "smoke"}, {id: "CT-002", titulo: "Edição de usuário", ativo: false, tag: "web"}, {id: "CT-003", titulo: "Exclusão de usuário", ativo: true, tag: "api"}];

console.log(cenarios[2].titulo);

const cenariosAtivos = cenarios.filter((item) => item.ativo === true);
console.log(JSON.stringify(cenariosAtivos));

const ids = cenarios.map((item) => item.id);
console.log(ids);

const existeSmoke = cenarios.some((item) => item.tag.startsWith("smoke"));
console.log(existeSmoke);