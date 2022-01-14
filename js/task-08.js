const form = document.querySelector(".login-form");

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault(); // для НЕ перезапуска странички //

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = { email, password };
    
    if (email.value === "" || password.value === "") {
        alert('All fields should be filled by you');
    } else {
        console.log(formData);
    }
    form.reset();
}