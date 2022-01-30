class BowlingGame {

    constructor() {
        this.rolls = []
    }

    roll(pins) {
        this.rolls.push(pins)
    }

    calculateScore() {
       let score = 0
       for (let i = 0; i <this.rolls.length; i++){
           score += this.rolls[i];
       }
       return score
       
    }
};

module.exports = BowlingGame;