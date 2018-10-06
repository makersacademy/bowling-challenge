function Game() {
  this.rolls = [];
  this.frames = 0;
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
  if (this.frames !== 10) {
    if (pins === 10) {
      this.frames += 1;
    } else if (this.rolls.length % 2 === 0) {
      this.frames += 1;
    };
  };
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

Game.prototype.hasBonus = function() {
  rollIndex = this.rolls.length - 3;
  if (this.frames === 10) {
    if (this.isStrike(rollIndex) || this.isSpare(rollIndex)) {
      return true;
    };
  };
  return false;
};

Game.prototype.score = function() {
  var total = 0;
  var maxRolls = this.rolls.length;

   if (this.hasBonus()) {
     maxRolls -= 2;
   };

  for (var i = 0; i < maxRolls; i++) {
    if (this.isStrike(i)) {
      total += this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2];
    } else if (this.isSpare(i)) {
      total += this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2];
      i++;
    } else {
      total += this.rolls[i];
    };
  };
   return total;
};
