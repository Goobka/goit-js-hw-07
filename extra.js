// ПЕРВОЕ
const itemRefAll = document.querySelectorAll('.item');
console.log(`В списке ${itemRefAll.length} категории.`);
​
// // ВТОРОЕ
const showCategoriesElements = array =>
  [...array].map(element => {
    //   ПРОСТОЙ ПЕРЕБОР
    console.log(
      `Категория: ${element.childNodes[1].textContent}\nКоличество элементов: ${element.children[1].children.length}`,
    );
​
    // ВАРИАНТЫ
​
      // console.log(element.children[1].children.length);
      // console.log(element.childNodes[3].children.length);
  });
​
showCategoriesElements(itemRefAll);




//3

const mainList = document.querySelector('#ingredients');
​
const createIngredientCard = product =>
  product.map(element => {
    const eachItem = document.createElement('li');
    eachItem.textContent = element;
    return eachItem;
  });
​
const allInMain = (main, callback, callItems) => {
  return main.append(...callback(callItems));
};
​
allInMain(mainList, createIngredientCard, ingredients);


//4
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value')
​
incrementBtn.addEventListener('click', onIncrementClick);
decrementBtn.addEventListener('click', onDecrementClick);
document.addEventListener('DOMContentLoaded', () => { console.log('Сработал слушатель на обновление интерфейса'); })
counterValue.addEventListener('click', () => alert('Ты сюдой не жми, ты тудой жми! )))'))
​
function onIncrementClick(event) {
    let textToNum = Number(counterValue.textContent)
    textToNum += 1
return counterValue.textContent = textToNum
}
​
function onDecrementClick(event) {
    let textToNum = Number(counterValue.textContent)
    textToNum -= 1
return counterValue.textContent = textToNum
}



//5
const inputRef = document.querySelector('#name-input')
inputRef.focus()
const outputRef = document.querySelector('#name-output')
​
​
inputRef.addEventListener('input', onInputChange);
​
​
function onInputChange(event) {
    outputRef.textContent = event.target.value
    if (event.target.value === '') {
         outputRef.textContent = 'незнакомец'
    }
}


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


//6

const inputValidationRef = document.querySelector('input[data-length="6"]')
inputValidationRef.focus()
​
inputValidationRef.addEventListener('blur', onBlurCheck);
​
function onBlurCheck(event) {
    if (inputValidationRef.value.length === Number(inputValidationRef.attributes['data-length'].value)) {
        inputValidationRef.classList.add('valid');inputValidationRef.classList.remove('invalid')
    }
    else {
        inputValidationRef.classList.add('invalid');
        inputValidationRef.classList.remove('valid')
    }
}


//7

const fontSizeControlInputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector("#text")
const baseValueInputRef = fontSizeControlInputRef.value
textRef.style.fontSize = `${baseValueInputRef}px`
​
fontSizeControlInputRef.addEventListener('input', function (e) {
    
    textRef.style.fontSize = `${e.target.value}px`
});



//8

const inputRef = document.querySelector('#controls > input')
const createArrayBtnRef = document.querySelector('button[data-action="render"]')
const destroyArrayBtnRef = document.querySelector('button[data-action="destroy"]')
const divBoxesRef = document.querySelector('#boxes')
​
​
inputRef.addEventListener('input', onNewInput);
inputRef.focus()
createArrayBtnRef.addEventListener('click', onCreateBtnClick);
destroyArrayBtnRef.addEventListener('click', onDestroyBtnClick)
​
​
function onNewInput(event) {
      inputRef.textContent = event.target.value
}
​
function onCreateBtnClick() {
      const array = new Array(Number(inputRef.value))
      array.fill(1).reduce((def, elem) => {
            elem = document.createElement('div')
            elem.style.width = `${def}px`;
            elem.style.height = `${def}px`;
            elem.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
            divBoxesRef.appendChild(elem)
            return  def + 10
      }, 30)
      
}
​
function onDestroyBtnClick() {
      Array.from(divBoxesRef.children).map(elem => elem.remove())
       // divBoxesRef.innerHTML = ''
      inputRef.value = ''
     inputRef.focus()
}