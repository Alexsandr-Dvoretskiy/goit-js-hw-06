const inputTextEl = document.querySelector('#validation-input');
const validLength = parseInt(inputTextEl.getAttribute('data-length'));

inputTextEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length === validLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
  console.log(event.currentTarget.value.length === validLength);
});
