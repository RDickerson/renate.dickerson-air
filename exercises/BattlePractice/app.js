// var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]

var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ];

// var wiz = wizards.map(function(wizard){
//     return wizard
// })

// console.log(wiz)

//  var wizNames = wizards.map(function(wizard){
//     return wizard.name;
//  })

//  console.log(wizNames);

// var addAlive = wizards.forEach(function(wizard){
//     wizard.isAlive = true;
// });

// console.log(wizards);

// var neutralGood = wizards.filter(function(wizard){
//     if (wizard.alignment === "neutral good") {
//         return wizard;
//     }
// });

// console.log(neutralGood);

var lawGood = wizards.findIndex(function(wizard){
    return wizard.alignment === "lawful good";
});

console.log(lawGood);