<<<<<<< HEAD
/* // Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */

let employee: { code: number, name: string } = {
    code: 10,
    name: 'Jhon'
}
employee.code = 10;
employee.name = "John"; 

//   OU

interface employee {
    code: number,
    name: string
};

employee.code = 10;
employee.name = 'Alberto';
=======
/* // Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */

let employee: { code: number, name: string } = {
    code: 10,
    name: 'Jhon'
}
employee.code = 10;
employee.name = "John"; 

//   OU

interface employee {
    code: number,
    name: string
};

employee.code = 10;
employee.name = 'Alberto';
>>>>>>> eb50257b493eb9feae9ed19348fba0cdda073e98
