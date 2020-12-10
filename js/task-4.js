// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterResult = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

// function onIncrementBtnClick() {
//     counterValue += 1;
//   counterResult.textContent = counterValue;
//   return counterResult;
// }

// function onDecrementBtnClick() {
//   counterValue -= 1;
//   counterResult.textContent = counterValue;
//   return counterResult;
// }

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);


function resultOfCounter() {
  counterResult.textContent = counterValue;
  return counterResult;
}

function onIncrementBtnClick() {
  counterValue += 1;
  resultOfCounter();
}

function onDecrementBtnClick() {
  counterValue -= 1;
  resultOfCounter();
}


