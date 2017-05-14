function Bowling() {
  this.rolls = [];
};

Bowling.prototype.roll = function(pins) {
  if ( pins == 10 ) { this.rolls.push(pins, 0) }
  else this.rolls.push(pins);
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
    // console.log(rollIndex)
    if (strike(rollIndex)) {
      totalScore += frameScore(rollIndex, 4)
      console.log(totalScore)
    } else if (spare(rollIndex)) {
      console.log(totalScore)
      totalScore += frameScore(rollIndex, 3)
    } else {
      console.log(totalScore)
      totalScore += frameScore(rollIndex)
    }
    rollIndex += 2;
  }
  return totalScore;

  function spare(rollIndex) {
    // console.log(rollIndex)
    return (game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10)
  }

  function strike(rollIndex) {
    // console.log(rollIndex)
    return (game.rolls[rollIndex] == 10)
  }

  function frameScore(rollIndex, n = 2) {
    var score = 0;
    for ( i = 0; i < n; i++) {
      console.log(score)
        score += game.rolls[rollIndex + i];
    }
    return score
  }

};
