//#1 Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var total = 0;
for(var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        total++;
    }
}
console.log(total);