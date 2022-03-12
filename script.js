// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Put code here, don't change above

//create buckets for each character type - upper, lower, special characters, numbers
//reference https://gist.github.com/bendc/1e6af8f2d8027f2965da

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A",  "B",  "C", "D", "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L", "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!","@", "#",  "$",  "%",  "^",  "&",  "*",  "(",  ")",  "+",  "-",  ".",  "~",  "|",  "<",  ">",  "=",  "-",  "_",  "/",  ":",  ";",  "?",  "[",  "]",  "{",  "}",  "~"];
var userChoice;

//create function for generatePassword

function generatePassword() {
  //get user preferences from password
  //ask user about how many characters
  var characterLimit = window.prompt("How many characters would you like the password to be?");

  //if user doesn't include any number - reference https://stackoverflow.com/questions/20533127/detect-empty-value-on-prompt
  if (characterLimit === "") {
    window.alert("Please enter the character length for your new password.");
  } 
  else if (characterLimit != null) {                         //user enters number
    var askCapLetters = window.confirm("Would you like to include uppercase letters?");
  }

  if (askCapLetters === true) {
      //ask for lower case letters
    var askLowLetters = window.confirm("Would you like to include lowercase letters?");
  }

  if (askLowLetters === true) {
      //ask for numbers
    var askNumbers = window.confirm("Would you like to include numbers?");
  }

  if (askNumbers === true) {
      //ask for special characters
    var askSpecial = window.confirm("Would you like to include special characters?");
  }

  if (askSpecial === true) {
    window.alert("Thank you for making a password!")
  }

  //no options selected
  if (!askCapLetters && !askLowLetters && !askNumbers && !askSpecial) {
    userChoice = window.alert("No choices selected, please select at least one option.")
  }

  //All options selected
  else if (askCapLetters && askLowLetters && askNumbers && askSpecial) {
    userChoice = upperCase.concat(upperCase, lowerCase, numbers, specialChars)
  }


  //3 options
  else if (askCapLetters && askLowLetters && askNumbers) {
    userChoice = upperCase.concat(upperCase, lowerCase, numbers)
  }
  else if (askCapLetters && askLowLetters && askSpecial) {
    userChoice = upperCase.concat(upperCase, lowerCase, specialChars)
  }
  else if (askCapLetters && askNumbers && askSpecial) {
    userChoice = upperCase.concat(upperCase, numbers, specialChars)
  }
  else if (askLowLetters && askNumbers && askSpecial) {
    userChoice = lowerCase.concat(lowerCase, numbers, specialChars)
  }


  //2 options
  else if (askCapLetters && askLowLetters) {
    userChoice = upperCase.concat(upperCase, lowerCase)
  }
  else if (askCapLetters && askNumbers) {
    userChoice = upperCase.concat(upperCase, numbers)
  }
  else if (askLowLetters && askNumbers) {
    userChoice = lowerCase.concat(lowerCase, numbers)
  }
  else if (askLowLetters && askSpecial) {
    userChoice = lowerCase.concat(lowerCase, specialChars)
  }
  else if (askNumbers && askSpecial) {
    userChoice = numbers.concat(numbers, specialChars)
  }
  else if (askCapLetters && askSpecial) {
    userChoice = upperCase.concat(upperCase, specialChars)
  }

  //1 option
  else if (askCapLetters) {
    userChoice = upperCase
  }
  else if (askSpecial) {
    userChoice = specialChars
  }
  else if (askLowLetters) {
    userChoice = lowerCase
  }
  else if (askNumbers) {
    userChoice = numbers
  }

//create guaranteed collection, array
var passArray = [];

//randomly draw characters to create a password, repeat by user preference, loop through as many times as needed
for (var i=0; i < characterLimit; i++) {
  var userData = userChoice[Math.floor(Math.random() * userChoice.length)];
  passArray.push(userData);
}

//create a password variable and join
var finalPassword = passArray.join("")

//to see what was chosen
console.log(passArray)

//return the password string
return finalPassword;


//Thank you to Travis for helping me :)
  }
 


