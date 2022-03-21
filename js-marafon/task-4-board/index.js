const board = document.querySelector('#board');
const SQUARES_NUMBER = 400;


for (let i = 0; i < SQUARES_NUMBER; i++){
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave' , removeColor);
  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColorOfColors();
  element.style.backgroundColor = `${color}`;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomColorOfColors() {
  const colors = ['#e74c3c', '#8e4ad', '#3498db', '#e67e22', '#2ecc71'];
  return colors[Math.floor(Math.random() * colors.length)];
}