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

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
