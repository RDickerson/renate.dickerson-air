function isPalindrome(string) {
    var left = 0;
    var right = string.length -1;
    string = string.toLowerCase();
    while (left < right) {
        while (!isAlpha(string[left])) {
            left++;
        }
        while (!isAlpha(string[right])) {
            right--;
        }
        if (string[left] !== string[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

function isAlpha(ch) {
    if (ch >= "A" && ch <= "z"){
        return true;
    }
}

///or///

function isPalindrome(str){
    var without = str.replace(/[^0-9a-z]/gi, "");
    var arr = without.split("");
    var flip = arr.reverse().join("");
    return flip.toLowerCase() === without.toLowerCase();
}

console.log(isPalindrome("Star Rats!"));  // true  
console.log(isPalindrome("palindrome"));  // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true