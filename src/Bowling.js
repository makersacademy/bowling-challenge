
var Bowling = function () {
  this.rolls = [];
}
Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Bowling.prototype.score = function() {
  var result = 0;
  for (var n=0; n<20; n++) {
    result += this.rolls[n];
  }
  return result;
};
