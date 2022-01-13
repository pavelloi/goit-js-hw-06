const list = document.querySelectorAll('.item');
console.log(`Number of categories: `, list.length);

const categoryTitle = document.querySelectorAll('h2');

categoryTitle.forEach(title => {
    console.log('Category: ', title.textContent);
    const itemsList = title.nextElementSibling;
    const items = itemsList.children;
    console.log('Elements: ', items.length);
 })


