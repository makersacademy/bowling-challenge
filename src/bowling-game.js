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
  for (var i = 0; i < this.rolls.length; i++) {
    score += this.rolls[i];
  }
  return score;
};
