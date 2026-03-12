function registerUser(e){
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    window.location.href = "login.html";
}

function loginUser(e){
    e.preventDefault();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if(storedUser && email === storedUser.email && password === storedUser.password){
        alert("Login Successful");
        window.location.href = "home.html"; 
    } else {
        alert("Invalid Credentials");
    }
}