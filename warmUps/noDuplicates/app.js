// var input = "bookkeeper larry";

// function duplicateLetters(str) {
//     for (var i = 1; i < str.length; i++) {
//         if (str[i] === str[i - 1]) {
//             str = str.slice(0, i) + str.slice(i + 1)
//         }
//     }
//     return str
// }

// console.log(duplicateLetters("bookkeeper larry"))

// No duplicates: "bokepr lay"
// The Extras: "okeerr"

// index 1 = index - 1
// o = o
// str.slice(0, i) + str.slice(i +1)

// bookkeeper

function noDuplicates(str) {
    // declare an empty string to build
    var noDupes = "";
    //loop throught the string to check each letter
    for (var i = 0; i < str.length; i++) {
        //if the  noDupes string doesn't have the current letter
        if(noDupes.indexOf(str[i]) === -1) {
            // add it to the noDupes string
            noDupes += str[i]
        }
    }
    return
}

console.log(noDuplicates("food Good"))

// function noDuplicates(str) {
//     // declare an empty string to build
//     var noDupes = "";
//     // Loop through the string to check each letter
//     for (var i = 0; i < str.length; i++) {
//       // If the noDupes string doesn't have the current letter
//       if(noDupes.indexOf(str[i]) === -1){
//         // add it to the noDupes string
//         noDupes += str[i]
//       }
//     }
//     return noDupes;
//   }
  
//   console.log(noDuplicates("bookkeeper larry")) // "bokepr lay"