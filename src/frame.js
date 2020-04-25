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

// Frame.prototype.currentTurn = function() {
//   return this._turns.length;
// }

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

Frame.prototype.spare = function() {
  if( this._turns[0] + this._turns[1] === 10 ) {
    return true
  }
}

Frame.prototype.firstTurn = function() {
  return this._turns[0]
}

Frame.prototype.secondTurn = function() {
  return this._turns[1]
}