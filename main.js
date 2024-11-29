const container = document.getElementById('container');

const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

addButton.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'New Element Added!';
  
  container.appendChild(newElement);
});

removeButton.addEventListener('click', () => {
  if (container.lastElementChild && container.lastElementChild.tagName === 'P') {
    container.removeChild(container.lastElementChild);
  }
});