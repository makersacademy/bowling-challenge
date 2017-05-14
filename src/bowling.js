function Bowling() {
  this._currentFrame = 1;
  this._currentThrow = 'first';
  this._pins = 10;
  this._scoreCard = [];
  this._framePoints = [];
  this._firstThrow = null;
  this._secondThrow = null;
  this._strikeRound = false;
  this._spareRound = false;
};

Bowling.prototype.throw = function() {
  if (this._currentThrow === "first") {
    this.firstRoll();
  } else {
      this.secondRoll();
    }
};


Bowling.prototype._hook = function () {
  return Math.floor(Math.random()*(this._pins-this._firstThrow+1))
}

Bowling.prototype.firstRoll = function () {
  this.ballThrown()
  if(this._firstThrow < 10) {
    this.moveToSecondRoll()
  } else {
    this._Strike();
  }
};

Bowling.prototype.ballThrown = function () {
  this._firstThrow = this._hook();
  this._currentFrame ++;
};

Bowling.prototype.moveToSecondRoll = function() {
  this._currentThrow = 'second';
  this._framePoints.push(this._firstThrow);
}

Bowling.prototype.secondRoll = function () {
  this._secondThrow = this._hook();
  this._framePoints.push(this._secondThrow);
  if(this.firstRoll+this.secondRoll === 10) {
    this.spare()
  } else {
    this.moveToFirstRoll()
  }
};

Bowling.prototype.moveToFirstRoll = function() {
  this._framePoints.push(this._firstThrow  +  this._secondThrow)
  this._currentThrow = 'first';
  this._scoreCard.push(this._framePoints)
}

Bowling.prototype.strike = function () {
  this._currentThrow = 'first';
  this._framePoints.push(this._firstThrow);
  this._framePoints.push(0);
};
