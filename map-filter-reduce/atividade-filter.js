/* Filter
Filtre e retorne todos os números pares de um array. */

const nums = [2, 3, 50, 115, 80, 10, 60, 46];

function filtro(arr) {
    return arr.filter(function(item){
        if(item % 2 === 0) return item;
    });
};

console.log(filtro(nums));