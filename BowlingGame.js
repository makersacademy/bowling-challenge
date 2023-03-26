class BowlingGame {
    constructor() {
        this.frames = [];
        this.framesPlayed = 0;
    };

    addFrame(frame) {
        this.frames.push(frame);
        this.calculateBonuses();
        this.framesPlayed++;
    };

    calculateBonuses() {
        for (let i = 0; i < this.frames.length - 1; i++) {
            let bonus = 0;
            if (i < this.frames.length - 2) {
                if (this.frames[i].isStrike() && this.frames[i+1].isStrike()) {
                    bonus += this.frames[i+1].roll1() + this.frames[i+2].roll1();
                };
            } else {
                if (this.frames[i].isSpare()) {
                    bonus += this.frames[i+1].roll1();
                } else if (this.frames[i].isStrike()) {
                    bonus += this.frames[i+1].getRollTotal();
                };
            };
            this.frames[i].setBonus(bonus);
        };
    }

    calculateScore() {
        let score = 0;
        for (let i = 0; i < this.frames.length; i++) {
            score += this.frames[i].getFrameTotal();
        };
        console.log();
        return score;
    };

    getFramesPlayed() {
        return this.framesPlayed;
    };
};

module.exports = BowlingGame;