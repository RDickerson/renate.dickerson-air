// for (   where to start  ;  what to check for if it should go again   ;  how to move from start befor checking    ) {
//     line of command (What should it do) "code"
// }


// while (  what do i check to see if i should do it again   ) {
//     what to do while the check returns true (what it should do) "code"
// }

var pig = ["pink", "dirty", "smart", "going to slaughter"];

for (var i = 0; i < pig.length; i++) {
    if (pig[i] === "dirty") {
        console.log("Wash before going to slaughter");
    } else if (pig[i] === "smart") {
        console.log("keep at the farm");
    } else if (pig[i] === "pink") {
        console.log("take it to slaughter");
    } else {
        console.log("load the truck");
        pig = "pink";
    }
}

while (pig === "going to slaughter") {
    for (var i = 0; i < pig.length; i++) {
        if (pig[i] === "dirty") {
            console.log("Wash before going to slaughter");
        } else if (pig[i] === "smart") {
            console.log("keep at the farm");
        } else if (pig[i] === "pink") {
            console.log("take it to slaughter");
        } else {
            console.log("load the truck");
            pig = "pink";
        }
    }
}

// console.log(pig);