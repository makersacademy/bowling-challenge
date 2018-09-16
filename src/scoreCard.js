function ScoreCard () {
  this._bowls = [];
  this._bowlIndex = 0;
  this._frame = 1;
  this.score = 0;
  this.displayScore = 0;
};

ScoreCard.prototype.bowl = function (knockedPins) {
    this._bowls.push(knockedPins);
    this.scoreCalculate();
};

ScoreCard.prototype.scoreCalculate = function () {
  this._resetForScore ();

  while (this._frame <= 10) {
    // strike
    if (this._notDefinedCheck(this._bowls[this._bowlIndex]) === 10) {
        this.score +=
        (10 + this._notDefinedCheck(this._bowls[this._bowlIndex + 1])
        + this._notDefinedCheck(this._bowls[this._bowlIndex + 2]));
        this._bowlIndex += 1;
    // spare
    } else if (this._notDefinedCheck(this._bowls[this._bowlIndex])
        + this._notDefinedCheck(this._bowls[this._bowlIndex + 1]) === 10) {
        this.score += (10 +
        this._notDefinedCheck(this._bowls[this._bowlIndex + 2]));
        this._bowlIndex += 2;
    //non strike or non spare frame
    } else {
        this.score += (this._notDefinedCheck(this._bowls[this._bowlIndex])
        + this._notDefinedCheck(this._bowls[this._bowlIndex + 1]));
        this._bowlIndex += 2;
    };
    this._frame += 1;
  };
};

ScoreCard.prototype._resetForScore = function () {
  this._frame = 1;
  this._bowlIndex = 0;
  this.score = 0;
};

ScoreCard.prototype._notDefinedCheck = function (indexToCheck) {
  if (isNaN(indexToCheck)) {
    return 0;
  } else {
    return indexToCheck;
  };
};
