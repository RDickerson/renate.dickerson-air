function arrFizzBuzz() {
    var arr = []
    for (var i = 1; i < 101; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            arr.push("fizzbuzz")
        } else if (i % 3 === 0) {
            arr.push("fizz")
        } else if (i % 5 === 0 && i % 3 === 0) {
            arr.push("fizzbuzz")
        } else {
            arr.push(i)
        }
    }
    console.log(arr)
}
arrFizzBuzz()