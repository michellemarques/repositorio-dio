"use strict";
function somarValores(imput1, imput2) {
    if (typeof imput1 === 'string' || typeof imput2 === 'string') {
        return imput1.toString() + imput2.toString();
    }
    ;
    return imput1 + imput2;
}
;
console.log(somarValores('mamãe ', 'ama'));
console.log(somarValores(5, 5));
console.log(somarValores('1', 5));
