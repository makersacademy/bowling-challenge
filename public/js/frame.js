function Frame(){
  this.score1 = null;
  this.score2 = null;
  this.score3 = null;
  this.complete = false;
  this.strike = false;
  this.spare = false;
  this.bonus = null;
}

Frame.prototype.reset = function () {
  this.score1 = null;
  this.score2 = null;
  this.score3 = null;
  this.complete = false;
  this.strike = false;
  this.spare = false;
  this.bonus = null;
};

Frame.prototype.setStrike = function () {
  this.strike = true;
};

Frame.prototype.isFirstBowl = function () {
  return (this.score1 == null);
};

Frame.prototype.isSecondBowl = function () {
  return (this.score1 != null && this.score2 == null);
};

Frame.prototype.isStrike = function () {
  return this.strike;
};

Frame.prototype.setSpare = function () {
  this.spare = true;
};

Frame.prototype.isSpare = function () {
  return this.spare;
};

Frame.prototype.isComplete = function () {
  return this.complete;
};

Frame.prototype.setComplete = function() {
  this.complete = true;
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

Frame.prototype.setScore3 = function (score) {
  this.score3 = score;
};

Frame.prototype.addBonus = function (score) {
  this.bonus = score;
};

Frame.prototype.score = function() {
  return this.score1 + this.score2 + this.score3 + this.bonus;
};
