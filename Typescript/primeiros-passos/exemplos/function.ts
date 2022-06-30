function printaValoresNumericos(n1: number, n2: number): void {
    console.log(n1 + n2);
};

function printaValoresNumericosETratar(n1: number, n2: number, callback: (num: number) => number): number {

    let resultado = n1 + n2;

    return callback(resultado);
};

function aoQuadrado(num: number): number {
    return num * num;
};

function dividirPorEleMesmo(num: number): number {
    return num / num;
}

console.log(printaValoresNumericosETratar(1, 3, aoQuadrado));
console.log(printaValoresNumericosETratar(1, 3, dividirPorEleMesmo));