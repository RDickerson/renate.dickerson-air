// var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var posNumbers = "123456789";
// var posSymbols = "!@#$%^&*";

// var lenghtInput = document.passGen.long.value;
// var numYes = document.passGen.numbers.value;
// var symYes = document.passGen.symbols.value;

function randomPass(howLong) {
    var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*";
    var password = "";
    for (var i = 0; i < howLong; i++) {
        password += options[(Math.floor(Math.random() * options.length))];
    }
    return password;
}

console.log(randomPass(5));