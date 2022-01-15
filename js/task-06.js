const inputText = document.querySelector('#validation-input');
const passwordLength = Number(inputText.dataset.length);
console.log(typeof passwordLength); // капец, спасибо за подсказску с typeof, я и не заметил что приравнивал строку к числу
const inputBorderColor = inputText.addEventListener("blur", (event) => {
    return event.currentTarget.value.length === passwordLength ?
        inputText.setAttribute("class", "valid") :
        inputText.setAttribute("class", "invalid");
});
