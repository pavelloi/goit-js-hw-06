const list = document.querySelectorAll('.item');
console.log(`Number of categories: `, list.length);

// const categoryTitle = document.querySelectorAll('h2');
const allCategories = document.querySelectorAll('ul#categories li.item')

allCategories.forEach(title => {
    console.log('Category: ', title.firstElementChild.textContent);
    console.log('Elements: ', title.lastElementChild.children.length);
    // const itemsList = title.nextElementSibling;
    // const items = itemsList.children;
    // console.log('Elements: ', items.length);
 })


