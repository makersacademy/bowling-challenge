function Game() {
  this._sum = 0;
  this._bonusRounds = 0;
  this._rolls = [];
}

Game.prototype._spareChecker = function() {
  return this._rolls[this._rolls.length - 1] + this._rolls[this._rolls.length - 2] === 10;
};

Game.prototype._strikeCounter = function() {
  var counter = 0;
  for (var i = 0; i < this._rolls.length; i++) {
    if (this._rolls[i] === 10) {
      counter += 1;
    }
  }
  return counter;
};

Game.prototype.roll = function(number) {
  if (this._rolls.length === 20 - this._strikeCounter()) {
    throw new Error('Game over');
  }
if (number !== 10) {
    if (this._rolls[this._rolls.length -1] + number > 10 && this._rolls[this._rolls.length -1] !== 10) {
    throw new Error('Cannot knock down more than 10 pins');
  }
  }

  if (this._bonusRounds > 0) {
    this._bonusRounds -= 1;
    this._sum += number;
  }

  if (number === 10) {
    this._bonusRounds = 2;
  }

  if (this._spareChecker()) {
    this._sum += number;
  }

  this._rolls.push(number);
  this._sum += number;

};

Game.prototype.rollScore = function() {
  return this._sum;
};

Game.prototype.isAgutterGame = function(){
  if (this._rolls.length === 20 && this._sum === 0){
    return true;
  } else {
      return false;
  }
};
