function Game() {
  this.totalScore = 0;
  this._rolls = 0; //round
  this._ROLLS_ALLOWED = 2; //round
  this.round = new Round();
}

Game.prototype.checkScore = function() {
  return this.totalScore;
};



Game.prototype.enterPins = function(pins) {
  if(!this._isPinsEnteredValid(pins)) {
    throw "Invalid number of pins entered";
  } else if(!this._isGameInProgress()) {
    throw "The game is over";
  } else {
    this._calculateScore(pins); //round
    this._rolls += 1; //round
    this._enterScore(pins); //round
    return "Your score is: " + this.totalScore;
  }
};

Game.prototype._calculateScore = function(pins) { //round
  this.totalScore += pins;
};

Game.prototype._enterScore = function(pins) { //round
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

// I just want to be able to give some pins to someone
// and then I want that thing to give me its score back


// what should game be able to do?

// give the total score for the game
// check if the pins you are trying to enter are valid
// give pins to the round (for the round to put in the right slots)
// tell you if the game is over or in progress
