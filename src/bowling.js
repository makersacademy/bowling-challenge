'use strict';

class Bowling {
    constructor() {
        this.scorecard = []
    }

    roll(number) {
        this.scorecard.push(number);
    }

    score() {
        return this.scorecard.reduce((a, b) => a + b, 0)
    }

}