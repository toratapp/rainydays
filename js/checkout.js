const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#last-name");
const lastNameError = document.querySelector("#lastNameError");
const shippingEmail = document.querySelector("#shippingEmail");
const emailError = document.querySelector("#emailError");
const shippingAddress = document.querySelector("#address-1");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const postCode = document.querySelector("#post-code");
const postCodeError = document.querySelector("#postCodeError");
const cardNumber = document.querySelector("#card-number");
const cardError = document.querySelector("#cardError");
const expDate = document.querySelector("#exp-date");
const expError = document.querySelector("#expError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");

function validateForm(event) {
    event.preventDefault();

    let validationPassed = true;

    if(checkLength(firstName.value, 0)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        validationPassed = false;
    }

    if(checkLength(lastName.value, 0)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
        validationPassed = false;
    }

    if(validateEmail(shippingEmail.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if(checkLength(shippingAddress.value, 7)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        validationPassed = false;
    }

    if(checkLength(city.value, 0)) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
        validationPassed = false;
    }

    if(checkLength(postCode.value, 0)) {
        postCodeError.style.display = "none";
    } else {
        postCodeError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
        form.action = "checkout-success.html";
    } else {
        form.action = "";
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
