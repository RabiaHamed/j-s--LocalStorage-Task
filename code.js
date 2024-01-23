function getElement() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    // console.log(user);
    localStorage.setItem("user",user);
    localStorage.setItem("email",email);
    localStorage.setItem("pass",pass);
}
   var storUser =  localStorage.getItem("user");
   var storEmail = localStorage.getItem("email");
   var storPass =  localStorage.getItem("pass");
function checkDetails() {
    var logEmail = document.getElementById("againEmail").value;
    var logPass = document.getElementById("againPass").value;

    if(logEmail === storEmail && logPass === storPass){
        alert(`Congratulation! ${storUser}, You have sussesfully creat your account`);
    }else{
        alert("Something wrong  Enter a vaild password & Email")
        
    }
}


