// Log to the console every Wizard in the array using forEach().

var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"];

wizards.forEach(function(wizard){
  console.log(wizard);
});

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

// 1. Log to the console every wizard's name.
function names(arr) {
  return arr.map(function(wiz){
    return wiz.name;
  });
}

console.log(names(wizards));

// 2. Add an isAlive property to every wizard, setting it to  true.
function areAlive(arr) {
  return arr.map(function(wiz){
    return wiz.isAlive = true;
  });
}
areAlive(wizards);
console.log(wizards);

// 3. Make a new array of all the Wizards that are "neutral good".

function neutralGood(arr) {
  return arr.filter(function(wiz){
    if (wiz.alignment === "neutral good")
      return wiz;
  });
}
console.log(neutralGood(wizards));

// 4. Find the index of a wizard that is "lawful good".

function whereAt(arr) {
  return arr.findIndex(function(wiz){
    return wiz.alignment === "lawful good";
  });
}

console.log(whereAt(wizards));


// 5. Return a Boolean that states whether or not all the wizards are alive.

function booAreAlive(arr) {
  return arr.every(function(wiz){
    return wiz.isAlive;
  });
}

console.log(booAreAlive(wizards));

// 6. Return a Boolean that states whether or not at least one wizard is "neutral good".

function booNG(arr){
  return arr.some(function(wiz){
    return wiz.alignment === "neutral good";
  });
}

console.log(booNG(wizards));

7. Check every "alignment" for every wizard. Kill every "neutral good" wizard. (Modify every "neutral good" wizard's isAlive property to false.)

function killNG(arr) {
  return arr.map(function(wiz){
    if (wiz.alignment === "neutral good") {
      return wiz.isAlive = false;
    }
  });
}

killNG(wizards);

console.log(wizards);

// 8. Return a Boolean that states whether or not all the wizards are alive.

function booAllAlive(arr) {
  return arr.every(function(wiz){
    return wiz.isAlive === true;
  });
}

console.log(booAllAlive(wizards));

// 9. Return a Boolean that states whether or not some of the wizards are alive.

function booSomeAlive(arr) {
  return arr.some(function(wiz){
    return wiz.isAlive === true;
  });
}

console.log(booSomeAlive(wizards));