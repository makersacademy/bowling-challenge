function Bowling() {
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  this.rolls.push(pins);
}

Bowling.prototype.frames = function() {
  var framesPlayed = this.rolls.length / 2
  return framesPlayed
}

Bowling.prototype.score = function() {
  var totalScore = 0;
  var rollIndex = 0
  var game = this;

  for ( var frameIndex = 0; frameIndex < this.frames(); frameIndex++) {
    if (split()) {
      totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    } else {
      totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
    rollIndex += 2;
  }
  return totalScore;

  function split() {
    return (game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10)
  }

};
