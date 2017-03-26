'use strict';

function Game(){
  this.MAX_FRAMES = 10
  this.frames = [];
  this.newFrame = new Frame(1);
  this.totalscore = 0;
}

Game.prototype._canBowl = function() {
  if (this.frames.length < this.MAX_FRAMES) {
    return true };
};

Game.prototype.addNewFrame = function(first, second) {
  if (this._canBowl()) {
  this.newFrame.inputBowls(first, second);
  this.frames.push(this.newFrame)
  this.newFrame = new Frame(this.frames.length + 1) }
};

Game.prototype.calculateScore = function() {
  return this.frames.reduce(function(memo, frame, index, arr) {
    if (arr[index].isStrike()) {
    return memo + frame.totalFrameScore(arr[index + 1], arr[index + 2]);
    } else {
      return memo + frame.totalFrameScore(arr[index + 1], arr[index + 2]);
    }
    // return arr[0].isStrike(); // This is what I should be checking!
  }, 0);
};
