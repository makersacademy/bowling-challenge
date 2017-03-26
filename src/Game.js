var Game = function() {
  this.rolls = [];
  this.currentRoll = 0;
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.rolls[this.currentRoll] = pinsKnockedDown;
  this.currentRoll++;
};

Game.prototype.isSpare = function(rollIndex) {
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10;
};

Game.prototype.isStrike = function(rollIndex) {
  return this.rolls[rollIndex] == 10;
};

Game.prototype.sumOfPinsInFrame = function(rollIndex) {
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
};

Game.prototype.spareBonus = function(rollIndex) {
  return this.rolls[rollIndex + 2];
};

Game.prototype.strikeBonus = function(rollIndex) {
  return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
};

Game.prototype.score = function() {

  var total = 0;
  var rollIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this.isStrike(rollIndex)) {
      total += 10 + this.strikeBonus(rollIndex);
      rollIndex++;
    }
    else if (this.isSpare(rollIndex)) {
      total += 10 + this.spareBonus(rollIndex);
      rollIndex += 2;
    }
    else {
      total += this.sumOfPinsInFrame(rollIndex);
      rollIndex += 2;
    }
  }
  return total;
};
