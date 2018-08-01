var readlineSync = require("readline-sync");

var name = readlineSync.question("What is your name? ");
console.log(`${name}, you have just woken up in a 10 x 10 room. There is light filtering in from the cilling. You can see a door and a hole in the wall by the door.`);

var isAlive = true;
var hasKey = false;



// while(isAlive) {
//     var inspect = ["Put your hand in the hole.", "Open the door.", "Find the key."],
//     index = readlineSync.keyInSelect(inspect, "What would you like to do?");

//     if (inspect[index] === "Put your hand in the hole.") {
//         console.log("You feel a sharp pain and the room faids to black.");
//         isAlive = false;
//         console.log("Game Over \nYou Died");
//         } else if (inspect[index] === "Open the door.") {
//             if (hasKey === true) {
//             console.log("The door opens and you escape!");
//             isAlive = false;
//             console.log("Game Over \nYou Win");
//             } else {
//                 console.log("The door is locked.");
//             }
//         } else if (inspect[index] === "Find the key.") {
//             console.log("In the corner of the room you find something shiny. Its a key!");
//             hasKey = true;
//         } else {
//             console.log(`You give up and eventually starve to death. ${isAlive = false}`);
//             console.log("Game Over \n You Died");
//         }
// }

while(isAlive) {
    options = readlineSync.question("You have options: \nd. To open the door.\nh. To put your hand in the hole. \nk. To find a key.\n ... enter any other key\n");
    if (options === 'd') {
        if (hasKey === true) {
            console.log("You unlock the door and earn your freedom!");
            isAlive = false;
            console.log("Game Over \nYou Win");
        } else {
            console.log("The door is locked.");
        }
    } else if (options === 'h') {
        console.log("You feel a sharp pain and the room goes dark.");
        isAlive = false;
        console.log("Game Over \nYou Died");
    } else if (options === 'k') {
        console.log("You find somthing shiny in the corner. It is a key!");
        hasKey = true;
    } else {
        console.log("You give up and eventually starve to death.");
        isAlive = false;
        console.log("Game Over \nYou Died")
    }
}



// while(hasInspectedAll) {
//     var examin = ["the hole", "the door", "the straw"],
//     newIndex = readlineSync.keyInSelect(examin, "What do you want to look closer at? ");

//     if (examin[newIndex] === "the hole") {
//         console.log("Its just a hole. You could sick your hand in.");
//     } else if (examin[newIndex] === "the door") {
//         console.log("The door is sturdy. You can try to open it.");
//     } else if (examin[newIndex] === "the straw") {
//         console.log("In the straw you find a key");
//         hasKey = true;
//     }
// }

