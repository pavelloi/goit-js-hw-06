const inputText = document.querySelector('#validation-input');
const passwordLength = inputText.dataset.length;
console.log(passwordLength);
const inputBorderColor = inputText.addEventListener("blur", (event) => {
    return event.currentTarget.value.length == passwordLength ?
        inputText.setAttribute("class", "valid") :
        inputText.setAttribute("class", "invalid");
});
console.log(inputText.attributes);