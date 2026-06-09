// =============================================
// Objetos — exercícios de prática
// Trilha QA Automação
// =============================================

console.log("=== Início dos exercícios: Objetos ===\n");

// ---------------------------------------------
// Exercício 1 — Prática com objetos.
// Objetivo: Exercitar a criação e manipulação de objetos.    
// ---------------------------------------------
console.log("EX1\n 1. Montar um objeto de massa de teste com pelo menos três níveis de aninhamento.\n 2. Acessar propriedades com . e []. \n 3. Extrair campos com desestruturação (simples, aninhada e com renomeação). \n 4. Listar chaves de um subobjeto com Object.keys. \n 5. Serializar e parsear com JSON.stringify / JSON.parse.\n");

const massaDeTeste = {
    perfil: "admin",
    usuario: {
        nome: "Carla",
        cpf: "05599037311",
        endereco: {
            rua: "X",
            numero: "123",
            referencia: "Y",
            cidade: "Z",
            estado: "A"
        }
    }
};
console.log(massaDeTeste.perfil, massaDeTeste.usuario["nome"]);

const { perfil, usuario } = massaDeTeste;
console.log(perfil, usuario);

const {
    usuario: {
        nome,
        endereco: { rua },
    },
} = massaDeTeste;
console.log(nome, rua);

const {
    usuario: {
        nome: nomeDoUsuario,
        endereco: { rua: ruaDoUsuario },
    },
} = massaDeTeste;
console.log(nomeDoUsuario, ruaDoUsuario);

console.log(Object.keys(massaDeTeste));
console.log(Object.keys(massaDeTeste.usuario));
console.log(Object.keys(massaDeTeste.usuario.endereco));

const jsonTexto = JSON.stringify(massaDeTeste);
console.log(jsonTexto);

const objetoTexto = JSON.parse(jsonTexto);
console.log(objetoTexto);