'use strict';

var Frame = function () {
  this.MAXSCORE = 10;
  this.MAXROLLS = 2;
  this.rollCounter = 0;
  this.rollsTotal = 0;
  this.roll1 = 0;
  this.roll2 = 0;
}

Frame.prototype.recordRolls = function (pins) {
  if (this._rollCounterLimit() === true) {
    return 'No more rolls in this frame';
  } else {
    if (this._greaterThanMaxScore(pins) === true) {
      return 'Score can not be greater than 10';
    } else if (pins === 10) {
      this._addRollScore(pins);
      this._incrementRollCounter();
      this._incrementRollsTotal(pins);
      this._addRollScore(0);
      this._incrementRollCounter();
      this._incrementRollsTotal(0);
      return 'Wooo! You got a strike!';
    } {
      this._addRollScore(pins);
      this._incrementRollCounter();
      this._incrementRollsTotal(pins);
    }
  }
}

Frame.prototype._rollCounterLimit = function () {
  return this.rollCounter === this.MAXROLLS;
}

Frame.prototype._incrementRollCounter = function () {
  this.rollCounter += 1;
}

Frame.prototype._incrementRollsTotal = function (pins) {
  this.rollsTotal += pins;
}

Frame.prototype._greaterThanMaxScore = function (pins) {
  return ((this.rollsTotal + pins) > this.MAXSCORE);
}

Frame.prototype._addRollScore = function (pins) {
  if (this.rollCounter === 0) {
    this.roll1 += pins;
  } else {
    this.roll2 += pins;
  }
}

Frame.prototype._addRoll
