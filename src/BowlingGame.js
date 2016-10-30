"use strict";

function BowlingGame() {
    this.NUMBER_OF_PINS = 10;
    this.runningTotal = 0;
    this.currentFrameRollOne = 0;
    this.FrameRollTwo = 0;
}

BowlingGame.prototype.score = function () {
    return this.runningTotal;
};

BowlingGame.prototype.rollone = function (numberOfPins) {
    if (numberOfPins > this.NUMBER_OF_PINS) {
      throw new Error('number of pins cannot exceed 10');
    }
    this.currentFrameRollOne = numberOfPins;
};

BowlingGame.prototype.rolltwo = function(numberOfPins) {
    if (numberOfPins > this.NUMBER_OF_PINS) {
      throw new Error('number of pins cannot exceed 10');
    } else if (this.currentFrameRollOne + numberOfPins > this.NUMBER_OF_PINS) {
      throw new Error('number of pins in frame cannot exceed 10')
    }
    this.currentFrameRollTwo = numberOfPins;
};
