// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength = " ";
var uppercaseCheck = " ";
var numberCheck = " ";


//Function used to determine the length of the password

generateBtn.addEventListener("click", writePassword);

// Prompts that come up after you click generate password
function generatePassword() {
var passwordLength = prompt("password must be more than 12 but less than 128.");
var numbers = confirm("Do you want numbers in your password?");
var lowerCases = confirm("Do you want lowercases in your password?");
var upperCases = confirm("Do you want uppercases in your password?");
var special = confirm("Do you want special characters in your password?");

  var minimumCount = 0;

  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

}
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }
if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
        minimumCount++;
  }
if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  return randomPasswordGenerated;

