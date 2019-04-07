function Frame() {
  this._rolls = [];
  this._score = 0;
  this._bonus = 'none';
};


Frame.prototype.score = function() {
  return this._score;
};

Frame.prototype.addToScore = function(value) {
  this._score += value;
};

Frame.prototype.rolls = function() {
  return this._rolls;
};

Frame.prototype.bonus = function() {
  return this._bonus;
};

Frame.prototype.addRoll = function(roll) {
  if(this._score + roll <= 10) {
    this._rolls.push(roll);
    this._score += roll;
  } else {
    throw new Error('Input Error: Cannot knock down more than 10 Pins per frame!')
  }
};

Frame.prototype.calcBonus = function() {
  if(this._score === 10) {
    switch(this._rolls.length) {
      case 1:
        this._bonus = 'strike'
        break;
      case 2:
        this._bonus = 'spare'
      default:
    };
  }
};
