const incrEl = document.querySelector('[data-action="increment"]');
const decrEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

incrEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

decrEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});