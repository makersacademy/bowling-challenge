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
        return this.scorecard.reduce((total, current) => total.concat(...current), [])
            .reduce((total, current) => total + current);
    }
}
exports.default = Bowling;
