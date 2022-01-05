const form = document.querySelector("form");
const contactName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const contactSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactAddress = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

function validateForm(event) {
    event.preventDefault();

    if(checkLength(contactName.value, 0)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(checkLength(contactSubject.value, 9)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(validateEmail(contactEmail.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(contactAddress.value, 24)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
 }
