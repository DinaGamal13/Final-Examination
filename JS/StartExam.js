var greeting = document.querySelector(".nameLogin");
//get full name of user and show it to start exam
const fullName=localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")
console.log(fullName);
function capitalizeName(fullName) {
    return fullName
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' '); 
}

//check if user is already login before or first time to sign up
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser && currentUser.firstName && currentUser.lastName) {
    document.querySelector(".fullname").textContent=capitalizeName(currentUser.firstName)+ " " +capitalizeName(currentUser.lastName);
}else{
    document.querySelector(".fullname").textContent=capitalizeName(fullName);
}

let startButton = document.querySelector("#startbtn");

startButton.addEventListener("click", function() {
    location.href = "../HTML/Exam.html";
});
