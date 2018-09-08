function BowlingGame() {
  this.scores = [];
};

var total;

BowlingGame.prototype.addPoints = function(points) {
  this.scores.push(points)
};