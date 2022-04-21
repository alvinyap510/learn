// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const productInput = document.querySelector('#product');
const quantityInput = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    const product = productInput.value;
    const quantity = quantityInput.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${quantity} ${product}`;
    list.appendChild(newLi);
    productInput.value = '';
    quantityInput.value = '';
})