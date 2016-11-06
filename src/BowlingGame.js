"use strict";

function BowlingGame() {
    this.NUMBER_OF_PINS = 10;
    this.runningTotal = 0;
    this.recordRollOne = [];
    this.recordRollTwo = [];
    this.frameNumber = 1;
}

BowlingGame.prototype.score = function () {
    return this.runningTotal;
};

BowlingGame.prototype.rollOne = function (numberOfPins) {
    if (numberOfPins > this.NUMBER_OF_PINS) {
        throw new Error('number of pins cannot exceed 10');
    } else if (this.recordRollTwo.length < this.recordRollOne.length) {
        throw new Error('enter roll 2 to complete current roll');
    }
    this.recordRollOne.push(numberOfPins);
};

BowlingGame.prototype.rollTwo = function(numberOfPins) {
    var rollOnePins = this.recordRollOne[this.frameNumber - 1];

    if (this.recordRollOne.length <= this.recordRollTwo.length) {
        throw new Error('enter roll one before roll two')
    } else if (numberOfPins > this.NUMBER_OF_PINS) {
        throw new Error('number of pins cannot exceed 10');
    } else if (rollOnePins + numberOfPins > this.NUMBER_OF_PINS) {
        throw new Error('number of pins in frame cannot exceed 10');
    }
    this.recordRollTwo.push(numberOfPins);
    this.nextFrame();
    // this.recordFrame();
    // this.updateScore();
};

BowlingGame.prototype.recordFrame = function (one = this.currentFrameRollOne, two = this.currentFrameRollTwo) {
  this.currentGameRollOne.push(one);
  this.currentGameRollTwo.push(two);
};

BowlingGame.prototype.updateScore = function (one = this.currentFrameRollOne, two = this.currentFrameRollTwo) {
    this.runningTotal += one;
    this.runningTotal += two;
};

BowlingGame.prototype.nextFrame = function () {
    this.frameNumber += 1;
};
