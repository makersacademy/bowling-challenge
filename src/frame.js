'use strict';

function Frame(){
  this.rolls = [0, 0];
  this.MAX_ROLL = 10;
  this.totalScore = 0
}

Frame.prototype.getRoll = function(number) {
  return this.rolls[number - 1];
};

Frame.prototype.update = function(firstroll, secondroll) {
  this.rolls[0] = firstroll;
  this.rolls[1] = secondroll;
};

Frame.prototype.getAllRolls = function () {
  return this.rolls;
};

Frame.prototype._rollSum = function () {
  return this.rolls.reduce(function (total, roll) {
    return total + roll;
  });
};

Frame.prototype._isStrike = function () {
  return this.rolls[0] == this.MAX_ROLL;
};

Frame.prototype.calcBonus = function (nextframe) {
  if (this._isStrike()) {
    return this.calcStrikeBonus(nextframe);
  } else if (this._isSpare()) {
    return this.calcSpareBonus(nextframe);
  } else { return 0; }
};

Frame.prototype._isSpare = function () {
  return this.rolls[0] < this.MAX_ROLL && this._rollSum() == this.MAX_ROLL;
};

Frame.prototype.calcStrikeBonus = function (nextframe) {
  return nextframe._rollSum();
};

Frame.prototype.calcSpareBonus = function (nextframe) {
    return nextframe.getRoll(1);
};

Frame.prototype.calcScore = function (nextframe) {
    this.totalScore =  this._rollSum() + this.calcBonus(nextframe);
    return this.totalScore
};
