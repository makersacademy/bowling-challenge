function Bowling() {
  this.rolls = [];
}

Bowling.prototype.roll = function(pins) {
  ( pins == 10 && this.rolls.length < 20) ? this.rolls.push(pins, 0) : this.rolls.push(pins);
}

Bowling.prototype.score = function() {
  var totalScore = 0;
  var rollIndex = 0;
  var game = this;

  for ( var frameIndex = 0; frameIndex < 10; frameIndex++) {
    var bonus = strikesInARow() || strike() || spare() || 0
    totalScore += frameScore(bonus)
    rollIndex += 2;
  }
  return totalScore;

  function strikesInARow() {
    if (game.rolls[rollIndex] + game.rolls[rollIndex + 2] == 20) return 3
  }

  function strike() {
    if (game.rolls[rollIndex] == 10) return 2
  }

  function spare() {
    if (game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10) return 1
  }

  function frameScore(bonus) {
    rollsInFramePlusBonus = Math.min(2 + bonus, game.rolls.length - rollIndex)
    var score = 0;
    for ( i = 0; i < rollsInFramePlusBonus; i++) {
        score += game.rolls[rollIndex + i];
    }
    return score
  }
};
