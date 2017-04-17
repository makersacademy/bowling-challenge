'use strict';

function Game() {
  this.INITIAL_PLAYED_FRAMES = 0;
  this.playedFrames = this.INITIAL_PLAYED_FRAMES;
}

var noMoreFrames = 'Only 10 frames per game: no cheating, please!';

Game.prototype.getPlayedFrames = function() {
  return this.playedFrames;
};

Game.prototype.addPlayedFrame = function() {
  this.playedFrames += 1;
};

Game.prototype.roll = function(knockedPins) {
  if (this.playedFrames >= 10) { throw new Error (noMoreFrames) }
  this.addPlayedFrame();
};
