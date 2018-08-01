function createEvenArray(highestNum) {
    var evenArr = [];
    for (var i = 1; i < highestNum; i++) {
        if (i % 2 === 0) {
            return evenArr.push([i]);
        } 
    }
}

console.log(createEvenArray(55));