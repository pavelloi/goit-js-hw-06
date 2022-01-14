
const colorBtn = document.querySelector(".change-color");
const span = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

colorBtn.addEventListener("click", event => {
  span.textContent = getRandomHexColor();
  if (event.currentTarget.classList.contains("change-color")) {
    document.body.style.background = getRandomHexColor()
  }
})