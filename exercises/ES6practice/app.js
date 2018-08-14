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

//ES6 Functions ######Fat arrow functions. re-write this `.map()` using a fat arrow function: Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

// const vegetables = carrots.map(function(carrot){
//     return {type: "carrot", name: carrot}
// })

const carrots = [];

const vegetables = carrots.map => {type: "carrot", name: carrot}