let signup = document.getElementById('signup');
let login = document.getElementById('login');

function openSignup() {
    signup.classList.add("signup-popup"); 
    login.classList.add("login-popup");
}

function closeSignup() {
    signup.classList.remove("signup-popup");  
    login.classList.remove("login-popup");
}