// Manipular o Objeto Error

/* new Error (message, fileName, lineNumber)  */

// todos os parâmetros são opcionais

/* let MeuErro = new Error('Mensagem inválida');
throw MeuErro; */

// com nome

const MeuErro2 = new Error('Mensagem inválida');
MeuErro2.name = 'InvalidMassage';
throw MeuErro2;


