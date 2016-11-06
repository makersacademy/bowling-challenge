"use strict";

function BowlingGame() {
    this.NUMBER_OF_PINS = 10;
    this.runningTotal = 0;
    this.recordRollOne = [];
    this.recordRollTwo = [];
    this.frameNumber = 1;
    this.gameOver = false;
}

BowlingGame.prototype.score = function() {
    return this.runningTotal;
};

BowlingGame.prototype.rollOne = function(numberOfPins) {
    if (numberOfPins > this.NUMBER_OF_PINS) {
        throw new Error('number of pins cannot exceed 10');
    } else if (this.recordRollTwo.length < this.recordRollOne.length) {
        throw new Error('enter roll 2 to complete current roll');
    } else if (this.gameOver === true) {
        throw new Error('game is over')
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
};

BowlingGame.prototype.nextFrame = function() {
    this.frameNumber += 1;
    if (this.frameNumber === 11) {
        this.gameOver = true;
    }
};
