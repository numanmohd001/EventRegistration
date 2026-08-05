document.getElementById("registrationForm").addEventListener("submit", function(event){

event.preventDefault();

const name = document.getElementById("name").value;

document.getElementById("message").innerHTML =
"Thank you, " + name + "! You have successfully registered.";

this.reset();

});