// //Write a function that takes an array of numbers and returns the largest (without using Math.max())

// function noMathMax(array) {
//     var high = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] > high) {
//             high = array[i];
//         } 
//     }
//     return high;
// }

// console.log(noMathMax([3, 5, 2, 8, 1])); // => 8

// //Write a function that takes an array of words and a character and return each word that has that letter present.

// function wordWithLetter(array, letter) {
//     var word = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array[i].length; j++) {
//             if (array[i][j] === letter) {
//                 word.push(array[i]);
//             }
//         }
//     }
//     return word
// }

// console.log(wordWithLetter(["#3", "$$$", "C%4!", "Hey!"], "!"));  // => ["C%4!", "Hey!"]

// //Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// function isDivisible(num1, num2) {
//     return num1 % num2 === 0;
// }

// console.log(isDivisible(4, 2)) // => true  
// console.log(isDivisible(9, 3)) // => true  
// console.log(isDivisible(15, 4)) // => false  