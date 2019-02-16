'use strict';

function Game(constructorFunction = Frame) {
    this.frames = [];
    var i;
    for (i = 0; i < 10; i++) {
        var newFrame = new constructorFunction;
        this.frames.push(newFrame);
    }
}

Game.prototype.roll = function(score) {
    var i = 0;
    for (i = 0; i < this.frames.length; i++) {
      if (this.frames[i]._scores.length < this.frames[i]._numberOfRolls) {
        this.frames[i].roll(score);
        break;
      }
    }
}
