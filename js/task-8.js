// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputNumberRef = document.querySelector("#controls input");

const createBtnRef = document.querySelector('button[data-action="render"]');

const destroyBtnRef = document.querySelector('button[data-action="destroy"]');

const divBoxesRef = document.querySelector("#boxes");



createBtnRef.addEventListener('click', createBoxes);

destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputNumberRef.valueAsNumber;
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = randomColor();
    divEl.style.width = i * 10 + 30 + 'px';
    divEl.style.height = i * 10 + 30 + 'px';
    divArr.push(divEl);
  }
  divBoxesRef.append(...divArr);
};

function randomColor() {
  const color =
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')';
  return color;
};

function destroyBoxes() {
  for (const child of divBoxesRef.children) {
    child.remove();
  };
  inputNumberRef.value = "";
};


