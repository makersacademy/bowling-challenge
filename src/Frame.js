var Frame = function () {
  this.MAXSCORE = 10;
  this.MAXROLLS = 2;
  this.rollCounter = 0;
  this.rollScore = 0;
  this.roll1 = 0;
  this.roll2 = 0;
}

Frame.prototype.recordRolls = function (pins) {
  if (this._rollCounterLimit() === true) {
    return '2 rolls per frame';
  } else {
    if (this._greaterThanMaxScore(pins) === true) {
      return 'Score can not be greater than 10';
    } else {
      this._addRoll(pins);
      this._incrementRollCounter();
      this._incrementRollScore(pins);
    }
  }
}

Frame.prototype._rollCounterLimit = function () {
  return this.rollCounter === this.MAXROLLS;
}

Frame.prototype._incrementRollCounter = function () {
  this.rollCounter += 1;
}

Frame.prototype._incrementRollScore = function (pins) {
  this.rollScore += pins;
}

Frame.prototype._greaterThanMaxScore = function (pins) {
  return ((this.rollScore + pins) > this.MAXSCORE);
}

Frame.prototype._addRoll = function (pins) {
  if (this.rollCounter === 0) {
    this.roll1 += pins;
  } else {
    this.roll2 += pins;
  }
}
