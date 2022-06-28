"use strict";
let btn = document.querySelector('#button');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
function soma(n1, n2, devePrintar, frase) {
    let resultado = n1 + n2;
    if (devePrintar)
        console.log(frase + resultado);
    if ((typeof n1 === 'number' && typeof n2 === 'number')) {
        return n1 + n2;
    }
    else {
        return Number(n1) + Number(n2);
    }
}
;
let devePrintar = true;
let frase = "O valor é: ";
if (btn) {
    btn.addEventListener('click', () => {
        if (input1 && input2) {
            soma(Number(input1.value), Number(input2.value), devePrintar, frase);
        }
        ;
    });
}
;
