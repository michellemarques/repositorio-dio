/* Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */


const nums = [10, 4, 8, 62];

function soma(arr) {
    return arr.reduce(function (prev, curr) {
        return prev + curr;
    })
};

//console.log(soma(nums));

// ---------------------------------------

/* const listaPrecos = [100, 20, 50, 30];

function saldoFinal(lista, saldo = 500) {
    const valorTotal = lista.reduce(function (prev, curr) {
        return prev + curr;
    });

    return 'O saldo final é: ' + (saldo - valorTotal);
};

console.log(saldoFinal(listaPrecos));
console.log(saldoFinal(listaPrecos, 250)); */

// Outra forma de se fazer
const list = [{
        nome: 'feijão',
        preco: 7
    },
    {
        nome: 'arroz',
        preco: 15
    },
    {
        nome: 'farinha',
        preco: 10
    }
];

const saldoDisp = 100;

function calculaSaldo(saldoDisp, list) {
    return list.reduce(function(prev, curr) {
        console.log(prev);
        console.log(curr);

        return prev - curr.preco;
    }, saldoDisp);
};

console.log('O saldo disponível é de: ' + calculaSaldo(saldoDisp, list));