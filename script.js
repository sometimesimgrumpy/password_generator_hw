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

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~"
];

//create function for generatePassword

//identify and collect buckets user has chosen

function generatePassword() {
  //get user preferences from password
  //ask user about how many characters
  var characterLimit = window.prompt(
    "How many characters would you like the password to be?"
  );

  //if user doesn't include any number - reference https://stackoverflow.com/questions/20533127/detect-empty-value-on-prompt
  if (characterLimit === "") {
    window.alert("Please enter the character length for your new password.");
  } else if (characterLimit != null) {
    //user enters number
    var askCapLetters = window.confirm(
      "Would you like to include uppercase letters?"
    );
  }

  if (askCapLetters === true) {
    //ask for capital letters
    var askUpLetters = window.confirm(
      "Would you like to include lowercase letters?"
    );

  if (askUpLetters === true) {
      //ask for uppercase letters
    var askNumbers = window.confirm("Would you like to include numbers?");
  }

  if (askNumbers === true) {
      //ask for numbers
    var askSpecial = window.confirm(
      "Would you like to include special characters?"
  );
      
    //create guaranteed collection, array
      var passArray = []
      
    //create a password variable
      var password = "";
      
    //randomly draw characters to create a password
      
    //put that character on the password
    
    //repeat as many times as requested by user, for loops
      
    //loop through the guaranteed and replace elements in the password array
      
    //join characters in the password array into a string
      
    //return the password string 
    }
  }
}
