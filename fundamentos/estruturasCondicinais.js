/**
 * EXERCÍCIO 1 - Verificando a maioridade
 *
 * Instruções:
 * 1. Crie uma variável chamada idade.
 * 2. Utilize uma estrutura if.
 * 3. Se a idade for maior ou igual a 18, exiba:
 *
 * "Você é maior de idade."
 *
 * Exemplo:
 * idade = 20
 * Saída: Você é maior de idade.

*/

// Implemente a partir daqui
let idade = 19;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}

/**
 * EXERCÍCIO 2 - Aprovado ou Reprovado
 *
 * Instruções:
 * 1. Crie uma variável chamada nota.
 * 2. Utilize uma estrutura if/else.
 * 3. Se a nota for maior ou igual a 7, exiba:
 *
 * "Aluno aprovado."
 *
 * 4. Caso contrário, exiba:
 *
 * "Aluno reprovado."
 *
 * Exemplo:
 * nota = 8
 * Saída: Aluno aprovado.
 */

// Implemente a partir daqui
let nota = 10;

if (nota >= 7){
    console.log('Aluno aprovado.');
} else {
    console.log('Aluno reprovado.');
}

/**
 * EXERCÍCIO 3 - Classificação de Temperatura
 *
 * Instruções:
 * 1. Crie uma variável chamada temperatura.
 * 2. Utilize if, else if e else.
 * 3. Exiba:
 *
 * - "Frio" se a temperatura for menor que 15.
 * - "Agradável" se a temperatura estiver entre 15 e 25.
 * - "Quente" se a temperatura for maior que 25.
 *
 * Exemplo:
 * temperatura = 28
 * Saída: Quente
 */

// Implemente a partir daqui
let temperatura = 35;

if (temperatura < 15){
    console.log('Frio');
} else if (temperatura >=15 && temperatura <= 25){
    console.log('Agradável');
} else {
    console.log('Quente');
}

/**
 * EXERCÍCIO 4 - Verificando acesso ao sistema
 *
 * Instruções:
 * 1. Crie as variáveis:
 *
 * const usuarioAtivo = true;
 * const senhaCorreta = true;
 *
 * 2. Utilize um operador lógico (&&).
 * 3. O acesso só deve ser liberado quando as duas condições forem verdadeiras.
 * 4. Exiba:
 *
 * "Acesso permitido."
 *
 * ou
 *
 * "Acesso negado."
 *
 * Exemplo:
 * usuarioAtivo = true
 * senhaCorreta = false
 *
 * Saída: Acesso negado.
 */

// Implemente a partir daqui
 const usuarioAtivo = true;
 const senhaCorreta = false;

 if (usuarioAtivo && senhaCorreta){
    console.log("Acesso permitido.");
 } else {
    console.log("Acesso negado.");
 }

/**
 * EXERCÍCIO 5 - Sistema de desconto
 *
 * Instruções:
 * 1. Crie uma variável chamada valorCompra.
 * 2. Utilize if, else if e else.
 * 3. Aplique as seguintes regras:
 *
 * - Acima de R$ 500 → desconto de 20%
 * - Acima de R$ 200 → desconto de 10%
 * - Até R$ 200 → sem desconto
 *
 * 4. Exiba qual desconto foi aplicado.
 *
 * Exemplo:
 * valorCompra = 650
 * Saída: Desconto de 20% aplicado.
 */

// Implemente a partir daqui
let valorCompra = 20;

if (valorCompra > 500) {
    console.log('Desconto de 20% aplicado.');
} else if (valorCompra > 200 && valorCompra <= 500){
    console.log('Desconto de 10% aplicado.');
} else {
    console.log('Sem desconto.');
}

/**
 * DESAFIO EXTRA - Entrada no evento
 *
 * Instruções:
 * 1. Crie as variáveis:
 *
 * const idade = 25;
 * const possuiIngresso = true;
 *
 * 2. Uma pessoa só pode entrar no evento quando:
 *
 * - Tiver 18 anos ou mais
 * E
 * - Possuir ingresso
 *
 * 3. Utilize operadores relacionais e lógicos.
 * 4. Exiba:
 *
 * "Entrada permitida."
 *
 * ou
 *
 * "Entrada não permitida."
 *
 * Exemplo:
 * idade = 16
 * possuiIngresso = true
 *
 * Saída: Entrada não permitida.
 */

// Implemente a partir daqui
 const minhaIdade = 17;
 const possuiIngresso = true;

 if (minhaIdade >= 18 && possuiIngresso){
    console.log("Entrada permitida.");
 } else {
    console.log("Entrada não permitida.");
 }
