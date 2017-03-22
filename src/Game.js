'use strict';

function Game(){
  this.frames = [];
  this.newFrame = new Frame(1);
  this.totalscore = 0;
}

// Game.prototype.checkFrames = function() {
//   if (this.frames.length < 10) {
//     game.addNewFrame };
// };

Game.prototype.addNewFrame = function(first, second) {
  this.newFrame.inputBowls(first, second);
  this.frames.push(this.newFrame)
  this.newFrame = new Frame(this.frames.length + 1)
};

Game.prototype.canBowl = function() {
  if (this.frames.length < 10) {
    return true };
};

//
// BowlingGame.prototype.addNewFrame = function (frame) {
//   this.frames.push(frame);
// };
