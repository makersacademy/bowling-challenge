function Frame(){
  this.score1 = null;
  this.score2 = null;
  this.bonus = null;
  this._isFirstBowl = true;
  this._isSecondBowl = false;
  this._isComplete = false;
  this._strike = false;
  this._spare = false;
  this._score = 0;
}

Frame.prototype.score1 = function() {
  return this._score1;
};

Frame.prototype.score2 = function() {
  return this._score2;
};

Frame.prototype.bonusScore = function() {
  return this._bonus;
};

Frame.prototype.setStrike = function () {
  this._isComplete = true;
  this._strike = true;
};

Frame.prototype.isFirstBowl = function () {
  return this._isFirstBowl;
};

Frame.prototype.isSecondBowl = function () {
  return this._isSecondBowl;
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
  return this._isComplete;
};

Frame.prototype.setScore1 = function (score) {
  this._isFirstBowl = false;
  this._isSecondBowl = true;
  this.score1 = score;
  this.calculateScore();
  if (this.score() === 10) {
    this.setStrike();
  }
};

Frame.prototype.setScore2 = function (score) {
  this._isComplete = true;
  this._isSecondBowl = false;
  this.score2 = score;
  this.calculateScore();
  if (this.score() === 10) {
    this.setSpare();
  }
};

Frame.prototype.calculateScore = function() {
  this._score = this.score1 + this.score2 + this.bonus;
};

Frame.prototype.addBonus = function (score) {
  this.bonus = score;
  this.calculateScore();
};

Frame.prototype.score = function() {
  return this._score;
};
