// https://stackoverflow.com/questions/6262524/creating-a-login-in-javascript-array-comparison LINK FOR USERNAMES AND PASSWORDS TO USE

//connect to the register file to check if login matches registered login in localstorage
//<script src="register.js"> </script>


function forgotPassword() {
    window.location = "newPassword.html";               //window.location: new location for the window. Redirected to "newPassword.html" which is another interface
}

function register() {
    window.location = "register.html";
}


function login()                                    //function for the login 
{
    var email = document.getElementById("email").value;         //referring to and getting the element with the id="email". "value" is getting the value of a text field (string).
    var pwd = document.getElementById("pwd").value;            //referring to and getting the element with the id="pwd".  "value" is getting the value of a text field (string).

    if (email == '') {
        alert("Please enter your email.");
    }
    else if (pwd == '') {
        alert("Please enter the password.");
    }
    else {
        var storedEmail = localStorage.getItem("email");
        var storedPwd = localStorage.getItem("pwd");
        if(email == storedEmail && pwd == storedPwd){
            window.location = "mainPage.html";
        }
    }

    return false;
    /*
    else if ((email == "2cool4school@gmail.com" && pwd == "passWord123") || (email == "myemail@cbs.dk" && pwd == "iLoveTRAVEL0")) {
        alert("Successful login");
        window.location = "mainPage.html";
    }
    else ((email != "2cool4school@gmail.com" && pwd != "passWord123") || (email != "myemail@cbs.dk" && pwd != "iLoveTRAVEL0"))
    {
        alert("Your email or password is incorrect. Please try again.");
    }
*/

}