class Bowling {
    constructor() {
        this.rolls = []
    };

    roll(score) {
        this.rolls.push(score);
    }
}

module.exports = Bowling;