const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingredientsItem = ingredients.map(item => {
  const itemOfList = document.createElement("li");
  itemOfList.textContent = item;
  itemOfList.classList.add("item");
  return itemOfList;
})
 ingredientsList.append(...ingredientsItem);