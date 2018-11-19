

function register() {
   
   
   var email = document.getElementById("email").value;         //referring to and getting the element with the id="email". "value" is getting the value of a text field (string).
   var pwd = document.getElementById("pwd").value;            //referring to and getting the element with the id="pwd".  "value" is getting the value of a text field (string).
   var pwdRepeat = document.getElementById("pwdRepeat").value;
   var filterRegistrationMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;     //NEEDS THIS EXPLAINED
   

    if (email == '' || !filterRegistrationMail.test(email)) {
        alert("Please enter a valid email id.");
    }
    else if (pwd == '' || pwd.length < 6 || pwd.length > 20 || !/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd)) {
        alert("The password must contain a minimum of 6 and maximum of 20 characters, including at least one capital letter and one number.");
    }

    else if (pwdRepeat != pwd) {
        alert("The passwords do not match.")
    }
    else {
        saveUser(new User(email, pwd));                                                 // transporting email and psw to user object (function saveUser(user))
        alert('Successful registration. You will be redirected to the log in menu');
        window.location = "logIn.html";
    }
}

function saveUser(user){
    localStorage.setItem('email', user.email);
    localStorage.setItem('pwd', user.password);
}