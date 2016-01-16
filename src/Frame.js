function Frame() {
  this.firstRoll = null;
  this.secondRoll = null;
  this.score = null;
  this.message = '';
}

// PUBLIC

Frame.prototype.rollBall = function (ball) {
  this.setMessage(ball);
  if (this.firstRoll === null) {
    return (this.firstRoll = ball);
  } else {
    return (this.secondRoll = ball);
  }
};

Frame.prototype.getFirstRoll = function () {
  return this.firstRoll;
};

Frame.prototype.getSecondRoll = function () {
  return this.secondRoll;
};

Frame.prototype.getScore = function () {
  if (this.secondRoll || this.isStrike()) {
    return (this.score = this.firstRoll + this.secondRoll);
  } else {
    return 0
  }
}

Frame.prototype.getMessage = function () {
  return this.message;
};

Frame.prototype.isCompleted = function () {
  return ((this.isStrike()) || (this.secondRoll !== null));
};

Frame.prototype.isStrike = function () {
  return (this.firstRoll === 10);
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
