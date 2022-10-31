let counterValue = 0;

const decrementEl = document.querySelector('[data-action = "decrement"]');
const incrementEl = document.querySelector('[data-action = "increment"]');
const value = document.querySelector('#value');

decrementEl.addEventListener('click', event => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementEl.addEventListener('click', event => {
  counterValue += 1;
  value.textContent = counterValue;
});
