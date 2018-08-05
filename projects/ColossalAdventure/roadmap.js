// greet player

//ask for name and store it

//set player stats
    // isAlive
    // hitpoints
    // player attack power

// open a wile loop running on isAlive
    // give options walk/print(player stats)

    //walk option
        //have a function gives a 1/4 chance to get attacked (write outside of while loop)
            //if attacked have a function that creates a random monster and runs a battle (write outside of the while loop)
                //battle needs to be in a while loop (if player or monster health > 0)
                // options to attack or run
                    // attack monster generate a random number for the attack (Math.floor(Math.random) * "player attack power")
                    //run give a  50% chance to escape
                    // monster attack generate a random number for the attack (Math.floor(Math.random) * "monster attack")
                    //if monster health = 0 generate bonuses and store them (more health, and or more level, and or loot)
                    //if player health = 0 print you are dead and end game
