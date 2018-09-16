function BowlChecks () {
  this._bowlOneOfFrame = false;
  this._display = 0;
  this._frame = 1;
}

BowlChecks.prototype.frameChecks = function (knockedPins) {
  if (this._enteredNumberCheck(knockedPins)) {
    if (knockedPins === 10 && this._bowlOneOfFrame === false) {
      this._frame++;
      this._frameCheck();
      this._display = "X";
    } else if (knockedPins < 10 && this._bowlOneOfFrame === false) {
        this._bowlOneOfFrame = true;
        this._bowlOneKnockedPins = knockedPins;
        this._display = knockedPins;
    } else if (knockedPins <= 10 && this._bowlOneOfFrame === true) {
        this._bowlOneOfFrame = false;
        this._bowlTwoKnockedPins = knockedPins;
        this._spareCheck();
        this._frame++;
        this._frameCheck();
    };
  } else {
     return 'knocked down pins number not valid';
  };
};

BowlChecks.prototype._spareCheck = function () {
  if (this._bowlOneKnockedPins + this._bowlTwoKnockedPins === 10) {
    this._display = "/"
  } else {
    this._display = this._bowlOneKnockedPins + this._bowlTwoKnockedPins;
  };
};

BowlChecks.prototype._frameCheck = function () {
  if (this._frame > 10) {
    this._frame = 10;
  };
};

BowlChecks.prototype._enteredNumberCheck = function (knockedPins) {
  if (knockedPins > 10) {
    return false;
  }else if ((knockedPins > (10 - this._bowlOneKnockedPins))
    && this._bowlOneOfFrame === true) {
    return false;
  }else {
    return true;
  };
};
