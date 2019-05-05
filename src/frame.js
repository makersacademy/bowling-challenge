var Frame = function(){
  MAXIMUM_SCORE = 10;
  this.currentScore = 0;
  this.rollNumber = 1;
  this.secondRollImpossibilities = [];
  this.strike = false;
  this.spare = false;
};

Frame.prototype.getCurrentScore = function () {
  return this.currentScore;
};

Frame.prototype.calculateScore = function (roll1, roll2) {
  if (roll1 === MAXIMUM_SCORE) {
    this.currentScore = MAXIMUM_SCORE;
    this._setStrike();
  } else {
    this.currentScore = roll1 + roll2;
    this._resetSpareAndStrike();
    if(this.currentScore === MAXIMUM_SCORE) this._setSpare();
  }
};

Frame.prototype.checkRolls = function () {
  return this.rollNumber;
};

Frame.prototype.addRoll = function () {
  if(this.rollNumber === 2) {
    this.rollNumber = 1;
  } else {
  ++ this.rollNumber;
  }
};

Frame.prototype.getImpossibleRolls = function(roll1Score) {
  this._impossibleRolls(roll1Score);
  return this.secondRollImpossibilities;
};

Frame.prototype.isStrike = function () {
 return this.strike;
};

Frame.prototype.isSpare = function () {
 return this.spare;
};


Frame.prototype._impossibleRolls = function(roll1Score) {
  maxRoll = (MAXIMUM_SCORE + 1) - roll1Score;
  this.secondRollImpossibilities = Array(roll1Score).fill(maxRoll).map((x, y) => x + y);
};

Frame.prototype._setStrike = function () {
  this.strike = true;
};

Frame.prototype._setSpare = function () {
  this.spare = true;
};

Frame.prototype._resetSpareAndStrike = function () {
  this.strike = false;
  this.spare = false;
};
