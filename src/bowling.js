'use strict';

function Bowling() {
    this.frames = [];
    this.frame = new Frame();
}

Bowling.prototype.gameScore = function() {
    var total = 0;
    for (var i = 0; i < this.frames.length; i++) {
        var currentFrame = this.frames[i];
        console.log(currentFrame);
        total += currentFrame.frameScore();
    }
    return total;
};

Bowling.prototype.roll = function(pins) {
    // TODO: Check if valid pins are passed
    // TODO: Check if we are allowed a bonus roll
    if (this.frames.length === 10) {
        throw new Error("Can't roll when game is complete")
    }
    this.frame.addRoll(pins);
    if (this.frame.isDone()) {
        this.frames.push(this.frame);
        this.frame = new Frame();
    }
};
