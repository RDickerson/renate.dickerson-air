var phrase = 'slimy smelly solution';

// for(var i = 0; i < phrase.length; i++) {
    
// }


// function strToObj() {
//     var obj = {};
//     for (var i = 0; i < phrase.length; i++) {
//         var transfer= phrase.charAt(i);
//         if (obj[transfer]) {
//             obj[transfer]++;
//         } else {
//             obj[transfer] = 1;
//         }
//     }
//     return obj;

// }

function strToObj() {
    var obj = {};
    for (var i = 0; i < phrase.length; i++) {
        var transfer= phrase[i];
        if (obj[transfer]) {
            obj[transfer]++;
        } else {
            obj[transfer] = 1;
        }
    }
    return obj;
}

console.log(strToObj());

// function noDuplicates() {
//     // declare an empty string to build
//     var noDupes = "";
//     //loop throught the string to check each letter
//     for (var i = 0; i < phrase.length; i++) {
//         //if the  noDupes string doesn't have the current letter
//         if(noDupes.indexOf(phrase[i]) === -1) {
//             // add it to the noDupes string
//             noDupes += phrase[i]
//         }
//     }
//     return noDupes
// }

// console.log(noDuplicates())