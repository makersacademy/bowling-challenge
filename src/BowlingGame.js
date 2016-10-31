"use strict";

function BowlingGame() {
    this.NUMBER_OF_PINS = 10;
    this.runningTotal = 0;
    this.currentFrameNumber = 1;
    this.currentFrameRollOne = null;
    this.currentFrameRollTwo = null;
    this.scoreBoard = [];
}

BowlingGame.prototype.score = function () {
    return this.runningTotal;
};

BowlingGame.prototype.frameNumber = function () {
    return this.currentFrameNumber;
};

BowlingGame.prototype.rollOne = function (numberOfPins) {
    if (numberOfPins > this.NUMBER_OF_PINS) {
      throw new Error('number of pins cannot exceed 10');
    }
    this.currentFrameRollOne = numberOfPins;
};

BowlingGame.prototype.rollTwo = function(numberOfPins) {
    if (this.currentFrameRollOne === null) {
        throw new Error('enter roll one before roll two')
    } else if (numberOfPins > this.NUMBER_OF_PINS) {
        throw new Error('number of pins cannot exceed 10');
    } else if (this.currentFrameRollOne + numberOfPins > this.NUMBER_OF_PINS) {
        throw new Error('number of pins in frame cannot exceed 10');
    }
    this.currentFrameRollTwo = numberOfPins;
    this.updateScore();
    this.endFrame();
};

BowlingGame.prototype.updateScore = function () {
    this.runningTotal += this.currentFrameRollOne;
    this.runningTotal += this.currentFrameRollTwo;
    this.scoreBoard.push(this.currentFrameRollOne);
    this.scoreBoard.push(this.currentFrameRollTwo);
};

BowlingGame.prototype.endFrame = function () {
    this.currentFrameNumber += 1;
    this.currentFrameRollOne = null;
    this.currentFrameRollTwo = null;
};
