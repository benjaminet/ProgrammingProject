

function register() {
   
   
   var email = document.getElementById("email").value;         //referring to and getting the element with the id="email". "value" is getting the value of a text field (string).
   var pwd = document.getElementById("pwd").value;            //referring to and getting the element with the id="pwd".  "value" is getting the value of a text field (string).
   var pwdRepeat = document.getElementById("pwdRepeat").value;
   var filterRegistrationMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;     // Must contain small and capital letters, a "@", and letters again = an email 
   

    if (email == '' || !filterRegistrationMail.test(email)) {           // if email field is empty or email conditions is not fulfulled, alert happens
        alert("Please enter a valid email id.");
    }
    else if (pwd == '' || pwd.length < 6 || pwd.length > 20 || !/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd)) {              // conditions for password. 
        alert("The password must contain a minimum of 6 and maximum of 20 characters, including at least one capital letter and one number.");
    }

    else if (pwdRepeat != pwd) {                                // if repeated pwd is not equal to first pwd, system alerts                           
        alert("The passwords do not match.")
    }
    else {
        saveUser(new User(email, pwd));                                                 // sending email and psw to user class (function saveUser(user))
        alert('Successful registration. You will be redirected to the log in menu');
        window.location = "logIn.html";
    }
}

function saveUser(user){                        // happens when user is registrered. 
    localStorage.setItem('email', user.email);  // saves email to localstorage.
    localStorage.setItem('pwd', user.password); // saves pwd to localstorage.
}