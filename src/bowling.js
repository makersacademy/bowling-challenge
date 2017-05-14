function Bowling() {
  this._currentFrame = 1;
  this._currentThrow = 'first';
  this._pins = 10;
  this._scoreCard = [];
  this._framePoints = 0;
  this._firstThrow = null;
  this._secondThrow = null;
  this._strikeRound = false;
  this._spareRound = false;
};

Bowling.prototype.throw = function() {
  if (this._currentThrow === 'first') {
    this.firstRoll();
  } else {
      this.secondRoll();
    }
};

Bowling.prototype.firstRoll = function () {
  this.ballThrown();
  if(this._firstThrow === 10) {
    this._Strike();
  } else {
    this.moveToSecondRoll();
  }
};

Bowling.prototype.ballThrown = function () {
  this._firstThrow = this._hook();

};

Bowling.prototype.moveToSecondRoll = function() {
  this._currentThrow = 'second';
  this._scoreCard.push(this._firstThrow);
}

Bowling.prototype.secondRoll = function () {
  this.secondBallThrown();
  if(this.firstRoll+this.secondRoll === 10) {
    this.spare();
  } else {
    this.moveToFirstRoll();
  }
};

Bowling.prototype.secondBallThrown = function () {
  this._secondThrow = this._hook();
  this._scoreCard.push(this._secondThrow);
};

Bowling.prototype.moveToFirstRoll = function() {
  this._currentThrow = 'first';
  this._currentFrame ++;
  this._framePoints += (this._firstThrow  +  this._secondThrow);
  this._scoreCard.push(this._framePoints)
}

Bowling.prototype.strike = function () {
  this._currentThrow = 'first';
  this._scoreCard.push(this._firstThrow);
  this._scoreCard.push('-');
  this._strikeRound = true;
  this._currentFrame ++;
};

Bowling.prototype._hook = function () {
  return Math.floor(Math.random()*(this._pins-this._firstThrow+1));
}
