'use strict';

class BowlingGame{

    constructor() {
        this.rolls = [];
        this.currentRoll = 0;
    }

    roll(pins) {
        this.rolls[this.currentRoll++] = pins;
    };

    score() {
        let result = 0;
        let rollIndex = 0;
        let self = this;

        function frameSum() {
            return self.rolls[rollIndex] + self.rolls[rollIndex + 1];
        }

        for (let i = 0; i < 10; i++) {
            result += frameSum();
        }
        return result;
    };

}