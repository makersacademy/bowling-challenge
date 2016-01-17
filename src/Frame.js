function Frame(ball) {
  this.ball = ball || new Ball();
  this.firstRoll = null;
  this.secondRoll = null;
  this.score = null;
  this.scoreNeedsUpdating = false;
  this.TOTPINS = 10
}

Frame.prototype.rollBall = function () {
  var rollValue = this.ball.roll(this._pinsLeft());
  this.score += rollValue;
  ((this.firstRoll !== null) ? (this.secondRoll = rollValue) : (this.firstRoll = rollValue))
  if (this._isStrike() || this._isSpare()) { this.scoreNeedsUpdating = true }
  return rollValue
}

Frame.prototype.getTempScore = function () {
  return this.score;
}

Frame.prototype.getFinalScore = function () {
  return ((this.scoreNeedsUpdating || !this.bothBallThrown()) ? '' : this.score)
}

Frame.prototype.updateScore = function (nextFrame) {
  if (this._isStrike() && nextFrame.bothBallThrown() && this.scoreNeedsUpdating){
    this.scoreNeedsUpdating = false;
    return this.score += nextFrame.getTempScore();
  } else if (this._isSpare() && this.scoreNeedsUpdating) {
    this.scoreNeedsUpdating = false;
    return this.score += nextFrame.firstRoll;
  }
  return this.score
};

Frame.prototype.getMessage = function () {
  if (this._isStrike()) {
    return 'Strike!'
  } else if (this._lastBall() === 0) {
    return 'Miss!'
  } else if (this._isSpare()) {
    return this._lastBall()+' hit, spare!'
  } else {
    return this._lastBall()+' hit'
  }
};

Frame.prototype.bothBallThrown = function () {
  return (this._isStrike() || this.secondRoll !== null);
};

Frame.prototype._pinsLeft = function () {
  return (this.TOTPINS-this.firstRoll)
};

Frame.prototype._lastBall = function () {
  return ( this.bothBallThrown() ? this.secondRoll : this.firstRoll )
};

Frame.prototype._isStrike = function () {
  return (this.firstRoll === this.TOTPINS)
};

Frame.prototype._isSpare = function () {
  return ((this.secondRoll !== null) && (this.getTempScore() === this.TOTPINS));
};
