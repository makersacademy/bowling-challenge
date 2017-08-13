function Frame(){
  this.score1 = null;
  this.score2 = null;
  this.bonus = null;
  this.bonusRolls = 0;
}

Frame.prototype.isStrike = function () {
  return (this.score1 === 10);
};

Frame.prototype.isSpare = function () {
  return (!this.isStrike() && (this.score1 + this.score2 === 10));
};

Frame.prototype.isFirstBowl = function () {
  return (this.score1 === null);
};

Frame.prototype.isComplete = function () {
  return (this.isStrike() || (this.score2 != null));
};

Frame.prototype.addScore = function(score) {
  if (this.isFirstBowl()) {
    this.score1 = score;
    if (this.isStrike()) this.bonusRolls = 2;
  }
  else {
    this.score2 = score;
    if (this.isSpare()) this.bonusRolls = 1;
  }
};

Frame.prototype.addBonus = function (score) {
  if (this.bonusRolls > 0) {
    this.bonus += score;
    this.bonusRolls -= 1;
  }
  //this.bonus += score;
  //if (this.bonus > 20) this.bonus = 20;
};

Frame.prototype.score = function (score) {
  return this.score1 + this.score2 + this.bonus;
};
