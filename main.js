
function generatePassword() {
var password=document.getElementById("password");
var kod = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 6;  
var password = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * kod.length);
  password += kod.substring(randomNumber, randomNumber +1);
  
 }

 document.getElementById("password").value = password;
 
}




