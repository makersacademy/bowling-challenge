'use strict'

class Frame {
    constructor(id) {
        this.id = id;
        this.rolls = [];
        this.bonus = 0;
    };

    addRoll(pins) {
        this.rolls.push(pins);
    };

    score() {
        return this.rolls.reduce((a, b) => a + b, 0) + this.bonus;
    };

    isStrike() {
        return this.rolls[0] === 10;
    };

    isSpare() {
        return this.rolls[0] + this.rolls[1] === 10;
    };

    isLastFrame() {
        return this.id === 10;
    }

    isComplete() {
        return this.isStrike() || this.isSpare() || this.rolls.length == 2;
    };

}