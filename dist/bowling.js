"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bowling {
    constructor() {
        this.scorecard = [];
    }
    addScore(score) {
        if (score[0] + score[1] > 10 && score.length === 2) {
            return;
        }
        if (this.scorecard.length === 10) {
            return;
        }
        if (score.length === 3 && this.scorecard.length != 9) {
            return;
        }
        if (score.length === 3 && !(score[0] + score[1] >= 10 || score[0] == 10)) {
            return;
        }
        this.scorecard.push(score);
    }
    get currentScore() {
        const regularScore = this.scorecard.reduce((big, little) => big.concat(...little), [])
            .reduce((total, current) => total + current);
        let spareScore = 0;
        this.scorecard.forEach((score, index) => {
            if (score[0] != 10 && score[0] + score[1] === 10) {
                spareScore += this.scorecard[index + 1][0];
            }
        });
        return regularScore + spareScore;
    }
}
exports.default = Bowling;
