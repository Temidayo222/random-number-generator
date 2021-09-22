let numberEl = document.getElementById('numbers-el');
let btnEl = document.getElementById('btn-el');

btnEl.addEventListener('click', () => {
    let randomNumbers = Math.floor(Math.random() * 9000) + 1;

    numberEl.textContent = randomNumbers
});