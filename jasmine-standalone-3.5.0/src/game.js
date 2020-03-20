function bowlingGame() {
  this.maximumScore = 10;
  this.rolls = []
}

bowlingGame.prototype.roll = function(num) {
  this.rolls.push(num)
}

bowlingGame.prototype.score = function() {
  let score = 0;
  let rollIndex = 0;

  for(let frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
      score += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    } else {
      score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
    rollIndex += 2
  }
  // for(let roll = 0; roll < 20; roll++) { score += this.rolls[roll]}
  return score
}