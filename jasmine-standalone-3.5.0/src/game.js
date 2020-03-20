function bowlingGame() {
  this.maximumScore = 10;
  this.rolls = []
}

bowlingGame.prototype.roll = function(num) {
  this.rolls.push(num)
}

bowlingGame.prototype.score = function() {
  let score = 0;
  let roll = 0;

  for(let frameIndex = 0; frameIndex < 10; frameIndex++) {
    // this is for rolling a spare, as two rolls equal ten pins down in one frame
    if (this.rolls[roll] == 10) { 
      score += this.rolls[roll] + this.rolls[roll + 1] + this.rolls[roll + 2];
      roll += 1
    } else if (this.rolls[roll] + this.rolls[roll + 1] == 10) { 
      score += this.rolls[roll] + this.rolls[roll + 1] + this.rolls[roll + 2];
      roll += 2
    } else {
      // this is for rolling a normal frame
      score += this.rolls[roll] + this.rolls[roll + 1];
      roll += 2
    }
  }
  // for(let roll = 0; roll < 20; roll++) { score += this.rolls[roll]}
  return score
}