const gameOfThrees = (n, counter) => {
    let newN
    let newCounter
    if (n % 3 === 0) {
        newN = n / 3
        newCounter = counter + 1
        // console.log(newN)
        // console.log(newCounter)
        gameOfThrees(newN, newCounter)
    } else if (n === 1) {
        return counter
    }
    return newCounter
}

console.log(gameOfThrees(12, 0))