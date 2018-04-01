undToZero = function(thing){
  if (thing === undefined)
    return 0
  else 
    return thing
};

function Game() {
  this._rolls = []
  this._frame = 1
  this._row = 1
  this._score = 0
}

Game.prototype.row = function() {
  return this._row 
}

Game.prototype.frame = function() {
  return this._frame 
}

Game.prototype.receiveThrow = function(input) {
  this._rolls.push(Number(input));
}

Game.prototype.score = function() {
  this._score = 0;
  let i = 0;
  for(var frame = 1; frame < 11; frame++) {
    if (this._isStrike(i)) {
      this._score += 10 + undToZero(this._rolls[i + 1]) + undToZero(this._rolls[i + 2]);
      i++;
    } else if (this._isSpare(i)) {
      this._score += 10 + undToZero(this._rolls[i + 1]);
      i += 2;
    } else {
      this._score += undToZero(this._rolls[i]) + undToZero(this._rolls[i + 1]);
      i += 2;
    }
  }

  return this._score
}

Game.prototype._isStrike = function(i) {
  return undToZero(this._rolls[i]) === 10
}

Game.prototype._isSpare = function(i) {
  return undToZero(this._rolls[i]) + undToZero(this._rolls[i+1]) === 10
}


module.exports = Game
