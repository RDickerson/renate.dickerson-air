//1.// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

const isClosed = str => {
    const open = str.split("").filter( opening => opening === "("
    )
    const close = str.split("").filter( closing => closing === ")" )

    if (open.length === close.length) {
        return true
    } else {
        return false
    }
}

// const isClosed = str => {
//     const arr = str.split("")
    
//     return arr.reduce((total, next) => {
//         if (next === "(") {
//             total++
//         } else if (next === ")") {
//             total--
//         }
//         if (total < 0) {
//             return false
//         } else if (total === 0) {
//             return true
//         }
     
//         return total
        
//     }, 0)

// }

// isClosed("()()")

console.log(isClosed("()()")) // -> true
console.log(isClosed("(())")) // -> true
console.log(isClosed("()))")) // -> false
console.log(isClosed(")()(")) // -> false
console.log(isClosed("())(")) // -> false


//school answer

