function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  btnEl.style.color = color;
  textEl.textContent = color;

};