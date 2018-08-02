var ask = require("readline-sync");

var options = ["pick flowers", "shoot guns", "fight bears"];
var holder = "undecided";

while (holder !== "fight bears") {
  holder = ask.keyInSelect(options, "What would you like to do today?: ");
  if (options[holder] === "pick flowers") {
    console.log("You pick some flowers. You make a bouquet.");
  } else if (options[holder] === "shoot guns") {
      console.log("You shoot guns.");
  } else if (options[holder] === "fight bears") {
      option = "fight bears";
  } else {
    console.log("Please select an option.");
  }

}
console.log("You fought a bear and got beat up!");


// var array = ["string", "boys", "girls"];
// var option = "I hold things";

// while (option !== "boys") {
//   opiton = ask.keyInSelect(array, "What option? ");
//   if (array[option] === "string") {
//     console.log("its a string");
//   } else if (array[option] === "girls") {
//     console.log("its a gril");
//   } else if (array[option] === "boys") {
//     option = "boys"
//   }
// }


