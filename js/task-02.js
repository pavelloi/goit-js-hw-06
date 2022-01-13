const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const itemOfList = document.createElement("li");
  itemOfList.textContent = item;
  itemOfList.classList.add("item");
  ingredientsList.append(itemOfList);
})