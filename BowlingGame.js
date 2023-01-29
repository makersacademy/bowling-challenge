class BowlingGame {
    constructor() {
        this.frames = [];
        this.frameTotals = [];
        this.framesPlayed = 0;
    }

    addFrame(frame) {
        this.framesPlayed++;
    }

    calculateScore() {
        return 0;
    }

    getFramesPlayed() {
        return this.framesPlayed; 
    }
}

module.exports = BowlingGame;