var userName = document.getElementById("text")
var email = document.getElementById("email")
var password = document.getElementById("password")
var correct = document.getElementById("incorrect")
var message = document.getElementById("message")


document.addEventListener("DOMContentLoaded", function() {
        var userName = localStorage.getItem("userName");

        
        if (userName) {
            document.getElementById("message").innerText = "Welcome, " + userName + "!";
        } else {
            document.getElementById("message").innerText = "Welcome, Guest!";
        }
        
});
