var Frame = function () {
  this.MAXSCORE = 10;
  this.rollCounter = 0;
  this.rollScore = 0;
}

Frame.prototype.recordRolls = function (number) {
  if (this._rollCounterLimit() === true) {
    return '2 rolls per frame';
  } else {
    if (this._greaterThanMaxScore(number) === true) {
      return 'Score can not be greater than 10';
    } else {
      this._incrementRollCounter();
      this._incrementRollScore(number);
    }
  }
}

Frame.prototype._rollCounterLimit = function () {
  return this.rollCounter === 2;
}

Frame.prototype._incrementRollCounter = function () {
  this.rollCounter += 1;
}

Frame.prototype._incrementRollScore = function (number) {
  this.rollScore += number;
}

Frame.prototype._greaterThanMaxScore = function (number) {
  return ((this.rollScore + number) > this.MAXSCORE);
}
