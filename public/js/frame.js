function Frame(){
  this.score1 = null;
  this.score2 = null;
  this.bonus = null;
  this._strike = false;
  this._spare = false;
}

Frame.prototype.setStrike = function () {
  this._strike = true;
};

Frame.prototype.isFirstBowl = function () {
  return (this.score1 == null);
};

Frame.prototype.isSecondBowl = function () {
  return (this.score1 != null && this.score2 == null);
};

Frame.prototype.isStrike = function () {
  return this._strike;
};

Frame.prototype.setSpare = function () {
  this._spare = true;
};

Frame.prototype.isSpare = function () {
  return this._spare;
};

Frame.prototype.isComplete = function () {
  return (this.isStrike() || (this.score1 && this.score2));
};

Frame.prototype.setScore1 = function (score) {
  this.score1 = score;
  if (this.score() === 10) {
    this.setStrike();
  }
};

Frame.prototype.setScore2 = function (score) {
  this.score2 = score;
  if (this.score() === 10) {
    this.setSpare();
  }
};

Frame.prototype.addBonus = function (score) {
  this.bonus = score;
};

Frame.prototype.score = function() {
  return this.score1 + this.score2 + this.bonus;
};
