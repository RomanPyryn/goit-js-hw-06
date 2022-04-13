const listEl = document.querySelector('#categories');

console.log('Number of categories: ', listEl.children.length);


const titlesEl = document.querySelectorAll('h2')

console.log('Category: ', titlesEl[0].textContent);
console.log('Elements: ', listEl.firstElementChild.lastElementChild.children.length);

console.log('Category: ', titlesEl[1].textContent);
console.log('Elements: ', listEl.children[1].lastElementChild.children.length);

console.log('Category: ', titlesEl[2].textContent);
console.log('Elements: ', listEl.lastElementChild.lastElementChild.children.length);