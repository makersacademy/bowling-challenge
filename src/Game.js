'use strict';

function Game(constructorFunction = Frame) {
    this.frames = [];
    var i;
    for (i = 0; i < 10; i++) {
        var newFrame = new constructorFunction;
        this.frames.push(newFrame);
    }
    this.frames[9]._IsTenthFrame = true
}

Game.prototype.roll = function(score) {
    var i = 0;
    for (i = 0; i < this.frames.length; i++) {
        if (this.frames[i].scores.length < this.frames[i]._numberOfRolls) {
            this.frames[i].roll(score);
            break;
        }
    }
};

Game.prototype.run = function(allRolls) {
    var i = 0;
    for (i = 0; i < allRolls.length; i++) {
        this.roll(allRolls[i]);
    }
};
