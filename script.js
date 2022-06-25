// Assignment Code
//var generateBtn = document.queryselector("#generate")

var generateBtn = document.querySelector("#generate");
var numberChar = "0123456789";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
