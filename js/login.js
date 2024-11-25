var userName = document.getElementById("text")
var email = document.getElementById("email")
var password = document.getElementById("password")
var correct = document.getElementById("incorrect")
var message = document.getElementById("message")



function login() {
        
        var text = email.value
        var passwor = password.value
        var regex2 =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        //password => Welcome@2023
        var regex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if(regex2.test(text) && regex3.test(passwor))
                {
                       
                  window.location.href= "welcome.html"
                  localStorage.setItem("userName", userName.value);
                }else{
                  correct.classList.add("d-block")
                  correct.classList.remove("d-none")
                }
               
               
}