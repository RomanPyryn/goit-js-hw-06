function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let boxSize = 30;
let amount = 0;

const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('div');

createEl.addEventListener('click', getAmount);
destroyEl.addEventListener('click', destroyBoxes);
inputEl.addEventListener('input', (event) => amount = Number(event.currentTarget.value));

function getAmount() {
  createBoxes(amount);
};

function createBoxes() {
  for (let i = 0; i < amount; i++) {
    boxSize += 10;
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.height = boxSize + 'px';
    newBox.style.width = boxSize + 'px';
    newBox.style.margin = '10px';
    newBox.classList.add('new-box');
    boxesEl.append(newBox);
  }
};

function destroyBoxes() {
  const newBoxesEl = document.querySelectorAll('.new-box');

  for (let newBoxEl of newBoxesEl) {
    newBoxEl.remove();
  }

  boxSize = 30;

  inputEl.value = '';
};