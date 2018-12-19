// https://stackoverflow.com/questions/6262524/creating-a-login-in-javascript-array-comparison LINK FOR USERNAMES AND PASSWORDS TO USE



 //window.location: new location for the window. Redirected to "newPassword.html" which is another interface
function forgotPassword() {
    window.location = "newPassword.html";              
}

// locates to register page when register button is clicked. 
function register() {
    window.location = "register.html";
}


function login()                                    //function for the login 
{
    var email = document.getElementById("email").value;         //referring to and getting the element with the id="email". "value" is getting the value of a text field (string).
    var pwd = document.getElementById("pwd").value;            //referring to and getting the element with the id="pwd".  "value" is getting the value of a text field (string).

    if (email == '') {                                  // if email is empty
        alert("Please enter your email.");
    }
    else if (pwd == '') {                               // if password is empty
        alert("Please enter the password.");
    }
    else {                                                        // if conditions is fulfilled, this happens
        var storedEmail = localStorage.getItem("email");            // gets the saved email from localStorage
        var storedPwd = localStorage.getItem("pwd");                // gets the saved password from localStorage
        if(email == storedEmail && pwd == storedPwd){
            window.location = "mainPage.html";                  // if the mail and pwd is equals to the registered data, then user is logged in and redirected to mainpage
        }
        else {
            alert("Mail and password do not match");
        }
    }

    return false;                                       // Prevent default browser behaviour (actually not relevant in our code)         
    

}