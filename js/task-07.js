const input = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = "56px";
const changeSpanSize = () => {
    spanEl.setAttribute('style', `font-size: ${input.value}px`)
};

input.addEventListener('input', changeSpanSize);