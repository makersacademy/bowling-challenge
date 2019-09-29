'use strict';
function BowlingGame() {
    this.scoreCard = {};
}

BowlingGame.prototype.setFrame = function(frameNo, bowl1, bowl2, bowl3) {
    if(frameNo <= 0 || frameNo > 10)
        throw new Error("Frame number given not between 1 and 10");
    if((bowl1 < 0 || bowl1 > 10) || (bowl2 < 0 || bowl2 > 10) || (bowl3 < 0 || bowl3 > 10))
        throw new Error("Each bowl needs to be between 0 and 10");
    if(frameNo !== 10 && (bowl1 + bowl2 > 10 ))
        throw new Error("Can only bowl 10 pins in frame's 1 to 9");
    if(bowl3 !== undefined && (frameNo !== 10 || frameNo === 10 && (bowl1 + bowl2 !== 10 || bowl2 !== 10)))
        throw new Error("Chance to bowl 3 times only in 10th frame and strike or spare gotten");
    if(frameNo === 10 && ((bowl1 !== 10) && (bowl1 + bowl2 > 10)))
        throw new Error("Can only bowl 10 pins unless first bowl is strike");
    this.scoreCard[frameNo] = new Frame(frameNo, bowl1, bowl2, bowl3)
};