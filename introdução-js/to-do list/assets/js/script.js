let btnSoma = document.querySelector('.soma');
let btnSubtracao = document.querySelector('.subtracao');

let currentNumberWapper = document.querySelector('#currentNumber');
let contador = 0;

/* function increment() {
    contador++;
    currentNumberWapper.innerHTML = contador;
}

function decrement() {
    contador--;
    currentNumberWapper.innerHTML = contador;
}
 */
function increment() {
    btnSoma.addEventListener("click", () => {

        contador++;
        currentNumberWapper.innerHTML = contador;

        if (contador < 5) {
            currentNumberWapper.style.color = 'red';
        } else {
            currentNumberWapper.style.color = 'black';
        };
    });
};

function decrement() {
    btnSubtracao.addEventListener("click", () => {
        console.log(btnSubtracao);

        if (currentNumberWapper > 0) {
            contador--;
            console.log(contador)
            currentNumberWapper.innerHTML = contador;
        }
    });
};