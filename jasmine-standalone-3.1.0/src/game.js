'use strict';

function Game() {
  this.frames = [];
}
//
// Game.prototype.totalScore = function() {
//   this.frames.reduce(function(score, frame) {
//     return score + frame.totalScore;
//   });
// };
//
// Game.prototype.roll = function(score) {
//   roll = new Roll(score)
// }

Game.prototype.currentFrame = (function() {
  if(this.frames.length === 0) {
    var frameNumber = 1;
    var frame = new Frame(frameNumber);
    this.frames.push(frame);
    return frame;
  };
  var lastFrame = this.frames[this.frames.length - 1];
  if(lastFrame.canRoll()) {
    return lastFrame;
  } else {
    var frameNumber = this.frames.length + 1;
    var frame = new Frame(frameNumber);
    this.frames.push(frame);
    return frame;
  };
});
