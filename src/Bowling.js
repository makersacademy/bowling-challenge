function Bowling() {
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  ( pins == 10 ) ? this.rolls.push(pins, 0) : this.rolls.push(pins);
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
    var bonus = strike() || spare() || 0
    totalScore += frameScore(bonus)
    rollIndex += 2;
  }
  return totalScore;

  function spare() {

    if (game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10) return 1
  }

  function strike() {
    if (game.rolls[rollIndex] == 10) return 2
  }

  function frameScore(bonus) {
    rollsPlusBonus = Math.min(2 + bonus, game.rolls.length - rollIndex)
    var score = 0;
    for ( i = 0; i < rollsPlusBonus; i++) {
        score += game.rolls[rollIndex + i];
    }
    return score
  }
};
