function Game() {
  this.score = 0;
  this._rolls = 0;
  this._ROLLS_ALLOWED = 1;
}

Game.prototype.enterPins = function(pins) {
  if(!this._isPinsEnteredValid(pins)) {
    throw "Invalid number of pins entered";
  } else if(!this._isGameInProgress()) {
    throw "The game is over";
  } else {
    this._calculateScore(pins);
    this._rolls += 1;
    return "Your score is: " + this._score;
  }
};

Game.prototype.checkScore = function() {
  return this.score;
};

Game.prototype._isPinsEnteredValid = function(pins) {
  if(typeof(pins) === 'number' && pins >= 0 && pins < 11) {
    return true;
  } else {
    return false;
  }
};

Game.prototype._calculateScore = function(pins) {
  return this.score += pins;
};

Game.prototype._isGameInProgress = function() {
  if(this._rolls < this._ROLLS_ALLOWED) {
    return true;
  } else {
    return false;
  }
};
