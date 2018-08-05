var dictionary = {};

function addEntry(word, definition) {
    if (!dictionary.hasOwnProperty(word)) {
    //(!dictionary[word]) 
    dictionary[word] = definition;
    } else {
        return (`This dictionary already has this word.`);
    }
}

function lookUp(key) {
    console.log(key + ":" + dictionary[key]);
}
addEntry(`hello`, `standard English greeting`);

addEntry(`chicken`, `a farm animal that says "cluck"`);

addEntry(`cow`, `a farm animal that says "moo"`);

addEntry(`pig`, `a farm animal that says "oink"`);

addEntry(`Pig`, `a farm animal that says "oink"`);

console.log(addEntry(`pig`, `a farm animal that says "oink"`))

console.log(dictionary);

lookUp("hello");

lookUp("pig");

