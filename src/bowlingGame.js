var BowlingGame = function() {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  for (var i = 0; i < 20; i++) {
    result += this.rolls[i];
  }
  return result;
};
