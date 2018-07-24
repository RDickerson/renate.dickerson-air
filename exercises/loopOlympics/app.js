// Preliminaries

// for ( var i = 0; i < 10; i++ ) {
//     console.log( i )
// }

// for ( var i = 9; i >= 0; i-- ) {
//     console.log( i )
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for ( var i = 0; i < fruit.length; i++ ) {
//     console.log( fruit[i] )
// }

//Bronze

// var myArr = []

// for ( var i = 0; i < 10; i++ ) {
//     myArr.push(i)
// }
// console.log(myArr)

// for ( var i = 0; i <= 100; i += 2 ) {
//     console.log( i )
// }

// var newArr = []
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for ( var i = 0; i < fruit.length; i += 2 ) {
//     newArr.push( fruit[i] )
// }
// console.log(newArr)

//Silver

// var peopleArray = [  
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   for( var i = 0; i < peopleArray.length; i++ ) {
//       console.log( peopleArray[i].name )
//   }

// var namesArray = []
// var occArray = []

// for ( var i = 0; i < peopleArray.length; i ++ ) {
//     namesArray.push( peopleArray[i].name )
//     occArray.push( peopleArray[i].occupation )
// }
// console.log(namesArray)
// console.log(occArray)

// for ( var i = 0; i < peopleArray.length; i += 2 ) {
//         namesArray.push( peopleArray[i].name )
//         occArray.push( peopleArray[i + 1].occupation )
//     }
// console.log(namesArray)
// console.log(occArray)

//Gold
//1.

// var arrZero = []

// for ( var i = 0; i < 1; i++ ) {
//     arrZero.push([ i, i, i ],)
// }
// console.log(arrZero)

// var arrZOT = []

// for ( var i = 0; i < 3; i++ ) {
//     arrZOT.push([ i, i, i ])
// }
// console.log(arrZOT)

// var arrTogether = []

// for ( var i = 0; i < 1; i++ ) {
//     arrTogether.push([ i, i + 1, i + 2 ])
// }
// console.log(arrTogether)


var array = [];
for (var i = 0; i < 3; i++) {
  var temp = [];
  for (var j = 0; j < 3; j++) {
    temp.push(0);
  }
  array.push(temp);
}
console.log(array)