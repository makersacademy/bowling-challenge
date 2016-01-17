function Frame(ball) {
  this.firstRoll = null;
  this.secondRoll = null;
  this.score = null;
  this.message = '';
  this.ball = ball || new Ball();
  this.scoreIsUpdated = false;
}

Frame.prototype.rollBall = function () {
  var ball = this.ball.roll(10-this.firstRoll);
  this._setMessage(ball);
  this.score += ball;
  if (this.firstRoll !== null) {
    this.secondRoll = ball
    return this.secondRoll
  } else {
    this.firstRoll = ball
    return this.firstRoll
  }
}

Frame.prototype.getTempScore = function () {
  return this.score;
}

Frame.prototype.getScore = function () {
  if ((this.isCompleted() && !this._isSpare() && !this._isStrike()) || this.scoreIsUpdated) {
    return this.score;
  } else {
    return ''
  }
}

Frame.prototype.updateScore = function (nextFrame) {
  this.scoreIsUpdated = true;
  if (this._isStrike() && nextFrame.isCompleted()) {
    return this.score += nextFrame.getTempScore();
  } else if (this._isSpare()) {
    return this.score += nextFrame.firstRoll;
  } else {
    return this.score
  }
};

Frame.prototype.getMessage = function () {
  return this.message;
};

Frame.prototype.isCompleted = function () {
  return (this._isStrike() || this.secondRoll !== null);
};


Frame.prototype._isStrike = function () {
  return (this.firstRoll === 10)
};

Frame.prototype._isSpare = function () {
  return (this.getTempScore() === 10);
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
