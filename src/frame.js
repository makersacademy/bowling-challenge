Frame = function() {
  this._turns = [];
  this._score = 0;
}

Frame.prototype.enterTurn = function(pins) {
  this._turns.push(pins)
  this.updateScore(pins);
}

Frame.prototype.currentTurn = function() {
  return this._turns.length;
}

Frame.prototype.updateScore = function(pins) {
  this._score += pins;
}

Frame.prototype.viewScore = function() {
  return this._score;
}

Frame.prototype.complete = function() {
  if( (this.currentTurn() === 2)  || this.strike() ) {
    return true
  } return false
}

Frame.prototype.strike = function() {
  if( this._turns[0] === 10 ) {
    return true
  }
}