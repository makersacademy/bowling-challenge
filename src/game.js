'use strict';

function Game(){
  this.frames = [];
}

Game.prototype.addFrame = function (frame) {
  if (this.frames.length < 10 ) {
    this.frames.push(frame);
  } else {
    throw new Error('This game already has ten frames')
  };
};

Game.prototype.totalGameScore = function () {
  var total = 0
  this.frames.forEach(function(thisFrame) {
    total += thisFrame.totalScore();
  });
  return total
};
