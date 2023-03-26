class Game {
    constructor() {
        this.rolls = [];
        this.current_roll = 0;
        this.accumulatedScore = 0;
    }

    roll(pins_knocked) {
        this.pins_knocked = pins_knocked;
        this.rolls[this.current_roll] = this.pins_knocked;
        this.current_roll += 1;
        return this.pins_knocked;
    }

    score() {
        //parseInt(this.accumulatedScore = 0)
        this.accumulatedScore += parseInt(this.pins_knocked)
        return parseInt(this.accumulatedScore); 
    }


};

module.exports = Game;