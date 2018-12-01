'use strict';

function Game (name) {
  this.frames = [];
}

Game.prototype.roll = function (num) {
  var frame = new Frame(num);
  this.frames.push(frame);
};

Game.prototype.scoreGame = function () {
  return this.frames.reduce(function(score, frame, index, frames){
    return score + frame.total(frames[index + 1],frames[index + 2]);
  },0);
};
