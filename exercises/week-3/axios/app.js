// Axios - JavaScript Library (node_module) that helps us make AJAZ calls to API's //
    // get request
    // 1. An event (page load)
    // 2. XMLHttpRequest object is created
    // 3. The request object sends the request to the server. xhr.save()
    // 4. The server processes the request
    // 5. The server sends a response back to the web page
    // 6. The response is then read by javascript

// npm init -y
// npm i -S axios
var axios = require("axios")
// console.log(axios);
//.get(one pram the url)
//.then(always is given the response)

//read -
axios.get("https://swapi.co/api/people/1").then(function(res){
    // console.log(res);
}).catch(function(err){
    console.log(err);
});

var newData = {
    title: "new todo",
    ImgUrl: "img.jpeg"
};

//create - posting new data (think signing up for the first time)
axios.post("https://swapi.co/api/people/", newData).then(function(res){
    console.log(res);
});

//updates
axios.put(`https://swapi.co/api/people/${id}`).then(function(res){
    console.log(res);
});

//destroys
axios.delete(`https://swapi.co/api/people/${id}`, updatedData).then(function(res){
    console.log(res);
});

// // can not be a var if we var it:
// var lukeSkywalker = axios.get("https://swapi.co/api/people/1");
// console.log(lukeSkywalker);
// //Promise { <pending> }

