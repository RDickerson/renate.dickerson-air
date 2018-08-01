var readlineSync = require("readline-sync");

var name = readlineSync.question("What is your name? ");
console.log(`Hello, ${name}!`);

var age = readlineSync.question(`How old are you, ${name}? `);
if (age >= 50) {
    console.log("Wow you are old.");
} else {
    console.log("Very Nice!");
}

var food = readlineSync.question(`What is your favorite food? `);

if (readlineSync.keyInYN(`${name} can I yell at you?`)) {
    console.log(`You like ${food.toUpperCase()} food!`);
} else {
    console.log(`You like ${food.toUpperCase()} food. However you don't like being yelled at.`);
}


var animals = ["Pig", "Monkey", "Rabbit", "Kitty"],
    index = readlineSync.keyInSelect(animals, "Choose one?");
console.log(`The word ${animals[index]} is ${animals[index].length} characters long. `);

var longStr = readlineSync.question('Tell me a story that is 3 scentences long.');
function half() {
    if (longStr.length > 20) {
        return longStr.slice(longStr.length / 2);
    }
}

var startingPoint = readlineSync.question("Now give me a number.");

function secondHalf() {
    if (longStr.length > 20) {
        return longStr.slice(startingPoint);
    }
}

console.log(`${half()}, ugh . . . sorry I got board. I do not want to hear the rest of your story.`)

console.log(`${secondHalf()}, haha I cut you of at your number.`)