const main = document.getElementById("main");
const success = document.querySelector(".success-form");
const emailField = document.querySelector(".email-field");
const submitBtn = document.getElementById("submit");
const errorMsg = document.querySelector(".error-msg");
const returnBtn = document.getElementById("return");
let userEmail = document.getElementById("user-email");

/*when click a submit button, the main form hide and the success, show*/

    submitBtn.addEventListener("click", () => {
        if(validEmail(emailField.value)){
           main.classList.add("hide");
           success.classList.remove("hide");
           userEmail.innerHTML = emailField.value;
           emailField.classList.remove("error-submit");
           errorMsg.classList.remove("active");
        } else if (emailField.value === '') {
            emailField.classList.remove("error-submit");
            errorMsg.classList.remove("active");
        } else {
           emailField.classList.add("error-submit");
           errorMsg.classList.add("active");
        }
       });

/*when click dismiss message button, return to main form page*/
returnBtn.addEventListener("click", () => {
    success.classList.add("hide");
    main.classList.remove("hide");
})

/*for validating email pattern*/ 
function validEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
