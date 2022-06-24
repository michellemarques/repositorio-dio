const h1 = document.querySelector('#page-title');
const btn = document.querySelector('#mode-selector');
const body = document.querySelector('body');
const footer = document.querySelector('footer');


btn.addEventListener('click', () => {   

    mudarClasse();
    mudarTexto();

});

function mudarClasse(){

    h1.classList.toggle("dark-mode");
    btn.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

};

function mudarTexto() {

    if(body.classList.contains("dark-mode")){
        btn.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
    } else {
        btn.innerHTML = "Dark Mode";
        h1.innerHTML = "Light Mode ON";
    }

};