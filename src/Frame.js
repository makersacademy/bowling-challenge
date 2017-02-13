'use-strict';

function Frame(game) {
  this.rolls = [];
  this.game = game;
  this.frameScore = this.game.playedFrames[this.game.playedFrames.length - 1] ? this.game.playedFrames[this.game.playedFrames.length - 1].frameScore : 0
  this.FRAME_LENGTH = 2;
}

Frame.prototype._updateFrame = function(pins) {
  this.rolls.push(pins);
  this.frameScore += pins;
}

Frame.prototype._isAStrike = function(pins) {
  if (this.rolls.length === 0 && pins === this.game.GAME_PINS) {
    return true
  } else {
    return false
  }
}

Frame.prototype._isASpare = function(pins) {
  if (this.rolls.length === 1 && pins === this.game.GAME_PINS - this.rolls[0]) {
    return true
  } else {
    return false
  }
}

Frame.prototype.addRoll = function(pins) {
  if (this.rolls.length === this.FRAME_LENGTH) {
    throw new Error('Impossibru - frame overflow!')
  }

  if (this.game.playedFrames.length === 9 && (this._isAStrike(pins) || this._isASpare(pins))) {
    this.FRAME_LENGTH = 3
    this.game.GAME_PINS = 30
    this._updateFrame(pins)
    this.game.addToScore(pins, 0)
  } else if (this._isAStrike(pins)) {
    this.FRAME_LENGTH = 1
    this._updateFrame(pins)
    this.game.addToScore(pins, 2)
  } else if (this._isASpare(pins)) {
    this._updateFrame(pins)
    this.game.addToScore(pins, 1)
  } else {
    this._updateFrame(pins)
    this.game.addToScore(pins, 0)
  }
}
