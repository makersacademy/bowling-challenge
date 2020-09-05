
class Bowling {

    constructor(){
        this.score = 0
    }

    getCurrentScore(){
        return this.score
    }

    roll(firstRoll, secondRoll=0) {
        this.score += (firstRoll + secondRoll)
    }
}