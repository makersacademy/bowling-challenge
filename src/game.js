function Game() {
  this.round = new Round();
  this.NUMBER_OF_ROUNDS = 10;
  this.rounds = [];
}

Game.prototype.enterPins = function(pins) {
  if(!this.isGameInProgress()) {throw "The game is over";}
  this.round.acceptPins(pins);
  this._updateRounds();
};

Game.prototype.isGameInProgress = function() {
  if(this.rounds.length < this.NUMBER_OF_ROUNDS) {
    return true
  } else {
    return false
  }
};

Game.prototype._updateRounds = function() {
  if(this._isRoundFull()) {
    this.rounds.push(this.round);
    this.round = new Round();
  }
};

Game.prototype._isRoundFull = function() {
  return this.round.isFull();
};
