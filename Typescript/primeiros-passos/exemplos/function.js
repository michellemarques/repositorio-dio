"use strict";
function printaValoresNumericos(n1, n2) {
    console.log(n1 + n2);
}
;
function printaValoresNumericosETratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
;
function aoQuadrado(num) {
    return num * num;
}
;
function dividirPorEleMesmo(num) {
    return num / num;
}
console.log(printaValoresNumericosETratar(1, 3, aoQuadrado));
console.log(printaValoresNumericosETratar(1, 3, dividirPorEleMesmo));
