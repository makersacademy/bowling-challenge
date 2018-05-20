function BowlingGame() {
  this.rolls = [];
  this.currentRoll = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.rolls[this.currentRoll] = pins;
  this.currentRoll += 1;
};

BowlingGame.prototype.getScore = function() {
  var score = 0;
  var i = 0;
  for (var frame = 0; frame < 10; frame++) {
    score += this.rolls[i] + this.rolls[i + 1];
    i += 2;
  }
  return score;
};
