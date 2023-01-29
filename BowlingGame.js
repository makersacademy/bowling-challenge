class BowlingGame {
    constructor() {
        this.frames = [];
        this.frameBonuses = [];
        this.framesPlayed = 0;
    };

    addFrame(frame) {
        this.frames.push(frame);
        this.framesPlayed++;
    };

    calculateScore = () => {
        let score = 0;
        for (let i = 0; i < this.frames.length; i++) {
            score += ( this.frames[i].roll1() + this.frames[i].roll2() );
        };
        return score;
    };

    getFramesPlayed = () => {
        return this.framesPlayed;
    };
};

module.exports = BowlingGame;