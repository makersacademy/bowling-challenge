function Game () {
  this.rolls = [];
  this.frames = [];
}

Game.prototype.score = function() {
  return this.calculateScore()
}


Game.prototype.calculateScore = function() {
  var score = 0;
  for (var rollsIndex = 0; rollsIndex < this.rolls.length; rollsIndex++) {
    score += this.rolls[rollsIndex]
  }
  return score
} 

Game.prototype.rollBall = function(pins) {
  this.rolls.push(pins);
  this.updateFrame()
}

Game.prototype.updateFrame = function() {
  if (this.rolls.length % 2 === 0) {
    this.frames.push(this.calculateScore())
  }
}


