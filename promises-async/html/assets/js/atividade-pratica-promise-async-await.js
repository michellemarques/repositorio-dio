/* Atividade: API "catAPI"
Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
 */

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btn = document.querySelector('#change-cat');

const getCats = async () => {

    try{

        const data = await fetch(BASE_URL);
        const json = await data.jason();
        
        return json.webpurl;

    } catch(err) {
        console.log(err.message);
    }

};

const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getCats();
};

loadImg();

btn.addEventListener('click', loadImg);

