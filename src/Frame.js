function Frame(roll) {
  this.ball = roll;
  this.firstRoll = null;
  this.secondRoll = null;
}

Frame.prototype.roll = function () {
  if (!this.firstRoll) {
    this.firstRoll = this.ball.roll();
    return this.firstRoll+" pins hit!";
  } else {
    this.secondRoll = this.ball.roll();
    return this.secondRoll+" pins hit!";
  }
};
