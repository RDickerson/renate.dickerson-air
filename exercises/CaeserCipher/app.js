var ask = require('readline-sync')

// understand the question
    // Break it down
// pseudo-code
    // Pick one part from the break down
// follow-through (code)
    // we go back to step one
// look back (other possible solutions)

var phrase = ask.question("Enter a phrase you would like me to encrypt: ")
var shift = ask.questionInt('How many letters would you like to shift? ');  


function ceasarCipher (str, shift) {
    // Declare empty string to build
    var encrypted = "" 
    // Declare a variable that holds the alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Loop/Iterate through the string
    for (var i = 0; i < str.length; i++) {
        // check letter exists in the alphabet
        if(alphabet.indexOf(str[i]) !== -1){
            var currentIndex = alphabet.indexOf(str[i]);
            // shift it the appropiate amount to the right 
            encrypted += alphabet[ (currentIndex + shift) % 26 ];
        } else {
            encrypted += str[i];
        }
    }
    // return final encrypted string
    return encrypted;
}

console.log(ceasarCipher(phrase, shift));