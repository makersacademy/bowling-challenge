function Frame() {
  this.firstRoll = null;
  this.secondRoll = null;
  this.score = null;
  this.message = '';
}

// PUBLIC

Frame.prototype.rollBall = function (ball) {
  this.setMessage(ball);
  this.score += ball;
  return ((this.firstRoll !== null) ? (this.secondRoll = ball) : (this.firstRoll = ball));
};

Frame.prototype.getScore = function () {
  return this.score;
}

Frame.prototype.updateScore = function (nextFrame) {
  if (this.isStrike() && nextFrame.isCompleted()) {
    return this.score += nextFrame.getScore();
  } else if (this.isSpare()) {
    return this.score += nextFrame.firstRoll;
  } else {
    return this.score
  }
};

Frame.prototype.getMessage = function () {
  return this.message;
};

Frame.prototype.isCompleted = function () {
  return (this.isStrike() || this.secondRoll);
};

Frame.prototype.isStrike = function () {
  return (this.firstRoll === 10)
};

Frame.prototype.isSpare = function () {
  return (this.getScore() === 10);
};

// PRIVATE

Frame.prototype.setMessage = function (ball) {
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
