const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => { 
    console.log(`Введено ${event.currentTarget.value.length} символів`);
    
    inputEl.classList.add('invalid');
    if (event.currentTarget.value.length.toString() === inputEl.getAttribute('data-length') ) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    };
});

