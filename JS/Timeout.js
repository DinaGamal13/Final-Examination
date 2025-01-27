const fullName=localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")
console.log(fullName);
function capitalizeName(fullName) {
    return fullName
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' '); 
}

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser && currentUser.firstName && currentUser.lastName) {
    document.querySelector(".fullname").textContent=capitalizeName(currentUser.firstName)+ " " +capitalizeName(currentUser.lastName);
}else{
    document.querySelector(".fullname").textContent=capitalizeName(fullName);
}

let tryAgainButton=document.querySelector(".tryagain");
let logOutButton=document.querySelector(".logout");

tryAgainButton.addEventListener("click",function(){
    window.location.href="../Html/StartExam.html"
})

logOutButton.addEventListener("click",function(){
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    localStorage.removeItem("firstname")
    localStorage.removeItem("lastname")
    localStorage.removeItem("confirmpassword")
    window.location.href="../Html/home.html"
})