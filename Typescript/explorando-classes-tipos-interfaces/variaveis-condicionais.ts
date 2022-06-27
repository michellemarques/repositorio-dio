// Utilizando o caracter "?" para variáveis condicionais

interface IUsuario {
    id: string;
    email: string;
    cargo?:  'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
};

function redirecione(usuario: IUsuario){

    if(usuario.cargo){
        // redirecionar(usuario.cargo)
    };

    // redireciona para área do usuário
}; 