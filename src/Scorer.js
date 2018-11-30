'use strict';

function Scorer() {
  this.frames = []
  this.score = 0
  this.currentFrame = 0
  this.isGameStarted = false
}

Scorer.prototype.addScore = function(number) {
  if(this.isGameStarted === false) { this.setupGame() }
  if(this.whatFrameIsit().isFinished === true) { this.frames.push(new Frame()) }

}

Scorer.prototype.setupGame = function() {
  this.isGameStarted = true;
  this.frames.push(new Frame());
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
