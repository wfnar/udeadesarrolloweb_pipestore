const password = document.getElementById('password');
const confrimPassword = document.getElementById('confirm-password');
const errorContainer = document.getElementById('password-error');
const errorMessage = document.createElement("p")


function validationPassword(password, confrimPassword){
    return password === confrimPassword;
}

console.log(password);
confrimPassword.addEventListener('change', () =>{
    const passwordValue   = password.value
    const confirmPasswordValue   = confrimPassword.value
    const isValid = validationPassword(passwordValue, confirmPasswordValue)
    if(!isValid){
        errorMessage.textContent = "Invalid password"
        errorContainer.appendChild(errorMessage)
    } else {
        errorMessage.textContent = ""
    }
});




