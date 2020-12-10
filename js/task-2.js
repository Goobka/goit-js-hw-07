const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector('#ingredients');

//ЧЕРЕЗ MAP 

// const ingredientsListItems = ingredients.map(ingredient => {
//    const ingredientsItem = document.createElement('li');
//    ingredientsItem.textContent = ingredient;
//   return ingredientsItem;
// })
// ingredientsListRef.append(...ingredientsListItems);


//ЧЕРЕЗ ФУНКЦИЮ оптимально

const makeListItems = items => {
  return items.map(item => {
    const itemsEl = document.createElement('li');
    itemsEl.textContent = item;
    return itemsEl;
  })
}
const ingredientsItems = makeListItems(ingredients);
ingredientsListRef.append(...ingredientsItems);



// Напиши скрипт, который для каждого элемента массива ingredients ////создаст отдельный li, после чего вставит все li за одну операцию в //список ul.ingredients. Для создания DOM-узлов используй document.//createElement().



//ЧЕРЕЗ for of (append для каждой итерации отдельный, а это плохо)

// for (const ingredient of ingredients) {
//     const ingredientsItem = document.createElement("li");
//     ingredientsItem.textContent = ingredient;
//     ingredientsListRef.append(ingredientsItem);
// }


//ЧЕРЕЗ forEach
// ingredients.forEach(ingredient => {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = ingredient;
//   ingredientsListRef.append(ingredientsItem);
// });