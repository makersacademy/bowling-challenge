'use-strict';

function Frame(game) {
  this.rolls = [];
  this.game = game;
  this.frameScore = game.gameScore;
  this.frameScore = this.game.playedFrames[this.game.playedFrames.length - 1] ? this.game.playedFrames[this.game.playedFrames.length - 1].frameScore : 0
  this.FRAME_LENGTH = 2;
}

Frame.prototype._updateFrame = function(pins) {
  this.rolls.push(pins);
  this.frameScore += pins;
}

Frame.prototype.addRoll = function(pins) {
  if (this.rolls.length === this.FRAME_LENGTH) {
    throw new Error('Impossibru - frame overflow!')
  }
  this._updateFrame(pins)
  this.game.addToScore(pins)
}
