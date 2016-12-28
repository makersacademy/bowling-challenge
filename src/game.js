function Game() {
  this._frames = [];
  this.MAXIMUM_FRAMES = 10;
  // this._isFinalFrame = false;
  this._pinsDown = [];
  this._bonusPoints = [];
  this._totalPins = 0;
  this._totalBonus = 0;
  this._finalScore = 0;
  this._isBonusAllowed = false;
  this._bonusRollPoints = [];
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  frame = new Frame(firstRoll, secondRoll);
  if (frame._firstRoll === 10 && frame._secondRoll > 0) {
    throw new Error('You cannot have a second roll if you rolled a strike. Please enter your scores correctly');
  }
  this._frames.push(frame);
  if (this._frames.length === this.MAXIMUM_FRAMES) {
    frame._isFinalFrame = true;
  }
  if (this._frames.length === this.MAXIMUM_FRAMES && !this._isBonusAllowed) {
    this._endGame();
  }
};

Game.prototype.bonusRoll = function(roll) {
  this._bonusAllowed();
  if (this._isBonusAllowed === false) {
    throw new Error('You do not get a bonus roll right now!')
  } else {
  this._bonusRollPoints.push(roll);
  }
};

Game.prototype._bonusAllowed = function() {
  this._checkForStrikes();
  this._checkForSpares();
  if (this._frames.length === this.MAXIMUM_FRAMES && (this._frames[9]._isStrike || this._frames[9]._isSpare)) {
    this._isBonusAllowed = true;
  }
};

Game.prototype._checkForStrikes = function () {
  for (var i = 0; i < this._frames.length; i++) {
    this._frames[i].isStrike();
  }
};

Game.prototype._checkForSpares = function () {
  for (var i = 0; i < this._frames.length; i++) {
    this._frames[i].isSpare();
  }
};

Game.prototype._pinsPerFrame = function() {
  for (var i = 0; i < this._frames.length; i++) {
    this._pinsDown.push(this._frames[i]._firstRoll + this._frames[i]._secondRoll);
  }
};

Game.prototype._strikeBonus = function() {
this._checkForStrikes();
  for (var frameIndex = 1; frameIndex < this._frames.length; frameIndex++) {
    if (this._frames[frameIndex-1]._isStrike && !this._frames[frameIndex]._isStrike) {
      this._bonusPoints.push(this._frames[frameIndex]._firstRoll + this._frames[frameIndex]._secondRoll);
    } else if (this._frames[frameIndex-1]._isStrike && this._frames[frameIndex]._isStrike) {
      this._bonusPoints.push(this._frames[frameIndex]._firstRoll + this._frames[frameIndex + 1]._firstRoll);
    }
  }
};

Game.prototype._spareBonus = function () {
  this._checkForSpares();
  for (var frameIndex = 1; frameIndex < this._frames.length; frameIndex++) {
    if (this._frames[frameIndex-1]._isSpare) {
      this._bonusPoints.push(this._frames[frameIndex]._firstRoll);
    }
  }
};

Game.prototype._addTotalPins = function() {
  this._pinsPerFrame();
  for (var i = 0; i < this._pinsDown.length; i++) {
    this._totalPins += this._pinsDown[i];
  }
};

Game.prototype._addTotalBonus = function() {
  this._strikeBonus();
  this._spareBonus();
  for (var i = 0; i < this._bonusPoints.length; i++) {
    this._totalBonus += this._bonusPoints[i];
  }
  for (var i = 0; i < this._bonusRollPoints.length; i++) {
    this._totalBonus += this._bonusRollPoints[i];
  }
};

Game.prototype._addFinalScore = function() {
  this._addTotalPins();
  this._addTotalBonus();
  this._finalScore = (this._totalPins + this._totalBonus)
};

Game.prototype._isGameOver = function() {
  return this._frames.length >= 10;
};

Game.prototype.playAgain = function() {
  this._frames = [];
  this._pinsDown = [];
  this._bonusPoints = [];
  this._totalPins = 0;
  this._finalScore = 0;
  this._isFinalFrame = false;
  this._isBonusAllowed = false;
};

Game.prototype._endGame = function() {
  this._addFinalScore();
  console.log("Final score is " + this._finalScore);
  console.log("Please call 'game.playAgain' to play again!")
};
