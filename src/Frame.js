function Frame(ball) {
  this.ball = ball || new Ball();
  this.firstRoll = this.ball.roll();
  this.secondRoll = null;
  this.framePoints = this.firstRoll;
}

Frame.prototype.play = function () {
  this.secondRoll = this.ball.roll();
  this.framePoints += this.secondRoll;
  return this.secondRoll;
};

Frame.prototype.isCompleted = function () {
  if (this.firstRoll + this.secondRoll === 10) {
    return 'points pending'
  }
  if ((this.firstRoll === 10) || (this.secondRoll !== null)) {
    return true
  }
  return false
};

Frame.prototype.getFramePoints = function () {
  return this.framePoints;
};
