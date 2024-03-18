// Assignment code here
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // FUTURE: Update to multiple strings to differentiate between lowercase, uppercase, nums, and special
// var nums = ""
// var uppercase = ""
// var lowercase = ""
// var special = ""


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Generate and return password
function generatePassword() { // FUTURE: Implement the parameters set by user within the function (to be included chars)
  let pass = ''
  let passwordLength = 12 // FUTURE: Add function to change this value within the browser

  for (let i = 1; i <= `${passwordLength}`; i++) {
    let str = Math.floor(Math.random()
      * chars.length + 1);

    pass += chars.charAt(str)
  }
  return pass;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);