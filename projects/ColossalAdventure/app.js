var readlineSync = require("readline-sync");

//Greeting

var name = readlineSync.question("Adventurer, what is your name? ");
console.log(`Welcome to Jiumron! We need your help, ${name}. We recently have become plagued by many creatures. All our vilargers that live on the outskrts of town have moved into town for protection. Will you reclame our farm lands?`);

//Player Info
var isAlive = true
var adventurer = {
    Name: name,
    Level: 1,
    hitPoints: 25,
    attackUpTo: 3
};

//Enemy Info

function EasyEnemyCreator(name, hitPoints, baseAttack){
    this.name = name;
    this.health = hitPoints;
    this.baseAttack = baseAttack;
}

function MedEnemyCreator(name, hitPoints, baseAttack){
    this.name = name;
    this.health = hitPoints + 2;
    this.baseAttack = baseAttack + 2;
}

function HardEnemyCreator(name, hitPoints, baseAttack){
    this.name = name;
    this.health = hitPoints + 5;
    this.baseAttack = baseAttack + 4;
}

var enemyNames = ["Goblin", "Giant Spider", "Hill Giant", "Fire Troll", "Mountain Orc"];
var healthPoints = [5, 6, 7, 8,];
var baseDamage = [1, 2, 3, 4, 5];

var randName = enemyNames[Math.floor(Math.random() * enemyNames.length)];
var randHealth = healthPoints[Math.floor(Math.random() * healthPoints.length)];
var randAttack = baseDamage[Math.floor(Math.random() * baseDamage.length)];

//Battle Simulator

function battle() {
    if (adventurer.Level < 2) {
        var enemy = new EasyEnemyCreator(randName, randHealth, randAttack);
    } else if (adventurer.Level < 3) {
        var enemy = new MedEnemyCreator(randName, randHealth, randAttack);
    } else if (adventurer.Level < 4) {
        var enemy = new HardEnemyCreator(randName, randHealth, randAttack);
    }
    while (adventurer.hitPoints > 0 && enemy.health > 0) {
        var adventurerAttack = Math.floor(Math.random() * adventurer.attackUpTo) + 1;
        var enemyAttack = Math.floor(Math.random() * enemy.baseAttack + 1);
        console.log(`Your current health is: ${adventurer.hitPoints}`);
        console.log(`The ${enemy.name}'s health is: ${enemy.health}`);
        var battleOption = ["attack", "run"];
        var selected = readlineSync.keyInSelect(battleOption, "How do your react? ");
        if (battleOption[selected] === "attack") {
            enemy.health -= adventurerAttack;
            console.log(`You hit the ${enemy.name} for ${adventurerAttack} points of damage.`);
            if (enemy.health > 0) {
                adventurer.hitPoints -= enemyAttack;
                console.log(`${enemy.name} attacks you. You loose ${enemyAttack} points of damage.`);
            }
            if (adventurer.hitPoints <= 0) {
                console.log(`${name}, you have been vanquished! Game Over`);
                isAlive = false;
            } else if (enemy.health <= 0) {
                var bonusHealth = Math.floor(Math.random() * 5) + 1;
                var bonusAttack = Math.floor(Math.random() * 2) + 1;
                console.log(`The enemy had died! Here is your loot: \nPlus ${bonusHealth} health, \nPlus 25% level and \n${bonusAttack} attack boost.`);
                adventurer.Level += 0.25;
                adventurer.hitPoints += bonusHealth;
                adventurer.attackUpTo += bonusAttack;
            }
        } else if (battleOption[selected] === "run") {
            var escape = Math.random();
            if (escape <= 0.5) {
                console.log(`You escaped this battle. However you must continue exploring.`);
                enemy.health = 0;
            } else {
                console.log(`You did not escape. Please select your next move.`);
            }
        } else {
            console.log(`Please do somthing, ${name}`);
        }
    }
}

function walkChance() {
    if (adventurer.Level === 4) {
        console.log(`${name}! Thank you for reclaming our farm lands. The creatures have been driven back! \nYou have won the Game! \nCongratulations`);
        isAlive = false;
    } else {
        var attakced = Math.random();
        if (attakced <= 0.25) {
            console.log(`${name}, you have come across an enemy! Prepare for battle.`);
            battle();
        } else {
            console.log(`This farm is empty. There are no people or creatures. Perhaps you should explore some more.`);
        }
    }
}

while (isAlive) {
    console.log("You have options:");
    var options = ["Explore", "View inventory", "quit"];
    var index = readlineSync.keyInSelect(options, `${name}, what would you like to do? `);
    if (options[index] === "Explore") {
        walkChance();
    } else if (options[index] === "View inventory") {
        console.log(adventurer);
    } else {
        console.log(`${name}, you must help us. Please explore the farm lands and vanquish our enemies`);
    }
    
}