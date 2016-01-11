function Game() {
  this.round = new Round();
}

Game.prototype.checkScore = function() {
  return this.round.giveScore();
};

Game.prototype.enterPins = function(pins) {
  if(!this._isPinsEnteredValid(pins)) {
    throw "Invalid number of pins entered";
  } else if(!this.isGameInProgress()) {
    throw "The game is over";
  } else {
    this.round.trackPins(pins);
  }
};

Game.prototype.isGameInProgress = function() {
  if(this.round.isInProgress) {
    return true;
  } else {
    return false;
  }
};

Game.prototype._isPinsEnteredValid = function(pins) {
  if(typeof(pins) === 'number' && pins >= 0 && pins < 11) {
    return true;
  } else {
    return false;
  }
};
