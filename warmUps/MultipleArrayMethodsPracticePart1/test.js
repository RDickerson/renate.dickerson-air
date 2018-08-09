var chai = require("chai");
var myFunctions = require("./app.js");
var people = myFunctions.people;
var sortedOfAge = myFunctions.sortedOfAge;
var alphName = myFunctions.alphName;
var listItem = myFunctions.listItem;
var assert = chai.assert;

describe("Create a function that returns a list of everyone older then 18", function(){
    it("should return an array with ages over 18", function(){
        assert.deepEqual(sortedOfAge(people), [  
            {
              firstName: "Sarah",
              lastName: "Palin",
              age: 47
            },
            {
              firstName: "Rick",
              lastName: "Sanchez",
              age: 78
            },
            {
              firstName: "Kyle",
              lastName: "Mooney",
              age: 27
            }
          ]);
    });
});

describe("Create a function that returns a list of everyone in an array sorted by last name", function(){
    it("should return an array sorted by last name", function(){
        assert.deepEqual(alphName(people), [
            { firstName: 'Kyle', lastName: 'Mooney', age: 27 },
            { firstName: 'Sarah', lastName: 'Palin', age: 47 },
            { firstName: 'Rick', lastName: 'Sanchez', age: 78 },
            { firstName: 'Morty', lastName: 'Smith', age: 13 },
            { firstName: 'Frank', lastName: 'Zappa', age: 12 }]
        );
    });
});

describe("Create a function that returns a list of everyone in an array sorted by age and returns their name and age in a li tag", function(){
    it("should return an array of li sorted by age", function(){
        assert.deepEqual(listItem(people), [
        "<li>Rick Sanchez is 78</li>", 
        "<li>Sarah Palin is 47</li>", 
        "<li>Kyle Mooney is 27</li>", 
        "<li>Morty Smith is 13</li>", 
        "<li>Frank Zappa is 12</li>"] 
        );
    });
});