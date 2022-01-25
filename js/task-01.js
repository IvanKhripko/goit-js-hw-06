
const categoriesList = document.querySelector('#categories');

const categoriesListItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.children.length}`);

categoriesListItems.forEach(item => {
    const categoriesListHeader = item.querySelector('h2');
    console.log(`Categry: ${categoriesListHeader.textContent}`);

    const categoriesListItems = item.querySelectorAll('li');
    console.log(`Elements: ${categoriesListItems.length}`);
})



