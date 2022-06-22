/* Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais. */


class ContaBancaria {
    constructor(ag, num, tipo) {
        this.ag = ag;
        this.num = num;
        this.tipo = tipo;
        this._saldo = 0;
    };

    get saldo() {
        return this._saldo;
       
    };

    set saldo(valor) {
        return this._saldo = valor;
    };

    sacar(valor) {
        if (valor > this._saldo) return 'Sem saldo para saque.'
        this._saldo = this._saldo - valor;
        return this._saldo;
    };

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    };
};

class ContaCorrente extends ContaBancaria {
    constructor(ag, num, cartaoCredito) {
        super(ag, num)
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'corrente';
    }

    get cartao() {
        return this._cartaoCredito;
    }

    set cartao(valor) {
        return this._cartaoCredito = valor;
    }
};

class ContaPoupanca extends ContaBancaria {
    constructor(ag, num) {
        super(ag, num);
        this.tipo = 'poupança';
    };

};

class ContaUniversitaria extends ContaBancaria {
    constructor(ag, num) {
        super(ag, num);
        this.tipo = 'universitária';
    };

    sacar(valor) {
        if (valor > 500){
            return 'Operação negada'
            
        };
        this._saldo = this._saldo - valor;
        return this._saldo;
    };
};

/* let c1 = new ContaCorrente(12, 22, true);
console.log(c1._saldo);
c1.depositar(1000);
console.log(c1._saldo);
c1.sacar(500);
console.log(c1); */

let c2 = new ContaUniversitaria(22, 65)
c2.depositar(2000);
console.log(c2);
console.log(c2.sacar(600));
console.log(c2.sacar(200));


