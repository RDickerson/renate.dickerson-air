// function doubleNumbers(arr){
//     var doubled = arr.map(function(num){
//         return num * 2;
//     });
//     return doubled
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr){
//     var newString = arr.map(function(num){
//         return num.toString()
//     });
//     return newString;
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr){
//     var betterNames = arr.map(function(name){
//         return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     });
//     return betterNames;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function namesOnly(arr){
//     var nameString = arr.map(function(person){
//         return person.name;
//     });
//     return nameString;
// }

var people = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

// console.log(namesOnly(people)); // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// function makeStrings(arr){
//     var oldEnough = arr.map(function(person){
//         if (person.age > 18) {
//             return `${person.name} can go to The Matrix`;
//         } else {
//             return `${person.name} is under age!!`;
//         }
//     });
//     return oldEnough;
// }

// // ["Angelina Jolie can go to The Matrix", 
// // "Eric Jones is under age!!", 
// // "Paris Hilton is under age!!", 
// // "Kayne West is under age!!", 
// // "Bob Ziroll can go to The Matrix"]

// console.log(makeStrings(people));

function readyToPutInTheDOM(arr){
    var headingReady = arr.map(function(person){
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
    });
    return headingReady;
}

console.log(readyToPutInTheDOM(people));