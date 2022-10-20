"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bowling {
    constructor() {
        this.scorecard = [];
    }
    addScore(score) {
        if (score[0] + score[1] > 10) {
            return;
        }
        if (this.scorecard.length === 10) {
            return;
        }
        if (score.length === 3 && (this.scorecard.length != 9 || score[0] + score[1] != 10)) {
            return;
        }
        this.scorecard.push(score);
    }
}
exports.default = Bowling;
