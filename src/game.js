function Game() {
  this._frames = [];
  this._pinsDown = [];
  this._bonusPoints = [];
  this._totalScore = 0;
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  if (this._isGameOver()) {
    return 'This game is over'
  }
  frame = new Frame(firstRoll, secondRoll);
  this._frames.push(frame);
};

Game.prototype._frameScore = function() {
  for (var i = 0; i < this._frames.length; i++) {
    this._pinsDown.push(this._frames[i]._firstRoll + this._frames[i]._secondRoll);
  }
};

Game.prototype._strikeBonus = function () {
  this._checkForStrikes();
  for (var i = 0; i < this._frames.length; i++) {
    if (this._frames[i]._isStrike) {
      this._bonusPoints.push(this._frames[i+1]._firstRoll + this._frames[i+1]._secondRoll);
    }
  }
};

Game.prototype._spareBonus = function () {
  this._checkForSpares();
  for (var i = 0; i < this._frames.length; i++) {
    if (this._frames[i]._isSpare) {
      this._bonusPoints.push(this._frames[i+1]._firstRoll);
    }
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

Game.prototype._addTotalScore = function() {
  for (var i = 0; i < this._pinsDown.length; i++) {
    this._totalScore += this._pinsDown[i];
  }
};

Game.prototype._isGameOver = function() {
  return this._frames.length >= 10;
};

Game.prototype._resetGame = function() {
  this._frames = [];
  this._pinsDown = [];
  this._bonusPoints = [];
  this._totalScore = 0;
};

Game.prototype._endGame = function() {
  this._frameScore();
  this._addTotalScore();
  console.log("Total score is " + this._totalScore);
  this._resetGame();
};
