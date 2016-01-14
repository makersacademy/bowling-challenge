function Game() {
  this.round = new Round();
  this.NUMBER_OF_ROUNDS = 3;
  this.rounds = [];
}

Game.prototype.checkScore = function() {
  console.log("checkScore is running");
  return this.round.giveScore();
};

Game.prototype.enterPins = function(pins) {
  if(!this._isPinsEnteredValid(pins)) {
    throw "Invalid number of pins entered";
  } else if(!this.isGameInProgress()) {
    throw "The game is over";
  }
  console.log("back in enterPins & about to pass control to the round");
  this.round.trackPins(pins);
  console.log(this.rounds);
  console.log("enterPins is running & is about to run _updateRounds");
  console.log(this.rounds);
  this._updateRounds();
  console.log("_updateRounds has run")
  console.log(this.rounds);
};

Game.prototype.isGameInProgress = function() {
  if(this.rounds.length < this.NUMBER_OF_ROUNDS) {
    console.log("_isGameInProgress is running & about to return true");
    return true
  } else {
    console.log("_isGameInProgress is running & about to return false");
    return false
  }
};

Game.prototype._updateRounds = function() {
  console.log("_updateRounds is running + the if statement will evaluate to: ");
  var test = this._isRoundFull();
  console.log(test);
  if(test === true) {
    this.rounds.push(this.round);
    this.round = new Round();
  }
};

Game.prototype._isRoundFull = function() {
  console.log("_isRoundFull is running");
  return this.round.isFull();
};

Game.prototype._getRoundResult = function() {
  console.log("_getRoundResult is running");
  return this.round.giveResult();
};

Game.prototype._isPinsEnteredValid = function(pins) {
  if(typeof(pins) === 'number' && pins >= 0 && pins < 11) {
    console.log("_isPinsEnteredValid is running & about to return true");
    return true;
  } else {
    console.log("_isPinsEnteredValid is running & about to return false");
    return false;
  }
};
