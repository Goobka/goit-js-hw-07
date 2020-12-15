// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector("#name-input");
const nameLabelRef = document.querySelector('#name-output');

// inputRef.addEventListener("change", onInputChange)

// function onInputChange(event) {
//   inputRef.textContent === ' '
//     ? (nameLabelRef.textContent = 'незнакомец')
//     : (nameLabelRef.textContent = event.target.value);
// }

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  inputRef.data - length <= 0
    ? (nameLabelRef.textContent = 'незнакомец' ) 
    : (nameLabelRef.textContent = event.target.value);
   if (event.target.value === '') {
         nameLabelRef.textContent = 'незнакомец'
    }
}

//Вопрос что при удалении записи в input без перезагрузки страницы span остается пустой?????  ИСПРАВИЛА)


/*inputRef.addEventListener('input', onInputChange);
inputRef.addEventListener('blur', onInputChange);


nameLabelRef.hidden = true;
function onInputChange(event) {
    let userInfo = inputRef.value.trim();
    nameLabelRef.hidden = false;
    inputRef.value.length === 0
        ? (nameLabelRef.textContent = 'незнакомец')
        : (nameLabelRef.textContent = userInfo);
}*/