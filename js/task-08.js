const form = document.querySelector(".login-form");

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault(); // для НЕ перезапуска странички //

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = { email, password };
    // убрал .value c email и password ниже и alert заработал (я же value их віше указал (facepalm)
    if (email === "" || password === "") {
        alert("All fields should be filled by you");
    } else {
        console.log(formData);
    }
    form.reset();
}