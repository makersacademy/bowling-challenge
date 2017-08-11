function Frame(){
  this.score1 = null;
  this.score2 = null;
  this.bonus = null;
  this.isFirstBowl = true;
  this.totalScore = 0;
}

Frame.prototype.isStrike = function () {
  return this.score1 === "X";
};

Frame.prototype.isSpare = function () {
  return this.score2 === "/";
};

Frame.prototype.isComplete = function () {
  return (this.isStrike() || this.isSpare() || (this.score1 && this.score2));
};

Frame.prototype.addScore = function(score) {
  if (this.isFirstBowl) {
    this.isFirstBowl = false;
    this.score1 = (score === 10 ? "X" : score);
    this.totalScore = score;
  }
  else {
    this.score2 = ((this.score1 + score === 10) ? "/" : score);
    this.totalScore += score;
  }
};

Frame.prototype.addBonus = function (score) {
  this.bonus = score;
  this.totalScore += score;
};
