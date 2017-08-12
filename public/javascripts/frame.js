function Frame(){
  this.score1 = null;
  this.score2 = null;
  this.bonus = null;
  this.totalScore = 0;
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
  if (this.isFirstBowl()) this.score1 = score;
  else this.score2 = score;
  this.calculateScore();
};

Frame.prototype.addBonus = function (score) {
  this.bonus += score;
  if (this.bonus > 20) this.bonus = 20;
  this.calculateScore();
};

Frame.prototype.calculateScore = function (score) {
  this.totalScore = this.score1 + this.score2 + this.bonus;
};
