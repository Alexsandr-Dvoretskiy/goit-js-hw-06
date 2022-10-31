function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  btn: document.querySelector('button.change-color'),
  body: document.body,
  colorSpan: document.querySelector('span.color'),
};
ref.btn.addEventListener('click', onClickBtn);

function onClickBtn() {
  const color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.colorSpan.textContent = color;
}
