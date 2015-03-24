var Bowling = function() {
  this.rolls = [];
};

Bowling.prototype.gameRolls = function(pins, number) {
  for ( var i = 0; i < number; i++) {
    this.roll(pins);
  }
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Bowling.prototype.currentScore = function() {
  var score = 0;
  for (var i = 0; i < 20; i++) {
    score += this.rolls[i];
  }
  return score;
};