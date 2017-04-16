
'use strict';


function Game() {
  this.frame = new Frame();
  this._frames = [];
  this._scores = [];
  this.MAX_FRAMES = 10;
};

// Game.prototype.addFrame = function(frame) {
//   this._frames.push(frame);
//   // frameScore = this.frame.getFrameScore();
//   // this._scores.push(this.frameScore);
//   this._calculateScore(this._frames.length-1);
// };
//
// Game.prototype._calculateScore = function (frameNumber) {
//   var frame = this._frames[frameNumber];
//   this._scores[frameNumber+1] = this._scores[frameNumber] + frame.getFrameScore();
// };


// Game.prototype.currentScore = function () {
//   this._scores._last();
// };

// Frame.prototype.playNextFrame = function () {
//   if(this._frames.length >= 10) {
//     return "Sorry, there are only 10 frames per game!"
//   };
//   var oneFrame = this.playOneFrame();
//   this._frames.push(oneFrame);
//   this._score = oneFrame[0] + oneFrame[1];
// };
//





Array.prototype._last = function () {
  return this[this.length - 1];
};
