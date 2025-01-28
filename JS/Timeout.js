//get full name of user and show it in timeout
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

let tryAgainButton=document.querySelector(".tryagain");
let logOutButton=document.querySelector(".logout");

tryAgainButton.addEventListener("click",function(){
    window.location.href="../HTML/StartExam.html"
})

logOutButton.addEventListener("click",function(){
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    localStorage.removeItem("firstname")
    localStorage.removeItem("lastname")
    localStorage.removeItem("confirmpassword")
    window.location.href="../HTML/home.html"
})

