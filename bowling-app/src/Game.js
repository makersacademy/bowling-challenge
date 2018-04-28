function Game() {
  this.rolls = []    
}

Game.prototype.roll = function(score) {
  this.rolls.push(score);
}

Game.prototype.score = function() {
  return this.rolls.reduce((a, b) => a + b)
}