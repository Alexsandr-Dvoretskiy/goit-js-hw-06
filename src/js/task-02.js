const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const storageEl = [];

const listEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');

  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  storageEl.push(itemEl);
});

listEl.append(...storageEl);
