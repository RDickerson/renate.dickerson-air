function createEvenArray(highestNum) {
    var evenArr = [];
    for (var i = 1; i < highestNum; i++) {
        if (i % 2 === 0) {
            evenArr.push(i);
        } 
    }
    return evenArr;
}

console.log(createEvenArray(10));

var evensOnlyArray = createEvenArray(10);

function addOdds(array) {
    var odds = [];
    for (var i = 0; i < array.length; i++) {
        odds.push(array[i] + 1);
    }
    return array.concat(odds);  
}

console.log(addOdds(evensOnlyArray));

function sortNums(numberArray) {  
    return numberArray.sort(function(a, b) {
        return a-b;
    });
}

console.log(sortNums(addOdds(evensOnlyArray)));