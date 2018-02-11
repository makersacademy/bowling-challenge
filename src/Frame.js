function Frame() {
  this.rolls = [];
  this.strike = false;
  this.spare = false;
  this.bonus = 0;
};

const STRIKE = 10
const SPARE = 10
const NO_POINTS = 0

Frame.prototype.add = function(roll1, roll2) {
  this._checkForErrors(roll1, roll2)
  if (this._isStrike(roll1, roll2)) {
    this.strike = true;
  }
  if (this._isSpare(roll1, roll2)) {
    this.spare = true;
  }
  this.rolls.push(roll1, roll2);
};

Frame.prototype.total = function() {
  return this.rolls[0] + this.rolls[1] + this.bonus;
};

// private methods

Frame.prototype._checkForErrors = function(roll1, roll2) {
  if (this._isOneRollAndNotStrike(roll1, roll2)) {
    throw new Error('There must be two rolls in a frame or one strike')
  }
  if (this._isImpossibleFrame(roll1, roll2)) {
    throw new Error('Impossible frame with arguments provided')
  };
};

Frame.prototype._isOneRollAndNotStrike = function(roll1, roll2) {
  return (roll2 === undefined && roll1 !== STRIKE)
};

Frame.prototype._isImpossibleFrame = function(roll1, roll2) {
  return (roll1 + roll2 > STRIKE) || (roll1 + roll2 < NO_POINTS)
}

Frame.prototype._isStrike = function(roll1, roll2) {
  return (roll1 === STRIKE) && (roll2 === 0)
};

Frame.prototype._isSpare = function(roll1, roll2) {
  return (roll2 !== 0) && (roll1 + roll2 === SPARE) 
};
