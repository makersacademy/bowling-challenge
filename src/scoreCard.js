function ScoreCard () {
  this._bowls = [];
  this._bowlIndex = 0;
  this._frame = 1;
  this._score = 0;
}

ScoreCard.prototype.bowl = function (knockedPins) {
  this._bowls.push(knockedPins);
};

ScoreCard.prototype.score = function () {
  while (this._frame <= 10) {
    this._score += (this.notDefinedCheck(this._bowls[this._bowlIndex]) + this.notDefinedCheck(this._bowls[this._bowlIndex+1]));
    this._bowlIndex += 2;
    this._frame += 1;
  };
};

ScoreCard.prototype.notDefinedCheck = function (indexToCheck) {
  if (isNaN(indexToCheck)) {
    return 0
  } else {
    return indexToCheck
  }
}
