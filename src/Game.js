function Game() {
  this.rolls = [];
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.isSpare = function(index) {
  if (index + 2 < this.rolls.length) {
    if (this.rolls[index] + this.rolls[index + 1] === 10) {
      return true;
    };
  };
  return false;
};

Game.prototype.isStrike = function(index) {
  if (index + 2 < this.rolls.length) {
    if(this.rolls[index] === 10) {
      return true;
    };
  };
    return false;
};

Game.prototype.score = function() {
  var total = 0;
  for (var i = 0; i < this.rolls.length; i++) {
    if (this.isSpare(i)) {
      total += this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2]
      i++
    } else {
      total += this.rolls[i];
    };

    if (this.isStrike(i)) {
      total += this.rolls[i + 1] + this.rolls[i + 2] + this.rolls[i + 1] + this.rolls[i + 2]
      i += 2
    };
  };
   return total;
};
