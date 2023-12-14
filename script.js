// Seleccionar elementos del DOM
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const random = document.getElementById('random');

// Función para aumentar el contador
function incrementCounter() {
  let currentValue = parseInt(counterElement.textContent);
  currentValue++;
  counterElement.textContent = currentValue;
}

// Función para disminuir el contador
function decrementCounter() {
  let currentValue = parseInt(counterElement.textContent);
  currentValue--;
  counterElement.textContent = currentValue;
}

// Función para reiniciar el contador
function resetCounter() {
  counterElement.textContent = '0';
}
function randomCounter() {
  let currentValue = parseInt(counterElement.textContent);
  currentValue = Math.random() * 99;
  currentValue = Math.round(currentValue + 1);
  counterElement.textContent = currentValue;
}

// Agregar event listeners a los botones
incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
random.addEventListener('click', randomCounter);
