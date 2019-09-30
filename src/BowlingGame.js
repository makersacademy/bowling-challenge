'use strict';

function BowlingGame() {
    this.scoreCard = {};
    this.score = 0;
}

BowlingGame.prototype.setFrame = function (frameNo, bowl1 = 0, bowl2 = 0, bowl3 = 0) {
    if (frameNo <= 0 || frameNo > 10)
        throw new Error("Frame number given not between 1 and 10");
    if ((bowl1 < 0 || bowl1 > 10) || (bowl2 < 0 || bowl2 > 10) || (bowl3 < 0 || bowl3 > 10))
        throw new Error("Each bowl needs to be between 0 and 10");
    if (frameNo !== 10 && (bowl1 + bowl2 > 10))
        throw new Error("Can only bowl 10 pins in frame's 1 to 9");
    if (bowl3 !== 0 && (frameNo !== 10 || frameNo === 10 && bowl1 + bowl2 !== 10 && bowl1 !== 10))
        throw new Error("Chance to bowl 3 times only in 10th frame and when strike or spare gotten");
    if (frameNo === 10 && ((bowl1 !== 10) && (bowl1 + bowl2 > 10)))
        throw new Error("Cannot bowl more than 10 pins unless first bowl is strike");
    this.scoreCard[frameNo] = new Frame(bowl1, bowl2, bowl3)
};

BowlingGame.prototype.calcScore = function () {
    this.score = 0;
    for (let i = 1; i <= Object.keys(this.scoreCard).length; i++) {
        this.score += this.scoreCard[i].bowl1 + this.scoreCard[i].bowl2 + this.scoreCard[i].bowl3;
        if (typeof this.scoreCard[i - 1] !== "undefined") {
            if (this.scoreCard[i - 1].strike === true) {
                this.score += this.scoreCard[i].bowl1;
                if (this.scoreCard[i].strike === true)
                    this.score += this.scoreCard[i + 1].bowl1;
                else
                    this.score += this.scoreCard[i].bowl2;
            } else if (this.scoreCard[i - 1].spare === true)
                this.score += this.scoreCard[i].bowl1;
        }
    }
};