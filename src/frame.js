Frame = function() {
  this._score = 0;
}

Frame.prototype.enterTurn = function(pins) {
  if ( this._firstTurn === undefined ) {
    this._firstTurn = pins;
  } else if ( this._secondTurn === undefined ) {
    this._secondTurn = pins;
  }
  this.updateScore(pins);
}

Frame.prototype.updateScore = function(pins) {
  this._score += pins;
}

Frame.prototype.viewScore = function() {
  return this._score;
}

Frame2.prototype.complete = function() {
  return ( ( this._firstTurn !== undefined && this._secondTurn !== undefined ) || this.strike() ) 
}

Frame.prototype.strike = function() {
  return this._firstTurn === 10
}

Frame.prototype.spare = function() {
  return this._firstTurn + this._secondTurn === 10
}

Frame.prototype.firstTurn = function() {
  return this._turns[0]
}

Frame.prototype.secondTurn = function() {
  return this._turns[1]
}