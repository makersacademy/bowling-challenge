function Frame(ball) {
  this.ball = ball || new Ball();
  this.firstRoll = null;
  this.secondRoll = null;
  this.score = null;
  this.message = '';
  this.scoreNeedsUpdating = false;
}

Frame.prototype.rollBall = function () {
  var rolledBall = this.ball.roll(this.pinsLeft());
  this._setMessage(rolledBall);
  this.writeScore(rolledBall);
  if (this.firstRoll !== null) {
    return (this.secondRoll = rolledBall)
  } else {
    return (this.firstRoll = rolledBall)
  }
}

Frame.prototype.pinsLeft = function () {
  return (10-this.firstRoll)
};

Frame.prototype.writeScore = function (ball) {
  this.score += ball;
  if (this.score === 10) { this.scoreNeedsUpdating = true }
  return this.score
};

Frame.prototype.getTempScore = function () {
  return this.score;
}

Frame.prototype.getFinalScore = function () {
  return ((this.scoreNeedsUpdating || !this.bothBallThrown()) ? '' : this.score)
}

Frame.prototype.updateScore = function (nextFrame) {
  if (this._isStrike() && nextFrame.bothBallThrown() && this.scoreNeedsUpdating ) {
    this.scoreNeedsUpdating = false;
    return this.score += nextFrame.getTempScore();
  } else if (this._isSpare() && this.scoreNeedsUpdating) {
    this.scoreNeedsUpdating = false;
    return this.score += nextFrame.firstRoll;
  } else {
    return this.score
  }
};

Frame.prototype.getMessage = function () {
  return this.message;
};

Frame.prototype.bothBallThrown = function () {
  return (this._isStrike() || this.secondRoll !== null);
};


Frame.prototype._isStrike = function () {
  return (this.firstRoll === 10)
};

Frame.prototype._isSpare = function () {
  return ((this.secondRoll !== null) && (this.getTempScore() === 10));
};

Frame.prototype._setMessage = function (ball) {
  if (ball === 10) {
    this.message = 'Strike!'
  } else if (ball === 0) {
    this.message = 'Miss!'
  } else if ((this.firstRoll + ball) === 10) {
    this.message = ball+' hit, spare!'
  } else {
    this.message = ball+' hit'
  }
};
