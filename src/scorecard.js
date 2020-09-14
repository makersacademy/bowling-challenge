'use strict';

class Scorecard {
    constructor() {
        this.frames = [new Frame()];
    }

    createFrames() {
        this.frames.push(new Frame);
    }

    bowl(score) {
        if (this.lastFrame().frameCompleted() === true) {
            this.addFrame();
        }
        this.lastFrame().addScore(score);
    }

    lastFrame() {
        return this.frames[this.frames.length - 1];
    }

    addFrame() {
        this.frames.push(new Frame());
    }

    calculateScore() {
        let score = 0;
        let lastScore = this.frames.length - 1;
        for (var i = 0; i < lastScore; i++) {
            this.addBonus(i);
            score += this.frames[i].scoreTotal();
        }
        score += this.frames[lastScore].scoreTotal();
        return score;
    }

    bonus(idx) {
        let firstFrame = this.frames[idx];
        let secondFrame = this.frames[idx + 1];
        let thirdFrame = this.frames[idx + 2];
        if (firstFrame.isSpare()) {
            return secondFrame.firstBall();
        } else if (idx !== 8 && firstFrame.isStrike() && secondFrame.isStrike()) {
            return secondFrame.firstBall() + thirdFrame.firstBall();
        } else {
            return secondFrame.firstBall() + secondFrame.secondBall();
        }
    }

    addBonus(idx) {
        let theFrame = this.frames[idx];
        if (theFrame.extraPoints()) {
            theFrame.editScore(this.bonus(idx));
        }
    }
}