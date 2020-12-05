'use strict';

class Bowling {
    constructor() {
        this.scorecard = []
    }

    roll(number) {
        this.scorecard.push(number);
    }

    score() {
        return 0
    }

}