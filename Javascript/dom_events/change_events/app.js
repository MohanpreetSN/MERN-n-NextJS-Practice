const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    console.log('sad');
    h1.innerText = input.value;
})
