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

Bowling.prototype.newGame = function () {
    for (var i = 0; i < 12; i ++) {
      this._scoreCard[i] = [];
  };
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
  if (this._spareRound) {
    this._scoreCard[this._currentFrame-2].push(this._framePoints+this._firstThrow)
  }
  this._currentThrow = 'second';
  this._scoreCard[this._currentFrame-1].push(this._firstThrow);
}

Bowling.prototype.secondRoll = function () {
  this.secondBallThrown();
  if(this._firstThrow+this._secondThrow === 10) {
    this.spare();
  } else {
    this.moveToFirstRoll();
  }
};

Bowling.prototype.secondBallThrown = function () {
  this._secondThrow = this._hook();
  this._scoreCard[this._currentFrame-1].push(this._secondThrow);
};

Bowling.prototype.spare = function () {
  this._spareRound = true;
  this._framePoints += (this._firstThrow  +  this._secondThrow);
  this.nextTurn();
};

Bowling.prototype.moveToFirstRoll = function() {
  this._framePoints += (this._firstThrow  +  this._secondThrow);
  this._scoreCard[this._currentFrame-1].push(this._framePoints)
  this.nextTurn();
}

Bowling.prototype.strike = function () {
  this.nextTurn();
  this._scoreCard.push(this._firstThrow);
  this._scoreCard.push('-');
  this._strikeRound = true;
};
Bowling.prototype.nextTurn = function () {
  this._currentThrow = 'first';
  this._currentFrame ++;
};
Bowling.prototype._hook = function () {
  return Math.floor(Math.random()*(this._pins-this._firstThrow+1));
}
