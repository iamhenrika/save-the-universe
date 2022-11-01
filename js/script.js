// const randomizer = Math.random

// if(randomizer > 0.5) {
//     console.log('human goes first')
// } else {
//     console.log('alien goes first')
// }

/*A game round would look like this:
You attack the first alien ship
If the ship survives, it attacks you
If you survive, you attack the ship again
If it survives, it attacks you again … etc
If you destroy the ship, you have the option to attack the next ship or to retreat
If you retreat, the game is over, perhaps leaving the game open for further developments or options
You win the game if you destroy all of the aliens
You lose the game if you are destroyed


Ship Properties
hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
firepower is the amount of damage done to the hull of the target with a successful hit
accuracy is the chance between 0 and 1 that the ship will hit its target
Your spaceship, the USS HelloWorld should have the following properties:
hull - 20
firepower - 5
accuracy - .7
The alien ships should each have the following ranged properties determined randomly:
hull - between 3 and 6
firepower - between 2 and 4
accuracy - between .6 and .8
You could be battling six alien ships each with unique values */

//////////////////////////////////////////////
/*planning

player starts game with click event
once the game starts player's ship has a hull of 20, firepower of 5 and accuracy of .7
first ship comes forward
this ship has a random hull btween 3 & 6, random firepower between 2 & 4 and a random accuracy between .6 and .8
player's ship attacks either destroying the first ship if the hull is <= 5, depending on the accuracy, if the hull is => 5 the ship survives and attacks
the player's ship takes a hit and losses hull points between 2 & 4 +/- .6 & .8 accuracy
player fires again destroying the first ship (if it hasn't already done this) and moves on to ship #2.
repeat previous steps up til 6, accounting for player's hull integrity. if at any time player's hull falls below 20, game over.
player can retreat ('Captain would you like to retreat') after defeating the first alien ship or after the defeat of each subsequent alien ship*/

//USS HelloWorld

class ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull,
            this.firepower = firepower,
            this.accuracy = accuracy
    }
}

const ussHelloWorld = new ship(20, 5, .7)

const alien = new alienShip()

class alienShip {
    constructor() {
        this.hull = Math.floor(Math.random() * 4) + 3
        this.firepower = Math.floor(Math.random() * 3) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }
    attack() {
        let random = Math.random()
        if (random < this.accuracy) {
            ussHelloWorld.hull -= this.firepower;
            alert(`YOU'VE BEEN HIT!`)
        } else {
            alert(`DIRECT HIT`)
        }
    }
}
