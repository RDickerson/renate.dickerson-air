var chai = require("chai");
var myFunctions = require("./app.js");
var addS = myFunctions.addS;
var assert = chai.assert;


//keywords describe & it

describe("Create a function that adds and 's' to the end of every word in an array", function(){
    it("should end with an s", function(){
        assert.deepEqual(addS(["dog", "cat", "pig"]), ["dogs", "cats", "pigs"]);
    });
    it("should not allwo numbers into the array", function(){
        assert.equal(addS(["dog", 2, 3]), "no numbers");
    });
    it("should not add an 's' if the word already ends in 's'", function(){
        assert.deepEqual(addS(["dogs", "cats", "pigs"]), ["dogs", "cats", "pigs"]);
    });
});


