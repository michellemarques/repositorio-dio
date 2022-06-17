

/* const menssagem = function() {
    console.log('Essa msg é exibida depois de 3 segundos.');
};

setTimeout(menssagem, 3000); */

/* setTimeout( function(){
    console.log('Essa msg é exibida depois de 3 segundos.');
}, 3000); */

//THIS
/* const pessoa = {
    firstName: 'André',
    lastName: 'Soares',
    id: 1,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    getId: function() {
        return this.id;
    } 
};
 */
// console.log(pessoa.fullName());
// console.log(pessoa.getId());

// CALL
const pessoa = {
    nome: "Miguel"
};

const animal = {
    nome: "Murphy"
};

function getSomething() {
    console.log(this.nome);
};

getSomething.call(pessoa);
getSomething.call(animal);

// APPLY
const pessoa2 = {
    nome: "Miguel"
};

const animal2 = {
    nome: "Godi"
};

function getSomething() {
    console.log(this.nome);
};

getSomething.apply(pessoa2);
getSomething.apply(animal2);