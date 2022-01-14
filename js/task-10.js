function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

input.addEventListener('input', event => {
  input.setAttribute('counter', event.currentTarget.value);
});


const onCreateBoxes = () => {
  let boxSize = 30;
  let allDivsEl = [];
  for (let i = 1; i <= input.getAttribute('counter'); i += 1) {
    boxSize += 10;
    const newDiv = document.createElement('div');
    newDiv.classList.add("box-item");

    newDiv.style.width = `${boxSize}px`;
    newDiv.style.height = `${boxSize}px`;

    newDiv.style.border = '2px solid black';
    newDiv.style.backgroundColor = `${getRandomHexColor()}`;

    allDivsEl.push(newDiv);
  }
  boxes.append(...allDivsEl);
};

createBtn.addEventListener('click', onCreateBoxes);

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  input.removeAttribute('counter');
  input.value = '';
});