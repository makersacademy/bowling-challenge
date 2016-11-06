function BowlingGameTwo() {
  this.rolls = [];
};

BowlingGameTwo.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

BowlingGameTwo.prototype.score = function () {
  var result = 0;
  for (var i=0; i<20; i++) {
    result += this.rolls[i];
  }
  return result;
};
