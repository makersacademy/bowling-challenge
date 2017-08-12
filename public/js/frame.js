function Frame(){
  this.score1 = null;
  this.score2 = null;
  this.bonus = null;
  this._isStrike = false;
  this._isSpare = false;
  this.isLastFrame = false;
  this.isFirstBowl = true;
  this._isLastFrame = false;
  this.totalScore = 0;
}

Frame.prototype.isStrike = function () {
  return this._isStrike;
};

Frame.prototype.isSpare = function () {
  return this._isSpare;
};

Frame.prototype.isComplete = function () {
  return (this.isStrike() || this.isSpare() || (this.score1 && this.score2));
};

Frame.prototype.addScore = function(score) {
  if (this.isFirstBowl) {
    this.isFirstBowl = false;
    if (score === 10) this._isStrike = true;
    this.score1 = score;
  }
  else {
    this.score2 = score;
    if (this.score1 + this.score2 === 10) this._isSpare = true;
  }
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
