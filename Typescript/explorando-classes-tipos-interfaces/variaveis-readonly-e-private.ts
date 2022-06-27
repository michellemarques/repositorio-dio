//  Criando variáveis readonly (só leitura) e private

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
};

/* const meuCachorro: Cachorro = {
    nome: 'Apolo',
    idade: 14
}; */

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K]; // -? = remover os valores opcionais
};

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;
    
    constructor(idade, nome) {
        this.idade = idade;
        this.nome = nome;
    };
};

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 5;
console.log(cao)
