function Frame() {
  this.strike = false;
  this.spare = false;
  this.firstRoll = true;
  this.score = 0;
  this.bonus = 0;
};

Frame.prototype.addScore = function (roll) {
  this.score += roll;
  if (this.score === 10) {
    this.firstRoll ? this.strike = true : this.spare = true;
  }
  this.firstRoll = false;
};
