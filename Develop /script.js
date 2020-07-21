// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to randomy generate password
function generatePassword(){
  // array of all the characters needed:
  var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // prompt user to generate a password
  var generateBtn = confirm("Password must include a length of 8-128 characters, with lowercase, uppercase, numeric and/or special characters.");
  console.log('generateBtn: ' + generateBtn);

  if (generateBtn) {
    
    // prompting user to pick at least 8 characters and no more than 128 characters. 
    var password_length = prompt("Pick at least 8 characters and no more than 128 characters.");
    console.log('password_length: ' + password_length);

    // create an empty array to store the characters the user chooses to include
    var password_criteria = [];

    // evaluate if the password_length matches criteria
    // first, check if the password_length is a number
    if (Number.isInteger(parseInt(password_length))) {
      console.log('password_length is a number');
      
      // second, check if the password_length matches the criteria
      if (parseInt(password_length) < 129 && parseInt(password_length) > 7) {
        console.log('password_length matches proper length');

        // begin to build an array based on the responses from the user
        // prompting use to pick lowercase
        var include_lowercase = confirm("Do you want lowercase characters?");
        console.log("include_lowercase: " + include_lowercase);
        
        // prompting use to pick uppercase
        var include_uppercase = confirm("Do you want uppercase characters?");
        console.log('include_uppercase: ' + include_uppercase);
        
        // prompting use to pick numeric
        var include_numeric = confirm("Do you want numeric characters?");
        console.log('include_numeric: ' + include_numeric);
        
        // prompting use to pick special characters
        var include_special = confirm("Do you want special characters?");
        console.log('do you want special characters? ' + include_special);

        // check if user wants lowercase letters
        if (include_lowercase) {
          password_criteria = password_criteria.concat(lowercase);
          console.log('including lowercase in password_criteria');
        }

        // check if user wants uppercase letters
        if (include_uppercase) {
          password_criteria = password_criteria.concat(uppercase);
          console.log('including uppercase in password_criteria');
        }

        // check if user wants numbers
        if (include_numeric) {
          password_criteria = password_criteria.concat(numeric);
          console.log('including numeric in password_criteria');
        }

        // check if user wants special characters
        if (include_special) {
          password_criteria = password_criteria.concat(special);
          console.log('including special in password_criteria');
        }

        // confirm password_criteria is correctly formed
        console.log("password_criteria: " + password_criteria);

        // new string for password generator 
        var password_string = "";

        // For loop based on number of character's user wanted 
        for (var i = 0; i < parseInt(password_length); i++) {
          // Generation a random number with math.random
          var num = Math.floor(Math.random() * password_criteria.length) + 1;
          console.log("num: " + num);

          // create random character
          var random_character = password_criteria[num];
          console.log('random character: ' + random_character);

          // add the random character to the password string
          password_string += random_character;

          // log the password string so far
          console.log('password_string: ' + password_string);
        }

        // return password string
        console.log('returning password_string as: ' + password_string);
        return password_string
      }

    }
    else {
      console.log("user didn't follow instructions; resetting");
      alert("You need to follow the instructions in the prompts.");
      return("follow instructions!");
    }

  }
}

// Write password to the #password input
function writePassword() {
  console.log('firing generatePassword function');
  var password = generatePassword();

  console.log('password returned from generatePassword as: ' + password);
  // the following is the same thing as ... document.getElementById('password')
  var passwordText = document.querySelector("#password");
  
  console.log('attempting to write the password value to the passwordText.value textarea');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);