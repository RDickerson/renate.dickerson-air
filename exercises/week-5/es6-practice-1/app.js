// //John is the pet owner, and his name should be stored differently than the other names.

// // var name = 'John'
// // var age = 101
// // var pets = ["cat", "dog"]

// // var petObjects = []

// // for (var i = 0; i < pets.length; i++){
// //   var pet = {type: pets[i]}
// //   if (pets[i] === "cat"){
// //     var name = "fluffy"
// //   } else {
// //     var name = "spot"
// //   }
// //   pet.name = name
// //   petObjects.push(pet)
// // }

// const name = "John";
// let age = 101;
// const pets = ["cat", "dog"];

// const petObjects = [];

// for (let i = 0; i < pets.length; i++) {
//     const pet = {type: pets[i]};
//     let name
//     if (pets[i] === "cat") {
//         name = "fluffy";
//     } else {
//         name = "spot";
//     }
//     pet.name = name;
//     petObjects.push(pet);
// }

// console.log(petObjects);

// //ES6 Functions ######Fat arrow functions. re-write this `.map()` using a fat arrow function: Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

// // const vegetables = carrots.map(function(carrot){
// //     return {type: "carrot", name: carrot}
// // })

// const carrots = ["bright orange", "ripe", "rotten"];

// const vegetables = carrots.map(carrots => {
//     return {type: "carrot", name: carrots}});

// console.log(vegetables);

// Re-write this .filter() using a fat arrow function:

// const people = [
//     {
//         name: 'Princess Peach',
//         friendly: false
//     },
//     {
//         name: 'Luigi',
//         friendly: true
//     },
//     {
//         name: 'Mario',
//         friendly: true
//     },
//     {
//         name: 'Bowser',
//         friendly: false
//     }
// ]

// // friends = people.filter(function(person){
// //     return !!person.friendly
// // })

// const friends = people.filter(person => !person.friendly);

// console.log(friends);

// //re-write the following functions to be fat arrow functions:

// // function doMathSum(a, b){
// //     return a + b
// // }

// // var produceProduct = function(a, b){
// //     return a * b
// // }

// const doMathSum = (a, b) => a + b;

// console.log(doMathSum(3, 4));

// const produceProduct = (a, b) => a * b;

// console.log(produceProduct(3, 4));

// //write a functions that takes a firstName, a lastName, an age and returns a string like the following: "Hi Kat Stark, how does it feel to be 40?""

// // firstName should default to "Jane"
// // lastName should default to "Doe"
// // age should default to 100

// const person = (fName = "Jane", lName = "Doe", age = 100) => `Hello ${fName} ${lName}, how does if feel to be ${age}?`;

// console.log(person("Renate", "Dickerson", 29));
// console.log(person());

// // Use the shorthand syntax to make the following code block take up one line.



// const animals = [
//     {
//         type: "dog",
//         name: "woof"
//     },
//     {
//         type: "cat",
//         name: "meow"
//     },
//     {
//         type: "pig",
//         name: "oink"
//     }
// ];

// const dogs = animals.filter(animal => animal.type === "dog" ? true : false);

// console.log(dogs);

// const doggys = animals.filter((animal)=>{
//     if (animal.type === "dog"){
//         return true;
//       } else {
//         return false;
//       }
// })

// console.log(doggys);


// //Template Literals Write a function that will take `location` and `name` and output this if `location="Hawaii"` and `name="Janice"`: ``` Hi Janice! Welcome to Hawaii. I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

// const welcomeLine = (fName, location) => `Hi ${fName}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;

// console.log(welcomeLine("Renate", "V School"));