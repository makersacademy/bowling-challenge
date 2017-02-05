'use-strict';

function Game() {
  this.gameScore = 0
  this.playedFrames = []
  this.currentFrame = new Frame(this)
  this.GAME_LENGTH = 10
  this.GAME_PINS = 10
}

Game.prototype.isInteger = function(data) {
  if (data === parseInt(data, 10)) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.sendToFrame = function(pins) {
  if (!(this.isInteger(pins)) || pins < 0 || pins > this.GAME_PINS) {
  // if (!Number.isInteger(pins) || pins < 0 || pins > this.GAME_PINS) {
    throw new Error('No way! There are ' + this.GAME_PINS + ' pins in this game and they only come as non-negative integers.')
  }

  if (pins > this.GAME_PINS - this.currentFrame.rolls[0]) {
    throw new Error('Hey! There are only ' + this.GAME_PINS + ' pins in the game!')
  }

  this.currentFrame.addRoll(pins)
}

Game.prototype.newCurrentFrame = function() {
  if (this.playedFrames.length === this.GAME_LENGTH) {
    throw new Error('Game over & chill from newCurrentFrame!')
  }
  this.currentFrame = new Frame(this)
}

Game.prototype.addToScore = function(pins) {
  if (this.playedFrames.length === this.GAME_LENGTH) {
    throw new Error('Game over & chill from addToScore!')
  }

  this.gameScore = this.currentFrame.frameScore
  this.playedFrames.push(this.currentFrame)

  if (this.playedFrames.length < this.GAME_LENGTH) {
    this.newCurrentFrame()
  }
}
