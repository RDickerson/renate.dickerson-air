"use strict"

function antiCaps (str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    console.log(newStr);
}

antiCaps("Hello");
antiCaps("racEcar");
antiCaps("bAnAnA");
antiCaps("IhateCAPS")