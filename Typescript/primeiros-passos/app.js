"use strict";
const pessoa = {
    nome: 'Ana',
    idade: 25,
    profissao: 'desenvolvedora'
};
pessoa.idade = 29;
const andre = {
    nome: 'André',
    idade: 22,
    profissao: 'sapateiro'
};
const paula = {
    nome: 'Paula',
    idade: 22,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Cantora"] = 3] = "Cantora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const ana = {
    nome: 'Ana',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materiais: ['cal1', 'cal2']
};
const anderson = {
    nome: 'Anderson',
    idade: 28,
    materiais: ['cal1', 'cal2']
};
function listar(lista) {
    for (const item of lista) {
        console.log('item - ', item);
    }
    ;
}
listar(anderson.materiais);
