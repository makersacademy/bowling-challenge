"use strict";

function BowlingGame() {
    this.NUMBER_OF_PINS = 10;
    this.runningTotal = 0;
    this.currentGameRollOne = [];
    this.currentGameRollOne = [];
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
    // if (numberOfPins = this.NUMBER_OF_PINS) {
    //     this.
    //     this.endFrame();
    // } else 
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
    this.recordFrame();
    this.updateScore();
    this.endFrame();
};

BowlingGame.prototype.recordFrame = function (one = this.currentFrameRollOne, two = this.currentFrameRollTwo) {
  this.currentGameRollOne.push(one);
  this.currentGameRollTwo.push(two);
};

BowlingGame.prototype.updateScore = function (one = this.currentFrameRollOne, two = this.currentFrameRollTwo) {
    this.runningTotal += one;
    this.runningTotal += two;
};

BowlingGame.prototype.endFrame = function () {
    this.currentFrameNumber += 1;
    this.currentFrameRollOne = null;
    this.currentFrameRollTwo = null;
};
