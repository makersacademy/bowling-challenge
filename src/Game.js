function Game() {
  this.rolls = [];
  this.currentRoll = 0;
  this.spare = false;
  this.strike = false;
  this.rollIndex = 0;
}

Game.prototype.roll = function(pins) {
  if(typeof pins !== 'number' || pins > 10) {
    throw new Error('Invalid input!');
    }
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.isSpare = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10;
};

Game.prototype.isStrike = function() {
  return this.rolls[this.rollIndex] === 10;
};

Game.prototype.framePoints = function() {
  return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
};

Game.prototype.sparePoints = function() {
    return this.rolls[this.rollIndex + 2] + 10;
};

Game.prototype.strikePoints = function() {
    return this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2] + 10;
};

Game.prototype.points = function() {
   var points = 0;

  for(var i = 0; i < 10; i++) {
    if(this.isSpare()) {
      points += this.sparePoints();
      this.rollIndex += 2;
    }
    else if(this.isStrike()) {
      points += this.strikePoints();
      this.rollIndex += 1;
    }
    else {
      points += this.framePoints();
      this.rollIndex += 2;
    }
  }
  return points;
};

Game.prototype.getPoints = function() {
  return this.points;
}
