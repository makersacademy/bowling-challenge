'use strict';

class Bowling {
    constructor() {
        this.scorecard = []
    }

    roll(number) {
        this.scorecard.push(number);
    }

    score() {
        let score = 0;
        let index = 0;

        for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
            const frameScore = this.scorecard[index] + this.scorecard[index + 1];
            if (this.isSpare(frameScore)) {
                score += this.spareBonus(index);
            } else {
                score += frameScore;
            } 
            index += 2
        }
        return score;
    }

    isSpare(frameScore) {
        return frameScore === 10;
    }

    spareBonus(index) {
        return  10 + this.scorecard[index + 2];
    }

}