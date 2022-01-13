const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;
decrementBtn.addEventListener('click', () => {
    value.textContent = counterValue -= 1;
    console.log(counterValue);
});
incrementBtn.addEventListener('click', () => {
    value.textContent = counterValue += 1;
    console.log(counterValue);
});
