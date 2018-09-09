function ScoreCard () {
  this._bowls = [];
  this._bowlIndex = 0;
  this._frame = 1;
  this._score = 0;
};

ScoreCard.prototype.bowl = function (knockedPins) {
  if (this.isCorrectPinsEntered (knockedPins)) {
    this._bowls.push(knockedPins);
    this.score();
    console.log(this._score);
  } else {
    return 'invalid number entered';
  }
};

ScoreCard.prototype.score = function () {
  this.resetForScore ();
  while (this._frame <= 10) {
    if (this.notDefinedCheck(this._bowls[this._bowlIndex]) === 10) { // strike
        this._score +=
        (10 + this.notDefinedCheck(this._bowls[this._bowlIndex + 1])
        + this.notDefinedCheck(this._bowls[this._bowlIndex + 2]));
        this._bowlIndex += 1;
    } else if (this.notDefinedCheck(this._bowls[this._bowlIndex]) // spare
        + this.notDefinedCheck(this._bowls[this._bowlIndex + 1]) === 10) {
        this._score += (10 +
        this.notDefinedCheck(this._bowls[this._bowlIndex + 2]));
        this._bowlIndex += 2;
    } else { //standard frame
        this._score += (this.notDefinedCheck(this._bowls[this._bowlIndex])
        + this.notDefinedCheck(this._bowls[this._bowlIndex + 1]));
        this._bowlIndex += 2;
    };
    this._frame += 1;
  };
};

ScoreCard.prototype.resetForScore = function () {
  this._frame = 1;
  this._bowlIndex = 0;
  this._score = 0;
};

ScoreCard.prototype.isCorrectPinsEntered = function (knockedPins) {
  if (knockedPins > 10) {
    return false;

  } else if (((this._bowls.filter(x => x===10).length) % 2 === 0)
      && (this._bowls.length % 2) === 0) {
          return true;

  } else if ( ((this._bowls.filter(x => x===10).length) % 2 === 1)
      && (this._bowls.length % 2) === 1) {
          return true;

  } else if ( ((this._bowls.filter(x => x===10).length) % 2 === 0)
      && (this._bowls.length % 2) === 1) {
        if ((knockedPins + (this.notDefinedCheck(this._bowls.slice(-1)[0]))) > 10) {
          return false;
        } else {
          return true;
        };
  };
};

ScoreCard.prototype.notDefinedCheck = function (indexToCheck) {
  if (isNaN(indexToCheck)) {
    return 0;
  } else {
    return indexToCheck;
  };
};
