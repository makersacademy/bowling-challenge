function Frame(ball) {
  this.ball = ball || new Ball();
  this.firstRoll = this.ball.roll();
  this.secondRoll = null;
  this.totalPoints = 0;
  return this.firstRoll+" pins hit!";
}

Frame.prototype.play = function () {
  this.secondRoll = this.ball.roll();
  return this.secondRoll+" pins hit!";
};

Frame.prototype.isCompleted = function () {
  if ((this.firstRoll === 10) || (this.firstRoll !== null && this.secondRoll !== null)) {
    return true
  }
  return false
};

Frame.prototype.calcPoints = function () {
  this.totPoints = this.firstRoll + this.secondRoll;
  return this.totPoints;
};
