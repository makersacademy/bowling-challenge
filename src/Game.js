'use-strict';

function Game() {
  this.scoresheet = new Scoresheet();
}

Game.prototype.process(pins) {
  this.scoresheet.currentFrame.addRoll(pins);
  if (this.scoresheet.frame.length === 10) {
    return 'Game over! You scored ' + this.scoresheet.score + 'points.'
  }
}

Game.prototype.newCurrentFrame = function() {
  if (this._frames.length === 10) {
    return
  }
  this._currentFrame = new Frame();
}

Game.prototype.addToScore = function(pins) {
  if (this._currentFrame._rolls.length === 0) {
    this._currentFrame.addRoll(pins)
    this._score += pins
  } else {
    this._currentFrame.addRoll(pins)
    this._score += pins
    this.addFrame(this._currentFrame)
    this.newCurrentFrame()
  }
}

Game.prototype.addFrame = function(frame) {
  this._frames.push(frame);
}

Game.prototype.showScore = function() {
  return this._score
}
