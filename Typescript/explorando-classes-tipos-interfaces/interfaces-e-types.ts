
 // Interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';

    executarRugido(alturaEmDecibeis: number): void;
};

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome:'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
};

animal.executarRugido(15); // dá erro se for string

const felino: IFelinos = {
    nome:'Leão',
    tipo:  'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
};


/* // Types
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
};

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
};

interface ICanino extends IAnimal {
    porte: 'p' | 'm' | 'g'
};

type IDomestico = IFelinos | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    tipo: 'terrestre',
    porte: 'm',
    visaoNoturna: true 
} */