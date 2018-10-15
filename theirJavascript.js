/* var submit = document.getElementById('submit');

submit.onclick = function(){
  console.log("Button is clicked");

  alert('You just clicked on login');
};

// check if username and password is true
// if true, return successfull attempt
// if false, return wrong login, try again
// 
*/

function forgotPassword()
{
window.location = "newPassword.html";               //window.location: new location for the window. Redirected to "newPassword.html" which is another interface
}

function submitEmail()
{
    alert("A new password has been sent to your email.");
}

function login()
{
    var uname = document.getElementById("email").value;         //referring to the email-id from the html file.
    var pwd = document.getElementById("pwd1").value;            // referring to the password-id from the html file. 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;     //NEEDS THIS EXPLAINED
    if(uname =='')
    {
        alert("please enter your email.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(uname))                    //test: boolean, testing the username (uname). "!filter": not equal to the filters values.
    {
        alert("Enter valid email id.");
    }
    else if(pwd.length < 6)
    {
        alert("Invalid password: min length is 6.");
    }
    else if(pwd.length > 20)
    {
        alert("Invalid password: max length is 20.")
    }
    else
    {
alert('You are logged in and will be redirected to our main page');
//Redirecting to other page or webste code or you can set your own html page.
   window.location = "mainPage.html";
        }
}		