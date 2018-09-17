function BowlChecks () {
  this._bowlOneOfFrame = false;
  this.display = 0;
  this.frame = 1
  this.isGameOver = false
  this._tenthFrameBowlsLeft = 3;
}

BowlChecks.prototype.frameChecks = function (knockedPins) {
  if (this._enteredNumberCheck(knockedPins)) {
      if (knockedPins === 10 && this._bowlOneOfFrame === false) {
        this.display = 'X';
        this._addFrameAndCheck();
      } else if (knockedPins < 10 && this._bowlOneOfFrame === false) {
          this._bowlOneOfFrame = true;
          this._bowlOneKnockedPins = knockedPins;
          this.display = knockedPins;
          this._tenthFrameCheck();
      } else if (knockedPins <= 10 && this._bowlOneOfFrame === true) {
          this._bowlOneOfFrame = false;
          this._bowlTwoKnockedPins = knockedPins;
          this._spareCheck();
          this._addFrameAndCheck();
      };
  } else {
      return 'knocked down pins number not valid';
  };
};

BowlChecks.prototype._spareCheck = function () {
  if (this._bowlOneKnockedPins + this._bowlTwoKnockedPins === 10) {
    this.display = '/'
  } else {
    this.display = this._bowlOneKnockedPins + this._bowlTwoKnockedPins;
  };
};

BowlChecks.prototype._addFrameAndCheck = function () {
  this._tenthFrameCheck();
  this.frame++;
  this._keepAtTenthFrame();
};

BowlChecks.prototype._keepAtTenthFrame = function () {
  if (this.frame > 10) {
    this.frame = 10;
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

BowlChecks.prototype._tenthFrameCheck = function () {
  if (this.frame === 10 && this._tenthFrameBowlsLeft > 0) {
    if (this.display === '/') {
      this._tenthFrameBowlsLeft = 1;
    } else if (this.display === 'X') {
        this._tenthFrameBowlsLeft--;
    } else if (this.display < 10 && this._bowlOneKnockedPins === 'X') {
        this._tenthFrameBowlsLeft--;
    } else if (this.display < 10) {
        this._tenthFrameBowlsLeft -= 2;
    };
  };
  if (this.frame === 10 && this._tenthFrameBowlsLeft <= 0){
    this.isGameOver = true;
  };
};
