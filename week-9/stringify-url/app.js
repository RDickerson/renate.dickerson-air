// function stringifyUrl(url, query) {
//     let newStr = `${url}?`
//     for (const key in query) {
//         newStr += `${key}=${query[key]}&`
        
//     }
//    return newStr.slice(0, -1)
// }

function unStringifyUrl(str){
    let url = str
    let splitUrl = url.split("?")[1]
    let splitProps = splitUrl.split("&")
    let query = {}
    for (var i = 0; i < splitProps.length; i++) {
        let keyValueArr = splitProps[i].split("=")
        query[keyValueArr[0]] = keyValueArr[1]
    }
    return query
}

const url = "http://localhost:8080/monkeys?color=black&species=howler"

console.log(unStringifyUrl(url))

// const url = "http://localhost:8080/monkeys"
// const query = {
//   color: "black",
//   species: "howler"
// }



// console.log(stringifyUrl(url, query))
//returns "http://localhost:8080/monkeys?color=black&species=howler"