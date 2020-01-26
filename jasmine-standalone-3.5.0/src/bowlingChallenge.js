var BowlingGame = function () {
  this.rolls = [];

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  result = 0
  rollIndex = 0
  for (var rollIndex = 0; rollIndex < 20; rollIndex++) {
    result += this.rolls[rollIndex];

  }
  return result
};


};
