const Frame = require('./frame');

class Game {
    constructor() {
        this.frame = new Frame
        this.all_rolls = []
        this.tally = []

    }



    roll(roll) {
        this.frame.input_roll(roll)
        this.tally.push(this.frame.rolls)
        this.all_rolls.push(this.frame.rolls)
}
}

module.exports = Game 