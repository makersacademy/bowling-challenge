'use strict';

function BowlingGame(){
  this.frames = [];
  this.totalscore = 0;
}

BowlingGame.prototype.canBowl = function() {
  return true;
};

BowlingGame.prototype.addNewFrame = function (frame) {
  this.frames.push(frame);
};
