const imgIcone = document.querySelector(".PasswordIcone");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");
const btnlogin = document.querySelector(".btnlogin");
const errorMessage1 = document.getElementsByClassName("error")[0];
const errorMessage2 = document.getElementsByClassName("error")[1];

//Password Icon Change 
imgIcone.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
        imgIcone.src = "../Images/view.png"; 
    } else {
        passwordInput.type = "password"; 
        imgIcone.src = "../Images/hide.png"; 
    }
});

emailInput.addEventListener("keydown", function () {
    errorMessage1.style.visibility = "hidden";
});

passwordInput.addEventListener("keydown", function () {
    errorMessage2.style.visibility = "hidden";
});

//chec validation of login form and store data in local storge
btnlogin.addEventListener("click", function () {
    let isValid = true;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let storedUser = null;

    
    if (emailInput.value.trim() === "") {
        errorMessage1.textContent = "This field is required";
        errorMessage1.style.visibility = "visible"; 
        isValid = false;
    } else {
        errorMessage1.style.visibility = "hidden";
    }

    
    if (passwordInput.value.trim() === "") {
        errorMessage2.textContent = "This field is required";
        errorMessage2.style.visibility = "visible";
        isValid = false;
    } else {
        errorMessage2.style.visibility = "hidden";
    }


    if (isValid && emailInput.value.trim() !== "") {
        storedUser = users.find(user => user.email === emailInput.value.trim());
        if (!storedUser) {
            errorMessage1.textContent = "This email does not exist";
            errorMessage1.style.visibility = "visible";
            isValid = false;
        } else {
            errorMessage1.style.visibility = "hidden";

            
            if (storedUser.password !== passwordInput.value.trim()) {
                errorMessage2.textContent = "This password is incorrect";
                errorMessage2.style.visibility = "visible";
                isValid = false;
            } else {
                errorMessage2.style.visibility = "hidden";
            }
        }
    }

    
    if (isValid) {

        localStorage.setItem("currentUser", JSON.stringify(storedUser));

        location.href = "../HTML/StartExam.html"; 
    }
});


const Register=document.querySelector(".Register")
Register.addEventListener("click",function(){
    window.location.href ="../HTML/SignUp.html" 
})

