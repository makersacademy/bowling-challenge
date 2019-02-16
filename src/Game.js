'use strict';

function Game(constructorFunction = Frame) {
    this._frames = [];
    var i;
    for (i = 0; i < 10; i++) {
        var newFrame = new constructorFunction;
        this._frames.push(newFrame);
    }
}

Game.prototype.roll = function(score) {
    var i = 0;
    for (i = 0; i < this._frames.length; i++) {
      if (this._frames[i]._scores.length < this._frames[i]._numberOfRolls) {
        this._frames[i].roll(score);
        break;
      }
    }
}
