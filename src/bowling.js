'use strict';

function Bowling() {
    this.frames = [];
    this.frame = new Frame();
}

Bowling.prototype.gameScore = function() {
    var total = 0;
    for (var i = 0; i < this.frames.length; i++) {
        var currentFrame = this.frames[i];
        total += currentFrame.frameScore();
    }
    return total;
};

Bowling.prototype.roll = function(pins) {
    // TODO: Check if valid pins are passed
    // TODO: Check if we are allowed a bonus roll
    if (pins > 10) {
        throw Error("Pins should be between 0 and 10 (both inclusive); got " + pins + " pins");
    }
    if (this.frames.length === 10) {
        throw Error("Can't roll when game is complete");
    }
    this.frame.addRoll(pins);
    if (this.frame.isDone()) {
        this.frames.push(this.frame);
        this.frame = new Frame();
    }
};
