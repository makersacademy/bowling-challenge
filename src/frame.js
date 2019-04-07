function Frame() {
  this._rolls = [];
  this._score = 0;
};

Frame.prototype.addRoll = function(roll) {
  if(this._score + roll <= 10) {
    this._rolls.push(roll);
    this._score += roll;
  } else {
    throw new Error('Input Error: Cannot knock down more than 10 Pins per frame!')
  }
};

Frame.prototype.score = function() {
  return this._score;
};

Frame.prototype.rolls = function() {
  return this._rolls;
};
