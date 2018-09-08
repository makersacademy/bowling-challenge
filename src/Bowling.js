function BowlingGame() {
  this.scores = [0,0];
  this.first
  this.multiplier = 1;
  this.firstRoll = true
};
var scores;
var firstRoll = true;
var multiplier

BowlingGame.prototype.addPoints = function(points) {
  if (this.firstRoll == true && this.scores.slice(-2).reduce((x, y) => x + y) === 10) {
    this.multiplier = 2
  }
  this.scores.push(points * this.multiplier)
  this.firstRoll = !this.firstRoll
  this.multiplier = 1
};

BowlingGame.prototype.total = function() {
  return this.scores.reduce((x, y) => x + y); 
}
