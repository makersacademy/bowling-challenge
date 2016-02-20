'use strict;'

function Game() {
  this.frames = [];
  this.frameScores = [];
  this.currFrameNum = 0;
}

Game.prototype.addFrame = function (frame) {
  if (this.currFrameNum < 10) {
    this.frames.push(frame);
    this.currFrameNum++;
  } else {
    throw new Error("Max frames");
  }
};
