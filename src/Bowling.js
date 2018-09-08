function BowlingGame() {
  this.scores = [];
};

BowlingGame.prototype.addPoints = function(points) {
  this.scores.push(points)
};

BowlingGame.prototype.total = function() {
  console.log(this.scores)
  return this.scores.reduce((x, y) => x + y); 
}