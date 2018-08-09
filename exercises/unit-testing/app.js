var words = ["doggy", "kitty", "piggy", "cow"];

// function addS(arr) {
//     var sses = arr.map(function(word){
//         return `${word}s`;
//     });
//     return sses;
// }

function addS(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number") {
            return "no numbers";
        } else if (arr[i].lastIndexOf("s") !== arr[i].length -1){
            newArr.push(`${arr[i]}s`);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var a = "1";
var b = "2";




module.exports = {
    addS :addS
};






























//assert(actual, expected)

// var assert = function(actual, expected) {
//     if (actual !== expected) {
//         throw {
//             type: "fail",
//             details: {actual: actual, expected: expected}
//         };
//     } else {
//         console.log("success", 
//         {
//             type: "Test Passed",
//             details: {actual: actual, expected: expected}
//         }
//         );
//     }
// };

// assert(true, true);
// assert("abc", "abc");


// function addTwoNums(num1, num2) {
//     return num1 + num2;
// }

// assert(addTwoNums(1, 3), 3);
// assert(addTwoNums(5, 20), 25);