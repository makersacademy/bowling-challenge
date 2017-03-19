'use strict';

function Game(){
  // this.frame = new Frame();
  this.frames = [];
  this.newFrame = new Frame(1);
  this.totalscore = 0;
}

Game.prototype.newFrame = function() {
  if (this.frames.length < 10) {
    this.newFrame };
};

Game.prototype.addNewFrame = function(first, second) {
  this.newFrame.inputBowls(first, second);
  this.frames.push(this.newFrame)
  this.newFrame = new Frame(this.frames.length + 1)
};
// BowlingGame.prototype.canBowl = function() {
//   return true;
// };
//
// BowlingGame.prototype.addNewFrame = function (frame) {
//   this.frames.push(frame);
// };
