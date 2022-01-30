class BowlingGame {

    constructor() {
        this.rolls = [];
    }

    roll(pins) { 
        this.rolls.push(pins);
    }

    calculateScore() {
       let score = 0;
       this.index = 0;
       for (let i = 0; i < 10; i++) {
           if (this.strikeLogic()) {
               score += this.strikeScoreApply();
               this.index += 1;
           }
           else if (this.spareLogic()) {
               score += this.spareScoreApply();
               this.index += 2;
            }
           else {
               score += this.getOrdinaryScore();
               this.index += 2;
            }
       }
       return score;
    }

    spareLogic() {
        return this.rolls[this.index] + this.rolls[this.index + 1] === 10
    }

    spareScoreApply() {
        return 10 + this.rolls[this.index+2];
    }

    strikeLogic() {
        return this.rolls[this.index] === 10
    }

    strikeScoreApply() {
        return 10 + this.rolls[this.index + 1] + this.rolls[this.index + 2];
    }

    getOrdinaryScore() {
        return this.rolls[this.index] + this.rolls[this.index + 1] 
    }



};

module.exports = BowlingGame;