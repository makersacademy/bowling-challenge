'use strict';

function Scorer() {
  this.frames = []
  this.score = 0
  this.currentFrame = 0
  for(var i = 0; i < 10; i++) {
    this.frames.push(new Frame())
  }
  this.frames[9].special = 'final'
}

Scorer.prototype.addScore = function(number) {
  if(this.isGameOver()) { throw 'game over!' }
  this.whatFrameIsIt().addRoll(number)
  if(this.isGameOver()) { return }
  if(this.whatFrameIsIt().isFinished === true) { this.newFrame() }
}

Scorer.prototype.newFrame = function() {
  this.currentFrame += 1;
  if(this.currentFrame === 9) { this.frames[9].special = 'final' }
}

Scorer.prototype.whatFrameIsIt = function() {
  return this.frames[this.currentFrame]
}

Scorer.prototype.isGameOver = function() {
  if(this.currentFrame === 9 && this.frames[9].isFinished) { return true }
  return false;
}
