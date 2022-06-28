let btn = document.querySelector('#button');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

function soma(n1, n2) {
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        return n1 + n2;
    } else {
        return Number(n1) + Number(n2);
    };
};

btn.addEventListener('click', () => {
    console.log(soma(input1.value, input2.value));
});