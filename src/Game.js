'use-strict';

function Game() {
  this.playedFrames = []
  this.currentFrame = new Frame(this)
  this.bonus_rolls = 0
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

Game.prototype.checkGameOver = function () {
  if (this.playedFrames.length === this.GAME_LENGTH) {
    throw new Error('Game over & chill!')
  }
}

Game.prototype.sendToFrame = function(pins) {
  if (!(this.isInteger(pins)) || pins < 0 || pins > this.GAME_PINS) {
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

Game.prototype.nextFrameAndBonus = function(bonus) {
  if (this.currentFrame.rolls.length === this.currentFrame.FRAME_LENGTH && this.playedFrames.length < this.GAME_LENGTH) {
    this.playedFrames.push(this.currentFrame)
    this.bonus_rolls = bonus
    if (this.playedFrames.length < this.GAME_LENGTH) {
      this.newCurrentFrame()
    }
  }
}

Game.prototype.handleSparesAndStrikes = function(pins) {
  // handle previous strike(s)
  if (this.bonus_rolls > 0 && this.playedFrames[this.playedFrames.length - 1].rolls.length === 1 && this.playedFrames[this.playedFrames.length - 2] && this.playedFrames[this.playedFrames.length - 2].rolls.length === 1 && this.currentFrame.rolls.length === 1) {
    this.playedFrames[this.playedFrames.length - 2].frameScore += pins
    this.playedFrames[this.playedFrames.length - 1].frameScore = this.playedFrames[this.playedFrames.length - 2].frameScore + this.GAME_PINS + pins
    this.currentFrame.frameScore = this.playedFrames[this.playedFrames.length - 1].frameScore + pins
    this.bonus_rolls -= 1
  } else if (this.bonus_rolls > 0 && this.playedFrames[this.playedFrames.length - 1] && this.playedFrames[this.playedFrames.length - 1].rolls.length === 1) {
    this.playedFrames[this.playedFrames.length - 1].frameScore += pins
    this.currentFrame.frameScore = this.playedFrames[this.playedFrames.length - 1].frameScore + this.currentFrame.rolls.reduce(function(a, b) {return a + b}, 0)
    this.bonus_rolls -= 1
  }

  // handle previous spare
  if (this.bonus_rolls > 0 && this.playedFrames[this.playedFrames.length - 1] && this.playedFrames[this.playedFrames.length - 1].rolls.length === 2 && this.playedFrames[this.playedFrames.length - 1].rolls.reduce(function(a, b) {return a + b}, 0) === 10) {
    this.playedFrames[this.playedFrames.length - 1].frameScore += pins
    this.currentFrame.frameScore = this.playedFrames[this.playedFrames.length - 1].frameScore + this.currentFrame.rolls.reduce(function(a, b) {return a + b}, 0)
    this.bonus_rolls -= 1
  }
}

Game.prototype.addToScore = function(pins) {
  this.checkGameOver()
  this.handleSparesAndStrikes(pins)
  this.nextFrameAndBonus(0)
}

Game.prototype.addStrikeToScore = function(pins) {
  this.checkGameOver()
  this.handleSparesAndStrikes(pins)
  this.nextFrameAndBonus(2)
}

Game.prototype.addSpareToScore = function(pins) {
  this.checkGameOver()
  this.handleSparesAndStrikes(pins)
  this.nextFrameAndBonus(1)
}
