/* Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */


function validacao(array, num) {

    /*     if (!array && !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof array !== "object") throw new TypeError("Array precisa ser do tipo Object");
        if(typeof num !== "number") throw new TypeError('Digite um número');

        if(array.length !== num) throw new RangeError();

        return array; */

    try {
        if (!array && !num) throw new ReferenceError('Envie os parâmetros');

        if (typeof array !== "object") throw new TypeError("Array precisa ser do tipo Object");
        if (typeof num !== "number") throw new TypeError('Digite um número');

        if (array.length !== num) throw new RangeError();

        return array;

    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('ReferenceError');
            console.log(e.message);
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log('TypeError');
            console.log(e.message);
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log('RangeError');
            console.log(e.message);
            console.log(e.stack);
        } else {
            console.log('Outro erro:' + e);
        };
    };
};

let array = [3, 5];
validacao(array, 2);

console.log('Se essa msg apareceu, não existe erros');
