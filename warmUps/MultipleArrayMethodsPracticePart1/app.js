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


function sortedOfAge(arr){
    var oldEnough = people.filter(function(person){
        return person.age > 18;
    });
    return (oldEnough);
}

// sortedOfAge(people);

function alphName (arr) {
  var sorted = arr.sort(function(a, b){
    return a.lastName > b.lastName;
  });
  return sorted;
}

// console.log(alphName(people));

function listItem(arr){
  var ageSort = arr.sort(function(a, b){
    return b.age - a.age;
  });
  var name = ageSort.map(function(person){
    return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`;
  });
  return name;
}

// listItem(people);
  

module.exports = {
  people: people,
  sortedOfAge: sortedOfAge,
  alphName: alphName,
  listItem: listItem
};