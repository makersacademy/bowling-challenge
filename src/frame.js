class Frame {
    constructor() {
        this.frame = []
        this.score = 0
    }

    addScore(score) {
        this.frame.push(score);
        this.score += score;
    }

    firstBall(score) {
        return this.frame[0]
    }

    secondBall(score) {
        return this.frame[1]
    }

    isSpare() {
        return this.frame.length === 2 && (this.firstBall() + this.secondBall() === 10);
    }

    isStrike() {
        return this.firstBall() === 10;
    }

    scoreTotal() {
        return this.score;
    }

    extraPoints() {
        return this.isSpare() || this.isStrike();
    }

    editScore(hitpoints) {
        this.score += hitpoints;
    }

    frameCompleted() {
        return this.frame.length === 2 || this.isStrike();
    }

}

//module.exports = Frame;