function verificaNumeros(n1, n2) {

    const saoIguais = n1 === n2;
    const soma = n1 + n2;

    if(!n1 || !n2) return 'Digite números';

    if (!saoIguais) return console.log(`Os números 1 e 2 não são iguais.`);

    if (saoIguais) {
        
        if (soma > 10 && soma > 20)  return console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`);

        if (soma > 10 && soma > 20)  return console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`);

        if (soma < 10 && soma < 20) return console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`);

        if (soma > 10 && soma < 20) return console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`);

        if (soma === 10) return console.log((`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é igual a 10.`));
        if (soma === 20) return console.log((`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é igual a 20.`));
    }
}

verificaNumeros(30,30);