/* Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele. */

// Com This
const nums = [2, 5];

const idade1 = {
    value: 2
};
const idade2 = {
    value: 3
};

function mapComThis(arr, thisArg) {

    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
};

console.log(mapComThis(nums, idade1));
console.log(mapComThis(nums, idade2));
// --------------------------------------

// Sem This
const nums2 = [6, 15, 7, 1];

function mapSemThis(arr) {
    return arr.map((item) => item * 2);
};

console.log(mapSemThis(nums2));
console.log('Array original =>', nums2);