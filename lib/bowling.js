class Bowling {
    constructor() {
        this.rolls = [];
        this.score = 0;
    };

    getScore() {
        (this.rolls.length > 0) ? this.calculateScore() : 0;
        return this.score;
    }

    roll(score) {
        this.rolls.push(score);
    }

    calculateScore() {
        this.score = this.rolls.reduce((total, amount) => total + amount, 0);
    }


}

module.exports = Bowling;