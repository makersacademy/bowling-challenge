function Bowling() {
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Bowling.prototype.score = function() {
  var totalScore = 0;
  for ( var i = 0; i < this.rolls.length; i++) {
    totalScore += this.rolls[i];
  }
  return totalScore;
}
