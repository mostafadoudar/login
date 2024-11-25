var userName = document.getElementById("text")
var email = document.getElementById("email")
var password = document.getElementById("password")
var correct = document.getElementById("incorrect")
var message = document.getElementById("message")


var cartona = []

function signUp() {
        var user = {
                name: userName.value, 
                email: email.value,
                password: password.value
        }
        cartona.push(user)
        localStorage.setItem("userName", user.name)
        validSignUp()
        
        
}


function validSignUp() {
        var name = userName.value
        var text = email.value
        var passwor = password.value
        var regex1 = /^[a-zA-Z][a-zA-Z0-9._]{1,14}[a-zA-Z0-9]$/
        var regex2 =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        //password => Welcome@2023
        var regex3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if(regex1.test(name) && regex2.test(text) && regex3.test(passwor))
                {

                  window.location.href= "login.html"
                }else{
                  correct.classList.add("d-block")
                  correct.classList.remove("d-none")
                }
                
                

}