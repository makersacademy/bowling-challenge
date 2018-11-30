'use strict';

function Scorer() {
  this.frames = []
  this.score = 0
  this.currentFrame = 0
  this.isGameStarted = false
}

Scorer.prototype.addScore = function(number) {
  if(this.isGameOver()) { throw 'game over!' }
  if(this.isGameStarted === false) { this.setupGame() }
  this.whatFrameIsIt().addRoll(number)
  if(this.isGameOver()) { return }
  if(this.whatFrameIsIt().isFinished === true) { this.newFrame() }
}

Scorer.prototype.setupGame = function() {
  this.isGameStarted = true;
  this.frames.push(new Frame());
}

Scorer.prototype.newFrame = function() {
  this.frames.push(new Frame())
  this.currentFrame += 1
  if(this.currentFrame === 9) { this.frames[9].special = 'final' }
}

Scorer.prototype.currentScore = function() {
  this.score = 0
  for(var i = 0; i < this.currentFrame; i++) {
    this.score += this.frames[i].frameScore();
  }
}

Scorer.prototype.whatFrameIsIt = function() {
  return this.frames[this.currentFrame]
}

Scorer.prototype.isGameOver = function() {
  if(this.currentFrame === 9 && this.frames[this.currentFrame].isFinished) { return true }
  return false;
}
