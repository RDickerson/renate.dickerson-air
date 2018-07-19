// Preliminaries
if ( 5 > 3 ) {
    console.log("is greater than")
}

var str = "cat";
var yes = str.length;

if ( yes === 3 ) {
    console.log( "is the lenght" )
}

if ( "cat" === "dog" ) {
    console.log( "are the same" )
} else {
    console.log( "not the same" )
}

// bronze
var person = {
    name: "Bobby",
    age: 12
}

if ( person.age >= 18 ) {
    console.log( person.name + " is allowed to go to the movie")
}

if ( person.name[0] === "B" ) {
    console.log( person.name + " is allowed to go to the movie")
}

if ( person.name[0] === "B" && person.age >= 18 ) {
    console.log( person.name + " is allowed to go to the movie")
}

// silver
if ( 1 === "1" ) {
    console.log( "strict" )
} else if ( 1 == "1" ) {
    console.log( "loose" )
} else {
    console.log( "not equal at all" )
}

if ( 1 <= 2 && 2 === 4 ) {
    console.log( "yes" )
}

//gold
var theVar = "dog";
var theBoo = "true";
var amIDefined;

if ( typeof theVar === "string" ) {
    console.log( ' "dog" is a string ')
}

if ( typeof theBoo === "boolean" ) {
    console.log( ' "true" is a boolean ' )
}

if (amIDefined === undefined) {
    console.log( "var has not been defined" )
}

if ( "s" > 12 ) {
    console.log( "yes" )
} else {
    console.log( "no" )
}

if ( "a" < "p" ) {
    console.log( "yes" )
} else {
    console.log( "no" )
}

