class Bowling {
    constructor() {
        this.rolls = [];
        this.score = 0;
        this.frame = 0;
        this.rollsIndexPosition = 0
    };

    getScore() {
        if(this.rolls.length > 0) {
            this.calculateScore()
        }
        return this.score;
    }

    roll(score) {
        if(score < 0 || score > 10) {
            throw "roll must be between 0 and 10"
        }
        this.rolls.push(score);
    }

    isAStrike() {
        return this.rolls[this.rollsIndexPosition] === 10;
    }

    isASpare() {
        return (this.rolls[this.rollsIndexPosition] + this.rolls[this.rollsIndexPosition + 1]) === 10;
    }

    isLastFrame() {
        return this.frame === 10;
    }

    calculateScore() {
        while (this.rollsIndexPosition < this.rolls.length - 1 && this.frame < 10) {
            this.calculateRollScore();      
            // console.log(`frame: ${this.frame} index: ${this.rollsIndexPosition} score: ${this.score}`) 
        }
    };

    calculateRollScore() {
        if(this.isLastFrame()) {
            if(this.isAStrike()) {
                this.score += this.rolls[this.rollsIndexPosition + 1] + this.rolls[this.rollsIndexPosition + 2] + 10;
            } else if(this.isASpare()) {
                this.score += this.rolls[this.rollsIndexPosition + 2] + 10;
            } else {
                this.score += this.rolls[this.rollsIndexPosition] + this.rolls[this.rollsIndexPosition + 1];
            }   
            this.rollsIndexPosition = this.rolls.length - 1;
        }
        if(this.isAStrike()) {
            this.score += this.rolls[this.rollsIndexPosition + 1] + this.rolls[this.rollsIndexPosition + 2] + 10
            this.updateRollPosition(1)
        } else if(this.isASpare()) {
            this.score += this.rolls[this.rollsIndexPosition + 2] + 10
            this.updateRollPosition(2)
        } else {
            this.score += this.rolls[this.rollsIndexPosition] + this.rolls[this.rollsIndexPosition + 1]
            this.updateRollPosition(2)
        }
        this.frame += 1
    } 

    updateRollPosition(number) {
        this.rollsIndexPosition += number
    }
}

module.exports = Bowling;