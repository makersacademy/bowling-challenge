function Game() {
  this.round = new Round();
  this.score = new Score();
  this.NUMBER_OF_ROUNDS = 10;
  this.rounds = [];
}

Game.prototype.enterPins = function(pins) {
  if(!this.isGameInProgress()) {throw "The game is over";}
  if(this.rounds.length < 9) {
    this.round.acceptPins(pins);
  } else {
    this.round.acceptFinalPins(pins);
  }
  this._updateRounds();
};

Game.prototype.isGameInProgress = function() {
  if(this.rounds.length < this.NUMBER_OF_ROUNDS) {
    return true
  } else {
    return false
  }
};

Game.prototype.getScore = function() {
  return this.score.giveScore(this.rounds);
};

Game.prototype._updateRounds = function() {
  if(this._isRoundFull()) {
    this.rounds.push(this.round.result);
    this.round = new Round();
  }
};

Game.prototype._isRoundFull = function() {
  return this.round.isFull();
};
