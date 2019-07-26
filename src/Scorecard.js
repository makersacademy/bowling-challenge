'use strict';

function Scorecard() {
    this.frames = [];
    this.currentScore = 0;
};

Scorecard.prototype.getFrames = function() {
    return this.frames;
};
Scorecard.prototype.addFrame = function(frame) {
    this.frames.push(frame);
};
Scorecard.prototype.getCurrentScore = function() {
    this.updateCurrentScore();
    return this.currentScore
};
Scorecard.prototype.updateCurrentScore = function() {
    this.currentScore = 0;
    for (var i = 0; i < this.frames.length; i++) {
        this.currentScore += this.getFrameScore(i);
        if(i > 0) {
            this.spareCheck(i - 1);
            this.strikeCheck(i - 1);
        };
    };
};
Scorecard.prototype.getFrameScore = function(frameIndex) {
    return this.frames[frameIndex].getRolls().reduce(function(acc, val) { return acc + val; }, 0);
};
Scorecard.prototype.spareCheck = function(index) {
    if(this.isSpare(index)) {
        this.addSpareBonus(index);
    };
};
Scorecard.prototype.isSpare = function(index) {
    return this.frames[index].getRolls()[0] != 10 && (this.frames[index].getRolls()[0] + this.frames[index].getRolls()[1]) === 10
};
Scorecard.prototype.addSpareBonus = function(index) {
    if(index === 9) {
        return
    } else {
    this.currentScore += this.frames[index + 1].getRolls()[0]
    };
};
Scorecard.prototype.strikeCheck = function(index) {
        if(this.isStrike(index)) {
            this.addStrikeBonus(index);
        };
};
Scorecard.prototype.isStrike = function(index) {
    return this.frames[index].getRolls()[0] === 10;
}
Scorecard.prototype.addStrikeBonus = function(index) {
    if(index === 9) {                                                 // if this is the final frame
        return
    } else if(this.frames[index + 1].getRolls().length === 1) {       // else if the next ball is also a strike
        this.currentScore += this.frames[index + 1].getRolls()[0]
        this.currentScore += this.frames[index + 2].getRolls()[0]
    } else {                                                          // regular strike
        this.currentScore += this.frames[index + 1].getRolls()[0]
        this.currentScore += this.frames[index + 1].getRolls()[1]
    };
};
