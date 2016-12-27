function Game() {
  this._frames = [];
  this._pinsDown = [];
  this._bonusPoints = [];
  this._totalPins = 0;
  this._totalBonus = 0;
  this._finalScore = 0;
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  if (this._isGameOver()) {
    return 'This game is over'
  }
  frame = new Frame(firstRoll, secondRoll);
  if (frame._firstRoll === 10 && frame._secondRoll > 0) {
    throw new Error('You cannot have a second roll if you rolled a strike. Please enter your scores correctly');
  }
  this._frames.push(frame);
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
};

Game.prototype._addFinalScore = function() {
  this._addTotalPins();
  this._addTotalBonus();
  this._finalScore = (this._totalPins + this._totalBonus)
};

Game.prototype._isGameOver = function() {
  return this._frames.length >= 10;
};

Game.prototype._resetGame = function() {
  this._frames = [];
  this._pinsDown = [];
  this._bonusPoints = [];
  this._totalPins = 0;
};

Game.prototype._endGame = function() {
  this._addFinalScore();
  console.log("Final score is " + this._finalScore);
  this._resetGame();
};
