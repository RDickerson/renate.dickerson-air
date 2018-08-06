var people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];  


// function sortedOfAge(arr){
//     var oldEnough = people.filter(function(person){
//         return person.age > 18;
//     });
//     console.log(oldEnough);
// }

// sortedOfAge(people);

function toDisplayInHTML(arr){
    var array = [];
    var age = people.filter(function(person){
        arr.push(person.age);
    });
    var ageSort = array.sort(function(){

    })
    
}
    // var orderedList = people.sort(function(age){
    //     console.log(age);
    // });
    


toDisplayInHTML(people)  //==> ["<li>Rick Sanchez is 78</li>", "<li>Sarah Palin is 47</li>", "<li>Kyle Mooney is 27</li>", "<li>Morty Smith is 13</li>", "<li>Frank Zappa is 12</li>"]

