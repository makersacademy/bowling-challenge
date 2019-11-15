class Bowling {
    constructor() {
        this.rolls = [];
        this.score = 0;
    };

    getScore() {
        return this.score;
    }

    roll(score) {
        this.rolls.push(score);
    }


}

module.exports = Bowling;