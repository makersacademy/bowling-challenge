function Game() {
  this.score = 0;
  this._rolls = 0;
  this._ROLLS_ALLOWED = 2;
  this.round = {
    rollOne: null,
    rollTwo: null,
    roundScore: 0
  };
}

Game.prototype.enterPins = function(pins) {
  if(!this._isPinsEnteredValid(pins)) {
    throw "Invalid number of pins entered";
  } else if(!this._isGameInProgress()) {
    throw "The game is over";
  } else {
    this._calculateScore(pins);
    this._rolls += 1;
    this._enterScore(pins);
    return "Your score is: " + this.score;
  }
};

Game.prototype.checkScore = function() {
  return this.score;
};

Game.prototype._calculateScore = function(pins) {
  this.score += pins;
};

Game.prototype._enterScore = function(pins) {
  if(this._rolls === 1) {
    this.round.rollOne = pins;
  } else if(this._rolls === 2){
    this.round.rollTwo = pins;
  }
};

Game.prototype._isPinsEnteredValid = function(pins) {
  if(typeof(pins) === 'number' && pins >= 0 && pins < 11) {
    return true;
  } else {
    return false;
  }
};

Game.prototype._isGameInProgress = function() {
  if(this._rolls < this._ROLLS_ALLOWED) {
    return true;
  } else {
    return false;
  }
};
