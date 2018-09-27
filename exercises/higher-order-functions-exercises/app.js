var cars = [  
    {
       make: "ford",
       model: "E150",
       year: 2000
    },
    {
       make: "chevy",
       model: "malibu",
       year: 2017
    },
    {
       make: "chevy",
       model: "malibu",
       year: 2003
    },
    {
       make: "ford",
       model: "E150",
       year: 1999
    },
    {
       make: "chevy",
       model: "sedan",
       year: 2009
    },
]

// //Use `.forEach()` to replace the following `for` loop.
// for (var i = 0; i < cars.length; i++) { 
// console.log(`${cars[i]} goes vroom`); }

///////My Code///////////

// cars.forEach(function(car){
//     console.log(`${car} goes vroom`);
// });

// //Use `.map()` to replace the following `for` loop.
// var angryCars = [];

// for (var i = 0; i < cars.length; i++) { 
//     angryCars.push(cars[i].make.toUpperCase());
// }

// console.log(angryCars);

// ///////My Code///////////
// var angryAngryCars = [];

// cars.map(function(car){
//     angryAngryCars.push(car.make.toUpperCase());
// });

// console.log(angryAngryCars);

//Use `.filter()` to replace the following `for` loop.

// var newCars = [];

// for (var i = 0; i < cars.length; i++) { 
//     if (cars[i].year > 2005){ 
//         newCars.push(cars[i]);
//     }
// }

// console.log(newCars);

// ///////My Code///////////

// var newNewCars = [];

// cars.filter(function(car){
//     if (car.year > 2005) {
//         newNewCars.push(car);
//     }
// });

// console.log(newNewCars);

// // Use `.find()` to replace the following `for` loop. 

// for (var i = 0; i < cars.length; i++) { 
//     if (cars[i].model === "E150") {
//         var coolVan = cars[i]; 
//         break; 
//     } 
// }

// console.log(coolVan);

// var coolCoolVan = cars.find(function(car){
//     if (car.model === "E150") {
//         return car;
//     }
// });

// console.log(coolCoolVan);

// //Use `.some()` to replace the following `for` loop.

// for (var i = 0; i < cars.length; i++) { 
//     if (cars[i].model === "E150") {
//         console.log("It is true that there is one or more E150s"); 
//         break; 
//     } 
// }

// function somz() {
//     var isMore = cars.some(function(car){
//         if (car.model === "E150") {
//             return true;
//         }
//     });
//     if (isMore) {
//         return "It is true that there is one or more E150s";
//     }
// }

// console.log(somz());

// //Use `.every()` to replace the following `for` loop. 

// for (var i = 0; i < cars.length; i++) { 
//     if (cars[i].model !== "E150"){ 
//         console.log("It is false that every car is an E150"); break; 
//     } 
// }

// cars.every(function(car){
//     car.model !== "E150";
//     console.log("It is false that every car is an E150");
// });

// //Use `.reduce()` to replace the following `for` loop and carTotals definition.

// var numberOfFords = 0;  
// var numberOfChevys = 0;

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].make === "ford"){
//     numberOfFords ++;
//   }
//   if (cars[i].make === "chevy"){
//     numberOfChevys ++;
//   }
// }

// var carTotals = {
//     numberOfFords: numberOfFords,
//     numberOfChevys: numberOfChevys
// };


// console.log(carTotals);

// var numOfEach = cars.reduce(function(total, next){
//     if (next.make === "ford") {
//         total.numOfFords += 1;
//     } else if (next.make === "chevy") {
//         total.numOfChevys += 1;
//     }
//     return total;
// }, {
//     numOfFords: 0,
//     numOfChevys: 0
// });

// console.log(numOfEach);