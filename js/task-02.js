const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeItems = items => {
  return items.map(text => {
    const listItemtEl = document.createElement('li');
    listItemtEl.textContent = text;
    listItemtEl.classList.add('item');
  
    return listItemtEl;
  })
  };

const elements = makeItems(ingredients);

listEl.append(...elements);