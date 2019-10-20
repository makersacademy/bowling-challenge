function Game() {

  this.rolls = []
  this.currentRoll = 0
  
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
  this.currentRoll ++;
}

Game.prototype.calculateScore = function() {
  var score = 0;
  var currentBowl = 0
  for (var bowl = 0; bowl < this.rolls.length; bowl ++) {
    score += this.rolls[currentBowl];
    currentBowl ++;
  }

  return score
}