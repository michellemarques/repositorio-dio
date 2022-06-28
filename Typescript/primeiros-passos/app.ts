const pessoa = {
    nome: 'Ana',
    idade: 25,
    profissao: 'desenvolvedora'
};

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 22,
    profissao: 'sapateiro'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 22,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Cantora
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao?: Profissao; // ? -> propriedade ñ obrigatória
}

interface Estudante extends Pessoa {
    materiais: string[];  // lista
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 30,
    profissao:Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 30,
    profissao:Profissao.Desenvolvedora
}

const ana: Estudante = {
    nome: 'Ana',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materiais: ['cal1', 'cal2']
}

const anderson: Estudante = {
    nome: 'Anderson',
    idade: 28,
    materiais: ['cal1', 'cal2']
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('item - ', item)
    };
}

listar(anderson.materiais);