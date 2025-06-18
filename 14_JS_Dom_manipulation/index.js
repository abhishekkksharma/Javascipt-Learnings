let mydiv = document.querySelector('#mydiv');
let newElement = document.createElement('span');
newElement.textContent = "Hi abhihek here"

// mydiv.insertAdjacentElement('beforebegin',newElement);
// mydiv.insertAdjacentElement('afterbegin',newElement);
// mydiv.insertAdjacentElement('beforeend',newElement);
mydiv.insertAdjacentElement('afterend',newElement);